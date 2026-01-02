import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n.ts";
import { styles } from "./book.ts";

function Books() {
    const { t } = useTranslation();
    const isRTL = i18n.language === "ar";

    const booksList = [
        {
            title: t("books.title4"),
            description: t("books.desc4"),
            link: "https://drive.google.com/file/d/1tFTD2NoziAWdMKvzqCXZ7dMOPfeE3uS0/view?usp=drive_link",
            color: "#6C4859",
            icon: "📘",
        },
        {
            title: t("books.title5"),
            description: t("books.desc5"),
            link: "https://drive.google.com/file/d/1M8-Cxxo4DL7DMwBHqeUYTqWZitPm69Le/view?usp=drive_link",
            color: "#FF9F1C",
            icon: "📖",
        },
        {
            title: t("books.title1"),
            description: t("books.desc1"),
            link: "https://drive.google.com/file/d/13_yxdhInipKbN7zkbSRJJ3EyF7wKISR8/view",
            color: "#7D1C48",
            icon: "📐",
        },
        {
            title: t("books.title2"),
            description: t("books.desc2"),
            link: "https://drive.google.com/file/d/13N6cRcuQ4XgnHg08AMNqF3jZdHXYHqLx/view?usp=drive_link",
            color: "#FF9F1C",
            icon: "🧮",
        },
        {
            title: t("books.title3"),
            description: t("books.desc3"),
            link: "https://drive.google.com/file/d/1qxBldC_S7bby4FQjdG74eYEjxzCgz3Fy/view?usp=drive_link",
            color: "#6C4859",
            icon: "🏆",
        },
        {
            title: t("books.title6"),
            description: t("books.desc6"),
            link: "https://drive.google.com/file/d/1UWNoKcRrODCCpwoCBu4mUvtO83cRVb_B/view",
            color: "#6C4859",
            icon: "📘",
        },
    ];

    return (
        <Box sx={{ ...styles.container, direction: isRTL ? "rtl" : "ltr" }}>
            <Box sx={styles.heroWrapper}>
                <Typography variant="h3" sx={styles.heroTitle}>
                    {t("books.heroTitle")}{" "}
                    <span style={{ color: "#7D1C48" }}>{t("books.highlight")}</span>
                </Typography>
                <Typography variant="body1" sx={styles.heroDesc}>
                    {t("books.heroDesc")}
                </Typography>
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
                        }}
                    >
                    </Typography>
                </Box>
            </Box>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mb: 4,
                    mt: 4,
                    color: "#7D1C48",
                    textAlign: "center",
                }}
            >
                {t("books.starterTitle")}
            </Typography>

            <Box
                sx={{
                    ...styles.starterGrid,
                    justifyContent: "center"
                }}
            >
                {booksList.slice(0, 3).map((book, index) => (
                    <Card key={index} sx={styles.card(book.color)}>
                        <CardContent>
                            <Box sx={styles.iconBox(book.color)}>{book.icon}</Box>
                            <Typography variant="h6" sx={styles.cardTitle}>
                                {book.title}
                            </Typography>
                            <Typography variant="body2" sx={styles.cardDesc}>
                                {book.description}
                            </Typography>
                            <Button
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={styles.button(book.color)}
                            >
                                {t("books.open")}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Box sx={{ ...styles.starterGrid, mt: 6 }}>
                {booksList.slice(3).map((book, index) => (
                    <Card key={index} sx={styles.card(book.color)}>
                        <CardContent>
                            <Box sx={styles.iconBox(book.color)}>{book.icon}</Box>
                            <Typography variant="h6" sx={styles.cardTitle}>
                                {book.title}
                            </Typography>
                            <Typography variant="body2" sx={styles.cardDesc}>
                                {book.description}
                            </Typography>
                            <Button
                                href={book.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={styles.button(book.color)}
                            >
                                {t("books.open")}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Books;