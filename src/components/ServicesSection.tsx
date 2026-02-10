import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Ship, Wrench, FileCheck, ArrowRight } from "lucide-react";

import carCutout from "@/assets/mustang-services.webp";
const ServicesSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.05]);
  const listX = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="vehicles" className="py-20 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.1em" } : {}}
            transition={{ duration: 0.8 }}
            className="text-usa-red font-semibold uppercase tracking-wider"
          >
            Usługi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2"
          >
            Oferowane usługi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Zajmujemy się kompleksową obsługą importu samochodów z USA i Kanady do Polski
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Services List with Parallax */}
          <motion.div 
            style={{ x: listX }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 10, 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)"
                }}
                className="flex gap-4 p-4 bg-card rounded-xl shadow-sm transition-all duration-300 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-usa-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-usa-red transition-colors duration-300"
                >
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div className="flex-grow">
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-usa-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service.description}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex-shrink-0 self-center"
                >
                  <ArrowRight className="w-5 h-5 text-usa-red" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Car cutout - pinned to right edge */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 50 }}
            className="relative -mr-16 lg:-mr-24"
          >
            <motion.img
              src={carCutout}
              alt="Amerykański muscle car"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
