import { Box, Typography, Container, Button, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n";
import { page, card, cardContent, iconBox, title, subtitle, button } from "./worksheets";
interface Worksheet {
    title: string;
    subtitle: string;
    link: string;
    color: string;
    icon: string;
}

const worksheets: Worksheet[] = [
    {
        title: "worksheets.heroTitle",
        subtitle: "worksheets.heroDesc",
        link: "/worksheets/all",
        color: "#7D1C48",
        icon: "📝",
    },
];

export default function WorksheetsPage() {
    const { t } = useTranslation();
    const isRTL = i18n.language === "ar";

    return (
        <>

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
            <Box sx={{ ...page, direction: isRTL ? "rtl" : "ltr" }}>

                <Container maxWidth="sm">
                    {worksheets.map((w, index) => (
                        <Card key={index} sx={card} onClick={() => (window.location.href = w.link)}>
                            <CardContent sx={cardContent}>
                                <Box sx={iconBox(w.color)}>{w.icon}</Box>
                                <Typography variant="h4" sx={title}>
                                    {t(w.title)}
                                </Typography>
                                <Typography variant="h6" sx={subtitle(w.color)}>
                                    {t(w.subtitle)}
                                </Typography>
                                <Button variant="contained" sx={button(w.color)}>
                                    {t("worksheets.clickHere")}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Container>
            </Box> </>
    );
}
