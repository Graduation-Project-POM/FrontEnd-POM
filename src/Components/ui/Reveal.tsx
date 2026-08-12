import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { motion } from "../../theme/tokens";

type Variant = "up" | "fade" | "left" | "right" | "scale" | "clip";

interface RevealProps {
  children: ReactNode;
  /** Entrance direction. */
  variant?: Variant;
  /** Stagger, in ms. */
  delay?: number;
  /** Fraction of the element that must be visible before it fires. */
  threshold?: number;
  duration?: number;
  sx?: SxProps<Theme>;
  component?: React.ElementType;
}

const from: Record<Variant, string> = {
  up: "translate3d(0, 26px, 0)",
  fade: "none",
  left: "translate3d(-28px, 0, 0)",
  right: "translate3d(28px, 0, 0)",
  scale: "scale(0.965)",
  clip: "translate3d(0, 14px, 0)",
};

/**
 * Scroll-triggered entrance. Replaces the AOS dependency that was initialised
 * separately in four different components: one observer, no global config, and
 * it respects `prefers-reduced-motion` through the global stylesheet.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  duration = 700,
  sx,
  component = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Anything already on screen at mount reveals straight away — the entrance
    // is a flourish for content scrolled *into* view, never a gate on reading.
    // Deferring a frame lets the "before" styles paint so the transition runs.
    const rect = node.getBoundingClientRect();
    const visibleNow = rect.top < window.innerHeight && rect.bottom > 0;

    if (typeof IntersectionObserver === "undefined" || visibleNow) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);

    // Safety net: if the observer never delivers (throttled background tab,
    // zero-height parent, exotic engine), show the content anyway.
    const failsafe = window.setTimeout(() => setShown(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold]);

  return (
    <Box
      ref={ref}
      component={component}
      sx={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : from[variant],
        clipPath:
          variant === "clip"
            ? shown
              ? "inset(0 0 0 0)"
              : "inset(0 0 100% 0)"
            : undefined,
        transition: `opacity ${duration}ms ${motion.ease} ${delay}ms, transform ${duration}ms ${motion.ease} ${delay}ms, clip-path ${duration}ms ${motion.ease} ${delay}ms`,
        willChange: "opacity, transform",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default Reveal;
