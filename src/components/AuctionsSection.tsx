import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import copartLogo from "@/assets/copart-logo.webp";
import iaaLogo from "@/assets/iaa-logo.webp";
import impactLogo from "@/assets/impact-logo.webp";
import salvagenowLogo from "@/assets/salvagenow-logo.webp";

const AuctionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const platforms = [
    { logo: copartLogo, name: "Copart" },
    { logo: iaaLogo, name: "IAA" },
    { logo: impactLogo, name: "Impact Auto Auctions" },
    { logo: salvagenowLogo, name: "Salvage Now" },
  ];

  return (
    <section className="py-20 bg-usa-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Licytacje</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Prowadzimy licytacje na wielu platformach
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Posiadamy dostępy do najlepszych portali aukcyjnych w USA i Kanadzie. Licytujemy uszkodzone i nieuszkodzone auta z największych aukcji.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-primary-foreground/5 rounded-2xl p-6 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors group"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-primary-foreground/70 text-lg">
            Dużą popularnością cieszą się samochody marek: <br className="md:hidden" />
            <strong className="text-primary-foreground">Ford, Dodge, Chevrolet, BMW, Audi, Mercedes, Porsche, Jeep</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuctionsSection;
