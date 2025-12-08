import { Box, Typography } from "@mui/material";
import { styles } from "./partnerStyle.ts";
import { useTranslation } from "react-i18next";

function Partner() {
  const { t } = useTranslation();

  return (
    <>
      <Typography
        sx={{
          ...styles.title,
          fontSize: styles.title.fontSize,
          marginBottom: styles.title.marginBottomResponsive,
        }}
      >
        {t("partners.title")}
      </Typography>

      <Box className="partner" sx={styles.partnerWrapper}>

        <a
          href="https://www.taawon.org/en"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Box
            component="img"
            src="/Partner1.png"
            alt={t("partners.partner1")}
            sx={styles.partnerImage1}
            className="partner-img"
          />
        </a>

        <Box sx={styles.verticalLine} />

        <a
          href="https://moe.edu.ps"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Box
            component="img"
            src="/Partner2.png"
            alt={t("partners.partner2")}
            sx={styles.partnerImage2}
            className="partner-img"
          />
        </a>

        <Box sx={styles.verticalLine} />

        <a
          href="https://www.palast.ps/ar"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Box
            component="img"
            src="/Partner3.jpg"
            alt={t("partners.partner3")}
            sx={styles.partnerImage3}
            className="partner-img"
          />
        </a>
      </Box>
    </>
  );
}

export default Partner;
