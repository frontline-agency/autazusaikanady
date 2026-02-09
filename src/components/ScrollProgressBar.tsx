import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const carX = useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 28px)"]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-muted/30">
      {/* Progress fill */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-usa-red origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Car indicator */}
      <motion.div
        className="absolute -top-2.5 text-lg leading-none"
        style={{ left: carX }}
      >
        🏎️
      </motion.div>
    </div>
  );
};

export default ScrollProgressBar;
