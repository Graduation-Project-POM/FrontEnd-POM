import { Box, Paper, Typography, Grid } from "@mui/material";
import { styles } from "./programsStyle.ts";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Programs() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const programs = [
        {
            img: "/program1.png",
            title: t("programs.items.prep.title"),
            desc: t("programs.items.prep.desc"),
        },
        {
            img: "/program2.png",
            title: t("programs.items.rounds.title"),
            desc: t("programs.items.rounds.desc"),
        },
        {
            img: "/program3.png",
            title: t("programs.items.finals.title"),
            desc: t("programs.items.finals.desc"),
        },
        {
            img: "/program4.png",
            title: t("programs.items.awards.title"),
            desc: t("programs.items.awards.desc"),
        },
        {
            img: "/program5.png",
            title: t("programs.items.finish.title"),
            desc: t("programs.items.finish.desc"),
        },
    ];

    return (
        <Box sx={styles.container}>

            <Typography sx={styles.title}>
                {t("programs.title")}
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={styles.gridContainer}>
                {programs.map((p, index) => (
                    <Grid
                        item
                        xs={12} sm={6} md={4}
                        key={index}
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 150}
                    >
                        <Paper elevation={0} sx={styles.card}>
                            <img src={p.img} alt={p.title} style={styles.image} />
                            <Typography sx={styles.cardTitle}>{p.title}</Typography>
                            <Typography sx={styles.cardDesc}>{p.desc}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Box sx={styles.exploreBtnWrapper}>
                <Box sx={styles.exploreBtn}>
                    {t("programs.explore")}
                </Box>
            </Box>

        </Box>
    );
}

export default Programs;
