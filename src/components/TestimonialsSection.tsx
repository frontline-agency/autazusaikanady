import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

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

  const parallaxValues = [y1, y2, y3];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.7
      }
    })
  };

  return (
    <section className="py-20 bg-usa-light-blue overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-usa-red font-semibold uppercase tracking-wider inline-block"
          >
            Opinie klientów
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2"
          >
            Co mówią o nas klienci?
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ y: parallaxValues[index] }}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-card p-6 rounded-2xl shadow-lg relative perspective-1000"
            >
              <motion.div
                initial={{ opacity: 0, rotate: 180, scale: 0 }}
                animate={isInView ? { opacity: 0.2, rotate: 0, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <Quote className="absolute top-4 right-4 w-10 h-10 text-usa-red" />
              </motion.div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="text-muted-foreground mb-6 leading-relaxed"
              >
                "{testimonial.text}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-center justify-between pt-4 border-t"
              >
                <div>
                  <span className="font-semibold text-foreground block">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.car}</span>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-usa-navy text-primary-foreground px-3 py-1 rounded-full text-sm"
                >
                  Zweryfikowany
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
