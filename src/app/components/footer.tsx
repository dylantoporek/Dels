import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="script text-3xl text-gold">Del&apos;s</span>
        <p className="deco-label text-muted">
          Speak easy &middot; Drink well &middot; Tell no one
        </p>
        <nav className="flex gap-6">
          <Link
            href="/about"
            className="deco-label text-foreground/60 transition-colors hover:text-gold-bright"
          >
            About
          </Link>
          <Link
            href="/menus"
            className="deco-label text-foreground/60 transition-colors hover:text-gold-bright"
          >
            Menus
          </Link>
          <Link
            href="/contact"
            className="deco-label text-foreground/60 transition-colors hover:text-gold-bright"
          >
            Contact
          </Link>
        </nav>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Del&apos;s. If you found us, keep it
          quiet.
        </p>
      </div>
    </footer>
  );
}
