import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { MathBackdrop, StatStrip, Reveal, useDirection } from "../ui";

/** The three propositions the old carousel rotated through — now one headline. */
const ROTATING_KEYS = [
  "hero.rotate.0",
  "hero.rotate.1",
  "hero.rotate.2",
] as const;

export function Hero() {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPhrase((p) => (p + 1) % ROTATING_KEYS.length), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: palette.canvas,
        pt: { xs: 7, md: 10, lg: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <MathBackdrop tone="light" variant="hero" />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.25fr) minmax(0, 0.75fr)" },
            gap: { xs: 5, lg: 8 },
            alignItems: "center",
          }}
        >
          {/* ------------------------------------------------ headline column */}
          <Box>
            <Reveal variant="fade">
              <Box
                component={Link}
                to="/news"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.25,
                  mb: { xs: 3, md: 4 },
                  px: 1.5,
                  py: 0.75,
                  borderRadius: `${radius.pill}px`,
                  border: `1px solid ${palette.maroon[200]}`,
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(6px)",
                  textDecoration: "none",
                  transition: `all ${motion.base} ${motion.ease}`,
                  "&:hover": {
                    borderColor: palette.maroon[400],
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: palette.maroon[600],
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: -3,
                      borderRadius: "50%",
                      border: `1px solid ${palette.maroon[600]}`,
                      animation: "pmo-pulse-ring 2.4s ease-out infinite",
                    },
                  }}
                />
                <Typography variant="eyebrow" sx={{ color: palette.maroon[700] }}>
                  {t("hero.badge")}
                </Typography>
                <ArrowForwardIcon
                  sx={{
                    fontSize: 14,
                    color: palette.maroon[500],
                    transform: isRTL ? "scaleX(-1)" : "none",
                  }}
                />
              </Box>
            </Reveal>

            <Reveal variant="up" delay={60}>
              <Typography
                variant="display"
                component="h1"
                sx={{ color: palette.text, mb: { xs: 2, md: 2.5 } }}
              >
                {t("hero.line1")}
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: palette.maroon[600],
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                >
                  {t("hero.line2")}
                </Box>
              </Typography>
            </Reveal>

            {/* Rotating proposition — keeps all three carousel messages */}
            <Reveal variant="up" delay={120}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  height: { xs: 46, md: 40 },
                  mb: { xs: 3, md: 3.5 },
                }}
              >
                <Box
                  sx={{
                    width: 3,
                    alignSelf: "stretch",
                    borderRadius: 2,
                    background: `linear-gradient(${palette.maroon[600]}, ${palette.gold[400]})`,
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ position: "relative", flex: 1, height: "100%" }}>
                  {ROTATING_KEYS.map((key, i) => (
                    <Typography
                      key={key}
                      sx={{
                        position: "absolute",
                        insetInlineStart: 0,
                        top: 0,
                        width: "100%",
                        fontFamily: fonts.body,
                        fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                        fontWeight: 400,
                        color: palette.textSecondary,
                        opacity: phrase === i ? 1 : 0,
                        transform: phrase === i ? "none" : "translateY(10px)",
                        transition: `opacity 520ms ${motion.ease}, transform 520ms ${motion.ease}`,
                      }}
                    >
                      {t(key)}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Reveal>

            <Reveal variant="up" delay={180}>
              <Typography
                variant="lede"
                component="p"
                sx={{ maxWidth: "52ch", mb: { xs: 4, md: 5 } }}
              >
                {t("hero.desc")}
              </Typography>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Box
                  component={Link}
                  to="/resources"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3.25,
                    py: 1.75,
                    borderRadius: `${radius.pill}px`,
                    backgroundColor: palette.maroon[600],
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: `all ${motion.base} ${motion.ease}`,
                    "&:hover": {
                      backgroundColor: palette.maroon[700],
                      transform: "translateY(-2px)",
                      boxShadow: "0 18px 40px -18px rgba(122,30,60,0.8)",
                    },
                    "& svg": { transition: `transform ${motion.base} ${motion.ease}` },
                    "&:hover svg": {
                      transform: isRTL ? "translateX(-4px) scaleX(-1)" : "translateX(4px)",
                    },
                  }}
                >
                  {t("cta.startTraining")}
                  <ArrowForwardIcon
                    sx={{ fontSize: 18, transform: isRTL ? "scaleX(-1)" : "none" }}
                  />
                </Box>

                <Box
                  component={Link}
                  to="/trainingPath"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3,
                    py: 1.75,
                    borderRadius: `${radius.pill}px`,
                    border: `1px solid ${palette.lineStrong}`,
                    color: palette.text,
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    backgroundColor: "rgba(255,255,255,0.6)",
                    transition: `all ${motion.base} ${motion.ease}`,
                    "&:hover": {
                      borderColor: palette.maroon[600],
                      color: palette.maroon[600],
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <PlayArrowRoundedIcon sx={{ fontSize: 20 }} />
                  {t("cta.exploreCamp")}
                </Box>
              </Box>
            </Reveal>
          </Box>

          {/* --------------------------------------------------- visual column */}
          <Reveal variant="scale" delay={220} sx={{ display: { xs: "none", lg: "block" } }}>
            <HeroFigure />
          </Reveal>
        </Box>

        {/* --------------------------------------------------------- stat rail */}
        <Box
          sx={{
            mt: { xs: 6, md: 9 },
            pt: { xs: 4, md: 5 },
            borderTop: `1px solid ${palette.line}`,
          }}
        >
          <StatStrip
            size="lg"
            stats={[
              { value: 5000, suffix: "+", label: t("stats.screened") },
              { value: 18, label: t("stats.directorates") },
              { value: 53, label: t("stats.finalists") },
              { value: 67, label: t("stats.imoEdition") },
            ]}
          />
        </Box>
      </Container>
    </Box>
  );
}

/**
 * The hero's right-hand composition: the national team photo held in a frame
 * that reads as a plate in a journal, with a floating "selection funnel"
 * annotation. Real data, arranged as a graphic.
 */
function HeroFigure() {
  const { t } = useTranslation();

  const funnel = [
    { value: "5,000+", label: t("funnel.school") },
    { value: "1,046", label: t("funnel.directorate") },
    { value: "140", label: t("funnel.preFinal") },
    { value: "53", label: t("funnel.camp") },
  ];

  return (
    <Box sx={{ position: "relative", pb: 6 }}>
      <Box
        sx={{
          position: "relative",
          borderRadius: `${radius.lg}px`,
          overflow: "hidden",
          border: `1px solid ${palette.line}`,
          boxShadow: "0 40px 80px -50px rgba(21,15,18,0.55)",
          aspectRatio: "4 / 5",
          backgroundColor: palette.surfaceSunken,
        }}
      >
        <Box
          component="img"
          src="/imoImgs/imo-01.jpeg"
          alt={t("imoNews.title")}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(21,15,18,0.78) 0%, rgba(21,15,18,0.05) 52%)",
          }}
        />
        <Box sx={{ position: "absolute", insetInline: 20, bottom: 18, color: "#fff" }}>
          <Typography variant="eyebrow" sx={{ color: palette.gold[300], display: "block", mb: 0.75 }}>
            {t("hero.figureEyebrow")}
          </Typography>
          <Typography
            sx={{ fontFamily: fonts.display, fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.3 }}
          >
            {t("hero.figureCaption")}
          </Typography>
        </Box>
      </Box>

      {/* Selection funnel, floating over the plate */}
      <Box
        sx={{
          position: "absolute",
          insetInlineStart: -34,
          bottom: 0,
          width: 216,
          p: 2.25,
          borderRadius: `${radius.md}px`,
          backgroundColor: "rgba(255,255,255,0.86)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${palette.line}`,
          boxShadow: "0 24px 50px -30px rgba(21,15,18,0.5)",
          animation: "pmo-float 7s ease-in-out infinite",
        }}
      >
        <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 1.5 }}>
          {t("funnel.title")}
        </Typography>
        {funnel.map((step, i) => (
          <Box
            key={step.label}
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 1.25,
              py: 0.625,
              borderTop: i === 0 ? "none" : `1px solid ${palette.line}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: fonts.mono,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: palette.maroon[600],
                minWidth: 52,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {step.value}
            </Typography>
            <Typography sx={{ fontSize: "0.75rem", color: palette.textMuted, lineHeight: 1.35 }}>
              {step.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Hero;
