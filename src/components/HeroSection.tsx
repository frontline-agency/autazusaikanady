import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroCarUsa from "@/assets/hero-car-usa.webp";
import zakupWCiemno from "@/assets/zakup-w-ciemno.png";
import ttvLogo from "@/assets/ttv-logo.png";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-usa-navy overflow-hidden"
    >
      {/* Infinite horizontal marquee text */}
      <div className="absolute inset-0 flex items-center z-[1] pointer-events-none select-none overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-heading font-black text-white/[0.07] tracking-tighter mx-4" style={{ fontSize: "clamp(100px, 15vw, 250px)", lineHeight: 1 }}>
              IMPORTUJEMY AUTA PROSTO Z USA •
            </span>
          ))}
        </div>
      </div>

      {/* Central car image */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 z-[2] flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <img
            src={heroCarUsa}
            alt="Muscle car na amerykańskiej autostradzie"
            className="w-full h-full object-cover"
          />
          {/* Dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--usa-navy))] via-[hsl(var(--usa-navy)/0.3)] to-[hsl(var(--usa-navy)/0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--usa-navy)/0.7)] via-transparent to-[hsl(var(--usa-navy)/0.7)]" />
        </div>
      </motion.div>

      {/* Main content overlay */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-[5] min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-24"
      >
        {/* TV Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10">
            <img src={ttvLogo} alt="TTV" className="h-7 w-auto" />
            <span className="text-sm font-medium text-primary-foreground">
              Znasz nas z telewizji!
            </span>
          </div>
          <img
            src={zakupWCiemno}
            alt="Zakup w ciemno"
            className="h-12 w-auto"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6 max-w-5xl"
        >
          Importujemy auta
          <span className="block text-usa-red mt-2">prosto z USA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl"
        >
          Zaoszczędź nawet do <strong className="text-usa-red">40%</strong>{" "}
          wartości auta. Zajmujemy się wszystkim – od licytacji po rejestrację.
        </motion.p>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10"
        >
          {[
            "Oszczędność do 40%",
            "Import w 30 dni",
            "Pełna transparentność",
            "Znani z TV",
          ].map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base"
            >
              <CheckCircle className="w-4 h-4 text-usa-red flex-shrink-0" />
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-usa-red hover:bg-usa-red/90 text-primary-foreground font-semibold text-lg px-8 shadow-glow-red"
            >
              <a href="tel:+48502441033" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Zadzwoń teraz
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg"
            >
              <a href="#about" className="flex items-center gap-2">
                Dowiedz się więcej
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-primary-foreground/70 text-sm">
            Zaufało nam ponad{" "}
            <strong className="text-primary-foreground">500+</strong> klientów
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[6]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
