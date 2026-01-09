import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    page: {
        minHeight: "100vh",
    },

    header: {
        textAlign: "center",
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, #7A1E3C, #7b344cff)",
        color: "white",
    },

    daySection: {
        px: { xs: 2, md: 8 },
        py: 5,
    },

    sliderWrapper: {
        position: "relative",
    },

    slider: {
        display: "flex",
        gap: 2,
        overflow: "hidden",
    },

    card: {
        minWidth: 320,
        height: 220,
        borderRadius: 4,
        position: "relative",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "0.3s",
        "&:hover": {
            transform: "scale(1.03)",
        },
    },

    overlay: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        bgcolor: "rgba(122, 30, 60, 0.5)",
        color: "white",
        py: 1,
        textAlign: "center",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },

    leftArrow: {
        position: "absolute",
        top: "50%",
        left: -20,
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "white",
        color: "#7A1E3C",
        boxShadow: 3,
        "&:hover": {
            backgroundColor: "#7A1E3C",
            color: "white",
        },
    },

    rightArrow: {
        position: "absolute",
        top: "50%",
        right: -20,
        transform: "translateY(-50%)",
        zIndex: 2,
        backgroundColor: "white",
        color: "#7A1E3C",
        boxShadow: 3,
        "&:hover": {
            backgroundColor: "#7A1E3C",
            color: "white",
        },
    },
};
