import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Info, ArrowRight } from "lucide-react";

const CostsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="costs" className="py-20 bg-usa-light-blue" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Opłaty</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ile zapłacisz? Podatki przy imporcie auta z USA
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Importujemy w taki sposób, aby Twoje koszty były jak najniższe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Direct Import */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                <span className="font-heading font-bold text-2xl text-usa-navy">23%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Cło Polska</span>
                <span className="font-heading font-bold text-2xl text-usa-navy">10%</span>
              </div>
            </div>
          </motion.div>

          {/* Via Germany - Recommended */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl overflow-hidden shadow-xl border-2 border-usa-red relative"
          >
            <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-usa-red text-primary-foreground px-4 py-1 rounded-b-lg font-semibold text-sm">
              POLECAMY
            </div>
            <div className="bg-usa-red p-6">
              <h3 className="font-heading font-bold text-xl text-primary-foreground text-center">
                Import przez Niemcy
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">VAT Niemcy</span>
                <span className="font-heading font-bold text-2xl text-usa-red">19%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Cło Niemcy</span>
                <span className="font-heading font-bold text-2xl text-usa-red">10%</span>
              </div>
              <div className="bg-secondary p-3 rounded-lg flex items-center gap-2 text-foreground">
                <Info className="w-5 h-5 flex-shrink-0 text-usa-red" />
                <span className="text-sm">Oszczędzasz 4% na VAT!</span>
              </div>
            </div>
          </motion.div>

          {/* Excise Tax */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                <span className="font-heading font-bold text-2xl text-usa-red">3,1%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Silniki powyżej 2.0L</span>
                <span className="font-heading font-bold text-2xl text-usa-navy">18,6%</span>
              </div>
              <div className="bg-secondary p-3 rounded-lg flex items-center gap-2 text-foreground">
                <Info className="w-5 h-5 flex-shrink-0 text-usa-red" />
                <span className="text-sm">Auta zabytkowe - niższe podatki!</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-usa-red font-semibold hover:underline"
          >
            Zapytaj o szczegółową kalkulację dla Twojego auta
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CostsSection;
