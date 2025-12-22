import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n.ts";
import { styles } from "./problems.ts";

function Problems() {
    const { t } = useTranslation();
    const isRTL = i18n.language === "ar";

    const problemsList = [
        {
            title: t("problems.title1"),
            description: t("problems.desc1"),
            link: "https://www.imo-official.org/problems.aspx",
            color: "#7D1C48",
            icon: "📐",
        },
        {
            title: t("problems.title2"),
            description: t("problems.desc2"),
            link: "/pdfs/problems1.pdf",
            color: "#6C4859",
            icon: "🧮",
        },
        {
            title: t("problems.title3"),
            description: t("problems.desc3"),
            link: "/pdfs/problems2.pdf",
            color: "#FF9F1C",
            icon: "🏆",
        },
        {
            title: t("problems.title4"),
            description: t("problems.desc4"),
            link: "https://www.imo-official.org/results.aspx",
            color: "#FF6F61",
            icon: "🏅",
        },
        {
            title: t("problems.title5"),
            description: t("problems.desc5"),
            link: "https://drive.google.com/file/d/13_yxdhInipKbN7zkbSRJJ3EyF7wKISR8/view",
            color: "#7D1C48",
            icon: "📐",
        },
        {
            title: t("problems.title6"),
            description: t("problems.desc6"),
            link: "https://drive.google.com/file/d/1qxBldC_S7bby4FQjdG74eYEjxzCgz3Fy/view?usp=drive_link",
            color: "#6C4859",
            icon: "🏆",
        },
    ];

    return (
        <Box sx={{ ...styles.container, direction: isRTL ? "rtl" : "ltr" }}>
            <Box sx={styles.heroWrapper}>
                <Typography variant="h3" sx={styles.heroTitle}>
                    {t("problems.heroTitle")} <span style={{ color: "#7D1C48" }}>{t("problems.highlight")}</span>
                </Typography>
                <Typography variant="body1" sx={styles.heroDesc}>
                    {t("problems.heroDesc")}
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        width: "200px",
                        height: 4,
                        backgroundColor: "#7D1C48",
                        borderRadius: 2,
                        mx: "auto",
                        mt: 3,
                        marginBottom: 5,
                    }}
                >
                </Typography>
            </Box>

            <Box sx={styles.grid}>
                {problemsList.map((problem, index) => (
                    <Card key={index} sx={styles.card(problem.color)}>
                        <CardContent>
                            <Box sx={styles.iconBox(problem.color)}>{problem.icon}</Box>
                            <Typography variant="h6" sx={styles.cardTitle}>
                                {problem.title}
                            </Typography>
                            <Typography variant="body2" sx={styles.cardDesc}>
                                {problem.description}
                            </Typography>
                            <Button
                                href={problem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={styles.button(problem.color)}
                            >
                                {t("problems.open")}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Problems;
