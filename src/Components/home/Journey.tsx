import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius, alpha } from "../../theme/tokens";
import { SectionHeading, ActionLink } from "../ui";
import { Link } from "react-router-dom";
import { s3Url } from "../../utils/media";

interface Stage {
  key: string;
  image: string;
  marker: string;
}

const STAGES: Stage[] = [
  { key: "prep", image: s3Url("program1.png"), marker: "stage.prep" },
  { key: "rounds", image: s3Url("program2.png"), marker: "stage.rounds" },
  { key: "camp", image: s3Url("program6.png"), marker: "stage.camp" },
  { key: "finals", image: s3Url("program3.png"), marker: "stage.finals" },
  { key: "awards", image: s3Url("program4.png"), marker: "stage.awards" },
  { key: "finish", image: s3Url("program5.png"), marker: "stage.finish" },
];

export function Journey() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <Box
      component="section"
      id="journey"
      sx={{
        position: "relative",
        backgroundColor: palette.surfaceMuted,
        py: { xs: 8, md: 14, lg: 18 },
        overflow: "hidden",
        borderTop: `1px solid ${palette.line}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(80% 60% at 15% 0%, ${alpha(palette.maroon[200], 0.5)}, transparent 62%),
                       radial-gradient(60% 50% at 95% 100%, ${alpha(palette.gold[200], 0.4)}, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <SectionHeading
          title={
            <>
              {t("programs.headline1")} <em>{t("programs.headline2")}</em>
            </>
          }
          lede={t("programs.lede")}
          action={
            <ActionLink component={Link} to="/trainingPath">
              {t("cta.exploreCamp")}
            </ActionLink>
          }
        />

        <Box
          sx={{
            position: "relative",
            overflowX: "auto",
            overflowY: "hidden",
            pb: 1,
            mx: { xs: -2.5, sm: 0 },
            px: { xs: 2.5, sm: 0 },
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          <Box sx={{ position: "relative", minWidth: { xs: 660, md: "100%" }, pt: 4 }}>
            <Box
              sx={{
                position: "absolute",
                insetInline: 0,
                top: 4 + 7,
                height: "1px",
                backgroundColor: palette.lineStrong,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                insetInlineStart: 0,
                top: 4 + 6,
                height: 3,
                borderRadius: 2,
                width: `${((active + 0.5) / STAGES.length) * 100}%`,
                background: `linear-gradient(90deg, ${palette.maroon[600]}, ${palette.gold[400]})`,
                transition: `width ${motion.slow} ${motion.ease}`,
              }}
            />

            <Box sx={{ display: "grid", gridTemplateColumns: `repeat(${STAGES.length}, minmax(0, 1fr))` }}>
              {STAGES.map((s, i) => {
                const on = i === active;
                const passed = i <= active;
                return (
                  <Box
                    key={s.key}
                    component="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    sx={{
                      position: "relative",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      p: 0,
                      textAlign: "start",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 2,
                      "&:hover .node": { transform: "scale(1.35)" },
                      "&:hover .stage-label": { color: palette.maroon[600] },
                    }}
                  >
                    <Box
                      className="node"
                      sx={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        backgroundColor: passed ? palette.maroon[600] : palette.surface,
                        border: `2px solid ${passed ? palette.maroon[600] : palette.lineStrong}`,
                        transition: `all ${motion.base} ${motion.ease}`,
                        transform: on ? "scale(1.5)" : "none",
                        boxShadow: on ? `0 0 0 6px ${alpha(palette.maroon[600], 0.12)}` : "none",
                      }}
                    />
                    <Box sx={{ paddingInlineEnd: 2 }}>
                      <Typography
                        variant="mono"
                        sx={{
                          display: "block",
                          color: on ? palette.maroon[500] : palette.textMuted,
                          mb: 0.75,
                          transition: `color ${motion.base} ${motion.ease}`,
                        }}
                      >
                        {t(s.marker)}
                      </Typography>
                      <Typography
                        className="stage-label"
                        sx={{
                          fontFamily: fonts.display,
                          fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                          fontWeight: on ? 700 : 400,
                          lineHeight: 1.25,
                          letterSpacing: "-0.01em",
                          color: on ? palette.text : palette.textMuted,
                          transition: `all ${motion.base} ${motion.ease}`,
                        }}
                      >
                        {t(`programs.items.${s.key}.title`)}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.42fr) minmax(0, 1fr)" },
            gap: { xs: 0, md: 0 },
            alignItems: "stretch",
            borderRadius: `${radius.lg}px`,
            border: `1px solid ${palette.line}`,
            backgroundColor: palette.surface,
            boxShadow: "0 30px 60px -45px rgba(21,15,18,0.35)",
            overflow: "hidden",
          }}
        >
          <Box
            key={`img-${stage.key}`}
            sx={{
              position: "relative",
              display: "grid",
              placeItems: "center",
              minHeight: { xs: 190, md: 280 },
              p: 4,
              background: `linear-gradient(150deg, ${palette.maroon[50]}, ${alpha(palette.gold[100], 0.7)})`,
              borderInlineEnd: { md: `1px solid ${palette.line}` },
              borderBottom: { xs: `1px solid ${palette.line}`, md: "none" },
              animation: `pmo-rise ${motion.slow} ${motion.ease}`,
            }}
          >
            <Box
              component="img"
              src={stage.image}
              alt=""
              sx={{ width: "62%", maxWidth: 190, height: "auto" }}
            />
            <Typography
              variant="mono"
              sx={{
                position: "absolute",
                top: 14,
                insetInlineStart: 16,
                color: palette.maroon[500],
              }}
            >
              {String(active + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")}
            </Typography>
          </Box>

          <Box
            key={`copy-${stage.key}`}
            sx={{
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              animation: `pmo-rise ${motion.slow} ${motion.ease}`,
            }}
          >
            <Typography variant="h3" component="h3" sx={{ mb: 2, maxWidth: "20ch" }}>
              {t(`programs.items.${stage.key}.title`)}
            </Typography>
            <Typography
              sx={{
                color: palette.textSecondary,
                fontSize: { xs: "1rem", md: "1.125rem" },
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: "60ch",
              }}
            >
              {t(`programs.items.${stage.key}.desc`)}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
              {STAGES.map((s, i) => (
                <Box
                  key={s.key}
                  component="button"
                  aria-label={t(`programs.items.${s.key}.title`)}
                  onClick={() => setActive(i)}
                  sx={{
                    width: i === active ? 34 : 10,
                    height: 4,
                    p: 0,
                    border: "none",
                    borderRadius: 999,
                    cursor: "pointer",
                    backgroundColor: i === active ? palette.maroon[600] : palette.ink[200],
                    transition: `all ${motion.base} ${motion.ease}`,
                    "&:hover": { backgroundColor: i === active ? palette.maroon[600] : palette.maroon[300] },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Journey;
