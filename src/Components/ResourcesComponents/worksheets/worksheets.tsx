import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n.ts";
import { styles } from "./worksheets.ts";

function Worksheets() {
    const { t } = useTranslation();
    const isRTL = i18n.language === "ar";
    const [filter, setFilter] = useState("All");

    const sheetsList = [
        {
            title: t("sheets.worksheets.jenin2025"),
            description: t("sheets.desc.jenin2025"),
            link: "https://drive.google.com/file/d/12jc9IiI5QWN7rai_rfFgyhx-2omfzsVw/view?usp=drive_link",
            directorate: "Jenin",
            color: "#7D1C48",
            icon: "📘"
        },
        {
            title: t("sheets.worksheets.qabatiyaAnswers2"),
            description: t("sheets.desc.qabatiyaAnswers2"),
            link: "https://drive.google.com/file/d/1Nevq_VQueKyQiija0VAKfgZg2t5yyMHZ/view?usp=drive_link",
            directorate: "Qabatiya",
            color: "#FF9F1C",
            icon: "📖"
        },
        {
            title: t("sheets.worksheets.qabatiyaMath"),
            description: t("sheets.desc.qabatiyaMath"),
            link: "https://drive.google.com/file/d/1LBgavGJUy9rTiNq65APpCvPowhLLYwnA/view?usp=drive_link",
            directorate: "Qabatiya",
            color: "#6C4859",
            icon: "📐"
        },
        {
            title: t("sheets.worksheets.yattaExam"),
            description: t("sheets.desc.yattaExam"),
            link: "https://drive.google.com/file/d/1jZoyfIEa_qTY6EYaCBkYxqvNXyRUzeXq/view?usp=drive_link",
            directorate: "Yatta",
            color: "#FF3C3C",
            icon: "📝"
        },
        {
            title: t("sheets.worksheets.birzeit2025"),
            description: t("sheets.desc.birzeit2025"),
            link: "https://drive.google.com/file/d/1L5tm7mpicaaw_JS7gZIhOmc-fUFJMdmO/view?usp=drive_link",
            directorate: "Birzeit",
            color: "#FF6B1C",
            icon: "🏆"
        },
        {
            title: t("sheets.worksheets.qalqilyaCompetition"),
            description: t("sheets.desc.qalqilyaCompetition"),
            link: "https://drive.google.com/file/d/1sTHWPPSovFOXHCULKp62Ak_shSoDGDXX/view?usp=drive_link",
            directorate: "Qalqilya",
            color: "#FFF71C",
            icon: "🎯"
        },
        {
            title: t("sheets.worksheets.jerusalem2025"),
            description: t("sheets.desc.jerusalem2025"),
            link: "https://drive.google.com/file/d/1o3p185eQ-6CWho51g3H3al5Hq5watSpR/view?usp=drive_link",
            directorate: "Jerusalem",
            color: "#A0FF1C",
            icon: "📘"
        },
        {
            title: t("sheets.worksheets.jerusalemAnswers"),
            description: t("sheets.desc.jerusalemAnswers"),
            link: "https://drive.google.com/file/d/1W-8rO6c0msbRUrSWZO8ULhsZVFqf-Xfh/view?usp=drive_link",
            directorate: "Jerusalem",
            color: "#A0FF1C",
            icon: "📖"
        },
        {
            title: t("sheets.worksheets.tulkarmFinal"),
            description: t("sheets.desc.tulkarmFinal"),
            link: "https://drive.google.com/file/d/1yeTrpFE5WuM_P7xiJ912dT99NXqe0JNw/view?usp=drive_link",
            directorate: "Tulkarm",
            color: "#1CDFFF",
            icon: "📐"
        },
        {
            title: t("sheets.worksheets.tulkarmSolutions"),
            description: t("sheets.desc.tulkarmSolutions"),
            link: "https://drive.google.com/file/d/1vmV308KK-qk7dtK0ohqvFW9dr3bYz-yI/view?usp=drive_link",
            directorate: "Tulkarm",
            color: "#1CDFFF",
            icon: "📝"
        },
        {
            title: t("sheets.worksheets.ramallahLast"),
            description: t("sheets.desc.ramallahLast"),
            link: "https://drive.google.com/file/d/1mGJbwnQP3wMnbd4UFFG-C6-i0tg1iR-9/view?usp=drive_link",
            directorate: "RamallahBireh",
            color: "#241CFF",
            icon: "🏆"
        },
        {
            title: t("sheets.worksheets.ramallahFinalAnswers"),
            description: t("sheets.desc.ramallahFinalAnswers"),
            link: "https://drive.google.com/file/d/1RVwZPTIH014r9CK9SGm0jqOYDOpL-N1z/view?usp=drive_link",
            directorate: "RamallahBireh",
            color: "#241CFF",
            icon: "📖"
        },
        {
            title: t("sheets.worksheets.nablusFinal"),
            description: t("sheets.desc.nablusFinal"),
            link: "https://drive.google.com/file/d/1R6ZvFhbKt3k9Kn_dSKD89ViBKFIXuak7/view?usp=drive_link",
            directorate: "Nablus",
            color: "#B71CFF",
            icon: "📘"
        },
        {
            title: t("sheets.worksheets.nablusAnswers"),
            description: t("sheets.desc.nablusAnswers"),
            link: "https://drive.google.com/file/d/1u4eUNo0Gjq4dY_YdcbK1RJFkDJQeu4vQ/view?usp=drive_link",
            directorate: "Nablus",
            color: "#B71CFF",
            icon: "📖"
        },
        {
            title: t("sheets.worksheets.nablusEng"),
            description: t("sheets.desc.nablusEng"),
            link: "https://drive.google.com/file/d/13ylGGB3oli18oYVN0sgfEUJkM1Z7ggzE/view?usp=drive_link",
            directorate: "Nablus",
            color: "#B71CFF",
            icon: "📝"
        },
        {
            title: t("sheets.worksheets.nablusQuestions"),
            description: t("sheets.desc.nablusQuestions"),
            link: "https://drive.google.com/file/d/17jDUvIss-lya-ITciqyo5m094fDaq6_1/view?usp=drive_link",
            directorate: "Nablus",
            color: "#B71CFF",
            icon: "📐"
        },
        {
            title: t("sheets.worksheets.salfitAnswers"),
            description: t("sheets.desc.salfitAnswers"),
            link: "https://drive.google.com/file/d/1m85o8CgVl9OkF-Ok4VOlZ7Fw1wipwpqn/view?usp=drive_link",
            directorate: "Salfit",
            color: "#FF1CD9",
            icon: "📖"
        },
        {
            title: t("sheets.worksheets.jericho2025"),
            description: t("sheets.desc.jericho2025"),
            link: "https://drive.google.com/file/d/1QMfY5cl_fTAl9N086p48-EDm6BVmYbv/view?usp=drive_link",
            directorate: "Jericho",
            color: "#FF1C27",
            icon: "📘"
        }
    ];

    const colors: Record<string, string> = {
        جنين: "#7D1C48",
        قباطية: "#FF9F1C",
        يطا: "#FF3C3C",
        بيرزيت: "#FF6B1C",
        قلقيلية: "#FFF71C",
        القدس: "#A0FF1C",
        طولكرم: "#1CDFFF",
        "رام الله والبيرة": "#241CFF",
        نابلس: "#B71CFF",
        سلفيت: "#FF1CD9",
        اريحا: "#FF1C27",
    };

    const directorates = useMemo(
        () => ["All", ...Array.from(new Set(sheetsList.map(s => s.directorate)))],
        []
    );

    const filteredSheets = useMemo(
        () => (filter === "All" ? sheetsList : sheetsList.filter(s => s.directorate === filter)),
        [filter]
    );

    return (
        <Box sx={{ ...styles.container, direction: isRTL ? "rtl" : "ltr" }}>
            {/* Hero */}
            <Box sx={styles.heroWrapper}>
                <Typography variant="h3" sx={styles.heroTitle}>
                    {t("sheets.heroTitle")}
                </Typography>
                <Typography variant="body1" sx={styles.heroDesc}>
                    {t("sheets.heroDesc")}
                </Typography>
                <Box sx={{ width: 60, height: 4, backgroundColor: "#7D1C48", borderRadius: 2, mx: "auto", mt: 3 }} />
            </Box>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mb: 4 }}>
                {directorates.map(dir => (
                    <Button
                        key={dir}
                        variant={filter === dir ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setFilter(dir)}
                    >
                        {dir}
                    </Button>
                ))}
            </Box>

            <Box sx={styles.grid}>
                {filteredSheets.map(sheet => (
                    <Card key={sheet.link} sx={styles.card(colors[sheet.directorate] || "#FF9F1C")}>
                        <CardContent>
                            <Typography variant="h6" sx={styles.cardTitle}>
                                {sheet.title}
                            </Typography>
                            <Button
                                href={sheet.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={styles.button(colors[sheet.directorate] || "#FF9F1C")}
                            >
                                {t("sheets.open")}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default Worksheets;