import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Phone, Send } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PURCHASE_TIMING_OPTIONS = [
  "Już teraz",
  "Za miesiąc",
  "Rozglądam się, rozeznanie rynku",
] as const;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Podaj imię i nazwisko.")
    .max(120, "Maksymalnie 120 znaków."),
  phone: z
    .string()
    .trim()
    .min(9, "Podaj poprawny numer telefonu.")
    .max(40, "Maksymalnie 40 znaków.")
    .refine(
      (value) => value.replace(/\D/g, "").length >= 9,
      "Podaj poprawny numer telefonu.",
    ),
  carModel: z.string().trim().max(160, "Maksymalnie 160 znaków.").optional(),
  engine: z.string().trim().max(120, "Maksymalnie 120 znaków.").optional(),
  year: z.string().trim().max(40, "Maksymalnie 40 znaków.").optional(),
  purchaseTiming: z.enum(PURCHASE_TIMING_OPTIONS).optional(),
  // Honeypot — ukryte pole, wypełniają je tylko boty.
  company: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/** Wysyła zdarzenie do dataLayer (GTM / konwersje Google Ads). */
const pushConversion = (values: ContactFormValues) => {
  if (typeof window === "undefined") return;
  const dataLayer = ((window as unknown as { dataLayer?: unknown[] }).dataLayer ??=
    []);
  dataLayer.push({
    event: "generate_lead",
    form_name: "kontakt_formularz",
    form_location: "/kontakt",
    purchase_timing: values.purchaseTiming ?? "",
  });
};

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      carModel: "",
      engine: "",
      year: "",
      purchaseTiming: undefined,
      company: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    try {
      const response = await fetch("/.netlify/functions/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          pageUrl: window.location.href,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setSubmitError(
          data.error ??
            "Nie udało się wysłać wiadomości. Zadzwoń: +48 502 441 033.",
        );
        return;
      }

      pushConversion(values);
      setIsSent(true);
      form.reset();
    } catch {
      setSubmitError(
        "Brak połączenia z serwerem. Sprawdź internet lub zadzwoń: +48 502 441 033.",
      );
    }
  };

  if (isSent) {
    return (
      <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-usa-red/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-usa-red" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
          Dziękujemy za wiadomość!
        </h3>
        <p className="text-muted-foreground mb-6">
          Odezwiemy się najszybciej jak to możliwe — zwykle tego samego dnia
          roboczego. Jeśli sprawa jest pilna, zadzwoń bezpośrednio.
        </p>
        <a
          href="tel:+48502441033"
          className="inline-flex items-center gap-2 bg-usa-red text-primary-foreground font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide hover:scale-105 transition-transform"
        >
          <Phone className="w-4 h-4" />
          +48 502 441 033
        </a>
      </div>
    );
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
        Skontaktuj się z nami
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Wypełnij formularz — oddzwonimy i przygotujemy wycenę importu.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Imię i nazwisko <span className="text-usa-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jan Kowalski"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Telefon <span className="text-usa-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="tel"
                    placeholder="123 456 789"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground pt-4">
              Aby przygotować szczegóły dotyczące sprowadzenia auta podaj:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="carModel"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Marka i model</FormLabel>
                  <FormControl>
                    <Input placeholder="np. Ford Mustang GT" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="engine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Silnik</FormLabel>
                  <FormControl>
                    <Input placeholder="np. 5.0 V8" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rocznik</FormLabel>
                  <FormControl>
                    <Input inputMode="numeric" placeholder="np. 2019" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="purchaseTiming"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kiedy planujesz zakup auta?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                    className="grid gap-2 pt-1"
                  >
                    {PURCHASE_TIMING_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 cursor-pointer transition-colors hover:border-usa-red/50 has-[[data-state=checked]]:border-usa-red has-[[data-state=checked]]:bg-usa-red/5"
                      >
                        <RadioGroupItem value={option} />
                        <span className="text-sm text-foreground">{option}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Honeypot — ukryte przed użytkownikiem, widoczne dla botów. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Nie wypełniaj tego pola</label>
            <input
              id="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...form.register("company")}
            />
          </div>

          {submitError && (
            <p
              role="alert"
              className="text-sm text-usa-red bg-usa-red/5 border border-usa-red/20 rounded-lg px-4 py-3"
            >
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-usa-red text-primary-foreground font-bold px-6 py-3.5 rounded-lg uppercase tracking-wide transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Wysyłanie…
              </>
            ) : (
              <>
                Wyślij zapytanie
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Wysyłając formularz zgadzasz się na kontakt telefoniczny w sprawie
            Twojego zapytania.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
