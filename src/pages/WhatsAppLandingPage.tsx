import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppLandingPage = () => {
  const features = [
    "wybrane okazje z USA",
    "NOCNE AUKCJE",
    "auta KUP TERAZ",
    "aktualne licytacje IAA • Copart • Manheim",
    "wygrane aukcje i ceny sprzedaży",
    "szacowane koszty POD DOM",
    "bezpośredni link do każdego auta",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-[hsl(224,71%,12%)]">
        <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-usa-red text-white text-sm font-black uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              NOWOŚĆ
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-8">
              OTWIERAMY NASZĄ GRUPĘ WHATSAPP!
            </h1>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              Szukasz auta z USA i chcesz jako jeden z pierwszych widzieć ciekawe okazje z aukcji?
            </p>

            <a
              href="https://chat.whatsapp.com/KRYDgN90ak42HjPTX1pYMC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-black uppercase tracking-wide text-lg px-10 py-5 rounded-lg transition-colors shadow-lg mb-10"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.746.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.929L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              DOŁĄCZ DO GRUPY WHATSAPP
            </a>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              Stworzyliśmy grupę <strong>„Auta z Ameryki USA | Aukcje i okazje”</strong>, na której będziemy publikować:
            </p>

            <ul className="text-left inline-block mb-10 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-white/90 text-base md:text-lg">
                  <Check className="w-6 h-6 text-usa-red flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
              Widzisz auto, które Cię interesuje?
              <br className="hidden md:block" />
              Piszesz do nas, sprawdzamy ofertę, przedstawiamy koszty i możemy przygotować Cię do licytacji.
            </p>

            <a
              href="https://chat.whatsapp.com/KRYDgN90ak42HjPTX1pYMC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-black uppercase tracking-wide text-lg md:text-xl px-10 py-5 rounded-lg transition-colors shadow-lg"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.746.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.929L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              DOŁĄCZ DO GRUPY WHATSAPP
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsAppLandingPage;
