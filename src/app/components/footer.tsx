import Link from "next/link";
import Hatch from "./hatch";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="marker text-2xl">DEL&apos;S</span>
        <Hatch strokes={14} className="h-4 w-24 text-foreground/60" />
        <nav className="flex gap-6">
          <Link
            href="/about"
            className="mono-label text-foreground/60 transition-colors hover:text-accent"
          >
            About
          </Link>
          <Link
            href="/menus"
            className="mono-label text-foreground/60 transition-colors hover:text-accent"
          >
            Menus
          </Link>
          <Link
            href="/contact"
            className="mono-label text-foreground/60 transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>
        <p className="mono-label text-muted">
          &copy; {new Date().getFullYear()} &middot; Del&apos;s
        </p>
      </div>
    </footer>
  );
}
