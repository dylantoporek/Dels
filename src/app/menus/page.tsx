import type { Metadata } from "next";
import Hatch from "../components/hatch";
import Glass, { type GlassVariant } from "../components/glass";

export const metadata: Metadata = {
  title: "Menus — Del's",
  description: "Cocktails and light bites at Del's.",
};

const cocktails: { name: string; detail: string; glass: GlassVariant }[] = [
  {
    name: "Aperitivo",
    detail: "vermouth, soda, lemon twist",
    glass: "collins",
  },
  {
    name: "S.G.D.",
    detail: "sake, gin, green chartreuse, sugar, lemon, grapefruit twist",
    glass: "rocks",
  },
  {
    name: "Roman Negroni",
    detail: "mezcal, vermouth bianco, genepy, amaro, orange twist",
    glass: "rocks",
  },
  {
    name: "Del's June Martini",
    detail:
      "olive oil fat washed dill-infused gin, vermouth bianco, bitters, feta, tomato",
    glass: "wine",
  },
  {
    name: "Limoncello Milk Punch",
    detail:
      "limoncello, white rum, genepy, amaro, brandy, earl grey tea, lemon, bitters, milk",
    glass: "rocks",
  },
  {
    name: "Del's Iced Tea",
    detail: "black tea, lemon, sugar",
    glass: "rocks",
  },
  {
    name: "The Coke",
    detail: "amaro, ginger liquor, soda, lemon twist",
    glass: "soda",
  },
];

const bites = [
  { name: "Crunchy", detail: "sea salt & vinegar chips" },
  { name: "Briney", detail: "marinated olives, pickles, & peppers" },
  { name: "Savory", detail: "aged manchego" },
  { name: "Spicy", detail: "chorizo picante" },
  { name: "Sweet", detail: "coffee chip ice cream & brandy" },
];

function PaperHeader() {
  return (
    <div className="flex flex-col items-center">
      <span className="marker text-4xl">DEL&apos;S</span>
      <Hatch strokes={14} className="mt-2 h-6 w-32" />
    </div>
  );
}

export default function Menus() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="flex flex-col items-center text-center">
        <p className="mono-label text-foreground/80">The Menus</p>
        <Hatch strokes={10} className="mt-4 h-4 w-16 text-accent" />
        <p className="mono-label mt-6 text-muted">
          The list rotates &mdash; every menu is dated, drawn, and retired
        </p>
      </header>

      {/* Cocktails — a printed sheet */}
      <section className="mt-14 bg-paper p-8 text-ink shadow-2xl md:p-14">
        <PaperHeader />
        <ul className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {cocktails.map(({ name, detail, glass }, i) => (
            <li
              key={name}
              className={`flex items-start gap-5 ${
                i === cocktails.length - 1 ? "md:col-span-2 md:justify-center" : ""
              }`}
            >
              <Glass variant={glass} className="h-16 w-12 shrink-0" />
              <div>
                <h2 className="hand hand-rule text-2xl uppercase">{name}</h2>
                <p className="hand mt-2 text-lg uppercase leading-snug text-ink/80">
                  {detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Light bites — a second sheet */}
      <section className="mt-10 bg-paper p-8 text-ink shadow-2xl md:p-14">
        <PaperHeader />
        <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {bites.map(({ name, detail }, i) => (
            <li
              key={name}
              className={`text-center ${
                i === bites.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <h2 className="hand hand-rule text-2xl uppercase">{name}</h2>
              <p className="hand mt-2 text-lg uppercase leading-snug text-ink/80">
                {detail}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
