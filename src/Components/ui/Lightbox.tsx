import { useCallback, useEffect } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { palette, motion, radius } from "../../theme/tokens";
import useDirection from "./useDirection";

export interface MediaItem {
  type: "image" | "video";
  src: string;
  caption?: string;
}

interface LightboxProps {
  items: MediaItem[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const control = {
  color: "#fff",
  backgroundColor: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.16)",
  transition: `all ${motion.base} ${motion.ease}`,
  "&:hover": { backgroundColor: palette.maroon[600], borderColor: "transparent" },
};

export function Lightbox({ items, index, onIndexChange, onClose }: LightboxProps) {
  const { isRTL } = useDirection();
  const open = index !== null;
  const active = open ? items[index as number] : undefined;

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange(index === 0 ? items.length - 1 : index - 1);
  }, [index, items.length, onIndexChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange(index === items.length - 1 ? 0 : index + 1);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") (isRTL ? next : prev)();
      else if (e.key === "ArrowRight") (isRTL ? prev : next)();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, isRTL, prev, next, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      slotProps={{ backdrop: { sx: { backgroundColor: "rgba(10,6,8,0.94)" } } }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          m: 0,
          overflow: "visible",
          maxWidth: "96vw",
          maxHeight: "96vh",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 5, md: 9 },
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="Close"
          sx={{
            ...control,
            position: "fixed",
            top: { xs: 16, md: 28 },
            insetInlineEnd: { xs: 16, md: 28 },
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          onClick={prev}
          aria-label="Previous"
          sx={{
            ...control,
            position: "absolute",
            insetInlineStart: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          {isRTL ? <ArrowForwardIosIcon fontSize="small" /> : <ArrowBackIosNewIcon fontSize="small" />}
        </IconButton>

        {active?.type === "video" ? (
          <Box
            key={active.src}
            component="video"
            src={active.src}
            controls
            autoPlay
            playsInline
            sx={{
              maxWidth: "82vw",
              maxHeight: "84vh",
              borderRadius: `${radius.md}px`,
              backgroundColor: "#000",
            }}
          />
        ) : (
          <Box
            component="img"
            src={active?.src}
            alt={active?.caption ?? ""}
            sx={{
              maxWidth: "82vw",
              maxHeight: "84vh",
              objectFit: "contain",
              borderRadius: `${radius.md}px`,
              userSelect: "none",
            }}
          />
        )}

        <IconButton
          onClick={next}
          aria-label="Next"
          sx={{
            ...control,
            position: "absolute",
            insetInlineEnd: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          {isRTL ? <ArrowBackIosNewIcon fontSize="small" /> : <ArrowForwardIosIcon fontSize="small" />}
        </IconButton>

        <Box
          sx={{
            position: "fixed",
            bottom: { xs: 18, md: 28 },
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.75,
            pointerEvents: "none",
          }}
        >
          {active?.caption && (
            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.875rem",
                maxWidth: "60ch",
                textAlign: "center",
                px: 2,
              }}
            >
              {active.caption}
            </Typography>
          )}
          <Typography
            variant="mono"
            sx={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}
          >
            {String((index ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Lightbox;
