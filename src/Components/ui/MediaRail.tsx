import { useCallback, useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { palette, motion, radius } from "../../theme/tokens";
import useDirection from "./useDirection";
import Lightbox, { type MediaItem } from "./Lightbox";

type RailSize = "sm" | "md" | "lg";

interface MediaRailProps {
  items: MediaItem[];
  size?: RailSize;
  tone?: "light" | "dark";
  /** Optional label rendered above the scroll progress bar. */
  label?: string;
}

const dims: Record<RailSize, { w: Record<string, number>; h: Record<string, number> }> = {
  sm: { w: { xs: 210, sm: 240, md: 280 }, h: { xs: 260, sm: 300, md: 340 } },
  md: { w: { xs: 260, sm: 320, md: 400 }, h: { xs: 320, sm: 400, md: 480 } },
  lg: { w: { xs: 280, sm: 400, md: 520 }, h: { xs: 360, sm: 480, md: 620 } },
};

/**
 * Horizontal media rail: snap scrolling, edge fades, keyboard-reachable
 * controls and a scroll-progress bar that doubles as a position indicator.
 *
 * Deliberately *not* a grid of cards — a rail keeps a gallery of 60+ photos
 * from swallowing the page, and reads as a designed strip rather than a dump.
 */
export function MediaRail({ items, size = "md", tone = "light", label }: MediaRailProps) {
  const { isRTL } = useDirection();
  const railRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dark = tone === "dark";

  const updateProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setProgress(1);
      return;
    }
    // scrollLeft is negative in RTL on modern engines; abs() normalises it.
    setProgress(Math.min(1, Math.abs(el.scrollLeft) / max));
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const frame = requestAnimationFrame(updateProgress);
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scroll = (dir: "prev" | "next") => {
    const el = railRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.82;
    const forward = dir === "next" ? 1 : -1;
    el.scrollBy({ left: forward * step * (isRTL ? -1 : 1), behavior: "smooth" });
  };

  const arrowSx = {
    width: 44,
    height: 44,
    color: dark ? "#fff" : palette.maroon[600],
    backgroundColor: dark ? "rgba(255,255,255,0.08)" : palette.surface,
    border: `1px solid ${dark ? palette.nightLine : palette.line}`,
    transition: `all ${motion.base} ${motion.ease}`,
    "&:hover": {
      backgroundColor: palette.maroon[600],
      color: "#fff",
      borderColor: "transparent",
      transform: "scale(1.06)",
    },
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        ref={railRef}
        role="list"
        sx={{
          display: "flex",
          gap: { xs: 1.5, md: 2 },
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollPaddingInline: { xs: 20, md: 48 },
          paddingInline: { xs: 2.5, sm: 4, lg: 6 },
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          // Fade the strip into the section edges instead of cutting it off.
          maskImage: {
            xs: "none",
            md: "linear-gradient(to right, transparent 0, #000 5%, #000 95%, transparent 100%)",
          },
        }}
      >
        {items.map((item, i) => (
          <Box
            key={item.src}
            role="listitem"
            component="button"
            onClick={() => setOpenIndex(i)}
            aria-label={item.caption ?? `Open media ${i + 1}`}
            sx={{
              position: "relative",
              flex: "0 0 auto",
              width: dims[size].w,
              height: dims[size].h,
              p: 0,
              border: "none",
              borderRadius: `${radius.md}px`,
              overflow: "hidden",
              cursor: "pointer",
              scrollSnapAlign: "center",
              backgroundColor: dark ? palette.nightRaised : palette.surfaceSunken,
              transition: `transform ${motion.slow} ${motion.ease}, box-shadow ${motion.slow} ${motion.ease}`,
              "& .rail-media": {
                transition: `transform ${motion.slower} ${motion.ease}, filter ${motion.slow} ${motion.ease}`,
              },
              "&:hover .rail-media, &:focus-visible .rail-media": {
                transform: "scale(1.06)",
              },
              "&:hover": { boxShadow: "0 30px 60px -30px rgba(0,0,0,0.55)" },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,6,8,0.42) 0%, rgba(10,6,8,0) 46%)",
                pointerEvents: "none",
              },
            }}
          >
            {item.type === "video" ? (
              <>
                <Box
                  className="rail-media"
                  component="video"
                  src={item.src}
                  muted
                  playsInline
                  preload="metadata"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                >
                  <Box
                    sx={{
                      width: 62,
                      height: 62,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      color: "#fff",
                      backgroundColor: "rgba(122,30,60,0.86)",
                      border: "1px solid rgba(255,255,255,0.28)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <PlayArrowRoundedIcon sx={{ fontSize: 34 }} />
                  </Box>
                </Box>
              </>
            ) : (
              <Box
                className="rail-media"
                component="img"
                src={item.src}
                alt={item.caption ?? ""}
                loading="lazy"
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            )}

            <Typography
              variant="mono"
              sx={{
                position: "absolute",
                insetInlineStart: 14,
                bottom: 12,
                color: "rgba(255,255,255,0.9)",
                zIndex: 1,
                fontSize: "0.68rem",
                letterSpacing: "0.16em",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Controls + progress */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2.5,
          mt: 3,
          paddingInline: { xs: 2.5, sm: 4, lg: 6 },
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton aria-label="Scroll back" onClick={() => scroll("prev")} sx={arrowSx}>
            <ArrowBackIosNewIcon
              sx={{ fontSize: 16, transform: isRTL ? "rotate(180deg)" : "none" }}
            />
          </IconButton>
          <IconButton aria-label="Scroll forward" onClick={() => scroll("next")} sx={arrowSx}>
            <ArrowForwardIosIcon
              sx={{ fontSize: 16, transform: isRTL ? "rotate(180deg)" : "none" }}
            />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          {label && (
            <Typography
              variant="eyebrow"
              sx={{
                display: "block",
                mb: 1,
                color: dark ? palette.textOnDarkMuted : palette.textMuted,
              }}
            >
              {label}
            </Typography>
          )}
          <Box
            sx={{
              position: "relative",
              height: 2,
              backgroundColor: dark ? palette.nightLine : palette.line,
              borderRadius: 999,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                insetInlineStart: 0,
                top: 0,
                bottom: 0,
                width: `${Math.max(6, progress * 100)}%`,
                backgroundColor: dark ? palette.gold[400] : palette.maroon[600],
                transition: "width 120ms linear",
              }}
            />
          </Box>
        </Box>

        <Typography
          variant="mono"
          sx={{ color: dark ? palette.textOnDarkMuted : palette.textMuted, flexShrink: 0 }}
        >
          {String(items.length).padStart(2, "0")}
        </Typography>
      </Box>

      <Lightbox
        items={items}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </Box>
  );
}

export default MediaRail;
