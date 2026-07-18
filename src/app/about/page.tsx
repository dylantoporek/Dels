import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Del's",
  description: "The story of Del's, a modern speakeasy hidden in plain sight.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="flex flex-col items-center text-center">
        <p className="deco-label text-gold">Our Story</p>
        <h1 className="mt-4 text-5xl font-light md:text-6xl">
          Hidden in Plain Sight
        </h1>
        <div className="deco-divider mt-8 w-40 text-gold">&#9670;</div>
      </header>

      <div className="mt-14 space-y-8 text-xl font-light leading-relaxed text-foreground/85">
        <p>
          Del&apos;s began the way most good ideas do: late at night, over a
          drink that deserved better company. We wanted a room where the phones
          stay in pockets, the ice is clear, and the bartender remembers what
          you had last time &mdash; the kind of bar the 1920s had to invent
          because the law left them no choice, and the kind we choose to keep
          alive because nothing has replaced it.
        </p>
        <p>
          There is no sign out front. The door is unmarked, the windows say
          something else entirely, and we like it that way. Inside you&apos;ll
          find forty seats, a back bar of spirits collected one bottle at a
          time, and a menu that treats the classics with respect and everything
          else with curiosity.
        </p>
        <p>
          We take our drinks seriously and very little else. Come as you are,
          stay as long as you like, and if anyone asks where you were tonight
          &mdash; you were at the pictures.
        </p>
      </div>

      <section className="deco-frame mt-16 p-10 text-center">
        <h2 className="deco-label text-gold">House Rules</h2>
        <ul className="mt-6 space-y-3 text-lg font-light text-foreground/80">
          <li>Speak easy &mdash; the room is small and the walls are thin.</li>
          <li>No photography past the door. Memories only.</li>
          <li>Don&apos;t bring anyone you wouldn&apos;t trust with a secret.</li>
          <li>The bartender&apos;s choice is always a safe bet.</li>
        </ul>
      </section>
    </div>
  );
}
