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

export default function ImageSlider() {
    const { t } = useTranslation();
    const autoPlayInterval = 5000;
      const images = [
        "/74.png", "/75.png", "/76.png", "/77.png", "/78.png", "/79.png",
        "/80.png", "/81.png", "/82.png", "/83.png", "/84.png", "/85.png",
        "/86.png", "/87.png", "/88.png", "/89.png", "/90.png", "/91.png",
        "/92.png", "/93.png", "/94.png", "/95.png", "/96.png", "/97.png",
        "/98.png", "/99.png", "/100.png", "/101.png", "/102.png", "/103.png",
        "/104.png", "/105.png", "/106.png", "/107.png", "/108.png",
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
                maxWidth="lg"
                fullWidth
                BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.95)' } }}
                PaperProps={{ sx: { backgroundColor: '#000', boxShadow: 'none', margin: 0 } }}
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
                        onClick={prevModalImage}
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
                        onClick={nextModalImage}
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
