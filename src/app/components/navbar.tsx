import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/menus", label: "Menus" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-5 md:flex-row md:justify-between md:gap-8">
        <Link
          href="/"
          className="script text-4xl text-gold transition-colors hover:text-gold-bright"
        >
          Del&apos;s
        </Link>
        <ul className="flex items-center gap-8 md:gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="deco-label text-foreground/80 transition-colors hover:text-gold-bright"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
