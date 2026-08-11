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
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { styles } from "./ImoNewsStyle";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

export default function ImoNews() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language.startsWith("ar");
  const sliderRef = useRef<HTMLDivElement>(null);

  const media: MediaItem[] = [
    { type: "image", src: "/imoImgs/imo-01.jpeg" },
    { type: "image", src: "/imoImgs/imo-02.jpeg" },
    { type: "image", src: "/imoImgs/imo-03.jpeg" },
    { type: "image", src: "/imoImgs/imo-04.jpeg" },
    { type: "video", src: "/imoImgs/imo-video-1.mp4" },
    { type: "image", src: "/imoImgs/imo-05.jpeg" },
    { type: "image", src: "/imoImgs/imo-06.jpeg" },
    { type: "image", src: "/imoImgs/imo-07.jpeg" },
    { type: "image", src: "/imoImgs/imo-08.jpeg" },
    { type: "video", src: "/imoImgs/imo-video-2.mp4" },
    { type: "image", src: "/imoImgs/imo-09.jpeg" },
    { type: "image", src: "/imoImgs/imo-10.jpeg" },
    { type: "image", src: "/imoImgs/imo-11.jpeg" },
    { type: "image", src: "/imoImgs/imo-12.jpeg" },
    { type: "video", src: "/imoImgs/imo-video-3.mp4" },
    { type: "image", src: "/imoImgs/imo-13.jpeg" },
    { type: "image", src: "/imoImgs/imo-14.jpeg" },
    { type: "image", src: "/imoImgs/imo-15.jpeg" },
    { type: "video", src: "/imoImgs/imo-video-4.mp4" },
    { type: "image", src: "/imoImgs/imo-16.jpeg" },
    { type: "image", src: "/imoImgs/imo-17.jpeg" },
    { type: "image", src: "/imoImgs/imo-18.jpeg" },
    { type: "video", src: "/imoImgs/imo-video-5.mp4" },
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
    setActiveIndex(prev => (prev === 0 ? media.length - 1 : prev - 1));
  }, [media.length]);

  const goToNext = useCallback(() => {
    setActiveIndex(prev => (prev === media.length - 1 ? 0 : prev + 1));
  }, [media.length]);

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

  const activeItem = media[activeIndex];

  return (
    <Box sx={styles.pageContainer}>
      <Typography component="h2" sx={styles.title}>
        {t("imoNews.title")}
      </Typography>

      <Box sx={styles.introVideoWrapper}>
        <Box
          component="video"
          src="/imoImgs/introVedeo.mp4"
          controls
          playsInline
          preload="metadata"
          sx={styles.introVideo}
        />
      </Box>

      <Typography component="p" sx={styles.description}>
        {t("imoNews.description")}
      </Typography>

      <Box sx={styles.sliderWrapper}>
        <IconButton
          onClick={() => handleScroll("left")}
          sx={isRTL ? styles.rightArrow : styles.leftArrow}
        >
          <ArrowBackIosNewIcon sx={isRTL ? { transform: "rotate(180deg)" } : {}} />
        </IconButton>

        <Box ref={sliderRef} sx={{ ...styles.slider, direction: isRTL ? "rtl" : "ltr" }}>
          {media.map((item, i) => (
            <Card key={item.src} sx={styles.card} onClick={() => openLightbox(i)}>
              {item.type === "image" ? (
                <CardMedia
                  component="img"
                  image={item.src}
                  loading="lazy"
                  alt={t("imoNews.title")}
                  sx={styles.media}
                />
              ) : (
                <>
                  <Box
                    component="video"
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    sx={styles.media}
                  />
                  <Box sx={styles.playBadge}>
                    <PlayArrowIcon fontSize="large" />
                  </Box>
                </>
              )}
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

      <Dialog
        open={lightboxOpen}
        onClose={closeLightbox}
        maxWidth={false}
        PaperProps={{ sx: styles.lightboxPaper }}
        slotProps={{ backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.9)" } } }}
      >
        <DialogContent sx={styles.lightboxContent}>
          <IconButton onClick={closeLightbox} sx={styles.lightboxClose}>
            <CloseIcon />
          </IconButton>

          <IconButton onClick={isRTL ? goToNext : goToPrev} sx={styles.lightboxLeftArrow}>
            <ArrowBackIosNewIcon />
          </IconButton>

          {activeItem?.type === "image" ? (
            <Box
              component="img"
              src={activeItem.src}
              alt={`${t("imoNews.title")} ${activeIndex + 1}`}
              sx={styles.lightboxMedia}
            />
          ) : (
            <Box
              key={activeItem?.src}
              component="video"
              src={activeItem?.src}
              controls
              autoPlay
              playsInline
              sx={styles.lightboxMedia}
            />
          )}

          <IconButton onClick={isRTL ? goToPrev : goToNext} sx={styles.lightboxRightArrow}>
            <ArrowForwardIosIcon />
          </IconButton>

          <Typography sx={styles.lightboxCounter}>
            {activeIndex + 1} / {media.length}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
