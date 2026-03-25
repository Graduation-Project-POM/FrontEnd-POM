import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styles } from "./training";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n";
import { Link } from "react-router-dom";

function TrainingField() {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const resourceData = [
    {
      title: t("training.resources.work.title"),
      subtitle: t("training.resources.work.subtitle"),
      icon: <Box sx={styles.image} component="img" src="/training1.png" />,
    },
    {
      title: t("training.resources.external.title"),
      subtitle: t("training.resources.external.subtitle"),
      icon: <Box sx={styles.image} component="img" src="/training2.png" />,
    },
    {
      title: t("training.resources.practice.title"),
      subtitle: t("training.resources.practice.subtitle"),
      icon: <Box sx={styles.image} component="img" src="/training3.png" />,
    },
    {
      title: t("training.resources.video.title"),
      subtitle: t("training.resources.video.subtitle"),
      icon: <Box sx={styles.image} component="img" src="/training4.png" />,
    },
    {
      title: t("training.resources.math.title"),
      subtitle: t("training.resources.math.subtitle"),
      icon: <Box sx={styles.image} component="img" src="/training5.png" />,
    },
  ];

  const [index, setIndex] = useState(2);

  const getScale = (i: number) => (i === index ? 1.15 : 0.95);
  const getOpacity = (i: number) => (i === index ? 1 : 0.7);

  return (
    <Box sx={{ justifyContent: "center", px: { xs: 2, md: 10 }, py: 5 }}>
      <Typography sx={styles.title}>{t("training.title")}</Typography>

      <Box
        sx={{
          ...styles.cardsWrapper,
          flexDirection: isRTL ? "row-reverse" : "row",
        }}
      >
        {resourceData.map((card, i) => (
          <Paper
            key={i}
            elevation={i === index ? 8 : 2}
            onMouseEnter={() => setIndex(i)} 
            onClick={() => setIndex(i)}   
            sx={{
              ...styles.card,
              transform: `scale(${getScale(i)})`,
              opacity: getOpacity(i),
              boxShadow:
                i === index
                  ? "0px 10px 25px rgba(122,28,73,0.35)"
                  : "0px 3px 10px rgba(0,0,0,0.15)",
              border:
                i === index
                  ? "2px solid #7A1731"
                  : "2px solid transparent",
            }}
          >
            {card.icon}

            <Typography sx={styles.cardTitle}>
              {card.title}
            </Typography>

            <Typography sx={styles.cardSubtitle}>
              {card.subtitle}
            </Typography>

            <Link
              to="/resources"
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 2,
                  cursor: "pointer",
                  color: "#fff",
                  transition: "0.3s",
                  "&:hover": { gap: 2},
                }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                  {t("training.learnMore")}
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Box>
            </Link>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default TrainingField;
