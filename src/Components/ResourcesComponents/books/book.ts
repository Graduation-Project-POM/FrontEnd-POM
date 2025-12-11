import type { SxProps, Theme } from "@mui/material";

export const styles = {
    container: {
        minHeight: "100vh",
        background: "#f5f5f5",
        p: 4,
    } as SxProps<Theme>,
    heroWrapper: { textAlign: "center", mb: 6 } as SxProps<Theme>,
    heroTitle: { fontWeight: "bold", mb: 2 } as SxProps<Theme>,
    heroDesc: { maxWidth: 600, mx: "auto" } as SxProps<Theme>,
    grid: { display: "grid", gap: 3, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" } as SxProps<Theme>,

    card: (color: string): SxProps<Theme> => ({
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        p: 2,
        background: `linear-gradient(135deg, ${color}20, ${color}40)`,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
        },
    }),

    iconBox: (color: string): SxProps<Theme> => ({
        fontSize: 36,
        mb: 2,
        display: "inline-block",
        p: 1.5,
        borderRadius: 2,
        background: `${color}33`,
    }),

    cardTitle: { fontWeight: "bold", mb: 1 } as SxProps<Theme>,
    cardDesc: { mb: 2, color: "#333" } as SxProps<Theme>,

    button: (color: string): SxProps<Theme> => ({
        backgroundColor: color,
        "&:hover": {
            backgroundColor: color + "cc",
        },
    }),
};
