// netlify/functions/send-contact.mts
// Obsługa formularza kontaktowego z /kontakt — wysyłka powiadomienia mailem przez Resend.

const DEFAULT_TO_EMAIL = "autazamerykiusa@gmail.com";
const DEFAULT_FROM_EMAIL = "Formularz <formularz@autazamerykiusa.pl>";

/**
 * Adresy, na które trafia powiadomienie o nowym zgłoszeniu.
 * Ustawiane zmienną środowiskową CONTACT_TO_EMAIL w panelu Netlify.
 * Można podać kilka adresów po przecinku, np.:
 *   CONTACT_TO_EMAIL="autazamerykiusa@gmail.com, biuro@autazamerykiusa.pl"
 */
const getRecipients = (): string[] => {
  const configured = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((address) => address.trim())
    .filter((address) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address));

  return configured.length > 0 ? configured : [DEFAULT_TO_EMAIL];
};

type Payload = {
  name?: unknown;
  phone?: unknown;
  carModel?: unknown;
  engine?: unknown;
  year?: unknown;
  purchaseTiming?: unknown;
  pageUrl?: unknown;
  company?: unknown; // honeypot
};

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

/** Przycina i czyści wartość tekstową z formularza. */
const clean = (value: unknown, maxLength = 200): string => {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, maxLength);
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const row = (label: string, value: string): string =>
  `<tr>
     <td style="padding:8px 14px;border-bottom:1px solid #e9e9ee;color:#6b7280;font-size:14px;white-space:nowrap;">${escapeHtml(label)}</td>
     <td style="padding:8px 14px;border-bottom:1px solid #e9e9ee;color:#111827;font-size:15px;font-weight:600;">${escapeHtml(value) || "&mdash;"}</td>
   </tr>`;

export default async (request: Request): Promise<Response> => {
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return json(400, { error: "Nieprawidłowe dane formularza." });
  }

  // Honeypot — boty wypełniają ukryte pole, ludzie nie.
  if (clean(payload.company)) {
    return json(200, { ok: true });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 40);
  const carModel = clean(payload.carModel, 160);
  const engine = clean(payload.engine, 120);
  const year = clean(payload.year, 40);
  const purchaseTiming = clean(payload.purchaseTiming, 80);
  const pageUrl = clean(payload.pageUrl, 300);

  if (name.length < 3) {
    return json(422, { error: "Podaj imię i nazwisko." });
  }
  if (phone.replace(/\D/g, "").length < 9) {
    return json(422, { error: "Podaj poprawny numer telefonu." });
  }

  const recipients = getRecipients();
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("send-contact: brak zmiennej środowiskowej RESEND_API_KEY");
    return json(500, {
      error: "Formularz jest chwilowo niedostępny. Zadzwoń: +48 502 441 033.",
    });
  }

  const submittedAt = new Date().toLocaleString("pl-PL", {
    timeZone: "Europe/Warsaw",
  });

  const text = [
    "Nowe zapytanie z formularza na autazamerykiusa.pl",
    "",
    `Imię i nazwisko: ${name}`,
    `Telefon: ${phone}`,
    `Marka i model: ${carModel || "—"}`,
    `Silnik: ${engine || "—"}`,
    `Rocznik: ${year || "—"}`,
    `Planowany zakup: ${purchaseTiming || "—"}`,
    "",
    `Wysłano: ${submittedAt}`,
    ...(pageUrl ? [`Strona: ${pageUrl}`] : []),
  ].join("\n");

  const html = `<!doctype html>
<html lang="pl"><body style="margin:0;padding:24px;background:#f4f4f7;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <tr>
      <td style="background:#0a2240;padding:20px 24px;">
        <div style="color:#ffffff;font-size:18px;font-weight:bold;">Nowe zapytanie z formularza</div>
        <div style="color:#b9c4d4;font-size:13px;margin-top:4px;">autazamerykiusa.pl &middot; strona Kontakt</div>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 10px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          ${row("Imię i nazwisko", name)}
          ${row("Telefon", phone)}
          ${row("Marka i model", carModel)}
          ${row("Silnik", engine)}
          ${row("Rocznik", year)}
          ${row("Planowany zakup", purchaseTiming)}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 24px 20px;color:#6b7280;font-size:12px;">
        Wysłano: ${escapeHtml(submittedAt)}${pageUrl ? ` &middot; ${escapeHtml(pageUrl)}` : ""}<br />
        <a href="tel:${escapeHtml(phone.replace(/[^\d+]/g, ""))}" style="color:#c8102e;font-weight:bold;text-decoration:none;">Zadzwoń do klienta</a>
      </td>
    </tr>
  </table>
</body></html>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL,
        to: recipients,
        subject: `Nowe zapytanie: ${name} — ${phone}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("send-contact: Resend zwrócił błąd", response.status, details);
      return json(502, {
        error: "Nie udało się wysłać wiadomości. Zadzwoń: +48 502 441 033.",
      });
    }
  } catch (error) {
    console.error("send-contact: błąd połączenia z Resend", error);
    return json(502, {
      error: "Nie udało się wysłać wiadomości. Zadzwoń: +48 502 441 033.",
    });
  }

  return json(200, { ok: true });
};
