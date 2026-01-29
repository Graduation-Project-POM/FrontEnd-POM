import React, { useRef } from "react";
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

interface Day {
    titleKey: string;
    eventsKeys: string[];
    images: string[];
}

const Galary: React.FC = () => {
    const { t } = useTranslation();


    const days: Day[] = [
        {
            titleKey: "winterCamp.day1",
            images: [
                "/Banner.png",
                "/Banner.png",
                "/Banner.png",
                "/Banner.png",
                "/Banner.png",
            ],
            eventsKeys: [
                "winterCamp.Day1.event1",
                "winterCamp.Day1.event2",
                "winterCamp.Day1.event3",
                "winterCamp.Day1.event1",
                "winterCamp.Day1.event2",
                "winterCamp.Day1.event3",
                "winterCamp.Day1.event1",
                "winterCamp.Day1.event2",
                "winterCamp.Day1.event3",
                "winterCamp.Day1.event1",
                "winterCamp.Day1.event2",
                "winterCamp.Day1.event3",
            ],
        }
        // },
        // {
        //     titleKey: "winterCamp.day2",
        //     images: Array(18).fill("/Banner.png"),
        //     eventsKeys: [
        //         "winterCamp.Day2.event1",
        //         "winterCamp.Day2.event2",
        //         "winterCamp.Day2.event3",
        //         "winterCamp.Day2.event1",
        //         "winterCamp.Day2.event2",
        //         "winterCamp.Day2.event3",
        //         "winterCamp.Day2.event1",
        //         "winterCamp.Day2.event2",
        //         "winterCamp.Day2.event3",
        //         "winterCamp.Day2.event1",
        //         "winterCamp.Day2.event2",
        //         "winterCamp.Day2.event3",
        //         "winterCamp.Day2.event1",
        //         "winterCamp.Day2.event2",
        //         "winterCamp.Day2.event3",
        //         "winterCamp.Day2.event1",
        //         "winterCamp.Day2.event2",
        //         "winterCamp.Day2.event3",
        //     ],
        // },
        // {
        //     titleKey: "winterCamp.day3",
        //     images: Array(15).fill("/Banner.png"),
        //     eventsKeys: [
        //         "winterCamp.Day3.event1",
        //         "winterCamp.Day3.event2",
        //         "winterCamp.Day3.event3",
        //         "winterCamp.Day3.event4",
        //         "winterCamp.Day3.event5",
        //         "winterCamp.Day3.event1",
        //         "winterCamp.Day3.event2",
        //         "winterCamp.Day3.event3",
        //         "winterCamp.Day3.event4",
        //         "winterCamp.Day3.event5",
        //         "winterCamp.Day3.event1",
        //         "winterCamp.Day3.event2",
        //         "winterCamp.Day3.event3",
        //         "winterCamp.Day3.event4",
        //         "winterCamp.Day3.event5",
        //     ],
        // },
        // {
        //     titleKey: "winterCamp.day4",
        //     images: Array(12).fill("/Banner.png"),
        //     eventsKeys: [
        //         "winterCamp.Day1.event1",
        //         "winterCamp.Day1.event2",
        //         "winterCamp.Day1.event3",
        //         "winterCamp.Day1.event1",
        //         "winterCamp.Day1.event2",
        //         "winterCamp.Day1.event3",
        //         "winterCamp.Day1.event1",
        //         "winterCamp.Day1.event2",
        //         "winterCamp.Day1.event3",
        //         "winterCamp.Day1.event1",
        //         "winterCamp.Day1.event2",
        //         "winterCamp.Day1.event3",
        //     ],
        // },
        // {
        //     titleKey: "winterCamp.day5",
        //     images: Array(15).fill("/Banner.png"),
        //     eventsKeys: [
        //         "winterCamp.Day3.event1",
        //         "winterCamp.Day3.event2",
        //         "winterCamp.Day3.event3",
        //         "winterCamp.Day3.event4",
        //         "winterCamp.Day3.event5",
        //         "winterCamp.Day3.event1",
        //         "winterCamp.Day3.event2",
        //         "winterCamp.Day3.event3",
        //         "winterCamp.Day3.event4",
        //         "winterCamp.Day3.event5",
        //         "winterCamp.Day3.event1",
        //         "winterCamp.Day3.event2",
        //         "winterCamp.Day3.event3",
        //         "winterCamp.Day3.event4",
        //         "winterCamp.Day3.event5",
        //     ],
        // },
    ];



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

            {days.map((day, index) => (
                <DaySlider key={index} day={day} />
            ))}
        </Box>
    );
};

export default Galary;

interface DaySliderProps {
    day: Day;
}

const DaySlider: React.FC<DaySliderProps> = ({ day }) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    const handleScroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === "left" ? -340 : 340,
            behavior: "smooth",
        });
    };

    return (
        <Box sx={styles.daySection}>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                {t(day.titleKey)}
            </Typography>

            <Box sx={styles.sliderWrapper}>
                <IconButton onClick={() => handleScroll("left")} sx={styles.leftArrow}>
                    <ArrowBackIosNewIcon />
                </IconButton>

                <Box ref={sliderRef} sx={styles.slider}>
                    {day.images.map((imgSrc, i) => (
                        <Card key={i} sx={styles.card}>
                            <CardMedia component="img" image={imgSrc} height="220" />
                            <Box sx={styles.overlay}>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {t(day.eventsKeys[i])}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>

                <IconButton onClick={() => handleScroll("right")} sx={styles.rightArrow}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};
