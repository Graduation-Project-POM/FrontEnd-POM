import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { palette, fonts } from "../../theme/tokens";
import Reveal from "./Reveal";
import useDirection from "./useDirection";

interface ProseProps {
  /** Raw copy. Blank lines *or* single newlines become paragraphs. */
  text: string;
  /** Oversized first letter on the opening paragraph. */
  dropCap?: boolean;
  /** Lead the first paragraph at a larger size. */
  leadFirst?: boolean;
  tone?: "light" | "dark";
  size?: "md" | "lg";
  columns?: 1 | 2;
  sx?: SxProps<Theme>;
}

/**
 * Long-form copy set as an article, not stuffed inside a shadowed box.
 *
 * A measured column (~66ch), a real paragraph rhythm and an optional drop cap
 * do more for readability than the rounded panel + border-inline accent the
 * old news/camp pages used.
 */
export function Prose({
  text,
  dropCap = false,
  leadFirst = true,
  tone = "light",
  size = "md",
  columns = 1,
  sx,
}: ProseProps) {
  const { isRTL } = useDirection();

  const paragraphs = text
    .split(/\n{1,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const dark = tone === "dark";
  // Arabic is cursive: a drop cap would tear the first letter out of its word.
  const showDropCap = dropCap && !isRTL;
  const color = dark ? palette.textOnDarkMuted : palette.textSecondary;

  return (
    <Box
      sx={{
        columnCount: { xs: 1, md: columns },
        columnGap: 6,
        maxWidth: columns === 2 ? "none" : "68ch",
        ...sx,
      }}
    >
      {paragraphs.map((p, i) => (
        <Reveal key={i} variant="up" delay={Math.min(i * 60, 240)}>
          <Typography
            component="p"
            sx={{
              color: i === 0 && leadFirst ? (dark ? palette.textOnDark : palette.text) : color,
              fontSize:
                i === 0 && leadFirst
                  ? { xs: "1.0625rem", md: size === "lg" ? "1.375rem" : "1.1875rem" }
                  : { xs: "0.9375rem", md: size === "lg" ? "1.0625rem" : "1rem" },
              fontWeight: 300,
              lineHeight: i === 0 && leadFirst ? 1.55 : 1.85,
              mb: { xs: 2.5, md: 3 },
              breakInside: "avoid-column",
              "&:last-of-type": { mb: 0 },
              ...(showDropCap && i === 0
                ? {
                    "&::first-letter": {
                      float: "inline-start",
                      fontFamily: fonts.display,
                      fontWeight: 800,
                      fontSize: "3.6em",
                      lineHeight: 0.82,
                      marginInlineEnd: "0.09em",
                      marginBlockStart: "0.06em",
                      color: palette.maroon[600],
                    },
                  }
                : {}),
            }}
          >
            {p}
          </Typography>
        </Reveal>
      ))}
    </Box>
  );
}

export default Prose;
