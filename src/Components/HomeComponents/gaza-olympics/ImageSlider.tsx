import { useCallback, useRef, useState } from 'react';
import { Box, Dialog, IconButton, Typography, Card, CardMedia, DialogContent } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import 'swiper/css';
import 'swiper/css/navigation';
import { titleStyles, descriptionStyles, sectionBoxStyles } from './imageSliderStyle';
import { useTranslation } from 'react-i18next';
import { styles } from '../../WinterCampComponents/galary/galary';

export default function ImageSlider() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language.startsWith("ar");
    const sliderRef = useRef<HTMLDivElement>(null);

    const images = [
        "/74.png", "/75.png", "/76.png", "/77.png", "/78.png", "/79.png",
        "/80.png", "/81.png", "/82.png", "/83.png", "/84.png", "/85.png",
        "/86.png", "/87.png", "/88.png", "/89.png", "/90.png", "/91.png",
        "/92.png", "/93.png", "/94.png", "/95.png", "/96.png", "/97.png",
        "/98.png", "/99.png", "/100.png", "/101.png", "/102.png", "/103.png",
        "/104.png", "/105.png", "/106.png", "/107.png", "/108.png",
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;

        const scrollAmount = 340;

        sliderRef.current.scrollBy({
            left: isRTL
                ? dir === "left"
                    ? scrollAmount
                    : -scrollAmount
                : dir === "left"
                    ? -scrollAmount
                    : scrollAmount,
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

    if (!images || images.length === 0) {
        return <Box sx={{ textAlign: 'center', py: 4 }}>No images available</Box>;
    }

    return (
        <>
            <Box sx={sectionBoxStyles}>
                <Typography component="h2" sx={titleStyles}>
                    {t("gazaOlympiad.title")}
                </Typography>
                <Typography component="p" sx={descriptionStyles}>
                    {t("gazaOlympiad.description")}
                </Typography>
            </Box>

            <Box sx={styles.daySection}>
                <Box sx={styles.sliderWrapper}>
                    <IconButton
                        onClick={() => handleScroll("left")}
                        sx={isRTL ? styles.rightArrow : styles.leftArrow}
                    >
                        <ArrowBackIosNewIcon sx={isRTL ? { transform: "rotate(180deg)" } : {}} />
                    </IconButton>

                    <Box ref={sliderRef} sx={{
                        ...styles.slider,
                        direction: isRTL ? "rtl" : "ltr",
                    }}>
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

                    <IconButton
                        onClick={() => handleScroll("right")}
                        sx={isRTL ? styles.leftArrow : styles.rightArrow}
                    >
                        <ArrowForwardIosIcon sx={isRTL ? { transform: "rotate(180deg)" } : {}} />
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

                    <IconButton
                        onClick={isRTL ? goToNext : goToPrev}
                        sx={styles.lightboxLeftArrow}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <Box
                        component="img"
                        src={images[activeIndex]}
                        alt={`Gallery image ${activeIndex + 1}`}
                        sx={styles.lightboxImage}
                    />

                    <IconButton
                        onClick={isRTL ? goToPrev : goToNext}
                        sx={styles.lightboxRightArrow}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>

                    <Typography sx={styles.lightboxCounter}>
                        {activeIndex + 1} / {images.length}
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}
