import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.746.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.929L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
              <a href="https://www.facebook.com/autazamerykiusa/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pawel.mroczkowski.1/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@AUTAzAmerykiUSA" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-usa-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <p className="text-primary-foreground/70 text-sm mb-3">
                Dołącz do grupy WhatsApp i zobacz okazje z aukcji jako jeden z pierwszych.
              </p>
              <a
                href="https://chat.whatsapp.com/KRYDgN90ak42HjPTX1pYMC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#128C7E] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                DOŁĄCZ DO GRUPY WHATSAPP
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
                { name: "Grupa WhatsApp", href: "/grupa-whatsapp" },
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
                { day: "Poniedziałek – Piątek", hours: "08:00–19:00" },
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
