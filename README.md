# Del's — A Modern Speakeasy

The website for Del's, a hidden cocktail bar behind an unmarked door. Dark,
candlelit, art-deco styling with classic and original cocktail menus.

Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS v4](https://tailwindcss.com).

## Pages

- `/` — hero, house promises, and hours
- `/about` — the story and house rules
- `/menus` — cocktails, zero-proof drinks, and small plates
- `/contact` — hours, reservations, and how to find the door

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design Notes

- **Typography**: Great Vibes (script wordmark), Cinzel (engraved small-caps
  labels), Cormorant Garamond (body), loaded via `next/font`.
- **Palette**: near-black backgrounds with antique gold accents, defined as
  CSS variables in `src/app/globals.css`.
- **Art-deco details**: double-ruled frames (`.deco-frame`), diamond dividers
  (`.deco-divider`), and dotted menu leaders (`.menu-leader`) are reusable
  utility classes in `globals.css`.

## Deploy

Deploys anywhere Next.js runs — the easiest path is
[Vercel](https://vercel.com/new).
