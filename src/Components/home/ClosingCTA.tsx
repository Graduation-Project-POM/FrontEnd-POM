import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Reveal, MathBackdrop, useDirection } from "../ui";

export function ClosingCTA() {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: palette.surfaceMuted,
        py: { xs: 6, md: 10 },
        borderTop: `1px solid ${palette.line}`,
      }}
    >
      <Container>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: `${radius.lg}px`, md: `${radius.xl}px` },
            background: `linear-gradient(150deg, ${palette.maroon[600]} 0%, ${palette.maroon[800]} 100%)`,
            color: "#fff",
            px: { xs: 3, md: 8 },
            py: { xs: 7, md: 12 },
            boxShadow: "0 50px 90px -60px rgba(122,30,60,0.85)",
          }}
        >
          <MathBackdrop tone="dark" variant="quiet" parallax={false} />

          <Box sx={{ position: "relative", textAlign: "center" }}>
            <Reveal variant="up">
              <Typography
                variant="display"
                component="p"
                sx={{
                  maxWidth: "16ch",
                  mx: "auto",
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "4.25rem" },
                }}
              >
                {t("cta.headline1")}{" "}
                <Box
                  component="span"
                  sx={{ fontStyle: "italic", fontWeight: 300, color: palette.gold[200] }}
                >
                  {t("cta.headline2")}
                </Box>
              </Typography>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <Typography
                sx={{
                  maxWidth: "50ch",
                  mx: "auto",
                  mb: 5,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                {t("cta.lede")}
              </Typography>
            </Reveal>

            <Reveal variant="up" delay={220}>
              <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
                <Box
                  component={Link}
                  to="/resources"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3.5,
                    py: 1.875,
                    borderRadius: `${radius.pill}px`,
                    backgroundColor: "#fff",
                    color: palette.maroon[700],
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    transition: `all ${motion.base} ${motion.ease}`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)",
                    },
                    "& svg": { transition: `transform ${motion.base} ${motion.ease}` },
                    "&:hover svg": { transform: isRTL ? "translateX(-4px)" : "translateX(4px)" },
                  }}
                >
                  {t("cta.startTraining")}
                  <ArrowForwardIcon
                    sx={{ fontSize: 18, transform: isRTL ? "scaleX(-1)" : "none" }}
                  />
                </Box>

                <Box
                  component={Link}
                  to="/news"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    px: 3.25,
                    py: 1.875,
                    borderRadius: `${radius.pill}px`,
                    border: "1px solid rgba(255,255,255,0.4)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: `all ${motion.base} ${motion.ease}`,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.12)",
                      borderColor: "#fff",
                    },
                  }}
                >
                  {t("cta.readNews")}
                </Box>
              </Box>
            </Reveal>

            <Reveal variant="fade" delay={320}>
              <Typography
                sx={{
                  mt: { xs: 5, md: 7 },
                  fontFamily: fonts.mono,
                  fontSize: "0.6875rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {t("cta.footnote")}
              </Typography>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ClosingCTA;
