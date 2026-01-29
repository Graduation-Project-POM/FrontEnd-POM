import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { styles } from "./materialStyle";
import { useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation();
    const PDFList = [
        {
            title: t("winterCamp.pdfs.title1"),
            description: "",
            link: "https://drive.google.com/file/d/1D6vwVIeRmdyOQwO9Em99fEmNIKOonihZ/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title2"),
            description: "",
            link: "https://drive.google.com/file/d/18DaDTu9hH0JFqndEW7luUnhpTHt-XkqF/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title3"),
            description: "",
            link: "https://drive.google.com/file/d/1tPTdEWyNZaiQkNLaQ5y3236GRFZ2DbPa/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title4"),
            description: "",
            link: "https://drive.google.com/file/d/1NFokVPpB43y44WH6krX083hBJPMTHAym/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title5"),
            description: "",
            link: "https://drive.google.com/file/d/1c-UdNnIBPkYbJs_2Uadrhs-iC9jcaSoc/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title6"),
            description: "",
            link: "https://drive.google.com/file/d/1EmyQt4AqUDAwB2AEcUtweREwhbwHqG3p/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title7"),
            description: "",
            link: "https://drive.google.com/file/d/1-DKa9SZ2RJESWvxitHpEmfOea0TErKIP/view?usp=sharing",
        },
        {
            title: t("winterCamp.pdfs.title8"),
            description: "",
            link: "https://drive.google.com/file/d/1Dvrg_3_bXYUu7wEovu_fd89dVzBLQ-Mp/view?usp=sharing",
        },
    ];
    return (
        <Box sx={{ minHeight: "100vh", background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)", py: 6 }}>
            <Box sx={{ mt: 4, mb: 2, textAlign: "center" }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        color: "#7B2D47",
                        mb: 1,
                        textShadow: "0 2px 8px rgba(123, 45, 71, 0.2)",
                        letterSpacing: "-1px",
                    }}
                >
                    {t("winterCamp.Day1.title")}
                </Typography>
                <Box sx={styles.container}>
                    {PDFList.map((item, index) => (
                        <Card key={index} sx={styles.getCard(index)}>
                            <CardContent sx={styles.cardContent}>
                                <Box className="pdf-icon" sx={styles.getPdfIcon(index)}>
                                    <Typography sx={styles.pdfLabel}>PDF</Typography>
                                </Box>

                                <Typography variant="h6" sx={styles.cardTitle}>
                                    {item.title}
                                </Typography>

                                {item.description && (
                                    <Typography variant="body2" sx={styles.cardDescription}>
                                        {item.description}
                                    </Typography>
                                )}

                                <Button
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    disableElevation
                                    sx={styles.button}
                                >
                                    {t("books.open")}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
