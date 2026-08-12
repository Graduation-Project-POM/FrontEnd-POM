import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { palette, fonts, motion } from "../../theme/tokens";

export interface Stat {
  value: number;
  /** Rendered right after the animated number (e.g. "+", "%"). */
  suffix?: string;
  label: string;
  hint?: string;
}

interface StatStripProps {
  stats: Stat[];
  tone?: "light" | "dark" | "brand";
  /** `rule` draws hairline separators; `plain` relies on space alone. */
  variant?: "rule" | "plain";
  size?: "md" | "lg";
  sx?: SxProps<Theme>;
}

/** Eases toward the target so the count-up settles instead of stopping dead. */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      const jump = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(jump);
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

/**
 * A band of live figures. The numbers are real project data (participants per
 * stage, directorates, camp days) — statistics are used as content, not
 * decoration.
 */
export function StatStrip({
  stats,
  tone = "light",
  variant = "rule",
  size = "md",
  sx,
}: StatStripProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const visibleNow = rect.top < window.innerHeight && rect.bottom > 0;

    if (typeof IntersectionObserver === "undefined" || visibleNow) {
      const frame = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const numberColor =
    tone === "light" ? palette.text : tone === "brand" ? "#fff" : palette.textOnDark;
  const labelColor =
    tone === "light"
      ? palette.textMuted
      : tone === "brand"
        ? "rgba(255,255,255,0.72)"
        : palette.textOnDarkMuted;
  const lineColor =
    tone === "light" ? palette.line : "rgba(255,255,255,0.16)";

  return (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          md: `repeat(${stats.length}, minmax(0, 1fr))`,
        },
        gap: 0,
        ...sx,
      }}
    >
      {stats.map((stat, i) => (
        <StatCell
          key={stat.label}
          stat={stat}
          active={active}
          delay={i * 90}
          numberColor={numberColor}
          labelColor={labelColor}
          lineColor={lineColor}
          ruled={variant === "rule"}
          size={size}
          index={i}
        />
      ))}
    </Box>
  );
}

function StatCell({
  stat,
  active,
  delay,
  numberColor,
  labelColor,
  lineColor,
  ruled,
  size,
  index,
}: {
  stat: Stat;
  active: boolean;
  delay: number;
  numberColor: string;
  labelColor: string;
  lineColor: string;
  ruled: boolean;
  size: "md" | "lg";
  index: number;
}) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!active) return;
    const id = setTimeout(() => setArmed(true), delay);
    return () => clearTimeout(id);
  }, [active, delay]);

  const value = useCountUp(stat.value, armed);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 3 },
        py: { xs: 2.5, md: 1 },
        borderInlineStart: ruled ? `1px solid ${lineColor}` : "none",
        "&:first-of-type": { borderInlineStart: "none", paddingInlineStart: 0 },
        [`@media (max-width: 899px)`]: {
          borderInlineStart: ruled && index % 2 === 1 ? `1px solid ${lineColor}` : "none",
          paddingInlineStart: index % 2 === 0 ? 0 : undefined,
        },
        opacity: armed ? 1 : 0,
        transform: armed ? "none" : "translateY(12px)",
        transition: `opacity ${motion.slow} ${motion.ease}, transform ${motion.slow} ${motion.ease}`,
      }}
    >
      <Typography
        component="div"
        sx={{
          fontFamily: fonts.display,
          fontWeight: 700,
          color: numberColor,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums",
          fontSize:
            size === "lg"
              ? { xs: "2.5rem", md: "3.75rem" }
              : { xs: "1.875rem", md: "2.5rem" },
        }}
      >
        {value.toLocaleString("en-US")}
        {stat.suffix && (
          <Box component="span" sx={{ color: palette.maroon[400], ml: 0.25 }}>
            {stat.suffix}
          </Box>
        )}
      </Typography>

      <Typography
        variant="eyebrow"
        component="div"
        sx={{ mt: 1.25, color: labelColor, lineHeight: 1.5 }}
      >
        {stat.label}
      </Typography>

      {stat.hint && (
        <Typography sx={{ mt: 0.75, fontSize: "0.8125rem", color: labelColor, opacity: 0.8 }}>
          {stat.hint}
        </Typography>
      )}
    </Box>
  );
}

export default StatStrip;
