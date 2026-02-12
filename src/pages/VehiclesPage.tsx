import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Gauge,
  Fuel,
  Calendar,
  DollarSign,
  SlidersHorizontal,
  Car,
  Zap,
  Settings2,
  MapPin,
  Mail,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { vehicles, type Vehicle } from "@/data/vehicles";

type FuelFilter = "" | Vehicle["fuel"];
type BodyFilter = "" | Vehicle["bodyType"];

const bodyTypeLabels: Record<Vehicle["bodyType"], string> = {
  coupe: "Coupe",
  sedan: "Sedan",
  SUV: "SUV",
  pickup: "Pickup",
};

const fuelLabels: Record<Vehicle["fuel"], string> = {
  benzyna: "Benzyna",
  diesel: "Diesel",
  elektryczny: "Elektryczny",
};

const VehiclesPage = () => {
  const [maxPrice, setMaxPrice] = useState(200000);
  const [minHp, setMinHp] = useState(0);
  const [fuelFilter, setFuelFilter] = useState<FuelFilter>("");
  const [bodyFilter, setBodyFilter] = useState<BodyFilter>("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (v.priceEstPLN > maxPrice) return false;
      if (v.hp < minHp) return false;
      if (fuelFilter && v.fuel !== fuelFilter) return false;
      if (bodyFilter && v.bodyType !== bodyFilter) return false;
      return true;
    });
  }, [maxPrice, minHp, fuelFilter, bodyFilter]);

  const resetFilters = () => {
    setMaxPrice(200000);
    setMinHp(0);
    setFuelFilter("");
    setBodyFilter("");
  };

  const hasActiveFilters = maxPrice < 200000 || minHp > 0 || fuelFilter || bodyFilter;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-usa-navy py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            POJAZDY Z <span className="text-usa-red">AUKCJI USA</span>
          </motion.h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
            Przeglądaj dostępne samochody z amerykańskich aukcji. Każdy pojazd importujemy i przygotowujemy kompleksowo.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filter toggle mobile */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Dostępne pojazdy ({filtered.length})
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 bg-usa-red text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm uppercase"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtry
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            <aside
              className={`${
                showFilters ? "block" : "hidden"
              } md:block w-full md:w-72 shrink-0`}
            >
              <div className="bg-card border border-border rounded-xl p-6 sticky top-28 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-foreground flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-usa-red" />
                    Filtry
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="text-sm text-usa-red hover:underline flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Wyczyść
                    </button>
                  )}
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Maks. cena (PLN): {maxPrice.toLocaleString("pl-PL")} zł
                  </label>
                  <input
                    type="range"
                    min={50000}
                    max={200000}
                    step={5000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[hsl(var(--usa-red))]"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>50 000 zł</span>
                    <span>200 000 zł</span>
                  </div>
                </div>

                {/* HP */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Min. moc: {minHp} KM
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={500}
                    step={25}
                    value={minHp}
                    onChange={(e) => setMinHp(Number(e.target.value))}
                    className="w-full accent-[hsl(var(--usa-red))]"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0 KM</span>
                    <span>500 KM</span>
                  </div>
                </div>

                {/* Fuel */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Paliwo</label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(fuelLabels) as Vehicle["fuel"][]).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFuelFilter(fuelFilter === f ? "" : f)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                          fuelFilter === f
                            ? "bg-usa-red text-primary-foreground border-transparent"
                            : "border-border text-foreground hover:border-usa-red"
                        }`}
                      >
                        {fuelLabels[f]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Body type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Nadwozie</label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(bodyTypeLabels) as Vehicle["bodyType"][]).map((b) => (
                      <button
                        key={b}
                        onClick={() => setBodyFilter(bodyFilter === b ? "" : b)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                          bodyFilter === b
                            ? "bg-usa-red text-primary-foreground border-transparent"
                            : "border-border text-foreground hover:border-usa-red"
                        }`}
                      >
                        {bodyTypeLabels[b]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Vehicle grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Brak pojazdów spełniających kryteria. Zmień filtry lub{" "}
                    <button onClick={resetFilters} className="text-usa-red hover:underline">
                      wyczyść wszystkie
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((vehicle, i) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-usa-navy relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Nie znalazłeś wymarzonego auta?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Znajdziemy dla Ciebie dowolny pojazd na aukcjach w USA. Napisz, czego szukasz!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 bg-usa-red text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg uppercase tracking-wide shadow-glow-red group relative overflow-hidden"
            >
              <Mail className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-rotate-12" />
              <span className="relative z-10">NAPISZ DO NAS</span>
              <span className="absolute inset-0 bg-[hsl(var(--usa-navy))] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const VehicleCard = ({ vehicle, index }: { vehicle: Vehicle; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-hover transition-shadow duration-300 group"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-[3/2]">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="bg-usa-red text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-md uppercase">
          {vehicle.auctionSource}
        </span>
        <span className="bg-usa-navy text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-md">
          {vehicle.year}
        </span>
      </div>
      <div className="absolute bottom-3 right-3">
        <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1 rounded-md">
          Uszkodzenia: {vehicle.damageType}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-heading font-bold text-lg text-foreground mb-3 leading-tight">
        {vehicle.name}
      </h3>

      {/* Specs grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <SpecItem icon={<Gauge className="w-4 h-4" />} label={`${vehicle.hp} KM`} />
        <SpecItem icon={<Fuel className="w-4 h-4" />} label={fuelLabels[vehicle.fuel]} />
        <SpecItem icon={<Settings2 className="w-4 h-4" />} label={vehicle.transmission} />
        <SpecItem icon={<MapPin className="w-4 h-4" />} label={`${(vehicle.mileageKm / 1000).toFixed(0)} tys. km`} />
        <SpecItem icon={<Zap className="w-4 h-4" />} label={vehicle.engine} />
        <SpecItem icon={<Car className="w-4 h-4" />} label={bodyTypeLabels[vehicle.bodyType]} />
      </div>

      {/* Prices */}
      <div className="border-t border-border pt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Cena aukcji (USD)</p>
          <p className="font-heading font-bold text-lg text-foreground flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-usa-red" />
            {vehicle.price.toLocaleString("en-US")}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Szac. koszt (PLN)</p>
          <p className="font-heading font-bold text-xl text-usa-red">
            {vehicle.priceEstPLN.toLocaleString("pl-PL")} zł
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const SpecItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <span className="text-usa-red">{icon}</span>
    <span className="truncate">{label}</span>
  </div>
);

export default VehiclesPage;
