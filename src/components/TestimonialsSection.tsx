import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Krzysztof M.",
      text: "Jestem bardzo zadowolony z auta wszystko przebiegło bardzo szybko i sprawnie. Pan Paweł konkretny gość to co mówił tak zrobił pełny Profesjonalizm. Kupiłem już drugie auto i kupię jeszcze nie jedno 👍💪 Pozdrawiam",
      car: "BMW X5",
      rating: 5,
    },
    {
      name: "Tomasz K.",
      text: "Kupiłem X5 F15 w zeszłym roku i jestem bardzo zadowolony z zakupu i kontaktu z panem Pawłem, wszystko było tak jak w opisie, nic nie było ukrywane więc wiesz co kupujesz bez ściemniania jak u innych handlujących, napewno wrócę jeśli będę chciał kupić następne auto, jest trochę daleko z Wrocławia ale naprawdę warto zrobić te kilometry bo zadowolenie jest gwarantowane.",
      car: "BMW X5 F15",
      rating: 5,
    },
    {
      name: "Mateusz R.",
      text: "Użytkuję swojego Golfa GTI kupionego od pana Pawła z Auta z Ameryki USA od czerwca i muszę przyznać – wszystko się zgadza, jak mówił! Auto w świetnym stanie, firma rzetelna i pomocna. Golf git, polecam z czystym sumieniem!",
      car: "VW Golf GTI",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-usa-light-blue" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Opinie klientów</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Co mówią o nas klienci?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-card p-6 rounded-2xl shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-usa-red/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="font-semibold text-foreground block">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.car}</span>
                </div>
                <div className="bg-usa-navy text-primary-foreground px-3 py-1 rounded-full text-sm">
                  Zweryfikowany
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
