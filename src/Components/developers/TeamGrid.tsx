import { useState } from "react";
import { Avatar, Box, Button, Container, Stack, Typography } from "@mui/material";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

import { palette } from "../../theme/tokens";
import { MathBackdrop, Reveal } from "../ui";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

/**
 * Credits page, restored to the layout it had before the redesign: one row of
 * identical cards covering the build team and both supervisors, portraits in
 * full colour inside a gradient ring.
 *
 * Kept verbatim from the original implementation — same order, same card
 * metrics, same hover. The only thing that changed around it is the shared
 * page shell (header and footer), which every route now uses.
 */
const developersData: TeamMember[] = [
  {
    name: "developers.team.abdulrahman.name",
    role: "developers.team.abdulrahman.role",
    img: "/3.jpeg",
    bio: "developers.team.abdulrahman.bio",
    github: "https://github.com/AbdulrahmanBadran",
    linkedin: "https://www.linkedin.com/in/abdullrahmanbadran",
  },
  {
    name: "developers.team.waed.name",
    role: "developers.team.waed.role",
    img: "/2.jpeg",
    bio: "developers.team.waed.bio",
    github: "https://github.com/WaedSammar",
    linkedin: "https://www.linkedin.com/in/waed-sammar/",
  },
  {
    name: "developers.team.waad.name",
    role: "developers.team.waad.role",
    img: "/1.jpeg",
    bio: "developers.team.waad.bio",
    github: "https://github.com/waadamer",
    linkedin: "https://www.linkedin.com/in/waad-amer/",
  },
  {
    name: "developers.supervisors.ahmed.name",
    role: "developers.supervisors.ahmed.role",
    img: "/sup2.jpeg",
    bio: "developers.supervisors.ahmed.bio",
    linkedin: "https://www.linkedin.com/in/ahmad-abo-gozeh-824042206/",
  },
  {
    name: "developers.supervisors.mohamed.name",
    role: "developers.supervisors.mohamed.role",
    img: "/sup1.jpg",
    bio: "developers.supervisors.mohamed.bio",
    linkedin: "https://www.linkedin.com/in/mohamed-khalil-52b0b2266/",
  },
];

const styles = {
  page: {
    padding: { xs: "10px 16px", sm: "10px 40px" },
    background: "#f2f2f2",
  },

  contentWrapper: {
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: { xs: "34px", sm: "44px", md: "50px" },
    fontWeight: 900,
    color: "#1f1d1dff",
    letterSpacing: "-0.03em",
    marginBottom: "20px",
    marginTop: "15px",
  },

  divider: {
    width: "50px",
    height: "5px",
    background: "#7A1E3C",
    borderRadius: "2px",
    margin: "0 auto 50px",
  },

  section: {
    marginBottom: "60px",
  },

  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "32px 20px 24px",
    textAlign: "center",
    flex: "1 1 0",
    minWidth: "160px",
    maxWidth: "240px",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "default",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },

  cardHover: {
    transform: "translateY(-1px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
  },

  avatarWrapper: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "0 auto 18px",
    padding: "3px",
    background: "linear-gradient(135deg, #7A1E3C 0%, #d4748a 100%)",
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },

  name: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a1a1a",
    letterSpacing: "-0.01em",
    marginBottom: "4px",
  },

  role: {
    fontSize: "10px",
    color: "#7A1E3C",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },

  bio: {
    fontSize: "12.5px",
    color: "#666",
    lineHeight: 1.6,
  },

  socialButton: {
    width: "30px",
    height: "30px",
    minWidth: "30px",
    borderRadius: "8px",
    background: "transparent",
    border: "1px solid #e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "#555",
    padding: 0,
    "&:hover": {
      background: "#7A1E3C",
      border: "1px solid #7A1E3C",
      color: "#ffffff",
    },
  },
} as const;

export function TeamGrid() {
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState<number | null>(null);

  const renderCard = (dev: TeamMember, index: number) => {
    const isHovered = hovered === index;
    return (
      <Box
        key={index}
        sx={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
        }}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        <Box sx={styles.avatarWrapper}>
          <Avatar src={dev.img} alt={t(dev.name)} sx={styles.avatar} />
        </Box>

        <Typography sx={styles.name}>{t(dev.name)}</Typography>
        <Typography sx={styles.role}>{t(dev.role)}</Typography>
        <Typography sx={styles.bio}>{t(dev.bio)}</Typography>

        <Stack direction="row" spacing={1} justifyContent="center" mt={2.5}>
          {dev.github && (
            <Button
              sx={styles.socialButton}
              component="a"
              href={dev.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(dev.name)} GitHub`}
            >
              <Github size={15} />
            </Button>
          )}
          {dev.linkedin && (
            <Button
              sx={styles.socialButton}
              component="a"
              href={dev.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(dev.name)} LinkedIn`}
            >
              <Linkedin size={15} />
            </Button>
          )}
        </Stack>
      </Box>
    );
  };

  return (
    <>
      {/* Page intro — kept from the redesign */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: palette.canvas,
          borderBottom: `1px solid ${palette.line}`,
          pt: { xs: 6, md: 9 },
          pb: { xs: 5, md: 7 },
        }}
      >
        <MathBackdrop tone="light" variant="quiet" />
        <Container sx={{ position: "relative" }}>
          <Reveal variant="fade">
            <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 2 }}>
              {t("developers.eyebrow")}
            </Typography>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <Typography variant="h1" component="h1" sx={{ maxWidth: "14ch", mb: 2.5 }}>
              {t("developers.headline1")}
              <Box
                component="span"
                sx={{ color: palette.maroon[600], fontStyle: "italic", fontWeight: 300 }}
              >
                {" "}
                {t("developers.headline2")}
              </Box>
            </Typography>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <Typography variant="lede" component="p" sx={{ maxWidth: "50ch" }}>
              {t("developers.lede")}
            </Typography>
          </Reveal>
        </Container>
      </Box>

      <Box
        sx={styles.page}
        style={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",
          textAlign: i18n.language === "ar" ? "right" : "left",
        }}
      >
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>{t("developers.title")}</Typography>
        <Box sx={styles.divider} />

        <Box sx={styles.section}>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            justifyContent="center"
            alignItems={{ xs: "center", sm: "stretch" }}
            sx={{ gap: "20px", direction: "ltr", flexWrap: "wrap" }}
          >
            {developersData.map((dev, i) => renderCard(dev, i))}
          </Stack>
        </Box>
      </Box>
      </Box>
    </>
  );
}

export default TeamGrid;
