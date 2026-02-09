const MarqueeBand = () => {
  return (
    <div className="bg-usa-navy py-6 overflow-hidden select-none">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: "marquee-scroll 30s linear infinite" }}
      >
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="font-heading font-black text-primary-foreground tracking-tighter shrink-0 px-6"
            style={{ fontSize: "clamp(60px, 10vw, 140px)", lineHeight: 1 }}
          >
            IMPORTUJEMY AUTA PROSTO Z USA •
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
