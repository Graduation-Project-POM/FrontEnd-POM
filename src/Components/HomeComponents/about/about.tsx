import { Box, Typography } from '@mui/material';
import { styles } from './aboutStyle.ts';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function About() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <Box
            className="about"
            sx={{
                ...styles.about,

                direction: i18n.language === "ar" ? "rtl" : "ltr",
                textAlign: i18n.language === "ar" ? "right" : "left",
            }}
            data-aos="fade-up"
        >
            <Box
                sx={{
                    ...styles.leftBox,
                    textAlign: i18n.language === "ar" ? "right" : "left",
                }}
                data-aos="fade-right"
            >
                <Typography className="typography" sx={styles.title}>
                    {t("about.title")}
                </Typography>

                <Typography
                    className="secondary-text typography"
                    sx={{
                        ...styles.description,
                        fontSize: styles.description.fontSize,
                        lineHeight: styles.description.lineHeightResponsive,
                        marginTop: styles.description.marginTop,
                        textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {t("about.desc")}
                </Typography>
            </Box>

            <Box
                className="about-image"
                sx={styles.rightBoxWrapper}
                data-aos="zoom-in"
                data-aos-delay="400"
            >
                <Box
                    component="img"
                    src="/image-removebg-preview 1.png"
                    alt="about-image"
                    sx={styles.aboutImage}
                />
            </Box>
        </Box>
    );
}

export default About;
