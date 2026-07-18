import Link from "next/link";
import Hatch from "./components/hatch";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero — the wordmark lockup */}
      <section className="flex flex-col items-center py-24 text-center md:py-32">
        <h1 className="marker rise text-7xl leading-none md:text-9xl">
          DEL&apos;S
        </h1>
        <Hatch strokes={18} className="rise mt-6 h-8 w-56 md:h-10 md:w-72" />
        <p className="mono-label rise-late mt-10 text-foreground/80">
          Cocktails &amp; Light Bites
        </p>
        <div className="rise-late mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/menus"
            className="mono-label border border-foreground px-8 py-4 transition-colors hover:border-accent hover:bg-accent"
          >
            The Menu
          </Link>
          <Link
            href="/about"
            className="mono-label px-8 py-4 text-foreground/70 transition-colors hover:text-accent"
          >
            About Del&apos;s
          </Link>
        </div>
      </section>

      {/* What's pouring — ticker line from the current menu */}
      <section className="border-y border-line py-6 text-center">
        <Link
          href="/menus"
          className="mono-label leading-8 text-muted transition-colors hover:text-accent"
        >
          Aperitivo &middot; S.G.D. &middot; Roman Negroni &middot; June Martini
          &middot; Limoncello Milk Punch &middot; Iced Tea &middot; The Coke
        </Link>
      </section>

      {/* The pitch */}
      <section className="grid gap-12 py-20 md:grid-cols-3 md:gap-8">
        {[
          {
            title: "The Drinks",
            body: "Classics kept honest, plus house originals like the S.G.D. and the June Martini. The list rotates — every menu is dated, drawn, and retired.",
          },
          {
            title: "The Bites",
            body: "Five bowls, five moods: crunchy, briney, savory, spicy, sweet. Enough to keep you going without slowing you down.",
          },
          {
            title: "The Room",
            body: "Small space, loud records, good company. Come thirsty, leave a regular.",
          },
        ].map(({ title, body }) => (
          <article key={title} className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="headline text-sm">{title}</h2>
            <Hatch strokes={8} className="mt-3 h-3 w-14 text-accent" />
            <p className="mt-5 leading-relaxed text-foreground/75">{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
