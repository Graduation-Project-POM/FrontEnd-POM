import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { palette, motion } from "../../theme/tokens";
import { useDirection } from "../ui";

interface FilterRailProps {
  children: ReactNode;
  ariaLabel?: string;
}

export function FilterRail({ children, ariaLabel }: FilterRailProps) {
  const { isRTL } = useDirection();
  const ref = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft);
    setAtStart(pos <= 2);
    setAtEnd(max <= 2 || pos >= max - 2);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    observer?.observe(el);
    window.addEventListener("resize", update);

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 2) return;
      const pos = Math.abs(el.scrollLeft);
      const forward = e.deltaY > 0;
      if ((forward && pos >= max - 2) || (!forward && pos <= 2)) return;
      e.preventDefault();
      el.scrollLeft += isRTL ? -e.deltaY : e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      el.removeEventListener("wheel", onWheel);
      observer?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update, isRTL]);

  const step = (dir: "prev" | "next") => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: isRTL ? -amount : amount, behavior: "smooth" });
  };

  const arrowSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    width: 30,
    height: 30,
    backgroundColor: palette.surface,
    border: `1px solid ${palette.line}`,
    color: palette.maroon[600],
    boxShadow: "0 4px 12px -6px rgba(21,15,18,0.4)",
    transition: `opacity ${motion.snap} ${motion.easeSnap}, background-color ${motion.snap} ${motion.easeSnap}`,
    "&:hover": { backgroundColor: palette.maroon[50] },
  } as const;

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        aria-label="Scroll filters back"
        onClick={() => step("prev")}
        tabIndex={atStart ? -1 : 0}
        sx={{
          ...arrowSx,
          insetInlineStart: -6,
          opacity: atStart ? 0 : 1,
          pointerEvents: atStart ? "none" : "auto",
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <ChevronLeftRoundedIcon
          sx={{ fontSize: 20, transform: isRTL ? "rotate(180deg)" : "none" }}
        />
      </IconButton>

      <Box
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        sx={{
          display: "flex",
          gap: 1,
          overflowX: "auto",
          overscrollBehaviorX: "contain",
          scrollSnapType: "x proximity",
          WebkitOverflowScrolling: "touch",
          pb: 1,
          mx: { xs: -2.5, sm: 0 },
          px: { xs: 2.5, sm: 0 },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          "& > *": { scrollSnapAlign: "start" },
          maskImage: `linear-gradient(to right, ${
            atStart ? "#000 0" : "transparent 0, #000 32px"
          }, ${atEnd ? "#000 100%" : "#000 calc(100% - 32px), transparent 100%"})`,
        }}
      >
        {children}
      </Box>

      <IconButton
        aria-label="Scroll filters forward"
        onClick={() => step("next")}
        tabIndex={atEnd ? -1 : 0}
        sx={{
          ...arrowSx,
          insetInlineEnd: -6,
          opacity: atEnd ? 0 : 1,
          pointerEvents: atEnd ? "none" : "auto",
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <ChevronRightRoundedIcon
          sx={{ fontSize: 20, transform: isRTL ? "rotate(180deg)" : "none" }}
        />
      </IconButton>
    </Box>
  );
}

export default FilterRail;
