import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { Award } from "lucide-react";
import { useTranslation } from "react-i18next";

import { palette, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, Reveal, SearchField, FilterPill, EmptyState } from "../ui";
import { STUDENTS } from "../../data/camp";
import FilterRail from "./FilterRail";

interface StudentRecord {
  id: number;
  image: string;
  focus?: string;
  name: string;
  city: string;
  school: string;
}

export function CampRoster() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [directorate, setDirectorate] = useState("all");

  const records = useMemo<StudentRecord[]>(
    () =>
      STUDENTS.map((s) => ({
        id: s.id,
        image: s.image,
        focus: s.focus,
        name: t(`students.${s.key}.name`),
        city: t(`students.${s.key}.city`),
        school: t(`students.${s.key}.school`),
      })),
    [t]
  );

  const directorates = useMemo(() => {
    const counts = new Map<string, number>();
    records.forEach((r) => counts.set(r.city, (counts.get(r.city) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [records]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return records.filter((r) => {
      if (directorate !== "all" && r.city !== directorate) return false;
      if (!q) return true;
      return `${r.name} ${r.city} ${r.school}`.toLowerCase().includes(q);
    });
  }, [records, query, directorate]);

  return (
    <Section tone="muted" id="students">
      <SectionHeading
        title={
          <>
            {t("camp.rosterHeadline1")} <em>{t("camp.rosterHeadline2")}</em>
          </>
        }
        lede={
          <>
            {t("studentsCard.title")}{" "}
            <Box component="span" sx={{ opacity: 0.75 }}>
              {t("studentsCard.subtitle")}
            </Box>
          </>
        }
        action={
          <SearchField
            value={query}
            onChange={setQuery}
            placeholder={t("camp.rosterSearch")}
            sx={{ minWidth: { xs: "100%", md: 300 } }}
          />
        }
      />

      <FilterRail ariaLabel={t("camp.allDirectorates")}>
        <FilterPill
          active={directorate === "all"}
          onClick={() => setDirectorate("all")}
          count={records.length}
        >
          {t("camp.allDirectorates")}
        </FilterPill>
        {directorates.map(([city, count]) => (
          <FilterPill
            key={city}
            active={directorate === city}
            onClick={() => setDirectorate(city)}
            count={count}
          >
            {city}
          </FilterPill>
        ))}
      </FilterRail>

      {filtered.length === 0 ? (
        <Box sx={{ mt: 4 }}>
          <EmptyState title={t("camp.rosterEmpty")} hint={t("resources.empty.hint")} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            columnGap: { xs: 2.5, md: 3 },
            rowGap: { xs: 8, md: 9 },
            mt: { xs: 9, md: 10 },
            maxWidth: 1400,
            mx: "auto",
          }}
        >
          {filtered.map((s, i) => (
            <Reveal key={s.id} variant="up" delay={Math.min(i * 25, 300)}>
              <StudentCard student={s} />
            </Reveal>
          ))}
        </Box>
      )}
    </Section>
  );
}

function StudentCard({ student }: { student: StudentRecord }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        width: "100%",
        maxWidth: 266,
        mx: "auto",
        pt: 10,
        pb: 2.5,
        px: 2,
        borderRadius: `${radius.md}px`,
        backgroundColor: palette.surface,
        border: `1px solid ${palette.line}`,
        boxShadow: "0 4px 16px -10px rgba(21,15,18,0.35)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        transition: `transform ${motion.snapSlow} ${motion.easeSnap}, box-shadow ${motion.snapSlow} ${motion.easeSnap}, border-color ${motion.snap} ${motion.easeSnap}`,
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: palette.maroon[200],
          boxShadow: "0 24px 40px -28px rgba(21,15,18,0.45)",
        },
        "&:hover .sc-photo": { transform: "translateX(-50%) scale(1.04)" },
        "&:hover .sc-name": { color: palette.maroon[700] },
      }}
    >
      <Box
        className="sc-photo"
        sx={{
          position: "absolute",
          top: -44,
          left: "50%",
          transform: "translateX(-50%)",
          width: 116,
          height: 116,
          transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
        }}
      >
        <Box
          component="img"
          src={student.image}
          alt={student.name}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: student.focus ?? "top center",
            border: `3px solid ${palette.surface}`,
            outline: `1px solid ${palette.maroon[200]}`,
            backgroundColor: palette.surfaceSunken,
            boxShadow: "0 10px 22px -12px rgba(21,15,18,0.5)",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 6,
            insetInlineEnd: 0,
            width: 24,
            height: 24,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            backgroundColor: palette.maroon[600],
            border: `2px solid ${palette.surface}`,
          }}
        >
          <Award size={12} color="#fff" />
        </Box>
      </Box>

      <Typography
        className="sc-name"
        sx={{
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: 1.3,
          color: palette.maroon[600],
          transition: `color ${motion.snap} ${motion.easeSnap}`,
        }}
      >
        {student.name}
      </Typography>

      <Typography
        sx={{
          display: "inline-block",
          px: 1.5,
          py: 0.75,
          borderRadius: `${radius.sm}px`,
          backgroundColor: palette.maroon[600],
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 500,
          lineHeight: 1.35,
        }}
      >
        {student.school}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5, mt: 0.5 }}>
        <LocationOn sx={{ fontSize: 16, color: palette.textMuted }} />
        <Typography sx={{ fontSize: "0.8125rem", color: palette.textSecondary }}>
          {student.city}
        </Typography>
      </Box>
    </Box>
  );
}

export default CampRoster;
