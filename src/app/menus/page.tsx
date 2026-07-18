import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menus — Del's",
  description:
    "Classic and original cocktails, zero-proof drinks, and small plates at Del's speakeasy.",
};

type Item = {
  name: string;
  detail: string;
  price: string;
};

type Section = {
  title: string;
  note?: string;
  items: Item[];
};

const sections: Section[] = [
  {
    title: "House Cocktails",
    note: "Originals, poured until the shaker gives out.",
    items: [
      {
        name: "The Unmarked Door",
        detail: "rye, walnut bitters, demerara, smoked glass",
        price: "17",
      },
      {
        name: "Green Light",
        detail: "gin, chartreuse, lime, celery shrub",
        price: "16",
      },
      {
        name: "Midnight Edition",
        detail: "mezcal, coffee liqueur, cacao, orange oil",
        price: "17",
      },
      {
        name: "Del's Word",
        detail: "our take on the Last Word — gin, maraschino, lime, yellow chartreuse",
        price: "16",
      },
      {
        name: "Paper Alibi",
        detail: "bourbon, amaro, lemon, honey, dash of absinthe",
        price: "16",
      },
    ],
  },
  {
    title: "The Classics",
    note: "Made the way they were before anyone wrote them down wrong.",
    items: [
      {
        name: "Old Fashioned",
        detail: "bourbon or rye, sugar, bitters, one big rock",
        price: "15",
      },
      {
        name: "Bee's Knees",
        detail: "gin, honey, lemon — a Prohibition original",
        price: "14",
      },
      {
        name: "French 75",
        detail: "gin, lemon, sugar, champagne",
        price: "16",
      },
      {
        name: "Sidecar",
        detail: "cognac, cointreau, lemon, sugared rim",
        price: "16",
      },
      {
        name: "Corpse Reviver No. 2",
        detail: "gin, lillet blanc, cointreau, lemon, absinthe rinse",
        price: "15",
      },
    ],
  },
  {
    title: "Zero Proof",
    note: "All of the ceremony, none of the evidence.",
    items: [
      {
        name: "Teetotaler's Sour",
        detail: "seedlip grove, lemon, orgeat, aquafaba",
        price: "11",
      },
      {
        name: "Shirley's Temple",
        detail: "house grenadine, lime, soda, brandied cherry",
        price: "9",
      },
      {
        name: "Garden Party",
        detail: "cucumber, mint, tonic, celery bitters",
        price: "10",
      },
    ],
  },
  {
    title: "Small Plates",
    note: "Enough to keep you honest.",
    items: [
      {
        name: "Deviled Eggs",
        detail: "smoked paprika, chive, pickled mustard seed",
        price: "9",
      },
      {
        name: "Olives & Almonds",
        detail: "castelvetrano, marcona, orange peel",
        price: "8",
      },
      {
        name: "Charcuterie Board",
        detail: "rotating cuts, aged cheese, house pickles, bread",
        price: "22",
      },
      {
        name: "Chocolate Pot de Crème",
        detail: "dark chocolate, sea salt, whipped cream",
        price: "10",
      },
    ],
  },
];

export default function Menus() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="flex flex-col items-center text-center">
        <p className="deco-label text-gold">The Menus</p>
        <h1 className="mt-4 text-5xl font-light md:text-6xl">
          Tonight&apos;s Pour
        </h1>
        <div className="deco-divider mt-8 w-40 text-gold">&#9670;</div>
        <p className="mt-6 max-w-md text-lg italic text-muted">
          The list changes with the seasons and the bartender&apos;s mood.
          Ask what&apos;s off the menu.
        </p>
      </header>

      <div className="mt-16 space-y-14">
        {sections.map(({ title, note, items }) => (
          <section key={title} className="deco-frame p-8 md:p-12">
            <h2 className="deco-label text-center text-gold">{title}</h2>
            {note && (
              <p className="mt-3 text-center text-lg italic text-muted">
                {note}
              </p>
            )}
            <ul className="mt-8 space-y-6">
              {items.map(({ name, detail, price }) => (
                <li key={name}>
                  <div className="flex items-baseline text-xl">
                    <span className="font-medium">{name}</span>
                    <span className="menu-leader" aria-hidden />
                    <span className="text-gold">{price}</span>
                  </div>
                  <p className="mt-1 text-lg font-light italic text-foreground/60">
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
