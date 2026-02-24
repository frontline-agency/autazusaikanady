import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  FileText, 
  Wallet, 
  Ship, 
  Wrench, 
  Car,
  Download
} from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Wybór pojazdu",
      description: "Wybierasz pojazd na jednym z portali aukcyjnych: IAA, COPART lub innym. Pomagamy w analizie historii i stanu auta.",
    },
    {
      icon: FileText,
      step: "2",
      title: "Umowa",
      description: "Pobierasz, podpisujesz i przesyłasz nam umowę. Wszystko jasne i przejrzyste – bez ukrytych kosztów.",
    },
    {
      icon: Wallet,
      step: "3",
      title: "Zaliczka i licytacja",
      description: "Wpłacasz zaliczkę. Bierzemy udział w licytacji w Twoim imieniu, dbając o najlepszą cenę.",
    },
    {
      icon: Ship,
      step: "4",
      title: "Transport",
      description: "Transport pojazdu z placu aukcyjnego do portu, a następnie fracht do Holandii i transport do Polski.",
    },
    {
      icon: Wrench,
      step: "5",
      title: "Naprawa i konwersja",
      description: "Opcjonalnie: naprawa, konwersja na rynek europejski i przygotowanie wszystkich dokumentów.",
    },
    {
      icon: Car,
      step: "6",
      title: "Odbiór",
      description: "Odbiór gotowego pojazdu lub dostawa do klienta. Auto przygotowane do rejestracji w Polsce.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-usa-navy relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }} />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 bg-usa-red/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-usa-red font-semibold uppercase tracking-wider"
          >
            Proces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2"
          >
            Import w zaledwie 30 dni!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto"
          >
            Etapy importu krok po kroku – od wyboru auta po jego odbiór w Polsce
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop with animation */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-usa-red/30 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-usa-red via-white to-usa-red origin-left"
            />
            {/* Animated pulse along the line */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 text-center h-full border border-primary-foreground/10">
                  {/* Step Number */}
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-usa-red rounded-full flex items-center justify-center mx-auto shadow-glow-red">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 300 }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground text-usa-navy font-heading font-bold rounded-full flex items-center justify-center text-sm shadow-lg"
                    >
                      {step.step}
                    </motion.span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {step.description}
                  </p>

                  {/* Download button for step 2 */}
                  {step.step === "2" && (
                    <a
                      href="/documents/Umowa-Importu-Auta.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-usa-red text-xs hover:underline"
                    >
                      <Download className="w-3 h-3" />
                      Pobierz umowę
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Ports Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12 text-primary-foreground/70"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
          >
            Frachty nadajemy z portów w: <strong className="text-primary-foreground">Savannah, New Jersey, Houston, Indianapolis, Los Angeles</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
