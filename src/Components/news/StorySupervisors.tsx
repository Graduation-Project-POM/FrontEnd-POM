import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts } from "../../theme/tokens";
import { MediaRail, Prose, Reveal, type MediaItem } from "../ui";
import { s3Url } from "../../utils/media";

const MEDIA: MediaItem[] = Array.from({ length: 18 }, (_, i) => ({
  type: "image" as const,
  src: s3Url(`N${i + 1}.png`),
}));

const FACTS = [
  { labelKey: "news.facts.daysLabel", valueKey: "news.facts.daysValue" },
  { labelKey: "news.facts.venueLabel", valueKey: "news.facts.venueValue" },
  { labelKey: "news.facts.attendeesLabel", valueKey: "news.facts.attendeesValue" },
];

export function StorySupervisors() {
  const { t } = useTranslation();

  return (
    <Box
      component="article"
      id="supervisors"
      sx={{ backgroundColor: palette.surface, py: { xs: 7, md: 12 } }}
    >
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.42fr) minmax(0, 1fr)" },
            gap: { xs: 4, md: 8 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{ position: { md: "sticky" }, top: { md: "calc(var(--pmo-header-h) + 40px)" } }}
          >
            <Reveal variant="fade">
              <Typography variant="eyebrow" sx={{ color: palette.maroon[500], display: "block", mb: 2 }}>
                {t("news.meta.supervisors")}
              </Typography>
            </Reveal>

            {FACTS.map((f, i) => (
              <Box
                key={f.labelKey}
                sx={{
                  py: 1.75,
                  borderTop: i === 0 ? `1px solid ${palette.lineStrong}` : "none",
                  borderBottom: `1px solid ${palette.line}`,
                }}
              >
                <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 0.5 }}>
                  {t(f.labelKey)}
                </Typography>
                <Typography
                  sx={{ fontFamily: fonts.display, fontSize: "1.0625rem", fontWeight: 600 }}
                >
                  {t(f.valueKey)}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box>
            <Reveal variant="up">
              <Typography variant="h2" component="h2" sx={{ mb: 3, maxWidth: "22ch" }}>
                {t("news.title")}
              </Typography>
            </Reveal>
            <Prose text={t("news.description")} dropCap size="md" />
          </Box>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 5, md: 8 } }}>
        <MediaRail items={MEDIA} size="sm" label={t("news.railLabelSupervisors")} />
      </Box>
    </Box>
  );
}

export default StorySupervisors;
