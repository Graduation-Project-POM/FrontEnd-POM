import { Box, Paper, Typography, Grid } from "@mui/material";
import { styles } from "./programsStyle";
import AOS from "aos";
import { useEffect } from "react";

function Programs() {

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    },);

    const programs = [
        {
            img: "https://whatsmylevel.com/program1.png",
            title: "preparation stage",
            desc: "Students join trainings and practice problems to build strong math skills before the competition starts."
        },
        {
            img: "https://whatsmylevel.com/program2.png",
            title: "Preliminary Rounds",
            desc: "Participants take qualifying exams to select the top students for the advanced stages."
        },
        {
            img: "https://whatsmylevel.com/program3.png",
            title: "Finals",
            desc: "Top students compete in the final round with challenging problems testing logic and creativity."
        },
        {
            img: "https://whatsmylevel.com/program4.png",
            title: "Awards & Recognition",
            desc: "Winners receive medals, certificates, and public recognition for their achievements."
        },
        {
            img: "https://whatsmylevel.com/program5.png",
            title: "Finish Stage",
            desc: "The competition concludes, results are published, and preparations begin for the next Olympiad."
        }
    ];

    return (
        <Box sx={styles.container}>

            <Typography sx={styles.title}>
                Programs
            </Typography>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={styles.gridContainer}
            >
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        sx={styles.gridContainer}
                    >
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

            </Grid>

            <Box sx={styles.exploreBtnWrapper}>
                <Box sx={styles.exploreBtn}>
                    Explore More
                </Box>
            </Box>

        </Box>
    );
}

export default Programs;
