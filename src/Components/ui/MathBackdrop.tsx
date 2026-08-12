import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { palette, fonts, alpha } from "../../theme/tokens";

interface MathBackdropProps {
  tone?: "light" | "dark";
  /** `hero` adds the construction drawing and drifting glyphs. */
  variant?: "hero" | "quiet";
  /** Pointer parallax. Disabled automatically on coarse pointers. */
  parallax?: boolean;
  sx?: SxProps<Theme>;
}

/** Glyphs from the four Olympiad domains: algebra, geometry, number theory, combinatorics. */
const GLYPHS = [
  { char: "∑", top: "12%", left: "8%", size: 74, delay: 0, depth: 26 },
  { char: "π", top: "68%", left: "5%", size: 58, delay: 1.4, depth: 18 },
  { char: "√", top: "26%", left: "88%", size: 66, delay: 0.8, depth: 30 },
  { char: "∞", top: "78%", left: "82%", size: 62, delay: 2.1, depth: 22 },
  { char: "θ", top: "48%", left: "94%", size: 44, delay: 1.1, depth: 14 },
  { char: "∫", top: "84%", left: "38%", size: 52, delay: 2.6, depth: 20 },
  { char: "Δ", top: "8%", left: "62%", size: 46, delay: 1.8, depth: 16 },
  { char: "≡", top: "58%", left: "16%", size: 40, delay: 0.5, depth: 12 },
];

/**
 * The platform's visual signature: an abstract "working surface" — squared
 * paper, a straight-edge-and-compass construction mid-draw, and drifting
 * notation.
 *
 * It gives the product a mathematical identity that generic gradients and
 * stock photography can't, and it costs one inline SVG.
 */
export function MathBackdrop({
  tone = "light",
  variant = "hero",
  parallax = true,
  sx,
}: MathBackdropProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const dark = tone === "dark";

  useEffect(() => {
    if (!parallax) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia?.("(pointer: fine)").matches) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const w = window.innerWidth || 1;
        const h = window.innerHeight || 1;
        setPointer({ x: (e.clientX / w - 0.5) * 2, y: (e.clientY / h - 0.5) * 2 });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [parallax]);

  const gridStroke = dark ? "rgba(255,255,255,0.075)" : alpha(palette.maroon[600], 0.09);
  const inkStroke = dark ? alpha(palette.gold[300], 0.5) : alpha(palette.maroon[600], 0.34);
  const glyphColor = dark ? "rgba(255,255,255,0.09)" : alpha(palette.maroon[600], 0.1);

  return (
    <Box
      ref={ref}
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        ...sx,
      }}
    >
      {/* Ambient light */}
      <Box
        sx={{
          position: "absolute",
          inset: "-20%",
          background: dark
            ? `radial-gradient(60% 55% at 78% 18%, ${alpha(palette.maroon[500], 0.55)} 0%, transparent 62%),
               radial-gradient(48% 44% at 12% 88%, ${alpha(palette.gold[500], 0.22)} 0%, transparent 66%)`
            : `radial-gradient(58% 52% at 82% 12%, ${alpha(palette.maroon[200], 0.55)} 0%, transparent 64%),
               radial-gradient(46% 42% at 6% 82%, ${alpha(palette.gold[200], 0.42)} 0%, transparent 68%)`,
          transform: `translate3d(${pointer.x * -14}px, ${pointer.y * -14}px, 0)`,
          transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Squared paper */}
      <Box
        component="svg"
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          maskImage:
            "radial-gradient(120% 100% at 50% 0%, #000 20%, rgba(0,0,0,0.35) 62%, transparent 88%)",
          transform: `translate3d(${pointer.x * 8}px, ${pointer.y * 8}px, 0)`,
          transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <defs>
          <pattern id="pmo-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke={gridStroke} strokeWidth="1" />
          </pattern>
          <pattern id="pmo-grid-lg" width="220" height="220" patternUnits="userSpaceOnUse">
            <path d="M220 0H0V220" fill="none" stroke={gridStroke} strokeWidth="1.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pmo-grid)" />
        <rect width="100%" height="100%" fill="url(#pmo-grid-lg)" />
      </Box>

      {variant === "hero" && (
        <>
          {/* Straight-edge-and-compass construction, drawn on load */}
          <Box
            component="svg"
            viewBox="0 0 400 400"
            aria-hidden
            sx={{
              position: "absolute",
              insetInlineEnd: { xs: "-22%", md: "3%" },
              top: { xs: "auto", md: "8%" },
              bottom: { xs: "-8%", md: "auto" },
              width: { xs: 300, sm: 380, md: 460, lg: 520 },
              height: "auto",
              opacity: { xs: 0.45, md: 0.9 },
              transform: `translate3d(${pointer.x * 22}px, ${pointer.y * 22}px, 0)`,
              transition: "transform 900ms cubic-bezier(0.16,1,0.3,1)",
              "& [data-draw]": {
                strokeDasharray: 1400,
                strokeDashoffset: 1400,
                animation: "pmo-dash 2.6s cubic-bezier(0.16,1,0.3,1) forwards",
              },
              "& [data-draw='2']": { animationDelay: "0.45s" },
              "& [data-draw='3']": { animationDelay: "0.9s" },
            }}
          >
            <circle
              data-draw="1"
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke={inkStroke}
              strokeWidth="1.25"
            />
            <polygon
              data-draw="2"
              points="200,50 330,275 70,275"
              fill="none"
              stroke={inkStroke}
              strokeWidth="1.25"
            />
            <path
              data-draw="3"
              d="M200 50 L200 275 M70 275 L330 275 M200 200 L330 275 M200 200 L70 275"
              fill="none"
              stroke={inkStroke}
              strokeWidth="0.9"
              strokeDasharray="6 7"
            />
            <circle cx="200" cy="200" r="3.5" fill={inkStroke} />
            <circle cx="200" cy="50" r="3.5" fill={inkStroke} />
            <circle cx="330" cy="275" r="3.5" fill={inkStroke} />
            <circle cx="70" cy="275" r="3.5" fill={inkStroke} />
            <path
              d="M185 200 A15 15 0 0 1 200 185"
              fill="none"
              stroke={inkStroke}
              strokeWidth="1"
            />
          </Box>

          {/* Drifting notation */}
          {GLYPHS.map((g) => (
            <Box
              key={g.char + g.top}
              component="span"
              sx={{
                position: "absolute",
                top: g.top,
                left: g.left,
                fontFamily: fonts.display,
                fontWeight: 300,
                fontSize: { xs: g.size * 0.55, md: g.size },
                lineHeight: 1,
                color: glyphColor,
                userSelect: "none",
                animation: `pmo-drift ${9 + g.depth / 6}s ease-in-out ${g.delay}s infinite`,
                transform: `translate3d(${pointer.x * g.depth}px, ${pointer.y * g.depth}px, 0)`,
                transition: "transform 1100ms cubic-bezier(0.16,1,0.3,1)",
                display: { xs: g.size > 60 ? "block" : "none", md: "block" },
              }}
            >
              {g.char}
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}

export default MathBackdrop;
