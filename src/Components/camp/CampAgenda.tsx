import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, Reveal } from "../ui";
import { AGENDA, DAYS, type Day } from "../../data/camp";

/**
 * Six days of schedule as a timeline rather than a three-column table.
 *
 * The rail makes the shape of a day visible at a glance — where the sessions
 * cluster, where the breaks fall — and breaks are visually demoted so the
 * training blocks read first.
 */
export function CampAgenda() {
  const { t } = useTranslation();
  const [day, setDay] = useState<Day>("day1");
  const items = AGENDA[day];
  const sessionCount = items.filter((i) => i.type === "session").length;

  return (
    <Section tone="muted" id="agenda">
      <SectionHeading
        title={
          <>
            {t("camp.agendaHeadline1")} <em>{t("camp.agendaHeadline2")}</em>
          </>
        }
        lede={t("agenda.description")}
      />

      {/* Day selector */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          overflowX: "auto",
          pb: 1.5,
          mb: { xs: 4, md: 6 },
          mx: { xs: -2.5, sm: 0 },
          px: { xs: 2.5, sm: 0 },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {DAYS.map((d, i) => {
          const on = d === day;
          return (
            <Box
              key={d}
              component="button"
              onClick={() => setDay(d)}
              aria-pressed={on}
              sx={{
                flexShrink: 0,
                textAlign: "start",
                px: 2.25,
                py: 1.5,
                cursor: "pointer",
                borderRadius: `${radius.md}px`,
                border: `1px solid ${on ? "transparent" : palette.line}`,
                backgroundColor: on ? palette.maroon[600] : palette.surface,
                color: on ? "#fff" : palette.textSecondary,
                transition: `background-color ${motion.snap} ${motion.easeSnap}, border-color ${motion.snap} ${motion.easeSnap}, color ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
                "&:hover": {
                  borderColor: on ? "transparent" : palette.maroon[300],
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography
                variant="mono"
                sx={{
                  display: "block",
                  fontSize: "0.625rem",
                  color: on ? palette.gold[200] : palette.textMuted,
                  mb: 0.5,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>
              <Typography
                sx={{
                  fontFamily: fonts.body,
                  fontSize: "0.875rem",
                  fontWeight: on ? 600 : 400,
                  whiteSpace: "nowrap",
                }}
              >
                {t(`agenda.days.${d}`)}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 3 }}>
        {sessionCount} {t("camp.sessionsLabel")} · {items.length} {t("camp.blocksLabel")}
      </Typography>

      {/* Timeline */}
      <Box key={day} sx={{ position: "relative" }}>
        {items.map((item, i) => {
          const isBreak = item.type === "break";
          return (
            <Reveal key={`${day}-${item.id}`} variant="up" delay={i * 60}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "82px 28px 1fr", md: "150px 40px 1fr" },
                  alignItems: "start",
                  columnGap: { xs: 1, md: 2 },
                  minHeight: isBreak ? 74 : 96,
                }}
              >
                <Typography
                  variant="mono"
                  sx={{
                    pt: { xs: 1.5, md: 2 },
                    color: isBreak ? palette.textMuted : palette.maroon[600],
                    fontSize: { xs: "0.6875rem", md: "0.8125rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.time}
                </Typography>

                {/* Rail */}
                <Box sx={{ position: "relative", height: "100%", display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      // "1px", not 1 — MUI's sizing system reads a bare 1 as 100%.
                      width: "1px",
                      backgroundColor: palette.lineStrong,
                      ...(i === items.length - 1 && { bottom: "auto", height: 26 }),
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      mt: { xs: 2, md: 2.5 },
                      width: isBreak ? 8 : 13,
                      height: isBreak ? 8 : 13,
                      borderRadius: "50%",
                      backgroundColor: isBreak ? palette.surface : palette.maroon[600],
                      border: `1.5px solid ${isBreak ? palette.lineStrong : palette.maroon[600]}`,
                      boxShadow: isBreak ? "none" : `0 0 0 5px ${palette.maroon[100]}`,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    py: { xs: 1.25, md: 1.75 },
                    borderBottom: `1px solid ${palette.line}`,
                    pb: { xs: 2, md: 2.5 },
                    mb: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontWeight: isBreak ? 400 : 600,
                      fontSize: isBreak
                        ? { xs: "0.9375rem", md: "1rem" }
                        : { xs: "1.0625rem", md: "1.375rem" },
                      letterSpacing: "-0.01em",
                      color: isBreak ? palette.textMuted : palette.text,
                      lineHeight: 1.3,
                    }}
                  >
                    {t(item.titleKey)}
                  </Typography>

                  {item.speakerKeys && (
                    <Box sx={{ mt: 1.25, display: "flex", flexDirection: "column", gap: 0.5 }}>
                      {item.speakerKeys.map((s) => (
                        <Typography
                          key={s}
                          sx={{
                            fontSize: { xs: "0.8125rem", md: "0.875rem" },
                            color: palette.textSecondary,
                            fontWeight: 300,
                            display: "flex",
                            gap: 1,
                            "&::before": {
                              content: '"—"',
                              color: palette.maroon[300],
                              flexShrink: 0,
                            },
                          }}
                        >
                          {t(s)}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}

export default CampAgenda;
