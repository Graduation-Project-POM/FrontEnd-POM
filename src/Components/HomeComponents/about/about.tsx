import { Box, Typography } from '@mui/material';
import { styles } from './aboutStyle.ts';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <Box
            className="about"
            sx={styles.about}
            data-aos="fade-up"
        >
            <Box
                sx={styles.leftBox}
                data-aos="fade-right"
            >
                <Typography className="typography" sx={styles.title}>
                    About Us
                </Typography>

                <Typography
                    className="secondary-text typography"
                    sx={{
                        ...styles.description,
                        fontSize: styles.description.fontSize,
                        lineHeight: styles.description.lineHeightResponsive,
                        marginTop: styles.description.marginTop,
                        textAlign: styles.about.textAlign,
                    }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    The Palestine Math Olympiad is a national initiative dedicated to discovering, training, and empowering talented students in mathematics. Through a series of competitive stages, engaging workshops, and collaborative partnerships, we aim to strengthen mathematical excellence and inspire the next generation of problem-solvers and innovators across Palestine.
                </Typography>
            </Box>

            <Box
                className='about-image'
                sx={styles.rightBoxWrapper}
                data-aos="zoom-in"
                data-aos-delay="400"
            >
                <Box
                    component="img"
                    src="https://whatsmylevel.com/image-removebg-preview 1.png"
                    alt="about-image"
                    sx={styles.aboutImage}
                />
            </Box>
        </Box>
    );
}

export default About;
