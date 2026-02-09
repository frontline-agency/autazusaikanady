import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import mustangHero from "@/assets/mustang-hero.webp";
import zakupWCiemno from "@/assets/zakup-w-ciemno.png";
import ttvLogo from "@/assets/ttv-logo.png";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const bigTextY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const carY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-usa-navy overflow-hidden flex items-center"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-usa-navy/60 via-usa-navy/40 to-usa-navy/80 z-[2]" />

      {/* Giant scrolling background text */}
      <motion.div
        style={{ y: bigTextY }}
        className="absolute inset-0 flex items-end z-[1] pointer-events-none select-none overflow-hidden"
      >
        <h2 className="font-heading font-black text-[12vw] md:text-[14vw] lg:text-[16vw] leading-none text-white/10 whitespace-nowrap tracking-tighter translate-y-[15%]">
          WYCHODZENIA
        </h2>
      </motion.div>

      {/* Car image - sits between big text and content */}
      <motion.div
        style={{ y: carY }}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 bottom-0 w-[55%] md:w-[50%] lg:w-[45%] z-[3] pointer-events-none"
      >
        <img
          src={mustangHero}
          alt="Ford Mustang GT350 - Import z USA"
          className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        />
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="absolute bottom-[15%] left-[5%] bg-usa-red text-primary-foreground px-5 py-3 rounded-xl shadow-2xl"
        >
          <span className="font-heading font-bold text-2xl">-40%</span>
          <span className="block text-sm">oszczędności</span>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container mx-auto px-4 relative z-[5] pt-32 pb-24"
      >
        <div className="max-w-2xl">
          {/* TV Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <img src={ttvLogo} alt="TTV" className="h-8 w-auto" />
              <span className="text-sm font-medium text-primary-foreground">
                Znasz nas z telewizji!
              </span>
            </div>
            <img
              src={zakupWCiemno}
              alt="Zakup w ciemno"
              className="h-14 w-auto"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6"
          >
            Auta z USA i Kanady
            <span className="block text-usa-red mt-1">
              Import samochodów
            </span>
            ze Stanów
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/75 mb-8 max-w-xl"
          >
            Zaoszczędź nawet do{" "}
            <strong className="text-usa-red">40%</strong> wartości auta.
            Zajmujemy się wszystkim – od licytacji po rejestrację.
          </motion.p>

          {/* Benefits */}
          <ul className="space-y-2.5 mb-10">
            {[
              "Oszczędność do 40% wartości auta",
              "Import w zaledwie 30 dni",
              "Pełna transparentność kosztów",
              "Twarze programu TV Zakup w ciemno",
            ].map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 text-primary-foreground"
              >
                <CheckCircle className="w-5 h-5 text-usa-red flex-shrink-0" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
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

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-primary-foreground/80">
              Zaufało nam ponad{" "}
              <strong className="text-primary-foreground">500+</strong> klientów
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[6]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
