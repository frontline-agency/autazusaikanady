import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-80px" });

  useEffect(() => {
    // Load external form embed script
    const script = document.createElement("script");
    script.src = "https://link.systemicdigitals.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+48 502 441 033",
      href: "tel:+48502441033",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "autazamerykiusa@gmail.com",
      href: "mailto:autazamerykiusa@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adres",
      value: "Chmielewo 16, 06-100 Pułtusk",
      href: null,
    },
    {
      icon: Clock,
      label: "Godziny pracy",
      value: "Pon–Pt: 8:00–18:00, Sob: 9:00–14:00",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="py-20 bg-usa-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--usa-red)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-usa-red font-semibold uppercase tracking-wider">
              Kontakt
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
              Skontaktuj się z nami
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">
              Masz pytania o import auta z USA? Chcesz poznać szczegółową wycenę?
              Napisz do nas lub zadzwoń — odpowiemy najszybciej jak to możliwe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section ref={infoRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Left — info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Dane kontaktowe
                </h2>
                <p className="text-muted-foreground mb-8">
                  Zajmujemy się kompleksowym importem samochodów z USA i Kanady.
                  Pomagamy na każdym etapie — od wyboru auta, przez licytację, aż po
                  rejestrację w Polsce.
                </p>
              </motion.div>

              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={infoInView ? "visible" : "hidden"}
                  variants={fadeUp}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 bg-usa-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-usa-red" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-semibold text-foreground hover:text-usa-red transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Quick CTA */}
              <motion.div
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-usa-red/5 border border-usa-red/20 rounded-2xl p-5 mt-4"
              >
                <h4 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-usa-red" />
                  Szybki kontakt
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Wolisz rozmawiać? Zadzwoń bezpośrednio lub napisz na WhatsApp.
                </p>
                <a
                  href="tel:+48502441033"
                  className="inline-flex items-center gap-2 bg-usa-red text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-lg uppercase tracking-wide hover:scale-105 transition-transform group relative overflow-hidden"
                >
                  <span className="relative z-10">Zadzwoń teraz</span>
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="absolute inset-0 bg-[hsl(var(--usa-navy))] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </a>
              </motion.div>
            </div>

            {/* Right — embedded form */}
            <motion.div
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden max-w-[450px] mx-auto">
                <div className="p-1">
                  <iframe
                    src="https://link.systemicdigitals.com/widget/form/nhKwH5USALdxbH7lZeXz"
                    style={{
                      width: "100%",
                      height: "600px",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id="inline-nhKwH5USALdxbH7lZeXz"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form"
                    data-height="undefined"
                    data-layout-iframe-id="inline-nhKwH5USALdxbH7lZeXz"
                    data-form-id="nhKwH5USALdxbH7lZeXz"
                    title="Website Form"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
