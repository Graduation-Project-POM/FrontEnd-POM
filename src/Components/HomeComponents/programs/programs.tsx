import { Box, Paper, Typography, Grid } from "@mui/material";
import { styles } from "./programsStyle";

function Programs() {

    const programs = [
        {
            img: "/images/program1.png",
            title: "preparation stage",
            desc: "Students join trainings and practice problems to build strong math skills before the competition starts."
        },
        {
            img: "/images/program2.png",
            title: "Preliminary Rounds",
            desc: "Participants take qualifying exams to select the top students for the advanced stages."
        },
        {
            img: "/images/program3.png",
            title: "Finals",
            desc: "Top students compete in the final round with challenging problems testing logic and creativity."
        },
        {
            img: "/images/program4.png",
            title: "Awards & Recognition",
            desc: "Winners receive medals, certificates, and public recognition for their achievements."
        },
        {
            img: "/images/program5.png",
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
                {programs.map((p, index) => (
                    <Grid xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={0} sx={styles.card}>
                            
                            <img 
                                src={p.img} 
                                alt={p.title} 
                                style={styles.image}
                            />

                            <Typography sx={styles.cardTitle}>
                                {p.title}
                            </Typography>

                            <Typography sx={styles.cardDesc}>
                                {p.desc}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
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
