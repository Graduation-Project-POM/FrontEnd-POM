import { useState } from "react";
import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { styles } from "./developersStyles";
import Footer from "../WinterCampComponents/footer/CampFooter";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

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
  }
];

export function Developer() {
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
            sx={{ gap: "20px", direction: "ltr", flexWrap: "wrap" }}
          >
            {developersData.map((dev, i) =>
              renderCard(dev, i)
            )}
          </Stack>
        </Box>
      </Box>
      
    </Box>
    
    <Footer />
    </>
  );
}

export default Developer;