import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    page: {
        minHeight: "100vh",
        background: "#F5F5F5",
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
    card: {
        minWidth: 400,
        height: 500,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        scrollSnapAlign: "center",
        cursor: "pointer",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    slider: {
        display: "flex",
        gap: 2,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        backgroundColor: "#F5F5F5",
        padding: 0,
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },

    cardPDF: {
        width: "100%",
        maxWidth: 330,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        p: 3,
        background: "linear-gradient(135deg, #6C485920, #6C485940)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "0.3s",
        "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
        },
    },

    iconBox: {
        fontSize: 36,
        mb: 2,
        display: "inline-block",
        p: 1.5,
        borderRadius: 2,
        background: `#6C485933`,
    },

    button: {
        backgroundColor: "#6C4859",
        "&:hover": {
            backgroundColor: "#6C4859cc",
        },
    },

    lightboxPaper: {
        backgroundColor: "transparent",
        boxShadow: "none",
        maxWidth: "95vw",
        maxHeight: "95vh",
        margin: 0,
        overflow: "visible",
    },

    lightboxContent: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        p: 0,
        "&:last-child": { pb: 0 },
        overflow: "visible",
    },

    lightboxImage: {
        maxWidth: "80vw",
        maxHeight: "85vh",
        objectFit: "contain",
        borderRadius: 2,
        userSelect: "none",
    },

    lightboxClose: {
        position: "absolute",
        top: -50,
        right: -10,
        color: "white",
        backgroundColor: "rgba(255,255,255,0.15)",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.3)",
        },
        zIndex: 10,
    },

    lightboxLeftArrow: {
        position: "absolute",
        left: { xs: -20, md: -60 },
        top: "50%",
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(255,255,255,0.15)",
        "&:hover": {
            backgroundColor: "#7A1E3C",
        },
        zIndex: 10,
    },

    lightboxRightArrow: {
        position: "absolute",
        right: { xs: -20, md: -60 },
        top: "50%",
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(255,255,255,0.15)",
        "&:hover": {
            backgroundColor: "#7A1E3C",
        },
        zIndex: 10,
    },

    lightboxCounter: {
        position: "absolute",
        bottom: -40,
        left: "50%",
        transform: "translateX(-50%)",
        color: "white",
        fontSize: 14,
        opacity: 0.8,
    },
};