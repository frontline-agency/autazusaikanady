import { useEffect, useRef, useState } from "react";
import carCutout from "@/assets/mustang-scrolling.webp";

const ScrollingCar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Progress: 0 when entering viewport from bottom, 1 when leaving from top
      const total = viewportHeight + rect.height;
      const current = viewportHeight - rect.top;
      const p = Math.max(0, Math.min(1, current / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move from left edge (-20vw) to right edge (100vw) while in viewport
  const translateX = -20 + progress * 120;

  return (
    <div ref={containerRef} className="w-full overflow-hidden pointer-events-none py-8">
      <div
        style={{
          width: "40vw",
          transform: `translateX(${translateX}vw)`,
          willChange: "transform",
        }}
      >
        <img
          src={carCutout}
          alt=""
          className="w-full h-auto"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ScrollingCar;
