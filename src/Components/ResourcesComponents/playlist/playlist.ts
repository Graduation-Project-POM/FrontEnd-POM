import type { SxProps, Theme } from "@mui/material";

export const page: SxProps<Theme> = {
    paddingTop: "80px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    p: 2,
    gap: 4,
};

export const card = (color: string): SxProps<Theme> => ({
    width: 340,
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    background: `linear-gradient(135deg, ${color}33, ${color}66)`,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
    },
});

export const cardContent: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    p: 6,
};

export const iconBox = (color: string): SxProps<Theme> => ({
    width: 80,
    height: 80,
    borderRadius: 3,
    backgroundColor: color + "33",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 3,
    fontSize: "3rem",
});

export const title: SxProps<Theme> = {
    fontWeight: 700,
    mb: 2,
};

export const subtitle = (color: string): SxProps<Theme> => ({
    mb: 4,
    color: color,
});

export const button = (color: string): SxProps<Theme> => ({
    background: `linear-gradient(135deg, ${color}, #a33165)`,
    color: "#fff",
    borderRadius: 3,
    px: 5,
    py: 1.5,
    fontWeight: 700,
    fontSize: "1.1rem",
    "&:hover": { filter: "brightness(1.1)" },
});
