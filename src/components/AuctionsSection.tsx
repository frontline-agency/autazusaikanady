import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import copartLogo from "@/assets/copart-logo.webp";
import iaaLogo from "@/assets/iaa-logo.webp";
import impactLogo from "@/assets/impact-logo.webp";
import salvagenowLogo from "@/assets/salvagenow-logo.webp";

const AuctionsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const platforms = [
    { logo: copartLogo, name: "Copart" },
    { logo: iaaLogo, name: "IAA" },
    { logo: impactLogo, name: "Impact Auto Auctions" },
    { logo: salvagenowLogo, name: "Salvage Now" },
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-usa-dark relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-usa-navy/50 via-usa-dark to-usa-dark" />
      </motion.div>

      {/* Floating particles effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [-20, -100],
            x: Math.random() * 20 - 10
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ 
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 40}%`
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-usa-red font-semibold uppercase tracking-wider inline-block"
          >
            Licytacje
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2"
          >
            Prowadzimy licytacje na wielu platformach
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto"
          >
            Posiadamy dostępy do najlepszych portali aukcyjnych w USA i Kanadzie. Licytujemy uszkodzone i nieuszkodzone auta z największych aukcji.
          </motion.p>
        </motion.div>

        <motion.div 
          style={{ scale: logoScale }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.3)"
              }}
              className="bg-primary-foreground/5 rounded-2xl p-6 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors group cursor-pointer backdrop-blur-sm border border-primary-foreground/10 hover:border-usa-red/30"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={platform.logo}
                alt={platform.name}
                className="h-10 md:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="text-primary-foreground/70 text-lg"
          >
            Dużą popularnością cieszą się samochody marek: <br className="md:hidden" />
            <motion.strong 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-primary-foreground"
            >
              Ford, Dodge, Chevrolet, BMW, Audi, Mercedes, Porsche, Jeep, Toyota
            </motion.strong>
          </motion.p>
        </motion.div>

        {/* Animated car brands marquee effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 text-primary-foreground/30 font-heading text-2xl whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8">
                <span>FORD</span><span>•</span>
                <span>DODGE</span><span>•</span>
                <span>CHEVROLET</span><span>•</span>
                <span>BMW</span><span>•</span>
                <span>AUDI</span><span>•</span>
                <span>MERCEDES</span><span>•</span>
                <span>PORSCHE</span><span>•</span>
                <span>JEEP</span><span>•</span>
                <span>TOYOTA</span><span>•</span>
                <span>TESLA</span><span>•</span>
                <span>LEXUS</span><span>•</span>
                <span>CADILLAC</span><span>•</span>
                <span>GMC</span><span>•</span>
                <span>RAM</span><span>•</span>
                <span>INFINITI</span><span>•</span>
                <span>ACURA</span><span>•</span>
                <span>LINCOLN</span><span>•</span>
                <span>CHRYSLER</span><span>•</span>
                <span>HONDA</span><span>•</span>
                <span>NISSAN</span><span>•</span>
                <span>SUBARU</span><span>•</span>
                <span>VOLKSWAGEN</span><span>•</span>
                <span>VOLVO</span><span>•</span>
                <span>LAND ROVER</span><span>•</span>
                <span>JAGUAR</span><span>•</span>
                <span>BUICK</span><span>•</span>
                <span>PONTIAC</span><span>•</span>
                <span>HYUNDAI</span><span>•</span>
                <span>KIA</span><span>•</span>
                <span>MAZDA</span><span>•</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuctionsSection;
