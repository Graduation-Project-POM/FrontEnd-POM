import { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";
import { styles } from "./NewsStyle";

export default function ImageWithCarousel() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language.startsWith("ar");

    const images = [
        "N1.png", "N2.png", "N3.png",
        "N4.png", "N5.png", "N6.png",
        "N7.png", "N8.png", "N9.png",
        "N10.png", "N11.png", "N12.png",
        "N13.png", "N14.png", "N15.png",
        "N16.png", "N17.png", "N18.png"
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const intervalRef = useRef<number | null>(null);

    const goToPrev = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setAutoPlay(false);
    }, [images.length]);

    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setAutoPlay(false);
    }, [images.length]);

    useEffect(() => {
        if (!autoPlay) {
            const timer = setTimeout(() => setAutoPlay(true), 5000);
            return () => clearTimeout(timer);
        }
    }, [autoPlay]);

    useEffect(() => {
        if (autoPlay) {
            intervalRef.current = window.setInterval(() => {
                setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }, 5000);
        } else if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        return () => {
            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay, images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                isRTL ? goToNext() : goToPrev();
            } else if (e.key === "ArrowRight") {
                isRTL ? goToPrev() : goToNext();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isRTL, goToPrev, goToNext]);

    return (
        <Box sx={styles.pageContainer}>
            <Typography sx={styles.title}>
                {t("news.title")}
            </Typography>

            <Box sx={styles.twoColumnsContainer}>
                <Box sx={styles.textColumn}>
                    <Typography sx={styles.description}>
                        {t("news.description")}
                    </Typography>
                </Box>

                <Box sx={styles.imageColumn}>
                    <Box sx={styles.imageWrapper}>

                        <IconButton
                            onClick={isRTL ? goToNext : goToPrev}
                            sx={styles.leftArrowOutside}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>

                        <Box
                            component="img"
                            src={images[activeIndex]}
                            alt=""
                            sx={styles.image}
                        />

                        <IconButton
                            onClick={isRTL ? goToPrev : goToNext}
                            sx={styles.rightArrowOutside}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}