import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts } from "../../theme/tokens";
import { MediaRail, Prose, Reveal, type MediaItem } from "../ui";

const VIDEOS = [
  "WhatsApp Video 2026-02-08 at 15.14.50.mp4",
  "WhatsApp Video 2026-02-09 at 06.16.30.mp4",
  "WhatsApp Video 2026-02-08 at 15.16.33.mp4",
];

const IMAGES = [
  "WhatsApp Image 2026-02-08 at 15.16.35.jpeg",
  "WhatsApp Image 2026-02-08 at 15.16.37.jpeg",
  "WhatsApp Image 2026-02-08 at 15.16.38.jpeg",
  "WhatsApp Image 2026-02-08 at 15.16.42.jpeg",
  "WhatsApp Image 2026-02-08 at 15.17.44.jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.10.jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.11.jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.21.jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.22.jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.22 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.22 (2).jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.22 (3).jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.23.jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.23 (1).jpeg",
  "WhatsApp Image 2026-02-09 at 15.23.23 (2).jpeg",
  ...Array.from({ length: 12 }, (_, i) => `Slide${i + 2}.JPG`),
];

const MEDIA: MediaItem[] = [
  ...VIDEOS.map((name) => ({ type: "video" as const, src: encodeURI(`/${name}`) })),
  ...IMAGES.map((name) => ({ type: "image" as const, src: encodeURI(`/${name}`) })),
];

const FACTS = [
  { labelKey: "gazaNews.facts.programLabel", valueKey: "gazaNews.facts.programValue" },
  { labelKey: "gazaNews.facts.participantsLabel", valueKey: "gazaNews.facts.participantsValue" },
];

export function StoryGaza() {
  const { t } = useTranslation();

  return (
    <Box
      component="article"
      id="gaza-training"
      sx={{
        backgroundColor: palette.surfaceMuted,
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
                {t("news.meta.gaza")}
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
                {t("gazaNews.title")}
              </Typography>
            </Reveal>
            <Prose text={t("gazaNews.description")} dropCap size="md" />
          </Box>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 5, md: 8 } }}>
        <MediaRail items={MEDIA} size="md" label={t("gazaNews.railLabel")} />
      </Box>
    </Box>
  );
}

export default StoryGaza;
