import { useState } from 'react';
import {
    Box,
    Dialog,
    IconButton,
    useTheme,
    useMediaQuery,
    Typography,
} from '@mui/material';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { sliderContainerStyles, titleStyles, descriptionStyles, sectionBoxStyles } from './imageSliderStyle';
import { useTranslation } from 'react-i18next';
import { styles } from '../../WinterCampComponents/galary/galary';

export default function ImageSlider() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language.startsWith("ar");
    const autoPlayInterval = 5000;
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

    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const openModal = (index: number) => {
        setModalIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const nextModalImage = () =>
        setModalIndex((prev) => (prev + 1) % images.length);

    const prevModalImage = () =>
        setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

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

            <Box sx={sliderContainerStyles}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: autoPlayInterval, disableOnInteraction: false }}
                    navigation
                    loop
                    speed={500}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} onClick={() => openModal(index)}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            <Dialog
                open={modalOpen}
                onClose={closeModal}
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
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: isMobile ? '60vh' : '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <IconButton
                        onClick={closeModal}
                        sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                            zIndex: 2,
                        }}
                    >
                        <X size={24} />
                    </IconButton>

                    <img
                        src={images[modalIndex]}
                        alt={`Image ${modalIndex + 1}`}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />

                    <IconButton
                        onClick={isRTL ? nextModalImage : prevModalImage}
                        sx={{
                            position: 'absolute',
                            left: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                        }}
                    >
                        <ChevronLeft size={32} />
                    </IconButton>

                    <IconButton
                        onClick={isRTL ? prevModalImage : nextModalImage}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                        }}
                    >
                        <ChevronRight size={32} />
                    </IconButton>

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            px: 2,
                            py: 1,
                            borderRadius: 1,
                        }}
                    >
                        {modalIndex + 1} / {images.length}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}
