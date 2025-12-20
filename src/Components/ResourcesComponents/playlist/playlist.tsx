import { Box, Typography, Container, Button, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n";
import { page, card, cardContent, iconBox, title, button } from "./playlist";
interface playlist {
    title: string;
    desc: string;
    link: string;
    color: string;
    icon: string;
}

const playlist: playlist[] = [
    {
        title: "playlist.heroTitle",
        desc: "playlist.heroDesc",
        link: "https://www.youtube.com/watch?v=NV_YIWpNajs&list=PL9EgwsgADtexVP_Fj3WrmpgNtXlv0-fgl",
        color: "#a33165",
        icon: "🎥",
    },
    {
        title: "playlist.heroTitle",
        desc: "playlist.heroDesc2",
        link: "https://www.youtube.com/watch?v=HPILHO7NzcY&list=PL9EgwsgADteyGLxBjUNBL2GtWUXWM-dga",
        color: "#FF6F61",
        icon: "📺",
    }, {
        title: "playlist.heroTitle",
        desc: "playlist.heroDesc3",
        link: "https://www.youtube.com/watch?v=5mE7J7Vd1U0&list=PL9EgwsgADteyL3CsO5TDeay_4ntBPFc46",
        color: "#FFA500",
        icon: "📹",
    }
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


                <Container
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 4,
                    }}>
                    {playlist.map((p, index) => (
                        <Card key={index} sx={card(p.color)} onClick={() => window.open(p.link, "_blank")}>
                            <CardContent sx={cardContent}>
                                <Box sx={iconBox(p.color)}>{p.icon}</Box>
                                <Typography variant="h4" sx={title}>
                                    {t(p.title)}
                                </Typography>
                                <Typography variant="h5" sx={{ mb: 4, textAlign: "center", color: "#7D1C48", fontWeight: 500 }}>
                                    {t(p.desc)}
                                </Typography>
                                <Button variant="contained" component="a" sx={button(p.color)}>
                                    {t("playlist.viewPlaylist")}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Container>
            </Box>  </>
    );
}
