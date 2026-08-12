import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { palette, motion } from "../../theme/tokens";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** Small mono label above the title — the section's "index entry". */
  eyebrow?: string;
  title: ReactNode;
  /** Supporting sentence. Intentionally short. */
  lede?: ReactNode;
  /** Right-hand slot: a link, a filter, a counter. */
  action?: ReactNode;
  align?: "start" | "center";
  tone?: "light" | "dark";
  /** Sequence number rendered as a large ghost numeral. */
  index?: string;
  sx?: SxProps<Theme>;
  titleId?: string;
}

/**
 * The one heading pattern used across the whole product.
 *
 * It replaces the "centered title + 200×4px maroon bar" block that was
 * copy-pasted into eight different components with slightly different values.
 * Hierarchy now comes from type scale and a mono eyebrow, not from a divider.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  action,
  align = "start",
  tone = "light",
  index,
  sx,
  titleId,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "stretch", md: centered ? "center" : "flex-end" },
        flexDirection: { xs: "column", md: centered ? "column" : "row" },
        justifyContent: "space-between",
        gap: { xs: 2.5, md: 4 },
        textAlign: centered ? "center" : "start",
        mb: { xs: 4, md: 6 },
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth: centered ? 760 : 800,
          mx: centered ? "auto" : 0,
          position: "relative",
        }}
      >
        {(eyebrow || index) && (
          <Reveal variant="fade">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                justifyContent: centered ? "center" : "flex-start",
              }}
            >
              {index && (
                <Typography
                  variant="mono"
                  sx={{
                    color: dark ? palette.gold[300] : palette.maroon[400],
                    fontSize: "0.72rem",
                  }}
                >
                  {index}
                </Typography>
              )}
              {index && eyebrow && (
                <Box
                  sx={{
                    width: 26,
                    // "1px", not 1 — MUI's sizing system reads a bare 1 as 100%.
                    height: "1px",
                    backgroundColor: dark
                      ? palette.nightLine
                      : palette.lineStrong,
                  }}
                />
              )}
              {eyebrow && (
                <Typography
                  variant="eyebrow"
                  sx={{
                    color: dark ? palette.textOnDarkMuted : palette.textMuted,
                  }}
                >
                  {eyebrow}
                </Typography>
              )}
            </Box>
          </Reveal>
        )}

        <Reveal variant="up" delay={60}>
          <Typography
            id={titleId}
            variant="h2"
            component="h2"
            sx={{
              color: dark ? palette.textOnDark : palette.text,
              "& em": {
                fontStyle: "normal",
                color: dark ? palette.gold[300] : palette.maroon[600],
              },
            }}
          >
            {title}
          </Typography>
        </Reveal>

        {lede && (
          <Reveal variant="up" delay={140}>
            <Typography
              variant="lede"
              component="p"
              sx={{
                mt: 2,
                color: dark ? palette.textOnDarkMuted : palette.textSecondary,
                maxWidth: "62ch",
                mx: centered ? "auto" : 0,
              }}
            >
              {lede}
            </Typography>
          </Reveal>
        )}
      </Box>

      {action && (
        <Reveal
          variant="fade"
          delay={200}
          sx={{
            flexShrink: 0,
            alignSelf: centered ? "center" : "flex-end",
            transition: `opacity ${motion.base} ${motion.ease}`,
          }}
        >
          {action}
        </Reveal>
      )}
    </Box>
  );
}

export default SectionHeading;
