import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-usa-dark text-primary-foreground py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <a href="mailto:autazamerykiusa@gmail.com" className="flex items-center gap-2 hover:text-usa-red transition-colors">
            <Mail className="w-4 h-4 text-usa-red" />
            <span>autazamerykiusa@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+48502441033" className="flex items-center gap-2 hover:text-usa-red transition-colors">
            <Phone className="w-4 h-4" />
            <span>+48 502 441 033</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
