import { useState } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import {
    ArrowBackIosNew as ArrowBackIosNewIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
    ArrowForward as ArrowForwardIcon
} from "@mui/icons-material";
import { styles } from "./training";

const resourceData = [
    { title: "Work", subtitle: "Sheets", icon: <Box sx={styles.image} component="img" src="/images/training1.png" /> },
    { title: "External", subtitle: "Resources", icon: <Box sx={styles.image} component="img" src="/images/training2.png" /> },
    { title: "Practice", subtitle: "Problems", icon: <Box sx={styles.image} component="img" src="/images/training3.png" /> },
    { title: "Video", subtitle: "Tutorials", icon: <Box sx={styles.image} component="img" src="/images/training4.png" /> },
    { title: "Math", subtitle: "Books", icon: <Box sx={styles.image} component="img" src="/images/training5.png" /> },
];

function TrainingField() {
    const [index, setIndex] = useState(2);

    const handleNext = () => setIndex((prev) => (prev + 1) % resourceData.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + resourceData.length) % resourceData.length);

    return (
        <Box sx={{ justifyContent: "center", px: { xs: 2, md: 10 }, py: 5 }}>
            <Typography sx={styles.title}>Learning Resources</Typography>

            <Box sx={styles.control}>
                <IconButton onClick={handlePrev} sx={styles.controlBtn}>
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleNext} sx={styles.controlBtn}>
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>
            
            <Box sx={styles.cardsWrapper}>
                {resourceData.map((card, i) => (
                    <Paper
                        key={i}
                        elevation={i === index ? 6 : 1}
                        sx={{
                            ...styles.card,
                            transform: `scale(${i === index ? 1.2 : 1})`,
                            opacity: i === index ? 1 : 0.9,
                        }}
                    >
                        {card.icon}
                        <Typography sx={styles.cardTitle}>{card.title}</Typography>
                        <Typography sx={styles.cardSubtitle}>{card.subtitle}</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2, cursor: "pointer", color: "#fff" }}>
                            <Typography sx={{ fontWeight: 500, fontSize: 14 }}>Learn More</Typography>
                            <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </Box>
                    </Paper>
                ))}

            </Box>
        </Box>
    );
}

export default TrainingField;
