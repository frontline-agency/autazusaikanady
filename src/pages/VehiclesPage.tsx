import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, Search, Timer, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const VehiclesPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      <section className="relative py-24 md:py-40 bg-usa-navy overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-usa-red rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-usa-blue rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-usa-red/20 border border-usa-red/30 rounded-full px-5 py-2 mb-8">
            <Timer className="w-4 h-4 text-usa-red" />
            <span className="text-usa-red font-semibold text-sm uppercase tracking-wider">
              Już wkrótce
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight">
            Dostęp do{" "}
            <span className="text-usa-red">800 000+</span>
            <br />
            pojazdów na wyciągnięcie ręki
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Przygotowujemy dla Ciebie coś wyjątkowego — <strong className="text-primary-foreground">bezpośredni dostęp do największych aukcji samochodowych w USA</strong>. 
            Przeglądaj tysiące pojazdów z Copart i IAA, porównuj ceny, sprawdzaj historię i licytuj — wszystko w jednym miejscu, po polsku.
          </p>

          <p className="text-primary-foreground/50 text-base md:text-lg max-w-2xl mx-auto mb-12">
            Koniec z przeglądaniem zagranicznych stron. Koniec z barierą językową. 
            Twoje wymarzone auto z Ameryki znajdziesz tutaj — szybciej, łatwiej i taniej niż kiedykolwiek wcześniej.
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-left">
              <Search className="w-10 h-10 text-usa-red mb-4" />
              <h3 className="text-primary-foreground font-bold text-lg mb-2">Wyszukiwarka pojazdów</h3>
              <p className="text-primary-foreground/60 text-sm">
                Filtruj po marce, modelu, roczniku, przebiegu i cenie. Znajdź dokładnie to, czego szukasz.
              </p>
            </div>
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-left">
              <Car className="w-10 h-10 text-usa-red mb-4" />
              <h3 className="text-primary-foreground font-bold text-lg mb-2">Aukcje Copart & IAA</h3>
              <p className="text-primary-foreground/60 text-sm">
                Dwa największe domy aukcyjne w USA — setki tysięcy aut codziennie, w jednym panelu.
              </p>
            </div>
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 text-left">
              <Bell className="w-10 h-10 text-usa-red mb-4" />
              <h3 className="text-primary-foreground font-bold text-lg mb-2">Powiadomienia o okazjach</h3>
              <p className="text-primary-foreground/60 text-sm">
                Ustaw alert i otrzymaj powiadomienie, gdy pojawi się auto spełniające Twoje kryteria.
              </p>
            </div>
          </div>

          {/* CTA */}
          <p className="text-primary-foreground/80 text-lg mb-4">
            Szukasz auta już teraz?
          </p>
          <Button
            asChild
            className="bg-usa-red hover:bg-usa-red text-primary-foreground font-bold uppercase tracking-wide text-lg px-10 py-4 h-auto group relative overflow-hidden"
          >
            <a href="/kontakt">
              <span className="relative z-10">Wypełnij formularz</span>
              <span className="absolute inset-0 bg-[hsl(var(--usa-navy))] border border-usa-red -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehiclesPage;
