import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Car, Info } from "lucide-react";

const formatUSD = (val: number) =>
  val.toLocaleString("pl-PL", { maximumFractionDigits: 0 });

const getAuctionFees = (price: number): [number, number] => {
  if (price <= 5000) return [800, 1000];
  if (price <= 10000) return [900, 1200];
  if (price <= 15000) return [1000, 1400];
  if (price <= 20000) return [1200, 1500];
  return [1500, 2000];
};

const getCommissionUSD = (price: number): number | null => {
  const rate = 4.15;
  if (price <= 10000) return 2500 / rate;
  if (price <= 15000) return 3000 / rate;
  if (price <= 20000) return 3500 / rate;
  return null; // individual
};

const CostCalculator = () => {
  const [price, setPrice] = useState("");
  const [engine, setEngine] = useState<"small" | "big">("big");

  const numPrice = parseFloat(price.replace(/\s/g, "")) || 0;
  const isValid = numPrice >= 500 && numPrice <= 500000;

  const calculate = () => {
    if (!isValid) return null;

    const [auctionMin, auctionMax] = getAuctionFees(numPrice);
    const transportMin = 1200;
    const transportMax = 2000;
    const duty = numPrice * 0.1;
    const vat = (numPrice + duty) * 0.2;
    const excise = numPrice * (engine === "small" ? 0.031 : 0.186);
    const commission = getCommissionUSD(numPrice);

    const baseCosts = duty + vat + excise;

    if (commission === null) {
      const min = numPrice + auctionMin + transportMin + baseCosts;
      const max = numPrice + auctionMax + transportMax + baseCosts;
      return { min, max, individual: true };
    }

    const min = numPrice + auctionMin + transportMin + baseCosts + commission;
    const max = numPrice + auctionMax + transportMax + baseCosts + commission;
    return { min, max, individual: false };
  };

  const result = calculate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">
            Kalkulator
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Oblicz koszt sprowadzenia auta
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Wpisz kwotę, za którą planujesz wylicytować auto, a pokażemy Ci
            szacunkowy łączny koszt dostarczenia go pod Twój dom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-lg mx-auto bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
        >
          <div className="bg-usa-navy p-5 flex items-center justify-center gap-3">
            <Calculator className="w-6 h-6 text-primary-foreground" />
            <h3 className="font-heading font-bold text-lg text-primary-foreground">
              Kalkulator kosztów importu
            </h3>
          </div>

          <div className="p-6 space-y-6">
            {/* Price input */}
            <div>
              <label
                htmlFor="bid-price"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Kwota licytacji (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                  $
                </span>
                <input
                  id="bid-price"
                  type="text"
                  inputMode="numeric"
                  placeholder="np. 12 000"
                  value={price}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d]/g, "");
                    if (raw.length <= 6) setPrice(raw);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground font-heading text-xl font-bold focus:outline-none focus:ring-2 focus:ring-usa-red/50 transition-shadow"
                  maxLength={10}
                />
              </div>
            </div>

            {/* Engine size */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                <Car className="w-4 h-4 inline mr-1 -mt-0.5" />
                Pojemność silnika
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setEngine("small")}
                  className={`py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                    engine === "small"
                      ? "border-usa-red bg-usa-red/10 text-usa-red"
                      : "border-border text-muted-foreground hover:border-muted-foreground/40"
                  }`}
                >
                  Do 2.0L
                </button>
                <button
                  onClick={() => setEngine("big")}
                  className={`py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                    engine === "big"
                      ? "border-usa-red bg-usa-red/10 text-usa-red"
                      : "border-border text-muted-foreground hover:border-muted-foreground/40"
                  }`}
                >
                  Powyżej 2.0L
                </button>
              </div>
            </div>

            {/* Result */}
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-usa-navy rounded-xl p-6 text-center"
              >
                <p className="text-primary-foreground/70 text-sm mb-1">
                  Szacunkowy łączny koszt
                </p>
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground">
                  {formatUSD(result.min)} – {formatUSD(result.max)} USD
                </p>
                {result.individual && (
                  <p className="text-primary-foreground/60 text-xs mt-2">
                    + prowizja wyceniana indywidualnie (auto &gt;20 000 $)
                  </p>
                )}
              </motion.div>
            )}

            {/* Info */}
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-usa-red" />
              <span>
                Kalkulacja uwzględnia: opłaty aukcyjne, transport z USA, fracht
                morski, cło 10%, VAT 20%, akcyzę oraz naszą prowizję. Podane
                kwoty są szacunkowe — skontaktuj się z nami po dokładną wycenę.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostCalculator;
