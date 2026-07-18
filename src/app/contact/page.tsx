import type { Metadata } from "next";
import Hatch from "../components/hatch";

export const metadata: Metadata = {
  title: "Contact — Del's",
  description: "Hours, reservations, and how to find Del's.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="flex flex-col items-center text-center">
        <h1 className="headline text-2xl md:text-3xl">Contact</h1>
        <Hatch strokes={10} className="mt-5 h-4 w-16 text-accent" />
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="headline text-sm">Hours</h2>
          <Hatch strokes={8} className="mt-3 h-3 w-14 text-accent" />
          <dl className="mono-label mt-6 space-y-3 text-foreground/80">
            <div className="flex justify-between gap-4">
              <dt>Wed &ndash; Thu</dt>
              <dd>6 PM &ndash; 12 AM</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Fri &ndash; Sat</dt>
              <dd>6 PM &ndash; 2 AM</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Sun &ndash; Tue</dt>
              <dd className="text-muted">Closed</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="headline text-sm">Reservations</h2>
          <Hatch strokes={8} className="mt-3 h-3 w-14 text-accent" />
          <p className="mt-6 leading-relaxed text-foreground/75">
            Mostly walk-in, first come first seated. For larger parties, write
            ahead:
          </p>
          <a
            href="mailto:hello@dels.bar"
            className="mono-label mt-4 inline-block text-accent transition-colors hover:text-foreground"
          >
            hello@dels.bar
          </a>
        </section>

        <section className="md:col-span-2">
          <h2 className="headline text-sm">Finding Us</h2>
          <Hatch strokes={8} className="mt-3 h-3 w-14 text-accent" />
          <p className="mt-6 max-w-xl leading-relaxed text-foreground/75">
            No sign out front &mdash; look for the tally marks on the door.
            If you&apos;re lost, the email above works.
          </p>
        </section>
      </div>
    </div>
  );
}
