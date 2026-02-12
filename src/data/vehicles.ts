import mustangImg from "@/assets/vehicles/mustang-gt.webp";
import camaroImg from "@/assets/vehicles/camaro-ss.webp";
import challengerImg from "@/assets/vehicles/challenger-rt.webp";
import teslaImg from "@/assets/vehicles/tesla-model3.webp";
import wranglerImg from "@/assets/vehicles/wrangler.webp";
import ramImg from "@/assets/vehicles/ram-1500.webp";

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  price: number; // USD auction price
  priceEstPLN: number; // estimated total cost in PLN
  engine: string;
  hp: number;
  fuel: "benzyna" | "diesel" | "elektryczny";
  transmission: "automatyczna" | "manualna";
  mileageKm: number;
  bodyType: "coupe" | "sedan" | "SUV" | "pickup";
  image: string;
  auctionSource: string;
  damageType: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "mustang-gt-2021",
    name: "Ford Mustang GT 5.0 V8",
    year: 2021,
    price: 18500,
    priceEstPLN: 115000,
    engine: "5.0 V8",
    hp: 460,
    fuel: "benzyna",
    transmission: "automatyczna",
    mileageKm: 42000,
    bodyType: "coupe",
    image: mustangImg,
    auctionSource: "Copart",
    damageType: "Przód",
  },
  {
    id: "camaro-ss-2022",
    name: "Chevrolet Camaro SS 6.2 V8",
    year: 2022,
    price: 21000,
    priceEstPLN: 128000,
    engine: "6.2 V8",
    hp: 455,
    fuel: "benzyna",
    transmission: "automatyczna",
    mileageKm: 28000,
    bodyType: "coupe",
    image: camaroImg,
    auctionSource: "IAA",
    damageType: "Bok",
  },
  {
    id: "challenger-rt-2023",
    name: "Dodge Challenger R/T 5.7 HEMI",
    year: 2023,
    price: 24000,
    priceEstPLN: 145000,
    engine: "5.7 HEMI V8",
    hp: 375,
    fuel: "benzyna",
    transmission: "automatyczna",
    mileageKm: 15000,
    bodyType: "coupe",
    image: challengerImg,
    auctionSource: "Copart",
    damageType: "Tył",
  },
  {
    id: "tesla-model3-2022",
    name: "Tesla Model 3 Long Range",
    year: 2022,
    price: 19500,
    priceEstPLN: 120000,
    engine: "Elektryczny",
    hp: 346,
    fuel: "elektryczny",
    transmission: "automatyczna",
    mileageKm: 35000,
    bodyType: "sedan",
    image: teslaImg,
    auctionSource: "Copart",
    damageType: "Przód",
  },
  {
    id: "wrangler-2021",
    name: "Jeep Wrangler Rubicon 3.6 V6",
    year: 2021,
    price: 22000,
    priceEstPLN: 135000,
    engine: "3.6 V6",
    hp: 285,
    fuel: "benzyna",
    transmission: "automatyczna",
    mileageKm: 52000,
    bodyType: "SUV",
    image: wranglerImg,
    auctionSource: "IAA",
    damageType: "Dach",
  },
  {
    id: "ram-1500-2023",
    name: "RAM 1500 Big Horn 5.7 HEMI",
    year: 2023,
    price: 26000,
    priceEstPLN: 158000,
    engine: "5.7 HEMI V8",
    hp: 395,
    fuel: "benzyna",
    transmission: "automatyczna",
    mileageKm: 18000,
    bodyType: "pickup",
    image: ramImg,
    auctionSource: "Copart",
    damageType: "Przód",
  },
];
