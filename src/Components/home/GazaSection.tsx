import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, radius, alpha } from "../../theme/tokens";
import { MediaRail, Reveal, type MediaItem } from "../ui";

const IMAGES: MediaItem[] = [
  74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
  94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
].map((n) => ({ type: "image" as const, src: `/${n}.png` }));

export function GazaSection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="gaza"
      sx={{
        position: "relative",
        backgroundColor: palette.surfaceMuted,
        py: { xs: 8, md: 13 },
        overflow: "hidden",
        borderTop: `1px solid ${palette.line}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(70% 55% at 88% 0%, ${alpha(palette.maroon[200], 0.55)}, transparent 62%),
                       radial-gradient(60% 50% at 0% 90%, ${alpha(palette.gold[200], 0.45)}, transparent 66%)`,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", mb: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.85fr) minmax(0, 1fr)" },
            gap: { xs: 3, md: 8 },
            alignItems: "center",
          }}
        >
          <Box>
            <Reveal variant="up">
              <Typography
                variant="h2"
                component="h2"
                sx={{ maxWidth: "14ch", lineHeight: 1.05, color: palette.text }}
              >
                {t("gazaOlympiad.title")}
              </Typography>
            </Reveal>
          </Box>

          <Reveal variant="up" delay={140}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 4 },
                borderRadius: `${radius.lg}px`,
                backgroundColor: palette.surface,
                border: `1px solid ${palette.line}`,
                boxShadow: "0 30px 60px -48px rgba(21,15,18,0.4)",
              }}
            >
              <Typography
                aria-hidden
                sx={{
                  position: "absolute",
                  top: -22,
                  insetInlineStart: 22,
                  fontFamily: fonts.display,
                  fontSize: "5rem",
                  lineHeight: 1,
                  fontWeight: 800,
                  color: palette.maroon[200],
                  userSelect: "none",
                }}
              >
                &ldquo;
              </Typography>

              <Typography
                sx={{
                  position: "relative",
                  color: palette.textSecondary,
                  fontSize: { xs: "1rem", md: "1.0625rem" },
                  fontWeight: 300,
                  lineHeight: 1.85,
                }}
              >
                {t("gazaOlympiad.description")}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: 3,
                  pt: 3,
                  borderTop: `1px solid ${palette.line}`,
                }}
              >
                <Box
                  sx={{
                    width: 3,
                    alignSelf: "stretch",
                    minHeight: 34,
                    borderRadius: 2,
                    background: `linear-gradient(${palette.maroon[600]}, ${palette.gold[400]})`,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: { xs: "1.0625rem", md: "1.25rem" },
                    fontWeight: 600,
                    letterSpacing: "-0.015em",
                    color: palette.maroon[700],
                  }}
                >
                  {t("gazaOlympiad.pullquote")}
                </Typography>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>

      <Box sx={{ position: "relative" }}>
        <MediaRail items={IMAGES} size="md" label={t("gazaOlympiad.railLabel")} />
      </Box>
    </Box>
  );
}

export default GazaSection;
