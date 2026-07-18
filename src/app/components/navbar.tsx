import Link from "next/link";
import Hatch from "./hatch";

const links = [
  { href: "/about", label: "About" },
  { href: "/menus", label: "Menus" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-5 md:flex-row md:justify-between">
        <Link href="/" className="group flex flex-col items-center gap-1">
          <span className="marker text-3xl leading-none transition-colors group-hover:text-accent">
            DEL&apos;S
          </span>
          <Hatch strokes={12} className="h-3 w-20 text-accent" />
        </Link>
        <ul className="flex items-center gap-8 md:gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="mono-label text-foreground/80 transition-colors hover:text-accent"
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
