import type { Metadata } from "next";
import Hatch from "../components/hatch";
import Glass from "../components/glass";

export const metadata: Metadata = {
  title: "About — Del's",
  description: "Jesse Toporek, creator of Del's.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
        {/* Photo slot — drop a b&w shot of Jesse into /public and wire it here */}
        <div
          className="flex aspect-3/4 items-center justify-center border border-line bg-surface"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(244,242,236,0.03) 10px, rgba(244,242,236,0.03) 11px)",
          }}
        >
          <span className="mono-label text-muted">Photo</span>
        </div>

        <div>
          <h1 className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="headline text-2xl md:text-3xl">
              Jesse Toporek
            </span>
            <span className="mono-label text-foreground/70">
              Creator of Del&apos;s
            </span>
          </h1>

          <Hatch strokes={10} className="mt-6 h-5 w-20 text-accent" />

          <p className="mt-10 max-w-xl leading-relaxed text-foreground/80">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate
          </p>

          <div className="mono-label mt-12 space-y-3 text-foreground/85">
            <p>Favorite cocktail: XYZ</p>
            <p>Favorite light bite: XYZ</p>
          </div>

          <div className="mt-10 flex gap-4 text-foreground/80">
            <Glass variant="rocks" className="h-14 w-11" />
            <Glass variant="coupe" className="h-14 w-11" />
          </div>
        </div>
      </div>
    </div>
  );
}
