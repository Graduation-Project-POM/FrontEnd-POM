import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts } from "../../theme/tokens";
import { Section, Reveal, Prose, StatStrip } from "../ui";

export function CampAbout() {
  const { t } = useTranslation();

  return (
    <Section tone="paper" id="about">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.8fr) minmax(0, 1.2fr)" },
          gap: { xs: 5, md: 10 },
          alignItems: "start",
        }}
      >
        <Box sx={{ position: { md: "sticky" }, top: { md: "calc(var(--pmo-header-h) + 48px)" } }}>
          <Reveal variant="up">
            <Typography variant="h2" component="h2" sx={{ mb: 4, maxWidth: "14ch" }}>
              {t("camp.aboutHeadline1")}
              <Box
                component="span"
                sx={{ display: "block", color: palette.maroon[600], fontStyle: "italic", fontWeight: 300 }}
              >
                {t("camp.aboutHeadline2")}
              </Box>
            </Typography>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <Box sx={{ borderTop: `1px solid ${palette.line}`, pt: 3 }}>
              <StatStrip
                stats={[
                  { value: 53, label: t("stats.finalists") },
                  { value: 18, label: t("stats.directorates") },
                  { value: 6, label: t("stats.days") },
                  { value: 4, label: t("stats.domains") },
                ]}
              />
            </Box>
          </Reveal>

          <Reveal variant="fade" delay={200}>
            <Typography
              sx={{
                mt: 4,
                fontFamily: fonts.mono,
                fontSize: "0.6875rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: palette.textMuted,
              }}
            >
              {t("winterCamp.university")}
            </Typography>
          </Reveal>
        </Box>

        <Prose text={t("winterCamp.aboutDescription")} dropCap size="lg" />
      </Box>
    </Section>
  );
}

export default CampAbout;
