import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts } from "../../theme/tokens";
import { MediaRail, Prose, Reveal, type MediaItem } from "../ui";
import { s3Url } from "../../utils/media";

const IMAGES = [
  "DSC02811",
  "DSC02699", "DSC02710", "DSC02717", "DSC02722",
  "DSC02725", "DSC02727", "DSC02732", "DSC02734", "DSC02747", "DSC02753",
  "DSC02765", "DSC02779", "DSC02789", "DSC02794", "DSC02817", "DSC02830",
  "DSC02835", "DSC02841", "DSC02846", "DSC02847", "DSC02851",
  "DSC02868", "DSC02871", "DSC02911", "DSC02930", "DSC02932",
  "DSC02935", "DSC02938", "DSC02943", "DSC02948", "DSC02950", "DSC02955",
  "DSC02960", "DSC02963", "DSC02976", "DSC02986", "DSC02991",
  "DSC02995", "DSC03001", "DSC03006", "DSC03067", "DSC03070",
  "DSC03081", "DSC03085", "DSC03091", "DSC03095", "DSC03098", "DSC03108",
  "DSC03109", "DSC03113", "DSC03128", "DSC03145", "DSC03154", "DSC03176",
  "DSC03178",
];

const MEDIA: MediaItem[] = IMAGES.map((name) => ({
  type: "image" as const,
  src: s3Url(`${name}.jpg`),
}));

const FACTS = [
  { labelKey: "closingNews.facts.eventLabel", valueKey: "closingNews.facts.eventValue" },
  { labelKey: "closingNews.facts.honoreesLabel", valueKey: "closingNews.facts.honoreesValue" },
];

export function StoryClosing() {
  const { t } = useTranslation();

  return (
    <Box
      component="article"
      id="closing-ceremony"
      sx={{
        backgroundColor: palette.canvas,
        borderTop: `1px solid ${palette.line}`,
        py: { xs: 7, md: 12 },
      }}
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
                {t("news.meta.closing")}
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
                <Typography sx={{ fontFamily: fonts.display, fontSize: "1.0625rem", fontWeight: 600 }}>
                  {t(f.valueKey)}
                </Typography>
              </Box>
            ))}

            <Typography
              sx={{
                mt: 3,
                fontFamily: fonts.mono,
                fontSize: "0.6875rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: palette.textMuted,
              }}
            >
              {MEDIA.length} {t("news.mediaItems")}
            </Typography>
          </Box>

          <Box>
            <Reveal variant="up">
              <Typography variant="h2" component="h2" sx={{ mb: 3, maxWidth: "22ch" }}>
                {t("closingNews.title")}
              </Typography>
            </Reveal>
            <Prose text={t("closingNews.description")} dropCap size="md" />
          </Box>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 5, md: 8 } }}>
        <MediaRail items={MEDIA} size="md" label={t("closingNews.railLabel")} />
      </Box>
    </Box>
  );
}

export default StoryClosing;
