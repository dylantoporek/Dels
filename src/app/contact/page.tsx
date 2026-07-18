import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Del's",
  description:
    "Hours, reservations, and how to find the unmarked door at Del's speakeasy.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="flex flex-col items-center text-center">
        <p className="deco-label text-gold">Contact</p>
        <h1 className="mt-4 text-5xl font-light md:text-6xl">Find the Door</h1>
        <div className="deco-divider mt-8 w-40 text-gold">&#9670;</div>
        <p className="mt-6 max-w-md text-lg italic text-muted">
          We don&apos;t advertise, and we like a little mystery. But we&apos;re
          not impossible to reach.
        </p>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <section className="deco-frame p-8 text-center">
          <h2 className="deco-label text-gold">Hours</h2>
          <dl className="mt-6 space-y-2 text-lg font-light text-foreground/85">
            <div className="flex justify-between">
              <dt>Wednesday &ndash; Thursday</dt>
              <dd>6 PM &ndash; 12 AM</dd>
            </div>
            <div className="flex justify-between">
              <dt>Friday &ndash; Saturday</dt>
              <dd>6 PM &ndash; 2 AM</dd>
            </div>
            <div className="flex justify-between">
              <dt>Sunday &ndash; Tuesday</dt>
              <dd className="italic text-muted">Dark</dd>
            </div>
          </dl>
        </section>

        <section className="deco-frame p-8 text-center">
          <h2 className="deco-label text-gold">Reservations</h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-foreground/85">
            Most of the room is walk-in, first come first seated. For parties
            of five or more, write ahead:
          </p>
          <a
            href="mailto:password@dels.bar"
            className="mt-4 inline-block text-xl text-gold transition-colors hover:text-gold-bright"
          >
            password@dels.bar
          </a>
        </section>

        <section className="deco-frame p-8 text-center md:col-span-2">
          <h2 className="deco-label text-gold">Finding Us</h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-foreground/85">
            Look for the green door with no sign, between the tailor and the
            laundromat. If you&apos;ve reached the record shop, you&apos;ve
            gone one door too far. Knock twice and tell them Del sent you.
          </p>
          <p className="mt-4 text-lg italic text-muted">
            Lost? That&apos;s half the fun. But the email above works too.
          </p>
        </section>
      </div>
    </div>
  );
}
