import { Box, Typography } from "@mui/material";
import { styles } from "./partnerStyle";

function Partner() {
    return (
        <>
            <Typography
                sx={{
                    ...styles.title,
                    fontSize: styles.title.fontSize,
                    marginBottom: styles.title.marginBottomResponsive,
                }}
            >
                Our Partners
            </Typography>

            <Box className="partner" sx={styles.partnerWrapper}>
                <Box
                    component="img"
                    src="/Partner1.png"
                    alt="partner1"
                    sx={styles.partnerImage1}
                    className="partner-img"
                />

                <Box sx={styles.verticalLine} />

                <Box
                    component="img"
                    src="/Partner2.png"
                    alt="partner2"
                    sx={styles.partnerImage2}
                    className="partner-img"
                />

                <Box sx={styles.verticalLine} />

                <Box
                    component="img"
                    src="/Partner3.jpg"
                    alt="partner3"
                    sx={styles.partnerImage3}
                    className="partner-img"
                />
            </Box>
        </>
    );
}

export default Partner;
