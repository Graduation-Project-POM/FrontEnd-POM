import { alpha } from "@mui/material";

export const colors: Record<string, string> = {
    Jenin: "#7D1C48",
    Qabatiya: "#FF9F1C",
    Yatta: "#FF3C3C",
    Birzeit: "#FF6B1C",
    Qalqilya: "#FFF71C",
    Jerusalem: "#A0FF1C",
    Tulkarm: "#1CDFFF",
    RamallahBireh: "#241CFF",
    Nablus: "#B71CFF",
    Salfit: "#FF1CD9",
    Jericho: "#FF1C27",
};

export const styles = {
    page: (isRTL: boolean) => ({
        minHeight: "100vh",
        padding: "10rem 8rem 0 8rem",
        direction: isRTL ? "rtl" : "ltr",
    }),

    heroTitle: {
        fontWeight: 800,
        mb: 2,
        background: "linear-gradient(135deg, #7D1C48 0%, #a33165ff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    },

    heroDesc: {
        color: "#333",
        maxWidth: 700,
        mx: "auto",
        fontWeight: 400,
        lineHeight: 1.6,
    },

    filterChip: (active: boolean) => ({
        px: 2,
        py: 2,
        margin: "10px",
        height: "auto",
        fontSize: "0.95rem",
        fontWeight: 600,
        borderRadius: 3,
        transition: "all 0.3s ease",
        ...(active
            ? {
                background: "linear-gradient(135deg, #7D1C48 0%, #a33165ff 100%)",
                color: "white",
                boxShadow: "0 4px 15px rgba(125, 28, 72, 0.4)",
                transform: "translateY(-2px)",
            }
            : {
                background: "white",
                border: "2px solid",
                borderColor: "divider",
                "&:hover": {
                    borderColor: "#7D1C48",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
            }),
    }),

    card: (dir: string) => ({
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        background: "white",
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: `0 12px 40px ${alpha(colors[dir], 0.25)}`,
            borderColor: colors[dir],
        },
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: `linear-gradient(90deg, ${colors[dir]}, ${alpha(
                colors[dir],
                0.7
            )})`,
        },
    }),

    cardContent: {
        p: 3.5,
    },

    iconBox: (dir: string) => ({
        width: 56,
        height: 56,
        borderRadius: 3,
        background: `linear-gradient(135deg, ${alpha(colors[dir], 0.15)}, ${alpha(
            colors[dir],
            0.05
        )})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2.5,
        fontSize: "1.75rem",
    }),

    directorateChip: (dir: string) => ({
        mb: 2,
        fontWeight: 600,
        fontSize: "0.75rem",
        background: alpha(colors[dir], 0.1),
        color: colors[dir],
        border: "none",
    }),

    title: {
        fontWeight: 700,
        mb: 1.5,
        lineHeight: 1.4,
        color: "text.primary",
        minHeight: 56,
    },

    description: {
        color: "text.secondary",
        mb: 3,
        lineHeight: 1.6,
    },

    button: (dir: string) => ({
        py: 1.5,
        borderRadius: 2.5,
        fontWeight: 600,
        fontSize: "0.95rem",
        textTransform: "none",
        background: colors[dir],
        boxShadow: "none",
        transition: "all 0.3s ease",
        "&:hover": {
            background: colors[dir],
            filter: "brightness(1.1)",
            boxShadow: `0 6px 20px ${alpha(colors[dir], 0.4)}`,
            transform: "translateY(-2px)",
        },
    }),
};
