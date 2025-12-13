import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n.ts";
import { styles } from "./book.ts";

function Books() {
    const { t } = useTranslation();
    const isRTL = i18n.language === "ar";

    const booksList = [
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
            link: "/pdfs/book1.pdf",
            color: "#6C4859",
            icon: "🧮",
        },
        {
            title: t("books.title3"),
            description: t("books.desc3"),
            link: "/pdfs/book2.pdf",
            color: "#FF9F1C",
            icon: "🏆",
        },
    ];

    return (
        <Box sx={{ ...styles.container, direction: isRTL ? "rtl" : "ltr" }}>
            <Box sx={styles.heroWrapper}>
                <Typography variant="h3" sx={styles.heroTitle}>
                    {t("books.heroTitle")} <span style={{ color: "#7D1C48" }}>{t("books.highlight")}</span>
                </Typography>
                <Typography variant="body1" sx={styles.heroDesc}>
                    {t("books.heroDesc")}
                </Typography>
            </Box>

            <Box sx={styles.grid}>
                {booksList.map((book, index) => (
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
