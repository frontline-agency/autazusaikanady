import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Eye, 
  Award, 
  UserCheck, 
  Shield, 
  Percent, 
  Heart 
} from "lucide-react";

const WhyUsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const reasons = [
    {
      icon: Eye,
      title: "Pełna transparentność kosztów",
      description: "Klienci chwalą nas za jasne zasady i brak ukrytych opłat. Od początku wiedzą, ile realnie będzie kosztował import auta - bez niespodzianek na końcu procesu.",
    },
    {
      icon: Award,
      title: "Doświadczenie potwierdzone w praktyce",
      description: "Nie jesteśmy pośrednikiem z internetu. Jako twarze programu Zakup w ciemno pokazujemy realne przypadki importu aut i opieramy się na wiedzy zdobytej w setkach zakończonych transakcji.",
    },
    {
      icon: UserCheck,
      title: "Indywidualne podejście do każdego klienta",
      description: "Każde auto dobieramy pod konkretne potrzeby - budżet, przeznaczenie i oczekiwania klienta. Klienci doceniają bezpośredni kontakt i stały dostęp do informacji na każdym etapie importu.",
    },
    {
      icon: Shield,
      title: "Bezpieczny proces od A do Z",
      description: "Zajmujemy się wszystkim: weryfikacją historii pojazdu, licytacją, transportem, odprawą celną, naprawą i dokumentami oraz przygotowaniem auta do rejestracji w Polsce.",
    },
    {
      icon: Percent,
      title: "Realne oszczędności",
      description: "Dzięki bezpośrednim kontaktom w USA i Kanadzie oraz sprawdzonej logistyce nasi klienci oszczędzają nawet kilkadziesiąt procent w porównaniu do cen aut dostępnych na rynku europejskim.",
    },
    {
      icon: Heart,
      title: "Zaufanie i polecenia",
      description: "Najlepszą rekomendacją są dla nas klienci, którzy wracają po kolejne auta i polecają nas znajomym - to dla nas największy dowód jakości usług.",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" ref={containerRef}>
      {/* Parallax Background Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, hsl(var(--usa-navy)) 2px, transparent 0)",
          backgroundSize: "50px 50px"
        }} />
      </motion.div>

      <div className="container mx-auto px-4 relative" ref={ref}>
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
            className="text-usa-red font-semibold uppercase tracking-wider inline-block"
          >
            Dlaczego my?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2"
          >
            Dlaczego warto wybrać naszą firmę?
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-usa-red/20 cursor-default"
            >
              {/* Animated gradient background */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-usa-red/10 via-transparent to-usa-navy/10 rounded-2xl"
              />
              
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-usa-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-usa-red transition-colors duration-300"
                >
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                
                <motion.h3 
                  className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-usa-red transition-colors"
                >
                  {reason.title}
                </motion.h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Corner accent */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-usa-red/20 to-transparent rounded-tr-2xl rounded-bl-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
