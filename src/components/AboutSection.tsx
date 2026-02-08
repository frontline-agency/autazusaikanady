import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Shield, TrendingUp } from "lucide-react";
import zakupWCiemno from "@/assets/zakup-w-ciemno.png";
import ttvLogo from "@/assets/ttv-logo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const stats = [
    { icon: Users, value: "500+", label: "Zadowolonych klientów" },
    { icon: Award, value: "10+", label: "Lat doświadczenia" },
    { icon: Shield, value: "100%", label: "Bezpieczeństwo transakcji" },
    { icon: TrendingUp, value: "40%", label: "Oszczędności" },
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and TV Show */}
          <motion.div
            style={{ y: imageY, scale }}
            className="relative"
          >
            <motion.div 
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative bg-usa-navy rounded-2xl p-8 shadow-xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute -top-6 -right-6 bg-usa-red text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg"
              >
                Znani z TV!
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-center gap-6 mb-6"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src={ttvLogo} 
                  alt="TTV Logo" 
                  className="h-16 w-auto" 
                />
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  src={zakupWCiemno} 
                  alt="Zakup w ciemno" 
                  className="h-20 w-auto" 
                />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-primary-foreground text-center text-lg"
              >
                Paweł i Ola Mroczkowscy – twarze programu telewizyjnego <strong>„Zakup w ciemno"</strong> na TTV
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-card p-4 rounded-xl shadow-md text-center cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-8 h-8 text-usa-red mx-auto mb-2" />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className="block font-heading font-bold text-2xl text-primary"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div style={{ y: textY }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-usa-red font-semibold uppercase tracking-wider inline-block"
            >
              O nas
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6"
            >
              Pasja do motoryzacji i wieloletnie doświadczenie
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              {[
                {
                  text: <>
                    <strong className="text-foreground">Auta z Ameryki USA</strong> to firma stworzona z pasji do motoryzacji oraz wieloletniego doświadczenia w imporcie samochodów ze Stanów Zjednoczonych i Kanady. Od samego początku naszym celem było jedno – zapewnić klientom bezpieczny, przejrzysty i opłacalny import auta zza oceanu, bez stresu i ukrytych kosztów.
                  </>
                },
                {
                  text: <>
                    Za marką stoją <strong className="text-foreground">Paweł Mroczkowski</strong> oraz <strong className="text-foreground">Ola Mroczkowska</strong> – prywatnie małżeństwo, zawodowo zgrany zespół. Jesteśmy również twarzami programu telewizyjnego „Zakup w ciemno", w którym pokazujemy, jak w praktyce wygląda świadomy i bezpieczny zakup samochodów.
                  </>
                },
                {
                  text: "Każdy import realizujemy osobiście – od wyboru auta i licytacji, przez transport i odprawę, aż po przygotowanie pojazdu do rejestracji w Polsce. Dzięki bezpośrednim kontaktom w USA i Kanadzie oraz sprawdzonym partnerom logistycznym możemy zaoferować naszym klientom realne oszczędności i pełną kontrolę nad całym procesem."
                },
                {
                  text: <>
                    Stawiamy na <strong className="text-foreground">uczciwość, jasne zasady i indywidualne podejście</strong> do każdego klienta. Dla nas import auta to nie jednorazowa transakcja, ale relacja oparta na zaufaniu i transparentności.
                  </>
                }
              ].map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>
                  {paragraph.text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
