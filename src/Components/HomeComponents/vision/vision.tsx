import { useState } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import {
    ArrowBackIosNew as ArrowBackIosNewIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { styles } from "./visionStyle";

function Vision() {
    const slides = [
        {
            title: "Discover Talent",
            text: "We identify young students with exceptional logical and creative thinking skills across Palestine.",
        },
        {
            title: "Train & Inspire",
            text: "Expert coaches guide students through workshops, camps, and challenges to unlock their full potential.",
        },
        {
            title: "Compete Globally",
            text: "Students are prepared to proudly represent Palestine in international competitions like IMO and ARMO.",
        },
    ];

    const [index, setIndex] = useState(1);

    const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
    const handlePrev = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const getScale = (i: number) => (i === index ? 1.2 : 0.8);
    const getOpacity = (i: number) => (i === index ? 1 : 0.7);

    return (
        <>
            <Box sx={styles.visionContainer}>
                <Typography sx={styles.title}>Our Vision</Typography>

                <Box sx={styles.controlsWrapper}>
                    <IconButton onClick={handlePrev} sx={styles.controlBtn}>
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleNext} sx={styles.controlBtn}>
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap={1}>
                <Box component="img" src="/images/vision.png" alt="vision" sx={styles.image} />

                <Box sx={styles.slidesWrapper}>
                    {slides.map((slide, i) => (
                        <Paper
                            key={i}
                            elevation={index === i ? 6 : 1}
                            sx={{
                                ...styles.slideCard,
                                transform: `scale(${getScale(i)})`,
                                opacity: getOpacity(i),
                                margin: "auto",
                            }}
                        >
                            <Typography sx={styles.slideTitle} variant="h5">
                                {slide.title}
                            </Typography>
                            <Typography sx={styles.slideText}>{slide.text}</Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Vision;
