import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const ReviewWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://opinie.autazamerykiusa.pl/reputation/assets/review-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={widgetRef}>
      <iframe
        className="lc_reviews_widget"
        src="https://opinie.autazamerykiusa.pl/reputation/widgets/review_widget/jZBkEuSP5b04zuOBAu16?widgetId=69a5560032ed67d8d4df1004"
        frameBorder="0"
        scrolling="no"
        style={{ minWidth: "100%", width: "100%" }}
        title="Opinie klientów"
      />
    </div>
  );
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-usa-light-blue overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
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

        <ReviewWidget />
      </div>
    </section>
  );
};

export default TestimonialsSection;
