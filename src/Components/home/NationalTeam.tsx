import { Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius, alpha } from "../../theme/tokens";
import { Section, SectionHeading, Reveal } from "../ui";

interface Member {
  rank: number;
  key: string;
  image: string;
}

/**
 * The eleven members of the national team.
 *
 * Every member gets the identical card: same size, same frame, same colours,
 * same interactions. Rank is carried as a small neutral counter — it orders the
 * list without ranking the people, so no one on this page is styled as more
 * important than anyone else.
 *
 * (The original data hard-coded a place label per row and had duplicates —
 * "seventh" twice, "eighth" twice. Rank is derived from position instead.)
 */
const TEAM: Member[] = [
  { rank: 1, key: "first", image: "/P1.png" },
  { rank: 2, key: "second", image: "/P2.png" },
  { rank: 3, key: "third", image: "/P3.png" },
  { rank: 4, key: "fourth", image: "/P4.png" },
  { rank: 5, key: "fifth", image: "/P5.png" },
  { rank: 6, key: "sixth", image: "/P6.png" },
  { rank: 7, key: "seventh", image: "/P7.png" },
  { rank: 8, key: "eighth", image: "/P8.png" },
  { rank: 9, key: "ninth", image: "/P9.png" },
  { rank: 10, key: "tenth", image: "/P10.png" },
  { rank: 11, key: "eleventh", image: "/P11.png" },
];

export function NationalTeam() {
  const { t } = useTranslation();

  return (
    <Section tone="paper" id="team" divider>
      <SectionHeading
        title={
          <>
            {t("achievements.headline1")} <em>{t("achievements.headline2")}</em>
          </>
        }
        lede={t("achievements.title")}
        action={
          <Typography variant="mono" sx={{ color: palette.textMuted }}>
            {TEAM.length} {t("team.membersLabel")}
          </Typography>
        }
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {TEAM.map((member, i) => (
          <Reveal key={member.rank} variant="up" delay={Math.min(i * 55, 330)}>
            <MemberCard member={member} />
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}

/** One card, used for every member without exception. */
function MemberCard({ member }: { member: Member }) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: `${radius.md}px`,
        border: `1px solid ${palette.line}`,
        backgroundColor: palette.surface,
        overflow: "hidden",
        transition: `transform ${motion.slow} ${motion.ease}, box-shadow ${motion.slow} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: palette.maroon[200],
          boxShadow: "0 28px 50px -34px rgba(21,15,18,0.42)",
        },
        "&:hover .member-photo": { transform: "scale(1.05)" },
        "&:hover .member-name": { color: palette.maroon[600] },
        "&:hover .member-rank": {
          color: palette.maroon[600],
          borderColor: palette.maroon[200],
          backgroundColor: palette.maroon[50],
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          background: `linear-gradient(165deg, ${palette.surfaceMuted} 0%, ${alpha(
            palette.maroon[100],
            0.75
          )} 100%)`,
        }}
      >
        {/* Quiet concentric marks — texture, not decoration on a person */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            width: "82%",
            aspectRatio: "1",
            borderRadius: "50%",
            border: `1px dashed ${alpha(palette.maroon[400], 0.28)}`,
            bottom: "-24%",
          }}
        />
        <Box
          component="img"
          className="member-photo"
          src={member.image}
          alt={t(`achievements.${member.key}_place_name`)}
          loading="lazy"
          sx={{
            position: "relative",
            height: "94%",
            width: "auto",
            maxWidth: "88%",
            objectFit: "contain",
            objectPosition: "bottom center",
            transformOrigin: "bottom center",
            transition: `transform ${motion.slower} ${motion.ease}`,
            filter: "drop-shadow(0 14px 20px rgba(21,15,18,0.18))",
          }}
        />

        <Typography
          className="member-rank"
          variant="mono"
          sx={{
            position: "absolute",
            top: 10,
            insetInlineStart: 10,
            px: 0.875,
            py: 0.25,
            borderRadius: `${radius.xs}px`,
            fontSize: "0.625rem",
            color: palette.textMuted,
            backgroundColor: "rgba(255,255,255,0.82)",
            border: `1px solid ${palette.line}`,
            backdropFilter: "blur(4px)",
            transition: `all ${motion.base} ${motion.ease}`,
          }}
        >
          {String(member.rank).padStart(2, "0")}
        </Typography>
      </Box>

      <Box
        sx={{
          p: { xs: 1.75, md: 2 },
          borderTop: `1px solid ${palette.line}`,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
        }}
      >
        <Typography
          className="member-name"
          sx={{
            fontFamily: fonts.display,
            fontWeight: 600,
            fontSize: { xs: "0.875rem", md: "0.9375rem" },
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            transition: `color ${motion.base} ${motion.ease}`,
          }}
        >
          {t(`achievements.${member.key}_place_name`)}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: "auto" }}>
          <PlaceOutlinedIcon sx={{ fontSize: 13, color: palette.maroon[400] }} />
          <Typography
            variant="mono"
            sx={{ fontSize: "0.625rem", color: palette.textMuted, letterSpacing: "0.08em" }}
          >
            {t(`achievements.${member.key}_place_cnt`)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NationalTeam;
