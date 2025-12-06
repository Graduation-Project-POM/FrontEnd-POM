import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
    title: {
        color: "#7D1C48",
        fontWeight: "bold",
        fontSize: { xs: "28px", sm: "40px", md: "52px" }, 
        textAlign: "center",
        mb: { xs: 5, md: 10 },
    },
    controlBtn: {
        background: "#7A1731",
        color: "#fff",
        "&:hover": {
            background: "#5a0f24",
        },
        borderRadius: "50%",
        p: { xs: 0.5, sm: 1 }, 
    },
    cardsWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: { xs: "wrap", md: "nowrap" },
        gap: { xs: 1, sm: 6 },
    },
    card: {
        p: 2,
        borderRadius: 2,
        width: { xs: 140, sm: 160, md: 180 },
        minHeight: { xs: 220, sm: 240, md: 250 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("/images/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 0.3s, opacity 0.3s",
    },
    cardTitle: {
        fontWeight: 800,
        mt: 1.5,
        fontSize: { xs: 14, sm: 16, md: 18 },
        color: "#fff",
        textAlign: "center",
    },
    cardSubtitle: {
        fontWeight: 500,
        color: "#fff",
        fontSize: { xs: 12, sm: 14 },
        textAlign: "center",
    },
    image: {
        height: { xs: 120, sm: 160, md: 200 }, 
        width: "auto",
    },
    control:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mb:"20px"
    }
};
