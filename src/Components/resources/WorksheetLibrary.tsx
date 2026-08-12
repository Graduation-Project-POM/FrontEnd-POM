import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, Reveal, FilterPill, EmptyState } from "../ui";
import { WORKSHEETS, DIRECTORATES, type Worksheet } from "../../data/resources";

type KindFilter = "all" | "paper" | "answers";

interface WorksheetLibraryProps {
  id?: string;
  /** `page` drops the outer Section chrome so a dedicated route can own it. */
  variant?: "section" | "page";
}

/**
 * Eighteen exam papers from eleven directorates.
 *
 * As cards this was an undifferentiated 18-tile grid in eleven random colours.
 * As a filtered, grouped list it becomes usable: pick your directorate, pick
 * papers or answer keys, scan.
 */
export function WorksheetLibrary({
  id = "worksheets",
  variant = "section",
}: WorksheetLibraryProps) {
  const { t } = useTranslation();
  const [directorate, setDirectorate] = useState<string>("all");
  const [kind, setKind] = useState<KindFilter>("all");

  const filtered = useMemo(
    () =>
      WORKSHEETS.filter(
        (w) =>
          (directorate === "all" || w.directorate === directorate) &&
          (kind === "all" || w.kind === kind)
      ),
    [directorate, kind]
  );

  const grouped = useMemo(() => {
    const map = new Map<string, Worksheet[]>();
    filtered.forEach((w) => {
      map.set(w.directorate, [...(map.get(w.directorate) ?? []), w]);
    });
    return [...map.entries()];
  }, [filtered]);

  const body = (
    <>
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Box sx={{ display: "flex", gap: 1, mb: 1.5, flexWrap: "wrap" }}>
          {(["all", "paper", "answers"] as KindFilter[]).map((k) => (
            <FilterPill
              key={k}
              active={kind === k}
              onClick={() => setKind(k)}
              count={k === "all" ? WORKSHEETS.length : WORKSHEETS.filter((w) => w.kind === k).length}
            >
              {t(`worksheets.kinds.${k}`)}
            </FilterPill>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pb: 1,
            mx: { xs: -2.5, sm: 0 },
            px: { xs: 2.5, sm: 0 },
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          <FilterPill active={directorate === "all"} onClick={() => setDirectorate("all")}>
            {t("worksheets.allDirectorates")}
          </FilterPill>
          {DIRECTORATES.map((d) => (
            <FilterPill
              key={d}
              active={directorate === d}
              onClick={() => setDirectorate(d)}
              count={WORKSHEETS.filter((w) => w.directorate === d).length}
            >
              {t(`worksheets.directorates.${d}`)}
            </FilterPill>
          ))}
        </Box>
      </Box>

      {grouped.length === 0 ? (
        <EmptyState title={t("resources.empty.title")} hint={t("resources.empty.hint")} />
      ) : (
        grouped.map(([dir, items], gi) => (
          <Box key={dir} sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 2,
                pb: 1.25,
                borderBottom: `1px solid ${palette.lineStrong}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {t(`worksheets.directorates.${dir}`)}
              </Typography>
              <Box sx={{ flex: 1, borderBottom: `1px dotted ${palette.line}` }} />
              <Typography variant="mono" sx={{ color: palette.textMuted }}>
                {String(items.length).padStart(2, "0")}
              </Typography>
            </Box>

            {items.map((w, i) => (
              <Reveal key={w.id} variant="up" delay={Math.min((gi * 2 + i) * 40, 240)}>
                <Box
                  component="a"
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    py: 1.75,
                    borderBottom: `1px solid ${palette.line}`,
                    textDecoration: "none",
                    color: "inherit",
                    transition: `background-color ${motion.snap} ${motion.easeSnap}`,
                    "& .ws-shift": {
                      transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
                    },
                    "&:hover": { backgroundColor: palette.surface },
                    "&:hover .ws-shift": { transform: "translateX(5px)" },
                    '[dir="rtl"] &:hover .ws-shift': { transform: "translateX(-5px)" },
                    "&:hover .ws-title": { color: palette.maroon[600] },
                    "&:hover .ws-arrow": { opacity: 1, transform: "translate(2px,-2px)" },
                  }}
                >
                  <Box
                    className="ws-shift"
                    sx={{
                      flexShrink: 0,
                      px: 1,
                      py: 0.375,
                      borderRadius: `${radius.xs}px`,
                      fontFamily: fonts.mono,
                      fontSize: "0.5625rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: w.kind === "answers" ? palette.teal[500] : palette.maroon[600],
                      backgroundColor:
                        w.kind === "answers" ? palette.teal[100] : palette.maroon[50],
                    }}
                  >
                    {t(`worksheets.kinds.${w.kind}`)}
                  </Box>

                  <Typography
                    className="ws-title ws-shift"
                    sx={{
                      flex: 1,
                      minWidth: 0,
                      fontSize: { xs: "0.875rem", md: "0.9375rem" },
                      fontWeight: 400,
                      lineHeight: 1.45,
                      transition: `color ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
                    }}
                  >
                    {t(w.titleKey)}
                  </Typography>

                  <NorthEastIcon
                    className="ws-arrow"
                    sx={{
                      fontSize: 15,
                      flexShrink: 0,
                      color: palette.maroon[600],
                      opacity: 0.3,
                      transition: `opacity ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
                    }}
                  />
                </Box>
              </Reveal>
            ))}
          </Box>
        ))
      )}
    </>
  );

  if (variant === "page") return <Box>{body}</Box>;

  return (
    <Section tone="paper" id={id}>
      <SectionHeading
        title={
          <>
            {t("resources.worksheets.headline1")}{" "}
            <em>{t("resources.worksheets.headline2")}</em>
          </>
        }
        lede={t("worksheets.heroDesc")}
        action={
          <Typography variant="mono" sx={{ color: palette.textMuted }}>
            {filtered.length} / {WORKSHEETS.length}
          </Typography>
        }
      />
      {body}
    </Section>
  );
}

export default WorksheetLibrary;
