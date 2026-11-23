import { useState } from "react";
import { Box, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, Reveal } from "../ui";
import { s3Url } from "../../utils/media";

const STEPS = ["discover", "train", "compete"] as const;

export function Vision() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <Section tone="muted" id="vision">
      <SectionHeading
        title={
          <>
            {t("vision.headline1")} <em>{t("vision.headline2")}</em>
          </>
        }
        lede={t("vision.lede")}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.35fr) minmax(0, 0.65fr)" },
          gap: { xs: 4, md: 8 },
          alignItems: "center",
        }}
      >
        <Box sx={{ borderTop: `1px solid ${palette.lineStrong}` }}>
          {STEPS.map((step, i) => {
            const open = active === i;
            return (
              <Reveal key={step} variant="up" delay={i * 90}>
                <Box
                  component="button"
                  onClick={() => setActive(open ? -1 : i)}
                  aria-expanded={open}
                  sx={{
                    width: "100%",
                    textAlign: "start",
                    background: "none",
                    border: "none",
                    borderBottom: `1px solid ${palette.lineStrong}`,
                    px: 0,
                    py: { xs: 2.5, md: 3.25 },
                    cursor: "pointer",
                    display: "block",
                    color: "inherit",
                    transition: `background-color ${motion.base} ${motion.ease}`,
                    "&:hover .vision-title": { color: palette.maroon[600] },
                    "&:hover .vision-icon": {
                      borderColor: palette.maroon[400],
                      color: palette.maroon[600],
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>
                    <Typography
                      variant="mono"
                      sx={{
                        color: open ? palette.maroon[600] : palette.textMuted,
                        transition: `color ${motion.base} ${motion.ease}`,
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </Typography>

                    <Typography
                      className="vision-title"
                      sx={{
                        flex: 1,
                        fontFamily: fonts.display,
                        fontWeight: open ? 700 : 500,
                        letterSpacing: "-0.02em",
                        fontSize: { xs: "1.375rem", md: "1.875rem" },
                        color: open ? palette.text : palette.textSecondary,
                        transition: `all ${motion.base} ${motion.ease}`,
                      }}
                    >
                      {t(`vision.slides.${step}.title`)}
                    </Typography>

                    <Box
                      className="vision-icon"
                      sx={{
                        width: 34,
                        height: 34,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "50%",
                        border: `1px solid ${open ? "transparent" : palette.lineStrong}`,
                        backgroundColor: open ? palette.maroon[600] : "transparent",
                        color: open ? "#fff" : palette.textMuted,
                        transition: `all ${motion.base} ${motion.ease}`,
                      }}
                    >
                      <AddRoundedIcon
                        sx={{
                          fontSize: 18,
                          transform: open ? "rotate(135deg)" : "none",
                          transition: `transform ${motion.base} ${motion.ease}`,
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateRows: open ? "1fr" : "0fr",
                      transition: `grid-template-rows ${motion.slow} ${motion.ease}`,
                    }}
                  >
                    <Box sx={{ overflow: "hidden" }}>
                      <Typography
                        sx={{
                          pt: 2,
                          maxWidth: "58ch",
                          marginInlineStart: { xs: 0, md: "62px" },
                          fontSize: { xs: "0.9375rem", md: "1rem" },
                          fontWeight: 300,
                          lineHeight: 1.8,
                          color: palette.textSecondary,
                          opacity: open ? 1 : 0,
                          transition: `opacity ${motion.base} ${motion.ease} ${open ? "120ms" : "0ms"}`,
                        }}
                      >
                        {t(`vision.slides.${step}.text`)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </Box>

        <Reveal variant="scale" delay={160} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              position: "relative",
              display: "grid",
              placeItems: "center",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "78%",
                aspectRatio: "1",
                borderRadius: "50%",
                border: `1px dashed ${palette.maroon[200]}`,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "104%",
                aspectRatio: "1",
                borderRadius: "50%",
                border: `1px solid ${palette.line}`,
              },
            }}
          >
            <Box
              component="img"
              src={s3Url("vision.png")}
              alt=""
              sx={{
                position: "relative",
                width: "76%",
                maxWidth: 300,
                height: "auto",
                animation: "pmo-float 6.5s ease-in-out infinite",
                filter: "drop-shadow(0 30px 40px rgba(21,15,18,0.18))",
              }}
            />
            <Typography
              variant="mono"
              sx={{
                position: "absolute",
                bottom: -6,
                color: palette.textMuted,
                backgroundColor: palette.surfaceMuted,
                px: 1.5,
                borderRadius: `${radius.pill}px`,
              }}
            >
              {t("vision.caption")}
            </Typography>
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
}

export default Vision;
