import type { SxProps, Theme } from "@mui/material";

export const gradients = [
  ["#FF6B6B", "#FF8E53", "#FFD93D"], 
  ["#6C5CE7", "#A29BFE", "#FFEAA7"], 
  ["#00B894", "#55EFC4", "#FD79A8"],
  ["#E17055", "#FDCB6E", "#74B9FF"],
  ["#7B2D47", "#B83B5E", "#F08A5D"],
  ["#0984E3", "#74B9FF", "#FFEAA7"],
  ["#A29BFE", "#FD79A8", "#FDCB6E"],
  ["#00CEC9", "#81ECEC", "#FF7675"],
];

// export const gradients = [
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
//   ["#6E0B2A", "#7c4758ff", "#6E0B2A"],
// ];

export const colors = gradients.map(g => g[0]);

export const styles: Record<string, SxProps<Theme> | any> = {
  container: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(4, 1fr)",
    },
    gap: 3,
    p: 3,
  },

  getCard: (index: number): SxProps<Theme> => {
    const gradient = gradients[index % gradients.length];
    return {
      position: "relative",
      overflow: "visible",
      borderRadius: 5,
      border: "none",
      boxShadow: `0 10px 40px ${gradient[0]}40, 0 0 0 1px ${gradient[0]}20`,
      background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -2,
        left: -2,
        right: -2,
        bottom: -2,
        background: `linear-gradient(135deg, ${gradient[2]}60, transparent 50%, ${gradient[0]}40)`,
        borderRadius: 6,
        zIndex: -1,
        opacity: 0,
        transition: "opacity 0.4s ease",
      },
      "&:hover": {
        transform: "translateY(-12px) scale(1.03) rotate(-1deg)",
        boxShadow: `0 20px 60px ${gradient[0]}50, 0 0 0 2px ${gradient[2]}40`,
        "&::before": {
          opacity: 1,
        },
        "& .pdf-icon": {
          transform: "rotate(-8deg) scale(1.15)",
          boxShadow: `0 8px 25px ${gradient[0]}40`,
        },
      },
    };
  },

  cardContent: {
    p: 3,
    pt: 4,
  },

  getPdfIcon: (index: number): SxProps<Theme> => {
    const gradient = gradients[index % gradients.length];
    return {
      width: 65,
      height: 75,
      mb: 2,
      borderRadius: 3,
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 8px 25px rgba(0,0,0,0.15), 0 0 0 2px ${gradient[2]}30`,
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "0 18px 18px 0",
        borderColor: `transparent ${gradient[1]} transparent transparent`,
        borderRadius: "0 3px 0 0",
      },
    };
  },

  pdfLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "#D44638",
    letterSpacing: 1,
  },

  getCornerFold: (index: number): SxProps<Theme> => ({
    position: "absolute",
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 14px 14px 0",
    borderColor: `transparent ${colors[index % colors.length]} transparent transparent`,
  }),

cardTitle: {
    fontWeight: 800,
    color: "#fff",
    mb: 1,
    fontSize: "1.2rem",
    letterSpacing: "0.5px",
    textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15)",
    textTransform: "uppercase",
  },

  cardDescription: {
    color: "rgba(255,255,255,0.9)",
    mb: 2,
    fontWeight: 500,
    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
  },

  button: {
    mt: 2,
    borderRadius: "50px",
    textTransform: "none",
    fontWeight: 700,
    px: 4,
    py: 1.2,
    background: "rgba(255,255,255,0.95)",
    color: "#7B2D47",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255,255,255,0.3)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    "&:hover": {
      background: "#7B2D47",
      color: "#fff",
      transform: "scale(1.05)",
      boxShadow: "0 8px 25px rgba(123,45,71,0.4)",
    },
  },
};
