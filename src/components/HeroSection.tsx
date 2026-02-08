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
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const carY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const benefits = [
    "Oszczędność do 40% wartości auta",
    "Import w zaledwie 30 dni",
    "Pełna transparentność kosztów",
    "Twarze programu TV Zakup w ciemno",
  ];

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] bg-usa-navy overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </motion.div>

      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-usa-red/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-usa-navy via-usa-navy/95 to-usa-navy/80" />

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with Parallax */}
          <motion.div
            style={{ y: textY, opacity }}
            className="text-primary-foreground"
          >
            {/* TV Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="flex items-center gap-4 mb-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <img src={ttvLogo} alt="TTV" className="h-8 w-auto" />
                <span className="text-sm font-medium">Znasz nas z telewizji!</span>
              </motion.div>
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 2 }}
                src={zakupWCiemno} 
                alt="Zakup w ciemno" 
                className="h-14 w-auto" 
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Import Samochodów
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-usa-red"
              >
                z USA i Kanady
              </motion.span>
              do Polski
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
            >
              Kupując auto z licytacji w USA, możesz zaoszczędzić nawet do <strong className="text-usa-red">40%</strong> jego europejskiej wartości. Zajmujemy się wszystkim – od licytacji po rejestrację.
            </motion.p>

            {/* Benefits List with Stagger */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: "spring" }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 cursor-default"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="w-5 h-5 text-usa-red flex-shrink-0" />
                  </motion.div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
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

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <span className="text-primary-foreground/80">
                Zaufało nam ponad <strong className="text-primary-foreground">500+</strong> klientów
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Car Image with Parallax */}
          <motion.div
            style={{ y: carY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Animated Glow Effect */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-usa-red/20 rounded-3xl blur-3xl" 
              />
              
              {/* Car Image */}
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={mustangHero}
                alt="Ford Mustang GT350 - Import z USA"
                className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-4 -left-4 bg-usa-red text-primary-foreground px-6 py-3 rounded-xl shadow-lg z-20"
              >
                <span className="font-heading font-bold text-2xl">-40%</span>
                <span className="block text-sm">oszczędności</span>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg z-20"
              >
                <span className="text-sm font-medium">🇺🇸 USA & 🇨🇦 Kanada</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
