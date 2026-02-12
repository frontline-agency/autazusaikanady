import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Shield, TrendingUp, Star, Tv, Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import zakupWCiemno from "@/assets/zakup-w-ciemno.png";
import ttvLogo from "@/assets/ttv-logo.png";

const stats = [
  { icon: Users, value: "100+", label: "Zadowolonych klientów" },
  { icon: Award, value: "10+", label: "Lat doświadczenia" },
  { icon: Shield, value: "100%", label: "Bezpieczeństwo transakcji" },
  { icon: TrendingUp, value: "40%", label: "Oszczędności" },
];

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-usa-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--usa-navy))] to-[hsl(var(--usa-navy)/0.8)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-usa-red font-semibold uppercase tracking-wider">O nas</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2">
              Poznaj AUTA z Ameryki USA
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
              Pasja do motoryzacji, wieloletnie doświadczenie i obecność w telewizji – to fundamenty naszej działalności
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-usa-red font-semibold uppercase tracking-wider">Kim jesteśmy</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Pasja do motoryzacji i wieloletnie doświadczenie
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Auta z Ameryki USA</strong> to firma stworzona z pasji do
                  motoryzacji oraz wieloletniego doświadczenia w imporcie samochodów ze Stanów Zjednoczonych i Kanady.
                  Od samego początku naszym celem było jedno – zapewnić klientom bezpieczny, przejrzysty i opłacalny
                  import auta zza oceanu, bez stresu i ukrytych kosztów.
                </p>
                <p>
                  Za marką stoją <strong className="text-foreground">Paweł Mroczkowski</strong> oraz{" "}
                  <strong className="text-foreground">Ola Mroczkowska</strong> – prywatnie małżeństwo, zawodowo zgrany
                  zespół. Każdy import realizujemy osobiście – od wyboru auta i licytacji, przez transport i odprawę,
                  aż po przygotowanie pojazdu do rejestracji w Polsce.
                </p>
                <p>
                  Dzięki bezpośrednim kontaktom w USA i Kanadzie oraz sprawdzonym partnerom logistycznym możemy
                  zaoferować naszym klientom realne oszczędności i pełną kontrolę nad całym procesem.
                </p>
                <p>
                  Stawiamy na <strong className="text-foreground">uczciwość, jasne zasady i indywidualne podejście</strong>{" "}
                  do każdego klienta. Dla nas import auta to nie jednorazowa transakcja, ale relacja oparta na zaufaniu
                  i transparentności.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card p-6 rounded-xl shadow-md text-center"
                >
                  <stat.icon className="w-10 h-10 text-usa-red mx-auto mb-3" />
                  <span className="block font-heading font-bold text-3xl text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* TV Show Section - highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-usa-navy rounded-3xl p-8 md:p-12 shadow-2xl mb-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-usa-red/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-usa-red/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Tv className="w-6 h-6 text-usa-red" />
                  <span className="text-usa-red font-semibold uppercase tracking-wider text-sm">Znani z telewizji</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Uczestnicy programu „Zakup w ciemno" na TTV
                </h2>
                <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                  <p>
                    Paweł i Ola Mroczkowscy są <strong className="text-primary-foreground">uczestnikami popularnego programu
                    telewizyjnego „Zakup w ciemno"</strong>, emitowanego na antenie TTV. Program pokazuje, jak w praktyce
                    wygląda świadomy i bezpieczny zakup samochodów – od licytacji, przez oględziny, aż po finalizację transakcji.
                  </p>
                  <p>
                    Udział w programie potwierdza nasze kompetencje i doświadczenie w branży motoryzacyjnej. Widzowie mogą
                    na własne oczy zobaczyć, jak pracujemy, jakie podejmujemy decyzje i dlaczego nasi klienci nam ufają.
                  </p>
                  <p>
                    To właśnie dzięki programowi tysiące osób w Polsce dowiedziało się o naszej firmie i przekonało się,
                    że import auta z USA może być <strong className="text-primary-foreground">prosty, bezpieczny i opłacalny</strong>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-10 flex items-center justify-center gap-10 w-full max-w-md"
                >
                  <img src={ttvLogo} alt="Logo TTV" className="h-28 w-auto" />
                  <img src={zakupWCiemno} alt="Logo programu Zakup w ciemno" className="h-36 w-auto" />
                </motion.div>
                <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                  <Star className="w-4 h-4 text-usa-red" />
                  <span>Program emitowany na antenie TTV</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <span className="text-usa-red font-semibold uppercase tracking-wider">Nasze wartości</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Na czym opieramy naszą działalność
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Bezpieczeństwo",
                  desc: "Każdy pojazd jest dokładnie sprawdzany. Weryfikujemy historię, stan techniczny i legalność. Klient otrzymuje pełną dokumentację przed podjęciem decyzji.",
                },
                {
                  icon: Heart,
                  title: "Uczciwość",
                  desc: "Jasne zasady współpracy, przejrzyste koszty i brak ukrytych opłat. Nasi klienci zawsze wiedzą, za co płacą i na jakim etapie jest ich zamówienie.",
                },
                {
                  icon: Award,
                  title: "Doświadczenie",
                  desc: "Ponad 10 lat w branży importu aut z USA i Kanady. Setki zrealizowanych importów i ponad 100 zadowolonych klientów, którzy nam zaufali.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-card rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-usa-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-usa-red" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-usa-navy relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Gotowy na import wymarzonego auta z USA?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
              Skontaktuj się z nami i dowiedz się, ile możesz zaoszczędzić. Bezpłatna konsultacja i wycena!
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-3 bg-usa-red text-primary-foreground font-bold text-xl px-10 py-6 rounded-lg uppercase tracking-wide shadow-glow-red group relative overflow-hidden"
                >
                  <Mail className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-rotate-12" />
                  <span className="relative z-10">NAPISZ DO NAS</span>
                  <span className="absolute inset-0 bg-[hsl(var(--usa-navy))] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+48502441033"
                  className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 font-bold text-xl px-10 py-6 rounded-lg uppercase tracking-wide group relative overflow-hidden"
                >
                  <Phone className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">ZADZWOŃ</span>
                  <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </motion.div>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
              >
                <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">Paweł Mroczkowski</h3>
                <a href="tel:+48502441033" className="text-usa-red hover:underline">+48 502 441 033</a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
              >
                <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">Łukasz</h3>
                <a href="tel:+48508604634" className="text-usa-red hover:underline">+48 508 604 634</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
