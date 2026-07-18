/* The Del's tally-mark motif: a row of hand-drawn vertical strokes.
   Tilt/length variance is deterministic so server and client render match. */
export default function Hatch({
  strokes = 18,
  className = "",
}: {
  strokes?: number;
  className?: string;
}) {
  const tilts = [-4, 2, -1, 4, -3, 1, 3, -2, 0, 4, -4, 2, -1, 3, -3, 1, -2, 4];
  const lengths = [22, 20, 23, 19, 22, 21, 20, 23, 21, 19, 22, 20, 23, 21, 20, 22, 19, 21];
  const step = 7;
  const width = strokes * step + 6;

  return (
    <svg
      viewBox={`0 0 ${width} 30`}
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
    >
      {Array.from({ length: strokes }, (_, i) => {
        const x = 5 + i * step;
        const len = lengths[i % lengths.length];
        const y1 = (30 - len) / 2;
        return (
          <line
            key={i}
            x1={x}
            y1={y1}
            x2={x}
            y2={y1 + len}
            transform={`rotate(${tilts[i % tilts.length]} ${x} 15)`}
          />
        );
      })}
    </svg>
  );
}
