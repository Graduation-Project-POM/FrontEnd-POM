import { Box, Typography } from "@mui/material";
import { AboutContainer, AboutTitle, AboutText } from "./about.ts";
import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();

    return (
        <Box>
            <AboutContainer maxWidth="lg">
                <AboutTitle variant="h3">
                    {t("winterCamp.aboutTitle")}
                </AboutTitle>

                <AboutText>
                    {t("winterCamp.aboutDescription").split("\n\n").map((paragraph, index) => (
                        <Typography key={index} sx={{ mb: 2 }}>
                            {paragraph}
                        </Typography>
                    ))}
                </AboutText>

            </AboutContainer>
        </Box>
    );
}
