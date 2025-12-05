import { styles } from "./visionStyle";
import { useState } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import {
    ArrowBackIosNew as ArrowBackIosNewIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";

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
            <Box
                className="vision"
                style={styles.visionContainer}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                    justifyContent: "space-between",
                    textAlign: { xs: "center", md: "left" },
                    gap: { xs: 1.5, md: 0 },
                    mb: 3,
                }}
            >
                <Typography
                    style={styles.title}
                    sx={{
                        fontSize: { xs: "40px", sm: "46px", md: "52px", lg: "64px" },
                        padding: { xs: "0 10px", md: "70px 150px" },
                    }}
                >
                    Our Vision
                </Typography>

                <Box
                    className="controls"
                    display="flex"
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    gap={{ xs: 1.5, sm: 2, md: 3 }}
                    mt={{ xs: 1.5, md: 0 }}
                    p={{ xs: "0 10px", md: "70px 150px" }}
                >
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            background: "#7A1731",
                            color: "white",
                            "&:hover": { background: "#5a0f24" },
                            p: { xs: 0.8, sm: 1.2, md: 1.8 },
                            borderRadius: "50%",
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            background: "#7A1731",
                            color: "white",
                            "&:hover": { background: "#5a0f24" },
                            p: { xs: 0.8, sm: 1.2, md: 1.8 },
                            borderRadius: "50%",
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                gap={1}
            >
                <Box
                    component="img"
                    src="/images/vision.png"
                    alt="vision"
                    sx={{
                        width: { xs: "150px", sm: "250px", md: "400px" },
                        height: "auto",
                        margin: { xs: 0, md: "10px -70px" },
                        zIndex: 10,
                    }}
                />

                <Box
                    display="flex"
                    justifyContent="center"
                    gap={{ xs: 1, sm: 2, md: 3 }}
                    width={{ xs: "75%", sm: "70%", md: "60%" }}
                    sx={{ transition: "0.4s ease", flexWrap: "wrap" }}
                >
                    {slides.map((slide, i) => (
                        <Paper
                            key={i}
                            elevation={index === i ? 6 : 1}
                            sx={{
                                width: { sm: "200px", md: "240px" },
                                height: { sm: "160px", md: "280px" },
                                padding: "10px",
                                borderRadius: "16px",
                                border: "2px solid #ddb5b5",
                                backgroundColor: "white",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                transform: `scale(${getScale(i)})`,
                                opacity: getOpacity(i),
                                transition: "all 0.35s ease-in-out",
                                margin: "auto",
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" color="#7A1731" mb={1}>
                                {slide.title}
                            </Typography>
                            <Typography color="gray">{slide.text}</Typography>
                        </Paper>
                    ))}{" "}
                </Box>
            </Box>
        </>
    );
}

export default Vision;
