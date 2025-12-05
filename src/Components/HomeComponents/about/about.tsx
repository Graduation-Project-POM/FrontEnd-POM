import { Box, Typography } from '@mui/material';
import { styles } from './aboutStyle.ts';

function About() {
    return (
        <>
            <Box 
                className='about' 
                style={styles.about}
                sx={{
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    textAlign: { xs: "center", md: "left" },
                    gap: { xs: 2, md: 4 },
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "20px", md: "50px" }
                }}
            >
                <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
                    <Typography 
                        className="typography" 
                        style={styles.title}
                        sx={{
                            fontSize: { xs: "35px", sm: "25px", md: "60px" },
                            textAlign: { xs: "center", md: "left" }
                        }}
                    >
                        About Us
                    </Typography>

                    <Typography 
                        className="secondary-text typography" 
                        style={styles.description}
                        sx={{
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            lineHeight: { xs: "1.6", md: "1.9" },
                            marginTop: { xs: "10px", md: "20px" },
                            textAlign: { xs: "center", md: "left" }
                        }}
                    >
                        The Palestine Math Olympiad is a national initiative dedicated to discovering, 
                        training, and empowering talented students in mathematics. Through a series of 
                        competitive stages, engaging workshops, and collaborative partnerships, we aim to 
                        strengthen mathematical excellence and inspire the next generation of 
                        problem-solvers and innovators across Palestine.
                    </Typography>
                </Box>

                <Box 
                    className='about-image'
                    sx={{
                        maxWidth: { xs: "80%", sm: "60%", md: "40%" },
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Box
                        component="img"
                        src="/images/image-removebg-preview 1.png"
                        alt="about-image"
                        style={styles.aboutImage}
                        sx={{
                            width: "100%",
                            maxWidth: { xs: "250px", sm: "300px", md: "450px" }
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default About;
