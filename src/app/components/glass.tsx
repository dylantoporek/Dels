/* Loose pen-sketch glassware in the style of the printed menus.
   Each variant is a set of open strokes drawn twice — the second pass is
   nudged and faded to fake a hand-drawn double line. */

const variants = {
  collins: [
    "M17 10 C26 14 36 14 45 10",
    "M17 10 L19 70",
    "M45 10 L43 70",
    "M19 70 C27 74 35 74 43 70",
    "M24 30 L25 64",
  ],
  rocks: [
    "M14 24 C26 28 36 28 48 24",
    "M14 24 L19 68",
    "M48 24 L43 68",
    "M19 68 C28 72 34 72 43 68",
    "M25 50 L26 65",
    "M31 52 L31 66",
    "M37 50 L36 65",
  ],
  coupe: [
    "M14 12 C25 16 37 16 48 12",
    "M14 12 C14 28 22 36 31 36",
    "M48 12 C48 28 40 36 31 36",
    "M31 36 L31 62",
    "M19 67 C27 63 35 63 43 67",
    "M17 68 C27 72 35 72 45 68",
  ],
  wine: [
    "M20 8 C27 11 35 11 42 8",
    "M20 8 C20 26 25 33 31 33",
    "M42 8 C42 26 37 33 31 33",
    "M31 33 L31 60",
    "M21 65 C28 61 34 61 41 65",
    "M19 66 C28 70 34 70 43 66",
  ],
  soda: [
    "M16 8 C26 12 36 12 46 8",
    "M16 8 L21 70",
    "M46 8 L41 70",
    "M21 70 C28 74 34 74 41 70",
    "M27 28 L29 64",
  ],
} as const;

export type GlassVariant = keyof typeof variants;

export default function Glass({
  variant,
  className = "",
}: {
  variant: GlassVariant;
  className?: string;
}) {
  const paths = variants[variant];
  return (
    <svg
      viewBox="0 0 62 80"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
      <g opacity={0.45} transform="translate(0.9 0.7) rotate(0.8 31 40)">
        {paths.map((d) => (
          <path key={d} d={d} strokeWidth={1.4} />
        ))}
      </g>
    </svg>
  );
}
