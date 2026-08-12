import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, radius, motion, alpha } from "../../theme/tokens";
import { MediaRail, Prose, Reveal, type MediaItem } from "../ui";

const MEDIA: MediaItem[] = [
  { type: "image", src: "/imoImgs/imo-01.jpeg" },
  { type: "image", src: "/imoImgs/imo-02.jpeg" },
  { type: "image", src: "/imoImgs/imo-03.jpeg" },
  { type: "image", src: "/imoImgs/imo-04.jpeg" },
  { type: "video", src: "/imoImgs/imo-video-1.mp4" },
  { type: "image", src: "/imoImgs/imo-05.jpeg" },
  { type: "image", src: "/imoImgs/imo-06.jpeg" },
  { type: "image", src: "/imoImgs/imo-07.jpeg" },
  { type: "image", src: "/imoImgs/imo-08.jpeg" },
  { type: "video", src: "/imoImgs/imo-video-2.mp4" },
  { type: "image", src: "/imoImgs/imo-09.jpeg" },
  { type: "image", src: "/imoImgs/imo-10.jpeg" },
  { type: "image", src: "/imoImgs/imo-11.jpeg" },
  { type: "image", src: "/imoImgs/imo-12.jpeg" },
  { type: "video", src: "/imoImgs/imo-video-3.mp4" },
  { type: "image", src: "/imoImgs/imo-13.jpeg" },
  { type: "image", src: "/imoImgs/imo-14.jpeg" },
  { type: "image", src: "/imoImgs/imo-15.jpeg" },
  { type: "video", src: "/imoImgs/imo-video-4.mp4" },
  { type: "image", src: "/imoImgs/imo-16.jpeg" },
  { type: "image", src: "/imoImgs/imo-17.jpeg" },
  { type: "image", src: "/imoImgs/imo-18.jpeg" },
  { type: "video", src: "/imoImgs/imo-video-5.mp4" },
];

const FACTS = [
  { labelKey: "imoNews.facts.editionLabel", valueKey: "imoNews.facts.editionValue" },
  { labelKey: "imoNews.facts.hostLabel", valueKey: "imoNews.facts.hostValue" },
  { labelKey: "imoNews.facts.teamLabel", valueKey: "imoNews.facts.teamValue" },
];

/**
 * Lead story: the film on a raised plate, a sticky fact column beside the text,
 * and the full media set as a rail underneath. Set on the same light ground as
 * the rest of the product — only the video player itself stays black, because
 * that is the letterbox behind the footage.
 */
export function StoryImo() {
  const { t } = useTranslation();

  return (
    <Box
      component="article"
      id="imo-2026"
      sx={{
        position: "relative",
        backgroundColor: palette.surfaceMuted,
        borderTop: `1px solid ${palette.line}`,
        py: { xs: 7, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(70% 55% at 15% 0%, ${alpha(palette.maroon[200], 0.55)}, transparent 64%),
                       radial-gradient(55% 45% at 95% 100%, ${alpha(palette.gold[200], 0.4)}, transparent 66%)`,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <Reveal variant="fade">
          <Typography variant="eyebrow" sx={{ color: palette.maroon[600], display: "block", mb: 2.5 }}>
            {t("news.meta.imo")}
          </Typography>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <Typography
            variant="h1"
            component="h2"
            sx={{ color: palette.text, maxWidth: "20ch", mb: { xs: 4, md: 6 } }}
          >
            {t("imoNews.title")}
          </Typography>
        </Reveal>

        <Reveal variant="clip" delay={120}>
          <Box
            sx={{
              position: "relative",
              borderRadius: `${radius.lg}px`,
              overflow: "hidden",
              border: `1px solid ${palette.line}`,
              backgroundColor: "#000",
              boxShadow: "0 30px 60px -45px rgba(21,15,18,0.45)",
              mb: { xs: 5, md: 8 },
            }}
          >
            <Box
              component="video"
              src="/imoImgs/introVedeo.mp4"
              controls
              playsInline
              preload="metadata"
              sx={{ width: "100%", display: "block", maxHeight: "72vh", backgroundColor: "#000" }}
            />
          </Box>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.42fr) minmax(0, 1fr)" },
            gap: { xs: 4, md: 8 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              position: { md: "sticky" },
              top: { md: "calc(var(--pmo-header-h) + 40px)" },
            }}
          >
            {FACTS.map((f, i) => (
              <Box
                key={f.labelKey}
                sx={{
                  py: 2,
                  borderTop: i === 0 ? `1px solid ${palette.lineStrong}` : "none",
                  borderBottom: `1px solid ${palette.line}`,
                }}
              >
                <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 0.75 }}>
                  {t(f.labelKey)}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: palette.text,
                  }}
                >
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
                transition: `color ${motion.base} ${motion.ease}`,
              }}
            >
              {MEDIA.length} {t("news.mediaItems")}
            </Typography>
          </Box>

          <Prose text={t("imoNews.description")} size="lg" />
        </Box>
      </Container>

      <Box sx={{ position: "relative", mt: { xs: 5, md: 8 } }}>
        <MediaRail items={MEDIA} size="md" label={t("news.railLabel")} />
      </Box>
    </Box>
  );
}

export default StoryImo;
