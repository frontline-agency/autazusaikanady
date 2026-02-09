const MarqueeBand = () => {
  return (
    <div className="bg-background py-8 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: "marquee-scroll 7.5s linear infinite" }}
      >
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="font-heading font-black text-usa-navy tracking-tighter shrink-0 px-6 uppercase"
            style={{ fontSize: "clamp(90px, 15vw, 210px)", lineHeight: 1 }}
          >
            ZAOSZCZĘDŹ NAWET DO 40% WARTOŚCI AUTA •
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
