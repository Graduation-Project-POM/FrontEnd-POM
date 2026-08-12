import type { ReactNode } from "react";
import { Box, Container } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { palette, rhythm } from "../../theme/tokens";

export type SectionTone = "paper" | "muted" | "night" | "brand" | "transparent";

interface SectionProps {
  children: ReactNode;
  /** Background treatment. Alternating tones give the page its rhythm. */
  tone?: SectionTone;
  /** Vertical padding preset. */
  spacing?: "default" | "tight" | "flush";
  /** Skip the inner container (for edge-to-edge rails and galleries). */
  bleed?: boolean;
  id?: string;
  sx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
  /** Hairline rule on the top edge — used to separate two same-tone sections. */
  divider?: boolean;
}

const tones = {
  paper: { backgroundColor: palette.surface, color: palette.text },
  muted: { backgroundColor: palette.surfaceMuted, color: palette.text },
  night: { backgroundColor: palette.night, color: palette.textOnDark },
  brand: { backgroundColor: palette.maroon[600], color: "#fff" },
  transparent: { backgroundColor: "transparent" },
} as const;

/**
 * A full-bleed page section with a constrained content column.
 *
 * Sections — not cards — are the primary structural unit of the redesign.
 * Tone alternation + generous, consistent vertical rhythm is what creates the
 * sense of a designed page rather than a stack of boxes.
 */
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
