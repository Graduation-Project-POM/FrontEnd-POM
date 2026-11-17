import type { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { palette, rhythm } from "../../theme/tokens";

export type SectionTone = "paper" | "muted" | "night" | "brand" | "transparent";

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  spacing?: "default" | "tight" | "flush";
  bleed?: boolean;
  id?: string;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
  divider?: boolean;
}

const tones = {
  paper: { backgroundColor: palette.surface, color: palette.text },
  muted: { backgroundColor: palette.surfaceMuted, color: palette.text },
  night: { backgroundColor: palette.night, color: palette.textOnDark },
  brand: { backgroundColor: palette.maroon[600], color: "#fff" },
  transparent: { backgroundColor: "transparent" },
} as const;

export function Section({
  children,
  tone = "paper",
  spacing = "default",
  bleed = false,
  id,
  sx,
  containerSx,
  divider = false,
}: SectionProps) {
  const py =
    spacing === "flush"
      ? 0
      : spacing === "tight"
        ? rhythm.sectionYTight
        : rhythm.sectionY;

  return (
    <Box
      component="section"
      id={id}
      sx={[
        { position: "relative", width: "100%", py },
        tones[tone],
        divider && {
          borderTop: `1px solid ${tone === "night" ? palette.nightLine : palette.line}`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {bleed ? children : <Container sx={containerSx}>{children}</Container>}
    </Box>
  );
}

export default Section;
