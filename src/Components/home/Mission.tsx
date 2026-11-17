import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, radius, motion } from "../../theme/tokens";
import { Section, Reveal, Prose } from "../ui";

export function Mission() {
  const { t } = useTranslation();

  return (
    <Section tone="paper" id="about">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
          gap: { xs: 5, md: 8, lg: 12 },
          alignItems: "start",
        }}
      >
        <Box sx={{ position: { md: "sticky" }, top: { md: "calc(var(--pmo-header-h) + 48px)" } }}>
          <Reveal variant="up">
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              {t("about.headline1")}
              <Box
                component="span"
                sx={{ display: "block", color: palette.maroon[600], fontStyle: "italic", fontWeight: 300 }}
              >
                {t("about.headline2")}
              </Box>
            </Typography>
          </Reveal>

          <Reveal variant="scale" delay={140}>
            <Box
              sx={{
                position: "relative",
                mt: { xs: 3, md: 5 },
                maxWidth: 420,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  insetInlineStart: -14,
                  top: -14,
                  width: "62%",
                  height: "62%",
                  border: `1px solid ${palette.maroon[200]}`,
                  borderRadius: `${radius.md}px`,
                  zIndex: 0,
                },
              }}
            >
              <Box
                component="img"
                src="/image-removebg-preview 1.png"
                alt=""
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "auto",
                  borderRadius: `${radius.md}px`,
                  display: "block",
                }}
              />
            </Box>
          </Reveal>
        </Box>

        <Box>
          <Prose text={t("about.desc")} dropCap size="lg" />

          <Box
            sx={{
              mt: { xs: 5, md: 7 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 0,
              borderTop: `1px solid ${palette.line}`,
            }}
          >
            {(["algebra", "geometry", "numberTheory", "combinatorics"] as const).map((key, i) => (
              <Reveal key={key} variant="up" delay={i * 80}>
                <Box
                  sx={{
                    py: 3,
                    px: { xs: 0, sm: i % 2 === 1 ? 3 : 0 },
                    borderBottom: `1px solid ${palette.line}`,
                    borderInlineStart: {
                      xs: "none",
                      sm: i % 2 === 1 ? `1px solid ${palette.line}` : "none",
                    },
                    transition: `background-color ${motion.base} ${motion.ease}`,
                    "&:hover .domain-index": { color: palette.maroon[600] },
                  }}
                >
                  <Typography
                    className="domain-index"
                    variant="mono"
                    sx={{
                      color: palette.textMuted,
                      transition: `color ${motion.base} ${motion.ease}`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      mt: 0.75,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t(`domains.${key}.title`)}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: palette.textMuted, mt: 0.5 }}>
                    {t(`domains.${key}.desc`)}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

export default Mission;
