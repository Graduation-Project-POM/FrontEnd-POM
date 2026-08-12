import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion } from "../../theme/tokens";
import { Section, SectionHeading, Reveal, FilterPill } from "../ui";
import { PEOPLE, PEOPLE_GROUPS, type PeopleGroup } from "../../data/camp";

const GROUP_LABEL: Record<PeopleGroup, string> = {
  partners: "sections.partners",
  speakers: "sections.speakers_name",
  trainers: "sections.trainers",
  supervisors: "sections.supervisors",
};

/**
 * The people behind the camp, as a roster.
 *
 * Sixteen identical bordered cards across four repeated headings became one
 * filtered list: portrait, name, role, one line of biography, separated by
 * hairlines. Reads like a programme, scans like a directory.
 */
export function CampPeople() {
  const { t } = useTranslation();
  const [group, setGroup] = useState<PeopleGroup>("speakers");
  const people = PEOPLE[group];

  return (
    <Section tone="paper" id="people">
      <SectionHeading
        title={
          <>
            {t("camp.peopleHeadline1")} <em>{t("camp.peopleHeadline2")}</em>
          </>
        }
        lede={t("camp.peopleLede")}
        action={
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {PEOPLE_GROUPS.map((g) => (
              <FilterPill
                key={g}
                active={group === g}
                onClick={() => setGroup(g)}
                count={PEOPLE[g].length}
              >
                {t(GROUP_LABEL[g])}
              </FilterPill>
            ))}
          </Box>
        }
      />

      <Box
        key={group}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
          columnGap: 6,
          borderTop: `1px solid ${palette.lineStrong}`,
        }}
      >
        {people.map((p, i) => (
          <Reveal key={p.nameKey} variant="up" delay={Math.min(i * 70, 320)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: 2.5, md: 3.5 },
                py: { xs: 3.5, md: 4.5 },
                borderBottom: `1px solid ${palette.line}`,
                "&:hover .person-photo": {
                  transform: "scale(1.05)",
                  borderColor: palette.maroon[400],
                },
                "&:hover .person-name": { color: palette.maroon[600] },
              }}
            >
              <Box
                className="person-photo"
                sx={{
                  flexShrink: 0,
                  // Portraits were too small to recognise anyone; roughly
                  // 1.5× larger, with the row padding opened up to match.
                  width: { xs: 108, sm: 124, md: 140 },
                  height: { xs: 108, sm: 124, md: 140 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `1px solid ${palette.line}`,
                  backgroundColor: palette.surfaceSunken,
                  transition: `transform ${motion.snapSlow} ${motion.easeSnap}, border-color ${motion.snap} ${motion.easeSnap}`,
                }}
              >
                <Box
                  component="img"
                  src={p.image}
                  alt=""
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  className="person-name"
                  sx={{
                    fontFamily: fonts.display,
                    fontWeight: 700,
                    fontSize: { xs: "1.0625rem", md: "1.25rem" },
                    letterSpacing: "-0.015em",
                    lineHeight: 1.25,
                    transition: `color ${motion.snap} ${motion.easeSnap}`,
                  }}
                >
                  {t(p.nameKey)}
                </Typography>

                {p.subtitleKey && (
                  <Typography
                    variant="eyebrow"
                    sx={{ display: "block", color: palette.maroon[500], mt: 1, mb: 1.25 }}
                  >
                    {t(p.subtitleKey)}
                  </Typography>
                )}

                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: palette.textSecondary,
                    mt: p.subtitleKey ? 0 : 1,
                  }}
                >
                  {t(p.descKey)}
                </Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}

export default CampPeople;
