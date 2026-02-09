import {
    Box,
    Typography,
    Card,
    CardMedia,
    IconButton,
    Dialog,
    DialogContent,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { styles } from "./galary.ts";
import { useRef, useState, useCallback, useEffect } from "react";


const Galary: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "/1.png",
        "/36.png",
        "/37.png",
        "/38.png",
        "/39.png",
        "/40.png",
        "/41.png",
        "/42.png",
        "/43.png",
        "/44.png",
        "/45.png",
        "/46.png",
        "/47.png",
        "/48.png",
        "/49.png",
        "/50.png",
        "/51.png",
        "/52.png",
        "/53.png",
        "/54.png",
        "/55.png",
        "/56.png",
        "/57.png",
        "/58.png",
        "/59.png",
        "/60.png",
        "/61.png",
        "/62.png",
        "/63.png",
        "/64.png",
        "/65.png",
        "/66.png",
        "/67.png",
        "/68.png",
        "/70.png",
        "/71.png",
        "/72.png",
        "/73.png",
        "/4.png",
        "/5.png",
        "/6.png",
        "/7.png",
        "/8.png",
        "/9.png",
        "/10.png",
        "/11.png",
        "/12.png",
        "/13.png",
        "/14.png",
        "/15.png",
        "/16.png",
        "/17.png",
        "/18.png",
        "/19.png",
        "/20.png",
        "/21.png",
        "/22.png",
        "/23.png",
        "/24.png",
        "/25.png",
        "/26.png",
        "/27.png",
        "/28.png",
        "/29.png",
        "/30.png",
        "/31.png",
        "/32.png",
        "/34.png",
    ];

    const handleScroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === "left" ? -340 : 340,
            behavior: "smooth",
        });
    };

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPrev = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goToPrev();
            else if (e.key === "ArrowRight") goToNext();
            else if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, goToPrev, goToNext]);

    return (
        <Box sx={styles.page}>
            <Box sx={styles.header}>
                <Typography variant="h3" fontWeight="bold">
                    <img src="/Vector.png" width={50} /> &nbsp;
                    {t("winterCamp.gallaryTitle")}
                </Typography>
                <Typography variant="subtitle1" mt={1}>
                    {t("winterCamp.gallarySubTitle")}
                </Typography>
            </Box>
            <Box sx={styles.daySection}>
                <Box sx={styles.sliderWrapper}>
                    <IconButton onClick={() => handleScroll("left")} sx={styles.leftArrow}>
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <Box ref={sliderRef} sx={styles.slider}>
                        {images.map((imgSrc, i) => (
                            <Card
                                key={i}
                                sx={styles.card}
                                onClick={() => openLightbox(i)}
                            >
                                <CardMedia
                                    component="img"
                                    image={imgSrc}
                                    loading="lazy"
                                    sx={styles.image}
                                />
                            </Card>
                        ))}
                    </Box>

                    <IconButton onClick={() => handleScroll("right")} sx={styles.rightArrow}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>

            <Dialog
                open={lightboxOpen}
                onClose={closeLightbox}
                maxWidth={false}
                PaperProps={{
                    sx: styles.lightboxPaper,
                }}
                slotProps={{
                    backdrop: {
                        sx: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                    },
                }}
            >
                <DialogContent sx={styles.lightboxContent}>
                    <IconButton onClick={closeLightbox} sx={styles.lightboxClose}>
                        <CloseIcon />
                    </IconButton>

                    <IconButton onClick={goToPrev} sx={styles.lightboxLeftArrow}>
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <Box
                        component="img"
                        src={images[activeIndex]}
                        alt={`Gallery image ${activeIndex + 1}`}
                        sx={styles.lightboxImage}
                    />

                    <IconButton onClick={goToNext} sx={styles.lightboxRightArrow}>
                        <ArrowForwardIosIcon />
                    </IconButton>

                    <Typography sx={styles.lightboxCounter}>
                        {activeIndex + 1} / {images.length}
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Galary;