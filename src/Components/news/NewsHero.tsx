import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion } from "../../theme/tokens";
import { MathBackdrop, Reveal } from "../ui";

const STORIES = [
  { anchor: "imo-2026", titleKey: "imoNews.title", metaKey: "news.meta.imo" },
  { anchor: "supervisors", titleKey: "news.title", metaKey: "news.meta.supervisors" },
];

/** Newsroom masthead plus a contents list of the stories on the page. */
export function NewsHero() {
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
        pb: { xs: 4, md: 6 },
      }}
    >
      <MathBackdrop tone="light" variant="quiet" />

      <Container sx={{ position: "relative" }}>
        <Reveal variant="fade">
          <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 2 }}>
            {t("news.eyebrow")}
          </Typography>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <Typography variant="h1" component="h1" sx={{ maxWidth: "13ch", mb: 4 }}>
            {t("news.headline1")}
            <Box
              component="span"
              sx={{ color: palette.maroon[600], fontStyle: "italic", fontWeight: 300 }}
            >
              {" "}
              {t("news.headline2")}
            </Box>
          </Typography>
        </Reveal>

        <Box sx={{ borderTop: `1px solid ${palette.lineStrong}`, maxWidth: 900 }}>
          {STORIES.map((s, i) => (
            <Reveal key={s.anchor} variant="up" delay={120 + i * 80}>
              <Box
                component="a"
                href={`#${s.anchor}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "32px 1fr", md: "56px 1fr 160px" },
                  gap: 2,
                  alignItems: "baseline",
                  py: 2.25,
                  borderBottom: `1px solid ${palette.line}`,
                  textDecoration: "none",
                  color: "inherit",
                  transition: `all ${motion.base} ${motion.ease}`,
                  "&:hover": { paddingInlineStart: 1.5 },
                  "&:hover .nh-title": { color: palette.maroon[600] },
                }}
              >
                <Typography variant="mono" sx={{ color: palette.textMuted }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography
                  className="nh-title"
                  sx={{
                    fontFamily: fonts.display,
                    fontWeight: 600,
                    fontSize: { xs: "0.9375rem", md: "1.125rem" },
                    lineHeight: 1.4,
                    transition: `color ${motion.base} ${motion.ease}`,
                  }}
                >
                  {t(s.titleKey)}
                </Typography>
                <Typography
                  variant="mono"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: palette.textMuted,
                    textAlign: "end",
                    fontSize: "0.6875rem",
                  }}
                >
                  {t(s.metaKey)}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default NewsHero;
