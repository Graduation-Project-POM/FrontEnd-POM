import { Box } from "@mui/material";
import { AboutContainer, AboutTitle, AboutText } from "./about.ts";
import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();

    return (
        <Box>
            <AboutContainer maxWidth="lg">
                <AboutTitle variant="h3">
                    {t("organizations.winterCamp.aboutTitle")}
                </AboutTitle>

                <AboutText >
                    {t("organizations.winterCamp.aboutDescription")}
                </AboutText>
            </AboutContainer>
        </Box>
    );
}
