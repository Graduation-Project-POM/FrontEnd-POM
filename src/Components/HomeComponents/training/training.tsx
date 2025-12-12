import { useState } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import {
  ArrowBackIosNew as ArrowBackIosNewIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  ArrowForward as ArrowForwardIcon
} from "@mui/icons-material";
import { styles } from "./training.ts";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n.ts";
import { Link } from "react-router-dom";

function TrainingField() {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar"


  const resourceData = [
    { title: t("training.resources.work.title"), subtitle: t("training.resources.work.subtitle"), icon: <Box sx={styles.image} component="img" src="/training1.png" /> },
    { title: t("training.resources.external.title"), subtitle: t("training.resources.external.subtitle"), icon: <Box sx={styles.image} component="img" src="/training2.png" /> },
    { title: t("training.resources.practice.title"), subtitle: t("training.resources.practice.subtitle"), icon: <Box sx={styles.image} component="img" src="/training3.png" /> },
    { title: t("training.resources.video.title"), subtitle: t("training.resources.video.subtitle"), icon: <Box sx={styles.image} component="img" src="/training4.png" /> },
    { title: t("training.resources.math.title"), subtitle: t("training.resources.math.subtitle"), icon: <Box sx={styles.image} component="img" src="/training5.png" /> },
  ];

  const [index, setIndex] = useState(2);

  const handleNext = () => setIndex((prev) => (prev + 1) % resourceData.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + resourceData.length) % resourceData.length);

  return (
    <Box sx={{ justifyContent: "center", px: { xs: 2, md: 10 }, py: 5 }}>
      <Typography sx={styles.title}>{t("training.title")}</Typography>

      <Box sx={styles.control}>
        <IconButton onClick={handlePrev} sx={{ ...styles.controlBtn, transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ ...styles.controlBtn, transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={styles.cardsWrapper}>
        {resourceData.map((card, i) => (
          <Paper
            key={i}
            elevation={i === index ? 8 : 1}
            sx={{
              ...styles.card,
              transform: `scale(${i === index ? 1.15 : 1})`,
              opacity: i === index ? 1 : 0.8,
              boxShadow: i === index ? "0px 8px 25px rgba(122,28,73,0.35)" : "0px 2px 8px rgba(0,0,0,0.15)",
              transition: "all 0.35s ease",
            }}
          >
            {card.icon}
            <Typography sx={styles.cardTitle}>{card.title}</Typography>
            <Typography sx={styles.cardSubtitle}>{card.subtitle}</Typography>
            <Link
              to="/resources"
              onClick={() => { window.scrollTo(0, 0); }}
              style={{ textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2, cursor: "pointer", color: "#fff", transition: "0.3s", "&:hover": { gap: 2 } }}>
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
