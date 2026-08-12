import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts } from "../../theme/tokens";
import { MathBackdrop, Reveal, SearchField } from "../ui";
import { ALL_RESOURCES, COLLECTIONS, COUNTS } from "../../data/resources";

interface LibraryHeroProps {
  query: string;
  onQuery: (value: string) => void;
  resultCount: number;
}

/**
 * The library's front desk: what's here, how much of it, and one search field
 * that reaches every collection at once.
 */
export function LibraryHero({ query, onQuery, resultCount }: LibraryHeroProps) {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: palette.canvas,
        borderBottom: `1px solid ${palette.line}`,
        pt: { xs: 6, md: 9 },
        pb: { xs: 5, md: 7 },
      }}
    >
      <MathBackdrop tone="light" variant="quiet" />

      <Container sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.1fr) minmax(0, 0.9fr)" },
            gap: { xs: 4, md: 8 },
            alignItems: "end",
          }}
        >
          <Box>
            <Reveal variant="fade">
              <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 2 }}>
                {t("resources.eyebrow")}
              </Typography>
            </Reveal>

            <Reveal variant="up" delay={60}>
              <Typography variant="h1" component="h1" sx={{ mb: 2.5 }}>
                {t("resources.headline1")}
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: palette.maroon[600],
                    fontStyle: "italic",
                    fontWeight: 300,
                  }}
                >
                  {t("resources.headline2")}
                </Box>
              </Typography>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <Typography variant="lede" component="p" sx={{ maxWidth: "50ch" }}>
                {t("resources.lede")}
              </Typography>
            </Reveal>
          </Box>

          <Reveal variant="up" delay={180}>
            <Box>
              <SearchField
                value={query}
                onChange={onQuery}
                placeholder={t("resources.searchPlaceholder")}
              />

              <Box
                sx={{
                  mt: 2.5,
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    color: palette.maroon[600],
                  }}
                >
                  {query ? resultCount : ALL_RESOURCES.length}
                </Typography>
                <Typography variant="eyebrow" sx={{ color: palette.textMuted }}>
                  {query ? t("resources.matches") : t("resources.itemsTotal")}
                </Typography>
              </Box>

              {!query && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1.5 }}>
                  {COLLECTIONS.map((c, i) => (
                    <Typography
                      key={c}
                      variant="mono"
                      sx={{ color: palette.textMuted, fontSize: "0.6875rem" }}
                    >
                      {t(`resources.nav.${c}`)} {COUNTS[c]}
                      {i < COLLECTIONS.length - 1 && (
                        <Box component="span" sx={{ mx: 0.75, opacity: 0.5 }}>
                          ·
                        </Box>
                      )}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default LibraryHero;
