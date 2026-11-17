import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { BookMotif } from "../../data/resources";

interface BookCoverArtProps {
  motif: BookMotif;
  sx?: SxProps<Theme>;
  className?: string;
}

const W = 1.7; // primary stroke
const H = 1.2; // secondary stroke

export function BookCoverArt({ motif, sx, className }: BookCoverArtProps) {
  return (
    <Box
      component="svg"
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      sx={{ display: "block", overflow: "visible", ...sx }}
    >
      <g stroke="currentColor" strokeWidth={W} strokeLinecap="round" strokeLinejoin="round">
        {MOTIFS[motif]}
      </g>
    </Box>
  );
}

const Geometry = (
  <>
    <circle cx="50" cy="50" r="34" opacity="0.5" />
    <path d="M50 16 L79 67 L21 67 Z" />
    <path d="M50 16 L50 67" opacity="0.5" strokeDasharray="4 5" />
    <path d="M44 61 L44 67 L50 67" opacity="0.7" strokeWidth={H} />
    <circle cx="50" cy="16" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="79" cy="67" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="21" cy="67" r="2.6" fill="currentColor" stroke="none" />
  </>
);

const Algebra = (
  <>
    <path d="M14 78 H86" opacity="0.45" />
    <path d="M22 88 V18" opacity="0.45" />
    <path d="M24 24 Q50 104 78 24" />
    <path d="M14 51 H86" opacity="0.22" strokeDasharray="3 6" />
    <circle cx="50" cy="70" r="2.8" fill="currentColor" stroke="none" />
    <path d="M70 78 v5 M40 78 v5 M22 40 h5 M22 60 h5" opacity="0.4" strokeWidth={H} />
  </>
);

const NumberTheory = (() => {
  const coords = [24, 37, 50, 63, 76];
  const marked = new Set(["37-24", "50-37", "24-50", "63-63", "76-37", "37-76"]);
  return (
    <>
      <circle cx="50" cy="50" r="35" opacity="0.25" strokeDasharray="3 6" />
      {coords.flatMap((x) =>
        coords.map((y) => {
          const key = `${x}-${y}`;
          const on = marked.has(key);
          return (
            <circle
              key={key}
              cx={x}
              cy={y}
              r={on ? 3.4 : 1.8}
              fill="currentColor"
              stroke="none"
              opacity={on ? 1 : 0.32}
            />
          );
        })
      )}
      <path d="M24 76 L76 24" opacity="0.45" />
    </>
  );
})();

const Combinatorics = (() => {
  const pts = [
    [50, 16],
    [82, 39],
    [70, 78],
    [30, 78],
    [18, 39],
  ];
  const edges: string[] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      edges.push(`M${pts[i][0]} ${pts[i][1]} L${pts[j][0]} ${pts[j][1]}`);
    }
  }
  return (
    <>
      {edges.map((d, i) => (
        <path key={d} d={d} opacity={i % 2 ? 0.32 : 0.6} />
      ))}
      {pts.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.6" fill="currentColor" stroke="none" />
      ))}
    </>
  );
})();

const General = (
  <>
    <circle cx="50" cy="50" r="35" opacity="0.45" />
    <rect x="25" y="25" width="50" height="50" opacity="0.75" />
    <rect x="25" y="25" width="50" height="50" opacity="0.4" transform="rotate(45 50 50)" />
    <rect x="37" y="37" width="26" height="26" opacity="0.28" />
    <circle cx="50" cy="50" r="2.6" fill="currentColor" stroke="none" />
  </>
);

const Notes = (
  <>
    <path d="M26 20 H74 V80 H26 Z" opacity="0.7" />
    <path d="M34 20 V80" opacity="0.35" />
    <path d="M40 34 H66 M40 44 H66 M40 54 H58" opacity="0.45" strokeWidth={H} />
    <circle cx="52" cy="66" r="8" opacity="0.75" />
    <path d="M52 58 L60 70 L44 70 Z" opacity="0.55" strokeWidth={H} />
  </>
);

const Problems = (
  <>
    <path d="M22 28 h8 M22 46 h8 M22 64 h8" opacity="0.8" />
    <path d="M40 28 H80 M40 46 H72 M40 64 H60" opacity="0.5" strokeWidth={H} />
    <path d="M22 80 h8 M40 80 H52" opacity="0.28" strokeWidth={H} strokeDasharray="3 5" />
    <circle cx="68" cy="80" r="2" fill="currentColor" stroke="none" opacity="0.4" />
    <circle cx="76" cy="80" r="2" fill="currentColor" stroke="none" opacity="0.4" />
    <circle cx="84" cy="80" r="2" fill="currentColor" stroke="none" opacity="0.4" />
  </>
);

const World = (
  <>
    <circle cx="50" cy="50" r="34" />
    <ellipse cx="50" cy="50" rx="14" ry="34" opacity="0.5" />
    <ellipse cx="50" cy="50" rx="27" ry="34" opacity="0.3" />
    <path d="M18 38 H82 M16 50 H84 M18 62 H82" opacity="0.4" strokeWidth={H} />
  </>
);

const MOTIFS: Record<BookMotif, React.ReactNode> = {
  geometry: Geometry,
  algebra: Algebra,
  numberTheory: NumberTheory,
  combinatorics: Combinatorics,
  general: General,
  notes: Notes,
  problems: Problems,
  world: World,
};

export default BookCoverArt;
