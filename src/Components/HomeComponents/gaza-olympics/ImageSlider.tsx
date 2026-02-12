import { useRef, useState, useCallback, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import {descriptionStyles, sectionBoxStyles, sliderContainerStyles, titleStyles}from "./imageSliderStyle";

export default function ImageSlider() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language.startsWith("ar");
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    "/77.png","/78.png","/79.png",
    "/80.png","/81.png","/82.png","/83.png","/84.png","/85.png",
    "/86.png","/87.png","/88.png","/89.png","/90.png","/91.png",
    "/92.png","/93.png","/94.png","/95.png","/96.png","/97.png",
    "/98.png","/99.png","/100.png","/101.png","/102.png","/103.png",
    "/104.png","/105.png","/106.png","/107.png","/108.png","/74.png","/75.png","/76.png"
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 340;
    sliderRef.current.scrollBy({
      left: isRTL
        ? dir === "left" ? scrollAmount : -scrollAmount
        : dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToPrev = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
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
    <>
      <Box sx={sectionBoxStyles}>
        <Typography component="h2" sx={titleStyles}>
          {t("gazaOlympiad.title")}
        </Typography>
        <Typography component="p" sx={descriptionStyles}>
          {t("gazaOlympiad.description")}
        </Typography>
      </Box>

      <Box sx={sliderContainerStyles.sliderWrapper}>
        <IconButton onClick={() => handleScroll("left")} sx={isRTL ? sliderContainerStyles.rightArrow : sliderContainerStyles.leftArrow}>
          <ArrowBackIosNewIcon sx={isRTL ? { transform: "rotate(180deg)" } : {}} />
        </IconButton>

        <Box ref={sliderRef} sx={{ ...sliderContainerStyles.slider, direction: isRTL ? "rtl" : "ltr" }}>
          {images.map((imgSrc, i) => (
            <Card key={i} sx={sliderContainerStyles.card} onClick={() => openLightbox(i)}>
              <CardMedia component="img" image={imgSrc} sx={sliderContainerStyles.image} />
            </Card>
          ))}
        </Box>

        <IconButton onClick={() => handleScroll("right")} sx={isRTL ? sliderContainerStyles.leftArrow : sliderContainerStyles.rightArrow}>
          <ArrowForwardIosIcon sx={isRTL ? { transform: "rotate(180deg)" } : {}} />
        </IconButton>
      </Box>

      <Dialog
        open={lightboxOpen}
        onClose={closeLightbox}
        maxWidth={false}
        PaperProps={{ sx: sliderContainerStyles.lightboxPaper }}
        slotProps={{ backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.9)" } } }}
      >
        <DialogContent sx={sliderContainerStyles.lightboxContent}>
          <IconButton onClick={closeLightbox} sx={sliderContainerStyles.lightboxClose}>
            <CloseIcon />
          </IconButton>

          <IconButton onClick={isRTL ? goToNext : goToPrev} sx={sliderContainerStyles.lightboxLeftArrow}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box component="img" src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} sx={sliderContainerStyles.lightboxImage} />

          <IconButton onClick={isRTL ? goToPrev : goToNext} sx={sliderContainerStyles.lightboxRightArrow}>
            <ArrowForwardIosIcon />
          </IconButton>

          <Typography sx={sliderContainerStyles.lightboxCounter}>
            {activeIndex + 1} / {images.length}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
