const MarqueeBand = () => {
  return (
    <div className="bg-background py-8 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: "marquee-scroll 15s linear infinite" }}
      >
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="font-heading font-black text-usa-navy tracking-tighter shrink-0 px-6"
            style={{ fontSize: "clamp(90px, 15vw, 210px)", lineHeight: 1 }}
          >
            Zaoszczędź nawet do 40% wartości auta •
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
