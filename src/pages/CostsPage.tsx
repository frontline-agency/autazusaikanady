import CostCalculator from "@/components/CostCalculator";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Info,
  Ship,
  Truck,
  MapPin,
  Clock,
  BadgePercent,
  TrendingDown,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TransportCard = ({
  icon: Icon,
  title,
  value,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay, duration: 0.5 }}
      className="bg-card rounded-2xl p-6 shadow-lg text-center border border-border"
    >
      <div className="w-14 h-14 bg-usa-red/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-usa-red" />
      </div>
      <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
      <p className="font-heading font-bold text-2xl text-usa-navy">{value}</p>
    </motion.div>
  );
};

const CommissionRow = ({ label, price }: { label: string; price: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-border last:border-0">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-heading font-bold text-lg text-usa-navy">{price}</span>
  </div>
);

const CostsPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const taxRef = useRef(null);
  const taxInView = useInView(taxRef, { once: true, margin: "-80px" });
  const commRef = useRef(null);
  const commInView = useInView(commRef, { once: true, margin: "-80px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-usa-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--usa-red)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Opłaty i koszty
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
              Koszty sprowadzenia auta z USA
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">
              Cena transportu samochodu z USA zależy od lokalizacji auta oraz portu
              wysyłki. Im bliżej portu — tym taniej. Poniżej przedstawiamy pełen
              wykaz opłat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <CostCalculator />

      {/* Transport Costs */}
      <section className="py-20 bg-usa-light-blue">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
          >
            Koszty transportu
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            Każdy kontener jest monitorowany — na bieżąco możesz sprawdzać
            lokalizację przesyłki.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <TransportCard
              icon={Truck}
              title="Transport lądowy (USA)"
              value="250 – 1 000 $"
              delay={0}
            />
            <TransportCard
              icon={Ship}
              title="Transport morski do Rotterdam"
              value="550 – 1 000 $"
              delay={0.1}
            />
            <TransportCard
              icon={MapPin}
              title="Bremerhaven / Rotterdam → Polska"
              value="1 200 – 1 500 zł"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Taxes Section */}
      <section ref={taxRef} className="py-20 bg-usa-light-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={taxInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Podatki
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Podatki przy imporcie auta z USA
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Importujemy w taki sposób, aby Twoje koszty były jak najniższe
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Direct Import */}
            <motion.div
              initial="hidden"
              animate={taxInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-usa-navy p-6">
                <h3 className="font-heading font-bold text-xl text-primary-foreground text-center">
                  Import bezpośredni do Polski
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">VAT Polska</span>
                  <span className="font-heading font-bold text-2xl text-usa-navy">
                    23%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Cło Polska</span>
                  <span className="font-heading font-bold text-2xl text-usa-navy">
                    10%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Via Germany */}
            <motion.div
              initial="hidden"
              animate={taxInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-xl border-2 border-usa-red relative"
            >
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-usa-red text-primary-foreground px-4 py-1 rounded-b-lg font-semibold text-sm">
                POLECAMY
              </div>
              <div className="bg-usa-red p-6">
                <h3 className="font-heading font-bold text-xl text-primary-foreground text-center">
                  Import przez Holandię
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">VAT Holandia</span>
                  <span className="font-heading font-bold text-2xl text-usa-red">
                    20%
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">Cło Holandia</span>
                  <span className="font-heading font-bold text-2xl text-usa-red">
                    10%
                  </span>
                </div>
                <div className="bg-secondary p-3 rounded-lg flex items-center gap-2 text-foreground">
                  <Info className="w-5 h-5 flex-shrink-0 text-usa-red" />
                  <span className="text-sm">Oszczędzasz 3% na VAT!</span>
                </div>
              </div>
            </motion.div>

            {/* Excise & Special */}
            <motion.div
              initial="hidden"
              animate={taxInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-usa-navy p-6">
                <h3 className="font-heading font-bold text-xl text-primary-foreground text-center">
                  Akcyza (pojemność silnika)
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">Silniki do 2.0L</span>
                  <span className="font-heading font-bold text-2xl text-usa-red">
                    3,1%
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-muted-foreground">
                    Silniki powyżej 2.0L
                  </span>
                  <span className="font-heading font-bold text-2xl text-usa-navy">
                    18,6%
                  </span>
                </div>
                <div className="bg-secondary p-3 rounded-lg flex items-center gap-2 text-foreground">
                  <Info className="w-5 h-5 flex-shrink-0 text-usa-red" />
                  <span className="text-sm">Auta zabytkowe — niższe podatki!</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Extra tax details */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h4 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <BadgePercent className="w-5 h-5 text-usa-red" />
                Specjalne stawki cła
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samochód osobowy</span>
                  <span className="font-semibold text-foreground">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Motocykl</span>
                  <span className="font-semibold text-foreground">6%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pojazd zabytkowy</span>
                  <span className="font-semibold text-usa-red font-bold">0%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-md border border-border"
            >
              <h4 className="font-heading font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-usa-red" />
                VAT dla pojazdów zabytkowych
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VAT zabytkowy</span>
                  <span className="font-semibold text-usa-red font-bold">7%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cło zabytkowy</span>
                  <span className="font-semibold text-usa-red font-bold">0%</span>
                </div>
                <p className="text-muted-foreground pt-2">
                  Pojazdy zabytkowe korzystają z preferencyjnych stawek celnych i
                  VAT.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commission */}
      <section ref={commRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={commInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Prowizja
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Koszt naszych usług
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ceny i warunki zakupu aut nieuszkodzonych lub uszkodzonych z Ameryki
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={commInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="max-w-xl mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
          >
            <div className="bg-usa-navy p-5">
              <h3 className="font-heading font-bold text-lg text-primary-foreground text-center">
                Prowizja za zakup i obsługę
              </h3>
            </div>
            <div className="p-6">
              <CommissionRow label="Motocykl / quad do 10 000 $" price="2 000 zł" />
              <CommissionRow label="Auto do 10 000 $" price="2 500 zł" />
              <CommissionRow label="Auto do 15 000 $" price="3 000 zł" />
              <CommissionRow label="Auto do 20 000 $" price="3 500 zł" />
              <div className="flex justify-between items-center py-3 border-t border-border">
                <span className="text-muted-foreground">Auto powyżej 20 000 $</span>
                <span className="font-heading font-bold text-lg text-usa-navy">Wycena indywidualna</span>
              </div>
            </div>
          </motion.div>

          {/* Deposit info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto mt-10 bg-usa-red/5 border border-usa-red/20 rounded-2xl p-6"
          >
            <h4 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-usa-red" />
              Ważne informacje o kaucji
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Przed licytacją prosimy o kontakt w celu ustalenia szczegółów i
                podpisania umowy.
              </li>
              <li>• Nie licytujemy pojazdów bez otrzymania kaucji.</li>
              <li>
                • Kaucja jest formą finansowego zabezpieczenia transakcji — w
                przypadku braku wpłaty dom aukcyjny obciąża nas karą 10%
                wylicytowanej kwoty.
              </li>
              <li>
                • Po zapłacie kaucja zostaje zwrócona, pomniejszona o wysokość
                prowizji.
              </li>
              <li>
                • W razie nieudanej licytacji kaucja zwracana jest w całości w ciągu{" "}
                <strong>3 dni roboczych</strong>.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ-style bottom */}
      <section ref={faqRef} className="py-20 bg-usa-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-md border border-border"
            >
              <div className="w-12 h-12 bg-usa-red/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-usa-red" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Ile czasu zajmuje import?
              </h3>
              <p className="text-muted-foreground">
                Sprowadzenie samochodu ze Stanów do Polski zajmuje średnio{" "}
                <strong className="text-foreground">od 6 do 8 tygodni</strong>.
                Czas zależy od lokalizacji pojazdu i dostępności transportu
                morskiego.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-md border border-border"
            >
              <div className="w-12 h-12 bg-usa-red/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-usa-red" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Czy opłaca się importować z USA?
              </h3>
              <p className="text-muted-foreground">
                Nawet po uwzględnieniu wszystkich kosztów, cena zakupu auta z USA
                lub Kanady jest około{" "}
                <strong className="text-foreground">30–45% niższa</strong> niż w
                przypadku analogicznego samochodu na rynku europejskim.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-usa-red text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide hover:scale-105 transition-transform group relative overflow-hidden"
            >
              <span className="relative z-10">Zapytaj o kalkulację</span>
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

export default CostsPage;
