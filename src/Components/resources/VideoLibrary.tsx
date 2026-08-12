import { Box, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius, alpha } from "../../theme/tokens";
import { Section, SectionHeading, Reveal } from "../ui";
import { PLAYLISTS } from "../../data/resources";

/**
 * Training video collections.
 *
 * One featured playlist gets a full spread with a drawn "stack" of episodes;
 * the others sit in a compact table with their real length and language, so a
 * student can judge the commitment before clicking. Set on paper like every
 * other collection — the section used to be the one dark block on the page.
 */
export function VideoLibrary() {
  const { t } = useTranslation();
  const [featured, ...rest] = PLAYLISTS;

  return (
    <Section tone="paper" id="videos">
      <SectionHeading
        title={
          <>
            {t("resources.videos.headline1")} <em>{t("resources.videos.headline2")}</em>
          </>
        }
        lede={t("playlist.exploreDesc")}
      />

      {/* ------------------------------------------------------- featured */}
      <Reveal variant="up">
        <Box
          component="a"
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 1fr) minmax(0, 0.85fr)",
            },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
            p: { xs: 3, md: 5 },
            borderRadius: `${radius.lg}px`,
            border: `1px solid ${palette.line}`,
            background: `linear-gradient(150deg, ${palette.surfaceMuted} 0%, ${alpha(
              palette.maroon[100],
              0.55
            )} 100%)`,
            textDecoration: "none",
            color: "inherit",
            transition: `transform ${motion.snapSlow} ${motion.easeSnap}, box-shadow ${motion.snapSlow} ${motion.easeSnap}, border-color ${motion.snap} ${motion.easeSnap}`,
            boxShadow: "0 18px 36px -30px rgba(21,15,18,0.4)",
            "&:hover": {
              borderColor: palette.maroon[300],
              transform: "translateY(-3px)",
              boxShadow: "0 30px 55px -34px rgba(21,15,18,0.45)",
            },
            "&:hover .stack-row": { transform: "translateX(5px)" },
            '[dir="rtl"] &:hover .stack-row': { transform: "translateX(-5px)" },
            "&:hover .feat-cta": { backgroundColor: palette.maroon[700] },
          }}
        >
          <Box>
            <Typography variant="eyebrow" sx={{ color: palette.maroon[600], display: "block", mb: 2 }}>
              {t("resources.videos.featured")}
            </Typography>
            <Typography variant="h3" component="h3" sx={{ mb: 1.5 }}>
              {t(featured.titleKey)}
            </Typography>
            <Typography
              sx={{
                color: palette.textSecondary,
                fontSize: "1.0625rem",
                fontWeight: 300,
                mb: 3,
                maxWidth: "44ch",
              }}
            >
              {featured.descKey && t(featured.descKey)}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3.5 }}>
              <Meta label={t("resources.videos.episodes")} value={String(featured.videos)} />
              <Meta label={t("resources.videos.runtime")} value={featured.duration ?? "—"} />
              <Meta
                label={t("resources.videos.language")}
                value={t(`resources.languages.${featured.language}`)}
              />
            </Box>

            <Box
              className="feat-cta"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1.25,
                borderRadius: `${radius.pill}px`,
                backgroundColor: palette.maroon[600],
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: `background-color ${motion.snap} ${motion.easeSnap}`,
              }}
            >
              <PlayArrowRoundedIcon sx={{ fontSize: 20 }} />
              {t("playlist.viewPlaylist")}
            </Box>
          </Box>

          {/* Drawn episode stack */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Box
                key={i}
                className="stack-row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.25,
                  borderRadius: `${radius.sm}px`,
                  backgroundColor: palette.surface,
                  border: `1px solid ${palette.line}`,
                  opacity: 1 - i * 0.14,
                  transition: `transform ${motion.snapSlow} ${motion.easeSnap} ${i * 25}ms`,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: i === 0 ? palette.maroon[600] : palette.surfaceSunken,
                    color: i === 0 ? "#fff" : palette.textMuted,
                    flexShrink: 0,
                  }}
                >
                  <PlayArrowRoundedIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      width: `${88 - i * 11}%`,
                      backgroundColor: palette.ink[200],
                      mb: 0.75,
                    }}
                  />
                  <Box
                    sx={{
                      height: 4,
                      borderRadius: 3,
                      width: `${54 - i * 6}%`,
                      backgroundColor: palette.ink[100],
                    }}
                  />
                </Box>
                <Typography variant="mono" sx={{ color: palette.textMuted }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Reveal>

      {/* ---------------------------------------------------------- others */}
      <Box sx={{ mt: { xs: 5, md: 7 }, borderTop: `1px solid ${palette.lineStrong}` }}>
        {rest.map((pl, i) => (
          <Reveal key={pl.id} variant="up" delay={i * 80}>
            <Box
              component="a"
              href={pl.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "minmax(0, 1fr) auto",
                  md: "40px minmax(0, 1fr) 120px 90px 24px",
                },
                alignItems: "center",
                gap: { xs: 2, md: 3 },
                py: 2.5,
                borderBottom: `1px solid ${palette.line}`,
                textDecoration: "none",
                color: "inherit",
                transition: `background-color ${motion.snap} ${motion.easeSnap}`,
                "& .vl-shift": { transition: `transform ${motion.snapSlow} ${motion.easeSnap}` },
                "&:hover": { backgroundColor: palette.surfaceMuted },
                "&:hover .vl-shift": { transform: "translateX(5px)" },
                '[dir="rtl"] &:hover .vl-shift': { transform: "translateX(-5px)" },
                "&:hover .vl-title": { color: palette.maroon[600] },
                "&:hover .vl-arrow": { opacity: 1 },
              }}
            >
              <Typography
                className="vl-shift"
                variant="mono"
                sx={{ color: palette.textMuted, display: { xs: "none", md: "block" } }}
              >
                {String(i + 2).padStart(2, "0")}
              </Typography>

              <Box className="vl-shift" sx={{ minWidth: 0 }}>
                <Typography
                  className="vl-title"
                  sx={{
                    fontFamily: fonts.display,
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    transition: `color ${motion.snap} ${motion.easeSnap}`,
                  }}
                >
                  {t(pl.titleKey)}
                </Typography>
                <Typography sx={{ fontSize: "0.8125rem", color: palette.textMuted, mt: 0.25 }}>
                  {pl.descKey && t(pl.descKey)}
                </Typography>
              </Box>

              <Typography
                variant="mono"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: palette.textMuted,
                  fontSize: "0.6875rem",
                }}
              >
                {pl.isChannel
                  ? t("resources.videos.channel")
                  : `${pl.videos} ${t("resources.videos.episodesShort")}`}
              </Typography>

              <Typography
                variant="mono"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: palette.textMuted,
                  fontSize: "0.6875rem",
                }}
              >
                {pl.duration ?? t(`resources.languages.${pl.language}`)}
              </Typography>

              <NorthEastIcon
                className="vl-arrow"
                sx={{
                  fontSize: 17,
                  color: palette.maroon[600],
                  opacity: 0.35,
                  transition: `opacity ${motion.snap} ${motion.easeSnap}`,
                }}
              />
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 0.5 }}>
        {label}
      </Typography>
      <Typography
        sx={{
          fontFamily: fonts.mono,
          fontSize: "1rem",
          color: palette.text,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default VideoLibrary;
