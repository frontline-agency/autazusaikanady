import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingDown,
  Calculator,
  PiggyBank,
  BadgePercent,
  ArrowRight,
  DollarSign,
  Car,
  ShieldCheck,
  Wrench,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const savingsExamples = [
  {
    car: "Ford Mustang GT 2021",
    engine: "5.0 V8, 450 KM",
    europePrice: "220 000 zł",
    usaPrice: "140 000 zł",
    savings: "80 000 zł",
    percent: "36%",
  },
  {
    car: "BMW X5 xDrive40i 2020",
    engine: "3.0 R6 Turbo, 340 KM",
    europePrice: "250 000 zł",
    usaPrice: "160 000 zł",
    savings: "90 000 zł",
    percent: "36%",
  },
  {
    car: "Mercedes GLE 350 2019",
    engine: "2.0 R4 Turbo, 255 KM",
    europePrice: "280 000 zł",
    usaPrice: "175 000 zł",
    savings: "105 000 zł",
    percent: "38%",
  },
  {
    car: "Dodge Challenger R/T 2022",
    engine: "5.7 HEMI V8, 375 KM",
    europePrice: "200 000 zł",
    usaPrice: "125 000 zł",
    savings: "75 000 zł",
    percent: "38%",
  },
  {
    car: "Chevrolet Camaro SS 2021",
    engine: "6.2 V8, 455 KM",
    europePrice: "230 000 zł",
    usaPrice: "145 000 zł",
    savings: "85 000 zł",
    percent: "37%",
  },
  {
    car: "Jeep Grand Cherokee 2020",
    engine: "3.6 V6, 295 KM",
    europePrice: "190 000 zł",
    usaPrice: "120 000 zł",
    savings: "70 000 zł",
    percent: "37%",
  },
];

const whySavings = [
  {
    icon: DollarSign,
    title: "Niższe ceny bazowe w USA",
    desc: "Rynek amerykański jest największy na świecie. Ogromna podaż aut — zarówno nowych, jak i używanych — naturalnie obniża ceny. Auta po szkodach komunikacyjnych na aukcjach Copart czy IAA kosztują nawet 50–70% taniej niż ich europejskie odpowiedniki.",
  },
  {
    icon: BarChart3,
    title: "Korzystny kurs dolara",
    desc: "Przy kursie USD/PLN na poziomie 3,90–4,10 zł import z USA jest szczególnie opłacalny. Nawet niewielki spadek kursu dolara przekłada się na tysiące złotych oszczędności przy droższych pojazdach.",
  },
  {
    icon: Calculator,
    title: "Optymalizacja podatkowa przez Niemcy",
    desc: "Odprawiając auto w Niemczech płacisz 19% VAT zamiast 23% w Polsce. Przy aucie o wartości celnej 100 000 zł oszczędzasz ok. 4 000 zł tylko na różnicy VAT.",
  },
  {
    icon: Car,
    title: "Bogate wyposażenie w standardzie",
    desc: "Auta z rynku amerykańskiego mają zazwyczaj bogatsze wyposażenie seryjne — skórzana tapicerka, kamera cofania, systemy bezpieczeństwa czy duże ekrany multimedialne są standardem nawet w niższych wersjach.",
  },
  {
    icon: Wrench,
    title: "Auta po szkodach — okazja dla znawców",
    desc: "Pojazdy z tytułem salvage (po szkodzie) można kupić za ułamek ceny. Po profesjonalnej naprawie w Polsce zyskujesz auto w doskonałym stanie za 30–45% ceny rynkowej.",
  },
  {
    icon: ShieldCheck,
    title: "Pełna historia pojazdu",
    desc: "Dzięki raportom CARFAX i AutoCheck masz pełny wgląd w historię auta — serwis, wypadki, liczba właścicieli. To poziom transparentności niedostępny na europejskim rynku wtórnym.",
  },
];

const SavingsPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-80px" });
  const tipsRef = useRef(null);
  const tipsInView = useInView(tipsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-usa-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--usa-red)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Oszczędności
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
              Zaoszczędź nawet do <span className="text-usa-red">40%</span> na aucie z USA
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">
              Import samochodu z Ameryki to jedno z najlepszych rozwiązań
              finansowych dla osób szukających jakościowych aut w atrakcyjnych
              cenach. Sprawdź, ile możesz zaoszczędzić.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section ref={statsRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0, duration: 0.5 }}
              className="bg-usa-navy text-primary-foreground p-8 rounded-2xl text-center"
            >
              <TrendingDown className="w-10 h-10 mx-auto mb-3 text-usa-red" />
              <span className="font-heading font-bold text-4xl block">do 40%</span>
              <span className="text-primary-foreground/70 mt-1 block">
                Oszczędności na zakupie
              </span>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-usa-red text-primary-foreground p-8 rounded-2xl text-center"
            >
              <Calculator className="w-10 h-10 mx-auto mb-3" />
              <span className="font-heading font-bold text-4xl block">19% VAT</span>
              <span className="text-primary-foreground/80 mt-1 block">
                Zamiast 23% (przez Niemcy)
              </span>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-usa-navy text-primary-foreground p-8 rounded-2xl text-center"
            >
              <PiggyBank className="w-10 h-10 mx-auto mb-3 text-usa-red" />
              <span className="font-heading font-bold text-4xl block">5 mln+ zł</span>
              <span className="text-primary-foreground/70 mt-1 block">
                Zaoszczędzili nasi klienci
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why savings are real */}
      <section ref={whyRef} className="py-20 bg-usa-light-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Dlaczego taniej?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Skąd biorą się oszczędności?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Import z USA to nie magia — to efekt różnic rynkowych, skali i
              optymalizacji kosztów
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whySavings.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={whyInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-usa-red/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-usa-red" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={tableRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={tableInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Porównanie
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Przykładowe oszczędności
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ceny orientacyjne uwzględniające transport, cło, VAT (19% przez
              Niemcy) i akcyzę
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={tableInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="bg-card rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto"
          >
            <div className="bg-usa-navy p-4">
              <h3 className="font-heading font-semibold text-lg text-primary-foreground text-center">
                Cena w Europie vs. cena z USA (z wszystkimi kosztami)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">
                      Samochód
                    </th>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-foreground hidden md:table-cell">
                      Silnik
                    </th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-foreground">
                      Europa
                    </th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-foreground">
                      Z USA
                    </th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-usa-red">
                      Oszczędność
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {savingsExamples.map((ex, i) => (
                    <tr
                      key={i}
                      className="border-t border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-semibold text-foreground">
                        {ex.car}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground text-sm hidden md:table-cell">
                        {ex.engine}
                      </td>
                      <td className="px-5 py-4 text-center text-muted-foreground">
                        {ex.europePrice}
                      </td>
                      <td className="px-5 py-4 text-center text-muted-foreground">
                        {ex.usaPrice}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-flex items-center gap-1.5 bg-usa-red/10 text-usa-red px-3 py-1 rounded-full font-semibold text-sm">
                          <BadgePercent className="w-4 h-4" />
                          {ex.savings} ({ex.percent})
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-muted/50 text-center text-sm text-muted-foreground">
              * Ceny orientacyjne, uzależnione od stanu pojazdu, przebiegu i kursu
              dolara. Skontaktuj się po dokładną wycenę.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips */}
      <section ref={tipsRef} className="py-20 bg-usa-light-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={tipsInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Porady
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Jak zmaksymalizować oszczędności?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                tip: "Wybieraj auta z silnikami do 2.0L",
                detail:
                  "Akcyza wynosi tylko 3,1% zamiast 18,6% dla większych silników. Przy aucie za 100 000 zł to różnica ponad 15 000 zł.",
              },
              {
                tip: "Kupuj pojazdy blisko portów w USA",
                detail:
                  "Transport lądowy z New Jersey czy Houston do portu to 250–400 $, ale z Montany czy Dakoty nawet 800–1 000 $.",
              },
              {
                tip: "Odprawiaj celnie przez Niemcy",
                detail:
                  "Dzięki 19% VAT zamiast 23% w Polsce oszczędzasz 4% wartości celnej auta. Przy droższych pojazdach to konkretne tysiące złotych.",
              },
              {
                tip: "Rozważ pojazdy zabytkowe (25+ lat)",
                detail:
                  "Pojazdy zabytkowe mają 0% cła i obniżony VAT 7%. To ogromna oszczędność przy klasycznych muscle carach.",
              },
              {
                tip: "Monitoruj kurs dolara",
                detail:
                  "Spadek kursu USD o 10 groszy przy aucie za 20 000 $ to oszczędność ok. 2 000 zł. Warto poczekać na korzystny moment.",
              },
              {
                tip: "Licytuj mądrze — wyznacz limit",
                detail:
                  "Na aukcjach Copart i IAA emocje potrafią podnieść cenę. Wyznacz maksymalną kwotę przed licytacją i trzymaj się jej.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={tipsInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-usa-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {item.tip}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-14"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-usa-red text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide hover:scale-105 transition-transform group relative overflow-hidden"
            >
              <span className="relative z-10">Sprawdź ile zaoszczędzisz</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
              <span className="absolute inset-0 bg-[hsl(var(--usa-navy))] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SavingsPage;
