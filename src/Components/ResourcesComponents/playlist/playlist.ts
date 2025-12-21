import type { SxProps, Theme } from "@mui/material";

export const page: SxProps<Theme> = {
    minHeight: "100vh",
    bgcolor: "#f5f5f5",
    py: 4,
};

export const heroBox: SxProps<Theme> = {
    bgcolor: "white",
    py: 8,
    px: 3,
    mb: 4,
    textAlign: "center",
};

export const heroStack: SxProps<Theme> = {
    justifyContent: "center",
};

export const heroTitle: SxProps<Theme> = {
    mt: 2,
    background: "linear-gradient(90deg, #2C3E50 0%, #C2185B 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mb: 2,
    fontWeight: 800,
};

export const heroSubtitle: SxProps<Theme> = {
    maxWidth: 700,
    mx: "auto",
};

export const listWrapper: SxProps<Theme> = {
    maxWidth: 1000,
    mx: "auto",
    px: 3,
};

export const card = (color: string): SxProps<Theme> => ({
    cursor: "pointer",
    borderRadius: 3,
    border: "1px solid #e0e0e0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    transition:
        "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s",
    "&:hover": {
        transform: "translateY(-6px)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
        borderColor: color,
    },
});

export const avatar = (color: string): SxProps<Theme> => ({
    bgcolor: color,
    width: 64,
    height: 64,
    borderRadius: 2,
    transition: "transform 0.35s",
    ".MuiCard-root:hover &": {
        transform: "scale(1.08)",
    },
});

export const statsStack: SxProps<Theme> = {
    ml: "auto",
};
