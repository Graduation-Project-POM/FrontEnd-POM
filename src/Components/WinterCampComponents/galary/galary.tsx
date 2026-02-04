import {
    Box,
    Typography,
    Card,
    CardMedia,
    IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";
import { styles } from "./galary.ts";
import { useRef } from "react";


const Galary: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();


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
        "/69.png",
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
    ]


    const handleScroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === "left" ? -340 : 340,
            behavior: "smooth",
        });
    };
    return (
        <Box sx={styles.page}>
            <Box sx={styles.header}>
                <Typography variant="h3" fontWeight="bold">
                    <img src="/Vector.png" width={50} /> &nbsp;
                    {t("winterCamp.gallaryTitle")}
                </Typography>
                <Typography variant="subtitle1" mt={1} >
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

        </Box>
    );
};

export default Galary;

