import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  FileText, 
  Wallet, 
  Ship, 
  Wrench, 
  Car 
} from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Wybór pojazdu",
      description: "Wybierasz pojazd na jednym z portali aukcyjnych: IAA, COPART lub innym. Pomagamy w analizie historii i stanu auta.",
    },
    {
      icon: FileText,
      step: "2",
      title: "Umowa",
      description: "Pobierasz, podpisujesz i przesyłasz nam umowę. Wszystko jasne i przejrzyste – bez ukrytych kosztów.",
    },
    {
      icon: Wallet,
      step: "3",
      title: "Zaliczka i licytacja",
      description: "Wpłacasz zaliczkę. Bierzemy udział w licytacji w Twoim imieniu, dbając o najlepszą cenę.",
    },
    {
      icon: Ship,
      step: "4",
      title: "Transport",
      description: "Transport pojazdu z placu aukcyjnego do portu, a następnie fracht do Niemiec i transport do Polski.",
    },
    {
      icon: Wrench,
      step: "5",
      title: "Naprawa i konwersja",
      description: "Opcjonalnie: naprawa, konwersja na rynek europejski i przygotowanie wszystkich dokumentów.",
    },
    {
      icon: Car,
      step: "6",
      title: "Odbiór",
      description: "Odbiór gotowego pojazdu lub dostawa do klienta. Auto przygotowane do rejestracji w Polsce.",
    },
  ];

  return (
    <section className="py-20 bg-usa-navy" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Proces</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Import w zaledwie 30 dni!
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Etapy importu krok po kroku – od wyboru auta po jego odbiór w Polsce
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-usa-red/30">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-usa-red origin-left"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 text-center h-full border border-primary-foreground/10 hover:border-usa-red/50 transition-colors">
                  {/* Step Number */}
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-usa-red rounded-full flex items-center justify-center mx-auto shadow-glow-red">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground text-usa-navy font-heading font-bold rounded-full flex items-center justify-center text-sm">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ports Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12 text-primary-foreground/70"
        >
          <p>Frachty nadajemy z portów w: <strong className="text-primary-foreground">Savannah, New Jersey, Houston, Indianapolis, Los Angeles</strong></p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
