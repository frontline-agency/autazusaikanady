import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Strona główna", href: "#home" },
    { name: "O nas", href: "#about" },
    { name: "Pojazdy", href: "#vehicles" },
    { name: "Opłaty", href: "#costs" },
    { name: "Oszczędności", href: "#savings" },
    { name: "Blog", href: "#blog" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      <div className="h-px bg-border" />
      <nav className="bg-background sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img src={logo} alt="AUTA z Ameryki USA" className="w-[180px] h-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-usa-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-usa-red hover:bg-usa-red/90 text-primary-foreground font-semibold"
              >
                <a href="tel:+48502441033" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-foreground hover:text-usa-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="w-full mt-4 bg-usa-red hover:bg-usa-red/90 text-primary-foreground"
              >
                <a href="tel:+48502441033" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
