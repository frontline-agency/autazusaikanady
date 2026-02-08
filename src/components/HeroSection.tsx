import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import mustangHero from "@/assets/mustang-hero.webp";
import zakupWCiemno from "@/assets/zakup-w-ciemno.png";
import ttvLogo from "@/assets/ttv-logo.png";

const HeroSection = () => {
  const benefits = [
    "Oszczędność do 40% wartości auta",
    "Import w zaledwie 30 dni",
    "Pełna transparentność kosztów",
    "Twarze programu TV Zakup w ciemno",
  ];

  return (
    <section id="home" className="relative min-h-[90vh] bg-usa-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-usa-navy via-usa-navy/95 to-usa-navy/80" />

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            {/* TV Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <img src={ttvLogo} alt="TTV" className="h-8 w-auto" />
                <span className="text-sm font-medium">Znasz nas z telewizji!</span>
              </div>
              <img src={zakupWCiemno} alt="Zakup w ciemno" className="h-14 w-auto" />
            </motion.div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Import Samochodów
              <span className="block text-usa-red">z USA i Kanady</span>
              do Polski
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Kupując auto z licytacji w USA, możesz zaoszczędzić nawet do <strong className="text-usa-red">40%</strong> jego europejskiej wartości. Zajmujemy się wszystkim – od licytacji po rejestrację.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-usa-red flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/80">
                Zaufało nam ponad <strong className="text-primary-foreground">500+</strong> klientów
              </span>
            </div>
          </motion.div>

          {/* Right Content - Car Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-usa-red/20 rounded-3xl blur-3xl" />
              
              {/* Car Image */}
              <img
                src={mustangHero}
                alt="Ford Mustang GT350 - Import z USA"
                className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-usa-red text-primary-foreground px-6 py-3 rounded-xl shadow-lg z-20"
              >
                <span className="font-heading font-bold text-2xl">-40%</span>
                <span className="block text-sm">oszczędności</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
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
