import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Star, Eye } from "lucide-react";
import { useState } from "react";
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
          className="flex items-center gap-5 mb-10"
        >
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-7 py-4 border border-white/10">
            <img src={ttvLogo} alt="TTV" className="h-10 w-auto" />
            <span className="text-lg font-bold text-primary-foreground">
              Znasz nas z telewizji!
            </span>
          </div>
          <img
            src={zakupWCiemno}
            alt="Zakup w ciemno"
            className="h-24 w-auto"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground uppercase leading-[0.95] mb-6 max-w-6xl"
        >
          IMPORTUJEMY AUTA PROSTO Z USA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-primary-foreground font-bold mb-10 max-w-2xl"
        >
          Zaoszczędź nawet do <span className="text-usa-red">40%</span>{" "}
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
          className="flex flex-col sm:flex-row gap-5 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-usa-red hover:bg-usa-red/90 text-primary-foreground font-bold text-xl px-10 py-6 uppercase tracking-wide shadow-glow-red group relative overflow-hidden"
            >
              <a href="/pojazdy" className="flex items-center gap-3">
                <Eye className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10">ZOBACZ AUKCJE</span>
                <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 font-bold text-xl px-10 py-6 uppercase tracking-wide group relative overflow-hidden"
            >
              <a href="/kontakt" className="flex items-center gap-3">
                <Phone className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
                <span className="relative z-10">KONTAKT</span>
                <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
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


    </section>
  );
};

export default HeroSection;
