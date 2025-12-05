import { Box, Typography } from '@mui/material';
import { styles } from './aboutStyle.ts';

function About() {
    return (
        <Box className="about" sx={styles.about}>
            
            <Box sx={styles.leftBox}>
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
                >
                    The Palestine Math Olympiad is a national initiative dedicated to discovering, 
                    training, and empowering talented students in mathematics. Through a series of 
                    competitive stages, engaging workshops, and collaborative partnerships, we aim to 
                    strengthen mathematical excellence and inspire the next generation of 
                    problem-solvers and innovators across Palestine.
                </Typography>
            </Box>

            <Box className='about-image' sx={styles.rightBoxWrapper}>
                <Box
                    component="img"
                    src="/images/image-removebg-preview 1.png"
                    alt="about-image"
                    sx={{
                        ...styles.aboutImage,
                        maxWidth: styles.aboutImage.maxWidth,
                        width: styles.aboutImage.widthResponsive,
                    }}
                />
            </Box>
        </Box>
    );
}

export default About;
