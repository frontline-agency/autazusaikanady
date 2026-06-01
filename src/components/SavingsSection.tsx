import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Calculator, PiggyBank } from "lucide-react";

const savingsExamples = [
  {
    car: "Ford Mustang 2.3 EcoBoost (2018–2021)",
    engine: "2.3 Turbo, 310 KM",
    auctionUsd: "4 000 – 7 500 USD",
    plPrice: "65 000 – 90 000 zł",
    note: "Bardzo chodliwy model – szybka sprzedaż",
  },
  {
    car: "Dodge Challenger 3.6 V6 (2017–2020)",
    engine: "3.6 V6, 305 KM",
    auctionUsd: "5 000 – 8 000 USD",
    plPrice: "70 000 – 95 000 zł",
    note: "Bardzo popularny wśród młodszych klientów",
  },
  {
    car: "Tesla Model 3 (2019–2022)",
    engine: "Elektryczny, 283–346 KM",
    auctionUsd: "8 000 – 13 000 USD",
    plPrice: "85 000 – 120 000 zł",
    note: "Duże zainteresowanie, uwaga na baterię",
  },
  {
    car: "BMW 330i G20 (2019–2021)",
    engine: "2.0 Turbo, 258 KM",
    auctionUsd: "6 000 – 10 000 USD",
    plPrice: "85 000 – 115 000 zł",
    note: "Premium, łatwo sprzedać",
  },
  {
    car: "Audi A4 B9 (2018–2021)",
    engine: "2.0 TFSI, 252 KM",
    auctionUsd: "5 000 – 8 500 USD",
    plPrice: "70 000 – 100 000 zł",
    note: "",
  },
  {
    car: "Jeep Grand Cherokee (2018–2021)",
    engine: "3.6 V6, 295 KM",
    auctionUsd: "6 000 – 11 000 USD",
    plPrice: "75 000 – 115 000 zł",
    note: "",
  },
];


const SavingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="savings" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Oszczędności</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ile możesz zaoszczędzić?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sprowadzając samochód z USA, możesz zaoszczędzić nawet do 40% wartości rynkowej identycznego odpowiednika w Europie
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-usa-navy text-primary-foreground p-6 rounded-2xl text-center"
          >
            <TrendingDown className="w-10 h-10 mx-auto mb-3 text-usa-red" />
            <span className="font-heading font-bold text-3xl block">do 40%</span>
            <span className="text-primary-foreground/70">Oszczędności na zakupie</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-usa-red text-primary-foreground p-6 rounded-2xl text-center"
          >
            <Calculator className="w-10 h-10 mx-auto mb-3" />
            <span className="font-heading font-bold text-3xl block">20% VAT</span>
            <span className="text-primary-foreground/80">Odprawa celna w Holandii</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-usa-navy text-primary-foreground p-6 rounded-2xl text-center"
          >
            <PiggyBank className="w-10 h-10 mx-auto mb-3 text-usa-red" />
            <span className="font-heading font-bold text-3xl block">5 mln+ zł</span>
            <span className="text-primary-foreground/70">Zaoszczędzili nasi klienci</span>
          </motion.div>
        </div>

        {/* Examples Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-card rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-usa-navy p-4">
            <h3 className="font-heading font-semibold text-lg text-primary-foreground text-center">
              Wygrana aukcja USA vs. cena zarejestrowanego auta w Polsce
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Samochód</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-foreground hidden md:table-cell">Silnik</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-foreground">Wygrana aukcja</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-usa-red">Zarejestrowany w PL</th>
                </tr>
              </thead>
              <tbody>
                {savingsExamples.map((ex, i) => (
                  <tr key={i} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-foreground">
                      <span>{ex.car}</span>
                      {ex.note && (
                        <span className="block text-xs text-muted-foreground mt-1">{ex.note}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground text-sm hidden md:table-cell">{ex.engine}</td>
                    <td className="px-5 py-4 text-center text-muted-foreground font-medium">{ex.auctionUsd}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 bg-usa-red/10 text-usa-red px-3 py-1 rounded-full font-semibold text-sm">
                        {ex.plPrice}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-muted/50 text-center text-sm text-muted-foreground">
            * Ceny przykładowe, uzależnione od stanu pojazdu, przebiegu i kursu dolara. Skontaktuj się po dokładną wycenę.
            <br />
            🔍 Do każdego auta oferujemy <strong>darmowy raport CARFAX i AutoCheck</strong> – pełna historia pojazdu bez dodatkowych kosztów.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsSection;
