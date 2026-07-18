# Del's

The website for Del's — cocktails and light bites. Dark navy, hand-drawn
tally-mark branding, and ink-sketch paper menus.

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

- **Typography**: Permanent Marker (wordmark), Architects Daughter (menu
  handwriting), Space Mono (letterspaced labels), loaded via `next/font`;
  Helvetica stack for body text.
- **Palette**: dark navy background with off-white text and a rust-red
  accent; paper-white menu sheets with black ink. Defined as CSS variables
  in `src/app/globals.css`.
- **Brand details**: the tally-mark motif is `src/app/components/hatch.tsx`;
  hand-sketched glassware is `src/app/components/glass.tsx`; handwritten
  underlines use the `.hand-rule` class in `globals.css`.

## Deploy

Deploys anywhere Next.js runs — the easiest path is
[Vercel](https://vercel.com/new).
