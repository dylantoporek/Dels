import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col items-center py-24 text-center md:py-36">
        <p className="deco-label rise text-gold">Est. behind an unmarked door</p>
        <h1 className="script rise mt-6 text-8xl leading-none text-gold-bright md:text-9xl">
          Del&apos;s
        </h1>
        <div className="deco-divider rise mt-8 w-48">&#9670;</div>
        <p className="rise-late mt-8 max-w-xl text-2xl font-light italic text-foreground/85">
          A modern speakeasy pouring forgotten classics and original cocktails
          by candlelight.
        </p>
        <div className="rise-late mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/menus"
            className="deco-label border border-gold px-8 py-4 text-gold transition-colors hover:bg-gold hover:text-background"
          >
            View the Menus
          </Link>
          <Link
            href="/contact"
            className="deco-label px-8 py-4 text-foreground/70 transition-colors hover:text-gold-bright"
          >
            Find the Door
          </Link>
        </div>
      </section>

      {/* Three promises */}
      <section className="grid gap-6 pb-24 md:grid-cols-3">
        {[
          {
            title: "The Craft",
            body: "House syrups, hand-cut ice, and spirits chosen with a librarian's patience. Every drink is built, not poured.",
          },
          {
            title: "The Room",
            body: "Low light, low ceilings, and a record player that has opinions. Forty seats, and not one of them bad.",
          },
          {
            title: "The Rule",
            body: "What happens at Del's stays at Del's. Photographs are discouraged; good stories are mandatory.",
          },
        ].map(({ title, body }) => (
          <article key={title} className="deco-frame p-8 text-center">
            <h2 className="deco-label text-gold">{title}</h2>
            <p className="mt-4 text-lg font-light leading-relaxed text-foreground/80">
              {body}
            </p>
          </article>
        ))}
      </section>

      {/* Hours strip */}
      <section className="deco-frame mb-24 flex flex-col items-center gap-3 p-10 text-center">
        <h2 className="deco-label text-gold">Hours</h2>
        <p className="text-xl font-light text-foreground/85">
          Wednesday &ndash; Saturday &middot; 6 PM until late
        </p>
        <p className="text-lg italic text-muted">
          Knock twice. Ask for Del.
        </p>
      </section>
    </div>
  );
}
