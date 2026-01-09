import { Box, Button, Typography } from "@mui/material";
import { Navbar } from "../../HomeComponents/Navbar/Navbar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslation } from "react-i18next";
import { bannerStyles } from "./home.ts";

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />

            <Box sx={bannerStyles.container}>
                <Typography sx={bannerStyles.title}>
                    {t("winterCamp.header1")}
                    <br />
                    {t("winterCamp.header2")}
                </Typography>

                <Box sx={bannerStyles.searchBox}>
                    <Box sx={bannerStyles.dateBox}>
                        <Typography sx={bannerStyles.dateLabel}>
                            <CalendarMonthIcon fontSize="small" />
                            {t("winterCamp.checkIn")}
                        </Typography>
                        <Typography sx={bannerStyles.dateValue}>
                            {t("winterCamp.startDate")}
                        </Typography>
                    </Box>

                    <Box sx={bannerStyles.divider} />

                    <Box sx={bannerStyles.dateBox}>
                        <Typography sx={bannerStyles.dateLabel}>
                            <CalendarMonthIcon fontSize="small" />
                            {t("winterCamp.checkOut")}
                        </Typography>
                        <Typography sx={bannerStyles.dateValue}>
                            {t("winterCamp.endDate")}
                        </Typography>
                    </Box>

                    <Button variant="contained" sx={bannerStyles.button}>
                        {t("winterCamp.exploreCamp")}
                    </Button>
                </Box>
            </Box>

            <Box sx={bannerStyles.spacer} />
        </>
    );
}

export default Home;
