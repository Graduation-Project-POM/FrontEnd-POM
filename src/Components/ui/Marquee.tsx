import { Children, type ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  sx?: SxProps<Theme>;
}

export function Marquee({
  children,
  speed = 34,
  gap = 6,
  pauseOnHover = true,
  sx,
}: MarqueeProps) {
  const items = Children.toArray(children);

  const track = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap,
        flexShrink: 0,
        paddingInlineEnd: gap,
      }}
    >
      {items.map((child, i) => (
        <Box key={i} sx={{ flexShrink: 0 }}>
          {child}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        "&:hover .marquee-track": {
          animationPlayState: pauseOnHover ? "paused" : "running",
        },
        ...sx,
      }}
    >
      <Box
        className="marquee-track"
        sx={{
          display: "flex",
          width: "max-content",
          animation: `pmo-marquee ${speed}s linear infinite`,
        }}
      >
        {track}
        {track}
      </Box>
    </Box>
  );
}

export default Marquee;
