import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Calculator, PiggyBank, BadgePercent } from "lucide-react";

const SavingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const savingsExamples = [
    {
      car: "BMW X5 2020",
      europePrice: "250 000 zł",
      usaPrice: "160 000 zł",
      savings: "90 000 zł",
      percent: "36%",
    },
    {
      car: "Ford Mustang GT 2021",
      europePrice: "220 000 zł",
      usaPrice: "140 000 zł",
      savings: "80 000 zł",
      percent: "36%",
    },
    {
      car: "Mercedes GLE 2019",
      europePrice: "280 000 zł",
      usaPrice: "175 000 zł",
      savings: "105 000 zł",
      percent: "38%",
    },
  ];

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
            <span className="font-heading font-bold text-3xl block">19% VAT</span>
            <span className="text-primary-foreground/80">Zamiast 23% (przez Niemcy)</span>
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
              Przykładowe oszczędności (ceny orientacyjne)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Samochód</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Cena w Europie</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Cena z USA (z kosztami)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-usa-red">Oszczędność</th>
                </tr>
              </thead>
              <tbody>
                {savingsExamples.map((example, index) => (
                  <tr key={index} className="border-t hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{example.car}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{example.europePrice}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{example.usaPrice}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-2 bg-usa-red/10 text-usa-red px-3 py-1 rounded-full font-semibold">
                        <BadgePercent className="w-4 h-4" />
                        {example.savings} ({example.percent})
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-muted/50 text-center text-sm text-muted-foreground">
            * Ceny przykładowe, uzależnione od stanu pojazdu, przebiegu i kursu dolara. Skontaktuj się po dokładną wycenę.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsSection;
