export interface FaqItem {
  question: string;
  answer: string;
}

// Shared by the visible FAQ section and the FAQPage JSON-LD (edge function).
// Keep them identical — Google requires schema text to match visible text.
export const faqItems: FaqItem[] = [
  {
    question: "Dlaczego warto sprowadzić auto z firmą Auta z Ameryki USA?",
    answer:
      "Auta z Ameryki USA to firma z Pułtuska działająca od 2020 roku, prowadzona osobiście przez Pawła i Olę Mroczkowskich, znanych z programu TTV „Zakup w ciemno”. Pomogliśmy ponad 1000 zadowolonym klientom, którzy zaoszczędzili łącznie ponad 5 mln zł. Licytujemy bezpośrednio na aukcjach Copart, IAAI i Manheim, bez dodatkowych pośredników, a klienci oceniają nas w Google na 4,8/5.",
  },
  {
    question: "Ile trwa sprowadzenie samochodu z USA do Polski?",
    answer:
      "Cały proces trwa zwykle od 6 do 10 tygodni. Obejmuje odbiór auta z placu aukcyjnego, transport lądowy do portu w USA, fracht morski do Europy, odprawę celną oraz dostawę pod wskazany adres w Polsce.",
  },
  {
    question: "Jakie są pełne koszty importu auta z USA?",
    answer:
      "Na całkowity koszt składają się: cena wygranej licytacji, opłaty aukcyjne, transport lądowy w USA, fracht morski, cło 10%, VAT, akcyza w Polsce (3,1% lub 18,6% w zależności od pojemności silnika) oraz nasza prowizja. Przed licytacją przedstawiamy szacunkowy koszt auta pod dom, a kalkulator na stronie /oplaty pozwala policzyć go samodzielnie.",
  },
  {
    question: "Jak sprawdzacie stan i historię auta przed licytacją?",
    answer:
      "Każde auto weryfikujemy po numerze VIN w raportach historii (m.in. Carfax i AutoCheck), analizujemy zdjęcia uszkodzeń i opłacalność naprawy. Odradzamy pojazdy po zalaniu (Flood) oraz auta z poważnymi uszkodzeniami konstrukcji.",
  },
  {
    question: "Jakie dokumenty (title) pozwalają zarejestrować auto z USA w Polsce?",
    answer:
      "Auto można zarejestrować w Polsce na podstawie m.in. Clean Title oraz Salvage Title. Nie licytujemy aut z dokumentami uniemożliwiającymi rejestrację, takimi jak Certificate of Destruction czy Junk Title.",
  },
  {
    question: "Jak zabezpieczona jest transakcja i kaucja?",
    answer:
      "Współpracę zawieramy na podstawie umowy, a przed licytacją wpłacana jest kaucja, która jest zwracana, jeśli auto nie zostanie wylicytowane. Wszystkie koszty przedstawiamy przejrzyście przed zakupem, bez ukrytych opłat.",
  },
];
