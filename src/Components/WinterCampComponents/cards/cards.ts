import type { SxProps, Theme } from "@mui/material";

export const cardStyles: Record<string, SxProps<Theme>> = {
   
    title: {
        fontWeight: 700,
        textAlign: "center",
        color: "#7A1E3C",
        position: "relative",
        "&::after": {
            content: '""',
            display: "block",
            width: "100px",
            height: "4px",
            backgroundColor: "#7A1E3C",
            margin: "8px auto 0",
            borderRadius: "2px",
        },
        animation: "fadeIn 1s ease forwards",
    },
    card: {
        borderRadius: 4,
        pt: 8,
        position: "relative",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        minWidth: 220,
        marginTop: 3,
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        },
    },
    avatar: {
        width: 100,
        height: 100,
        border: "4px solid white",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        position: "absolute",
        top: -40,
        left: "50%",
        transform: "translateX(-50%)",
    },
    cardContent: {
        textAlign: "center",
        pt: 4,
        pb: 3,
    },
    name: {
        mb: 0.5,
        color: "#1a1a2e",
    },
    chip: {
        mb: 2,
        bgcolor: "rgba(85,107,255,0.1)",
        color: "#556bff",
        fontWeight: 500,
        overflow: "visible",
        
    },
    countryBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        mb: 2,
    },
    locationIcon: {
        fontSize: 18,
        color: "#888",
    },
};