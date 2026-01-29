import { Container, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


const BottomBar = {
    backgroundColor: "#6E0B2A",
    padding: "16px 0",
};



export default function CampFooter() {
    const { t } = useTranslation();

    return (
        <Box sx={BottomBar}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: "center",
                    }}
                >
                    <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
                        {t("footer.bottom.rights")}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}