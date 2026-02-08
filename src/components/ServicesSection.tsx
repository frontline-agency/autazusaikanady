import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Ship, Wrench, FileCheck, ArrowRight } from "lucide-react";
import carsBanner from "@/assets/cars-banner.webp";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: ShoppingCart,
      title: "Import aut z USA",
      description: "Kompleksowa obsługa importu samochodów ze Stanów Zjednoczonych i Kanady. Od licytacji po dostawę pod drzwi.",
    },
    {
      icon: ShoppingCart,
      title: "Zakup na aukcji",
      description: "Profesjonalne uczestnictwo w licytacjach na Copart, IAA i innych platformach. Gwarantujemy najlepsze ceny.",
    },
    {
      icon: Ship,
      title: "Transport morski",
      description: "Organizacja frachtu morskiego z głównych portów USA. Śledzenie przesyłki na każdym etapie.",
    },
    {
      icon: Wrench,
      title: "Naprawy i konwersja",
      description: "Naprawa powypadkowych aut, konwersja na rynek europejski, przygotowanie do homologacji.",
    },
    {
      icon: FileCheck,
      title: "Rejestracja",
      description: "Kompletna obsługa dokumentów, odprawa celna, tłumaczenia i przygotowanie do rejestracji w Polsce.",
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Usługi</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Oferowane usługi
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Zajmujemy się kompleksową obsługą importu samochodów z USA i Kanady do Polski
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="flex gap-4 p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="w-12 h-12 bg-usa-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-usa-red transition-colors">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-usa-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-usa-red transition-colors flex-shrink-0 self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-usa-navy rounded-2xl overflow-hidden">
              <img
                src={carsBanner}
                alt="Samochody z USA - Ford Mustang, Mercedes"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-usa-red text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
              <span className="font-heading font-bold text-lg">30 dni</span>
              <span className="block text-sm">od licytacji do Polski</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
