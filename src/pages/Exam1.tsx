import { alpha, Box, Button, Card, CardContent, Container, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { HeaderInner, HeaderLeft, HeaderWrapper } from "../Components/ResourcesComponents/header/header";
import { Logo } from "../Components/HomeComponents/Navbar/NavbarStyle";


interface Worksheet {
    title: string;
    link: string;
    directorate: string;
    icon: string;
}



const worksheets: Worksheet[] = [
    {
        title: "worksheets.jenin2025",
        link: "https://drive.google.com/file/d/12jc9IiI5QWN7rai_rfFgyhx-2omfzsVw/view?usp=drive_link",
        directorate: "Jenin",
        icon: "📘",
    },
    {
        title: "worksheets.qabatiyaAnswers2",
        link: "https://drive.google.com/file/d/1Nevq_VQueKyQiija0VAKfgZg2t5yyMHZ/view?usp=drive_link",
        directorate: "Qabatiya",
        icon: "📖",
    },
    {
        title: "worksheets.qabatiyaMath",
        link: "https://drive.google.com/file/d/1LBgavGJUy9rTiNq65APpCvPowhLLYwnA/view?usp=drive_link",
        directorate: "Qabatiya",
        icon: "📐",
    },
    {
        title: "worksheets.yattaExam",
        link: "https://drive.google.com/file/d/1jZoyfIEa_qTY6EYaCBkYxqvNXyRUzeXq/view?usp=drive_link",
        directorate: "Yatta",
        icon: "📝",
    },
    {
        title: "worksheets.birzeit2025",
        link: "https://drive.google.com/file/d/1L5tm7mpicaaw_JS7gZIhOmc-fUFJMdmO/view?usp=drive_link",
        directorate: "Birzeit",
        icon: "🏆",
    },
    {
        title: "worksheets.qalqilyaCompetition",
        link: "https://drive.google.com/file/d/1sTHWPPSovFOXHCULKp62Ak_shSoDGDXX/view?usp=drive_link",
        directorate: "Qalqilya",
        icon: "🎯",
    },
    {
        title: "worksheets.jerusalem2025",
        link: "https://drive.google.com/file/d/1o3p185eQ-6CWho51g3H3al5Hq5watSpR/view?usp=drive_link",
        directorate: "Jerusalem",
        icon: "📘",
    },
    {
        title: "worksheets.jerusalemAnswers",
        link: "https://drive.google.com/file/d/1W-8rO6c0msbRUrSWZO8ULhsZVFqf-Xfh/view?usp=drive_link",
        directorate: "Jerusalem",
        icon: "📖",
    },
    {
        title: "worksheets.tulkarmFinal",
        link: "https://drive.google.com/file/d/1yeTrpFE5WuM_P7xiJ912dT99NXqe0JNw/view?usp=drive_link",
        directorate: "Tulkarm",
        icon: "📐",
    },
    {
        title: "worksheets.tulkarmSolutions",
        link: "https://drive.google.com/file/d/1vmV308KK-qk7dtK0ohqvFW9dr3bYz-yI/view?usp=drive_link",
        directorate: "Tulkarm",
        icon: "📝",
    },
    {
        title: "worksheets.ramallahLast",
        link: "https://drive.google.com/file/d/1mGJbwnQP3wMnbd4UFFG-C6-i0tg1iR-9/view?usp=drive_link",
        directorate: "RamallahBireh",
        icon: "🏆",
    },
    {
        title: "worksheets.ramallahFinalAnswers",
        link: "https://drive.google.com/file/d/1RVwZPTIH014r9CK9SGm0jqOYDOpL-N1z/view?usp=drive_link",
        directorate: "RamallahBireh",
        icon: "📖",
    },
    {
        title: "worksheets.nablusFinal",
        link: "https://drive.google.com/file/d/1R6ZvFhbKt3k9Kn_dSKD89ViBKFIXuak7/view?usp=drive_link",
        directorate: "Nablus",
        icon: "📘",
    },
    {
        title: "worksheets.nablusAnswers",
        link: "https://drive.google.com/file/d/1u4eUNo0Gjq4dY_YdcbK1RJFkDJQeu4vQ/view?usp=drive_link",
        directorate: "Nablus",
        icon: "📖",
    },
    {
        title: "worksheets.nablusEng",
        link: "https://drive.google.com/file/d/13ylGGB3oli18oYVN0sgfEUJkM1Z7ggzE/view?usp=drive_link",
        directorate: "Nablus",
        icon: "📝",
    },
    {
        title: "worksheets.nablusQuestions",
        link: "https://drive.google.com/file/d/17jDUvIss-lya-ITciqyo5m094fDaq6_1/view?usp=drive_link",
        directorate: "Nablus",
        icon: "📐",
    },
    {
        title: "worksheets.salfitAnswers",
        link: "https://drive.google.com/file/d/1m85o8CgVl9OkF-Ok4VOlZ7Fw1wipwpqn/view?usp=drive_link",
        directorate: "Salfit",
        icon: "📖",
    },
    {
        title: "worksheets.jericho2025",
        link: "https://drive.google.com/file/d/1QMfY5cl_fTAl9wN086p48-EDm6BVmYbv/view?usp=sharing",
        directorate: "Jericho",
        icon: "📘",
    },
];

const colors: Record<string, string> = {
    Jenin: "#7D1C48",
    Qabatiya: "#FF9F1C",
    Yatta: "#FF3C3C",
    Birzeit: "#FF6B1C",
    Qalqilya: "#FFF71C",
    Jerusalem: "#A0FF1C",
    Tulkarm: "#1CDFFF",
    RamallahBireh: "#241CFF",
    Nablus: "#B71CFF",
    Salfit: "#FF1CD9",
    Jericho: "#FF1C27",
};
export default function Exam1() {
    const { t } = useTranslation();
    const isRTL = i18n.language === "ar";

    return (
        <>
            <HeaderWrapper>
                <Container maxWidth="lg">
                    <HeaderInner isrtl={isRTL}>
                        <HeaderLeft isrtl={isRTL}>
                            <Logo>
                                <Box
                                    component="img"
                                    src="/olm pal math22.png"
                                    alt="logo"
                                    sx={{ width: { xs: "100px", md: "150px" }, height: { xs: "60px", md: "75px" } }}
                                />
                            </Logo>
                            <Button
                                component={Link}
                                href="/resources"
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: "10px",
                                    borderColor: "#7A1E3C",
                                    color: "#7A1E3C",
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                }}
                            >
                                {t("playlist.headerBack")}
                            </Button>
                        </HeaderLeft>
                        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, width: { xs: "100%", sm: "auto" } }}>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: "#7A1E3C", textTransform: "none", fontSize: "1rem", px: 3, borderRadius: "10px" }}
                            >
                                {t("externalResources.login")}
                            </Button>
                            <Button
                                onClick={() => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")}
                                variant="outlined"
                                sx={{
                                    minWidth: "95px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                    borderColor: "#7A1E3C",
                                    color: "#7A1E3C",
                                    backgroundColor: "#fff",
                                    textTransform: "none",
                                }}
                            >
                                {i18n.language === "ar" ? "English" : "العربية"}
                            </Button>
                        </Box>
                    </HeaderInner>
                </Container>
            </HeaderWrapper>

            <Box sx={{ direction: isRTL ? "rtl" : "ltr", textAlign: "center", margin: { xs: 2, sm: 4, md: 6 }, px: { xs: 2, sm: 4, md: 2 } }}>
                <Typography variant="h3" sx={{ color: "#333", fontWeight: "bold", m: "20px"}}>
                    {t("worksheets.heroTitle")} <span style={{ color: "#7D1C48" }}>{t("worksheets.heroDesc")}</span>
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(auto-fill, minmax(300px, 1fr))" },
                        mt: 6,
                    }}
                >
                    {worksheets.map((w) => (
                        <Card
                            key={w.link}
                            sx={{
                                position: "relative",
                                borderRadius: 3,
                                overflow: "hidden",
                                background: "#fff",
                                border: "1px solid",
                                borderColor: "divider",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: `0 12px 40px ${alpha(colors[w.directorate], 0.25)}`,
                                    borderColor: colors[w.directorate],
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 5,
                                    background: `linear-gradient(90deg, ${colors[w.directorate]}, ${alpha(colors[w.directorate], 0.7)})`,
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3.5, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                <Box sx={{ width: 56, height: 56, borderRadius: 2, background: alpha(colors[w.directorate], 0.1), display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5, fontSize: "1.75rem" }}>
                                    {w.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.4, color: "text.primary" }}>
                                    {t(w.title)}
                                </Typography>
                                <Button
                                    href={w.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 2.5,
                                        fontWeight: 600,
                                        fontSize: "0.95rem",
                                        textTransform: "none",
                                        background: colors[w.directorate],
                                        "&:hover": { background: colors[w.directorate], filter: "brightness(1.1)", transform: "translateY(-2px)" },
                                    }}
                                >
                                    Open
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </>
    );
}