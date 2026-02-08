import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Shield, TrendingUp } from "lucide-react";
import zakupWCiemno from "@/assets/zakup-w-ciemno.png";
import ttvLogo from "@/assets/ttv-logo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: "500+", label: "Zadowolonych klientów" },
    { icon: Award, value: "10+", label: "Lat doświadczenia" },
    { icon: Shield, value: "100%", label: "Bezpieczeństwo transakcji" },
    { icon: TrendingUp, value: "40%", label: "Oszczędności" },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and TV Show */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-usa-navy rounded-2xl p-8 shadow-xl">
              <div className="absolute -top-6 -right-6 bg-usa-red text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                Znani z TV!
              </div>
              
              <div className="flex items-center justify-center gap-6 mb-6">
                <img src={ttvLogo} alt="TTV Logo" className="h-16 w-auto" />
                <img src={zakupWCiemno} alt="Zakup w ciemno" className="h-20 w-auto" />
              </div>
              
              <p className="text-primary-foreground text-center text-lg">
                Paweł i Ola Mroczkowscy – twarze programu telewizyjnego <strong>„Zakup w ciemno"</strong> na TTV
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="bg-card p-4 rounded-xl shadow-md text-center"
                >
                  <stat.icon className="w-8 h-8 text-usa-red mx-auto mb-2" />
                  <span className="block font-heading font-bold text-2xl text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">O nas</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Pasja do motoryzacji i wieloletnie doświadczenie
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Auta z Ameryki USA</strong> to firma stworzona z pasji do motoryzacji oraz wieloletniego doświadczenia w imporcie samochodów ze Stanów Zjednoczonych i Kanady. Od samego początku naszym celem było jedno – zapewnić klientom bezpieczny, przejrzysty i opłacalny import auta zza oceanu, bez stresu i ukrytych kosztów.
              </p>
              
              <p>
                Za marką stoją <strong className="text-foreground">Paweł Mroczkowski</strong> oraz <strong className="text-foreground">Ola Mroczkowska</strong> – prywatnie małżeństwo, zawodowo zgrany zespół. Jesteśmy również twarzami programu telewizyjnego „Zakup w ciemno", w którym pokazujemy, jak w praktyce wygląda świadomy i bezpieczny zakup samochodów.
              </p>
              
              <p>
                Każdy import realizujemy osobiście – od wyboru auta i licytacji, przez transport i odprawę, aż po przygotowanie pojazdu do rejestracji w Polsce. Dzięki bezpośrednim kontaktom w USA i Kanadzie oraz sprawdzonym partnerom logistycznym możemy zaoferować naszym klientom realne oszczędności i pełną kontrolę nad całym procesem.
              </p>
              
              <p>
                Stawiamy na <strong className="text-foreground">uczciwość, jasne zasady i indywidualne podejście</strong> do każdego klienta. Dla nas import auta to nie jednorazowa transakcja, ale relacja oparta na zaufaniu i transparentności.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
