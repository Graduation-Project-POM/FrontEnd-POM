import { Box, Typography, Container, Button, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n";
import { page, card, cardContent, iconBox, title, button } from "./playlist";
interface playlist {
    title: string;
    link: string;
    color: string;
    icon: string;
}

const playlist: playlist[] = [
    {
        title: "playlist.heroTitle",
        link: "https://youtube.com/playlist?list=PL9EgwsgADteyL3CsO5TDeay_4ntBPFc46&si=hHkdxWKNljOXBPJl",
        color: "#a33165",
        icon: "🎥",
    },
];

export default function Playlist() {
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
                        mt: 10,
                        marginBottom: 5,
                    }}
                >
                </Typography>
            </Box>

            <Box sx={{ ...page, direction: isRTL ? "rtl" : "ltr" }}>


                <Container maxWidth="sm">
                    {playlist.map((p, index) => (
                        <Card key={index} sx={card} onClick={() => (window.location.href = p.link)}>
                            <CardContent sx={cardContent}>
                                <Box sx={iconBox(p.color)}>{p.icon}</Box>
                                <Typography variant="h4" sx={title}>
                                    {t(p.title)}
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 4, textAlign: "center" , color: "#7D1C48",fontWeight:500}}>
                                    {t("playlist.heroDesc")}
                                </Typography>

                                <Button variant="contained" sx={button(p.color)}>
                                    {t("playlist.viewPlaylist")}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Container>
            </Box>  </>
    );
}
