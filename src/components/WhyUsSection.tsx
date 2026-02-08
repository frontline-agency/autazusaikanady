import { motion } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Dlaczego my?</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Dlaczego warto wybrać naszą firmę?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              className="group relative bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-usa-red/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-usa-red/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-usa-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-usa-red transition-colors">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
