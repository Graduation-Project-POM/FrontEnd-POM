import type { SxProps, Theme } from "@mui/material";

export const styles = {
    container: { minHeight: "90vh", background: "#f5f5f5", p: 4 } as SxProps<Theme>,
    heroWrapper: { textAlign: "center", mb: 6 } as SxProps<Theme>,
    heroTitle: { fontWeight: "bold", mb: 2 } as SxProps<Theme>,
    heroDesc: { maxWidth: 600, mx: "auto" } as SxProps<Theme>,
    grid: { display: "grid", gap: 3, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", justifyContent: "center" } as SxProps<Theme>,
    card: (color: string): SxProps<Theme> => ({
        borderRadius: 3,
        p: 2,
        background: `linear-gradient(135deg, ${color}33, ${color}66)`,
        "&:hover": { transform: "translateY(-5px)", boxShadow: "0px 10px 25px rgba(0,0,0,0.25)" },
    }),
    cardTitle: { fontWeight: "bold", mb: 1 } as SxProps<Theme>,
    button: (color: string): SxProps<Theme> => ({
        backgroundColor: color,
        "&:hover": { filter: "brightness(1.1)" },
    }),
};