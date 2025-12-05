import { Box, Typography } from "@mui/material";
import { styles } from "./partnerStyle";

function Partner() {
    return (
        <>
            <Typography
                style={styles.title}
                sx={{
                    fontSize: { xs: "30px", sm: "50px", md: "90px" },
                    textAlign: "center",
                    marginBottom: { xs: "20px", md: "40px" },
                }}
            >
                Our Partners
            </Typography>

            <Box
                className="partner"
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: "20px", sm: "40px", md: "50px" },
                    flexWrap: "wrap",
                    padding: { xs: "0 10px", md: "0" },
                }}
            >
                <Box
                    component="img"
                    src="/images/Partner1.png"
                    alt="partner1"
                    sx={{
                        width: { xs: "100px", sm: "170px", md: "290px" },
                        height: "auto",
                        borderRadius: "10px",
                    }}
                />

                <Box
                    sx={{
                        display: { xs: "none", lg: "block" },
                        width: "5px",
                        height: "250px",
                        backgroundColor: "#7D1C48",
                    }}
                />

                <Box
                    component="img"
                    src="/images/Partner2.png"
                    alt="partner2"
                    sx={{
                        width: { xs: "100px", sm: "200px", md: "320px" },
                        height: "auto",
                        borderRadius: "10px",
                    }}
                />

                <Box
                    sx={{
                        display: { xs: "none", lg: "block" },
                        width: "5px",
                        height: "250px",
                        backgroundColor: "#7D1C48",
                    }}
                />

                <Box
                    component="img"
                    src="/images/Partner3.jpg"
                    alt="partner3"
                    sx={{
                        width: { xs: "100px", sm: "200px", md: "320px" },
                        height: "auto",
                        borderRadius: "10px",
                    }}
                />
            </Box>
        </>
    );
}

export default Partner;
