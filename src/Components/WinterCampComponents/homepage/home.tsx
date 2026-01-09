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
                    {t("organizations.winterCamp.header1")}
                    <br />
                    {t("organizations.winterCamp.header2")}
                </Typography>

                <Box sx={bannerStyles.searchBox}>
                    <Box sx={bannerStyles.dateBox}>
                        <Typography sx={bannerStyles.dateLabel}>
                            <CalendarMonthIcon fontSize="small" />
                            {t("organizations.winterCamp.checkIn")}
                        </Typography>
                        <Typography sx={bannerStyles.dateValue}>
                            {t("organizations.winterCamp.startDate")}
                        </Typography>
                    </Box>

                    <Box sx={bannerStyles.divider} />

                    <Box sx={bannerStyles.dateBox}>
                        <Typography sx={bannerStyles.dateLabel}>
                            <CalendarMonthIcon fontSize="small" />
                            {t("organizations.winterCamp.checkOut")}
                        </Typography>
                        <Typography sx={bannerStyles.dateValue}>
                            {t("organizations.winterCamp.endDate")}
                        </Typography>
                    </Box>

                    <Button variant="contained" sx={bannerStyles.button}>
                        {t("organizations.winterCamp.exploreCamp")}
                    </Button>
                </Box>
            </Box>

            <Box sx={bannerStyles.spacer} />
        </>
    );
}

export default Home;
