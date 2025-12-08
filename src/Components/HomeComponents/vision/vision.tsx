import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import {
    ArrowBackIosNew as ArrowBackIosNewIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { styles } from "./visionStyle.ts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18n.ts";

function Vision() {
    const { t } = useTranslation();
    const isRTL = i18n.language ==="ar"

    const slides = [
        {
            title: t("vision.slides.discover.title"),
            text: t("vision.slides.discover.text"),
        },
        {
            title: t("vision.slides.train.title"),
            text: t("vision.slides.train.text"),
        },
        {
            title: t("vision.slides.compete.title"),
            text: t("vision.slides.compete.text"),
        },
    ];

    const [index, setIndex] = useState(1);

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
    const handlePrev = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const getScale = (i: number) => (i === index ? 1.15 : 0.88);
    const getOpacity = (i: number) => (i === index ? 1 : 0.55);

    return (
        <>
            <Box sx={styles.visionContainer} data-aos="fade-up">
                <Typography sx={styles.title}>{t("vision.title")}</Typography>

                <Box sx={styles.controlsWrapper}>
                    <IconButton onClick={handlePrev} sx={{ ...styles.controlBtn, transform: isRTL?"scaleX(-1)":"scaleX(1)" }}>
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleNext} sx={{ ...styles.controlBtn,  transform: isRTL?"scaleX(-1)":"scaleX(1)"  }}>
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
                data-aos="zoom-in"
            >
                <Box
                    component="img"
                    src="/vision.png"
                    alt="vision"
                    sx={styles.image}
                    className="floating-img"
                />

                <Box sx={styles.slidesWrapper}>
                    {slides.map((slide, i) => (
                        <Paper
                            key={i}
                            elevation={index === i ? 8 : 2}
                            sx={{
                                ...styles.slideCard,
                                transform: `scale(${getScale(i)})`,
                                opacity: getOpacity(i),
                                boxShadow:
                                    index === i
                                        ? "0px 10px 25px rgba(125,28,72,0.25)"
                                        : "0px 3px 10px rgba(0,0,0,0.1)",
                                border:
                                    i === index
                                        ? "2px solid #7A1731"
                                        : "2px solid #e7c7d2",
                            }}
                            className={i === index ? "active-slide" : ""}
                        >
                            <Typography sx={styles.slideTitle} variant="h5">
                                {slide.title}
                            </Typography>
                            <Typography sx={styles.slideText}>
                                {slide.text}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Vision;
