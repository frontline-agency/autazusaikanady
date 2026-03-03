import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-usa-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logoFooter} alt="AUTA z Ameryki USA" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/70 text-sm mb-4">
              Import samochodów z USA i Kanady. Profesjonalnie, bezpiecznie i z pełną transparentnością kosztów.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UC8vZJ16STgT69Rw6RXdiiyA" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {[
                { name: "Strona główna", href: "/" },
                { name: "O nas", href: "/o-nas" },
                
                { name: "Opłaty", href: "/oplaty" },
                { name: "Oszczędności", href: "/oszczednosci" },
                { name: "Blog", href: "/blog" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-usa-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-usa-red flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  AUTA z Ameryki USA Paweł Mroczkowski<br />
                  Chmielewo 16,<br />
                  06-100 Pułtusk
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-usa-red flex-shrink-0" />
                <a href="tel:+48502441033" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                  +48 502 441 033
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-usa-red flex-shrink-0" />
                <a href="mailto:autazamerykiusa@gmail.com" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                  autazamerykiusa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Godziny otwarcia</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { day: "Poniedziałek", hours: "08:00–19:00" },
                { day: "Wtorek", hours: "08:00–19:00" },
                { day: "Środa", hours: "08:00–19:00" },
                { day: "Czwartek", hours: "08:00–19:00" },
                { day: "Piątek", hours: "08:00–19:00" },
                { day: "Sobota", hours: "09:00–16:00" },
                { day: "Niedziela", hours: "Zamknięte" },
              ].map((item) => (
                <li key={item.day} className="flex justify-between text-primary-foreground/70">
                  <span>{item.day}</span>
                  <span className="font-semibold text-primary-foreground">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} AUTA z Ameryki USA. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
