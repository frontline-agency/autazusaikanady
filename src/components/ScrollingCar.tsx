import { useEffect, useState } from "react";
import carCutout from "@/assets/car-cutout.png";

const ScrollingCar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Car moves faster: from -30% to 130% of viewport width
  const translateX = -30 + scrollProgress * 160;

  return (
    <div className="w-full overflow-hidden pointer-events-none py-4">
      <div
        className="w-[320px] md:w-[500px] transition-none"
        style={{
          transform: `translateX(${translateX}vw) scaleX(-1)`,
          willChange: "transform",
        }}
      >
        <img
          src={carCutout}
          alt=""
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ScrollingCar;
