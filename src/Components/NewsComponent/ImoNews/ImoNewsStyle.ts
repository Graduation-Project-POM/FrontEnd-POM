import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  pageContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: { xs: "20px 16px", md: "40px 32px" },
  },

  title: {
    fontSize: { xs: "26px", md: "40px" },
    fontWeight: 900,
    textAlign: "center",
    color: "#7D1C48",
    marginTop: "50px",
    marginBottom: "50px",
    "&::after": {
      content: '""',
      display: "block",
      width: "80px",
      height: "4px",
      backgroundColor: "#7D1C48",
      margin: "30px auto 0",
      borderRadius: "2px",
    },
  },

  introVideoWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 35px rgba(0,0,0,0.2)",
    backgroundColor: "#000",
  },

  introVideo: {
    width: "100%",
    height: "auto",
    display: "block",
    maxHeight: "70vh",
    backgroundColor: "#000",
  },

  description: {
    backgroundColor: "#f9f9fc",
    maxWidth: "1000px",
    margin: { xs: "32px auto 0", md: "48px auto 0" },
    padding: { xs: "16px", sm: "20px", md: "24px" },
    borderRadius: "20px",
    fontSize: { xs: "15px", md: "18px" },
    lineHeight: 1.9,
    color: "#2c3e50",
    whiteSpace: "pre-wrap",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    borderRight: { xs: "none", md: "5px solid #7D1C48" },
    borderTop: { xs: "3px solid #7D1C48", md: "none" },
    textAlign: "justify",
    transition: "all 0.2s",
    "&:hover": {
      boxShadow: "0 12px 28px rgba(125,28,72,0.1)",
    },
  },

  sliderWrapper: {
    position: "relative",
    px: { xs: 2, md: 8 },
    py: 2,
    mt: { xs: 4, md: 6 },
  },

  slider: {
    display: "flex",
    gap: 2,
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    padding: 0,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  card: {
    position: "relative",
    minWidth: { xs: 260, sm: 380, md: 480 },
    height: { xs: 340, sm: 480, md: 600 },
    borderRadius: 4,
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    scrollSnapAlign: "center",
    cursor: "pointer",
    backgroundColor: "#000",
    flexShrink: 0,
  },

  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  playBadge: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 72,
    height: 72,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(125,28,72,0.85)",
    color: "white",
    pointerEvents: "none",
    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
  },

  leftArrow: {
    position: "absolute",
    top: "50%",
    left: 20,
    transform: "translateY(-50%)",
    zIndex: 2,
    backgroundColor: "white",
    color: "#7D1C48",
    boxShadow: 3,
    "&:hover": {
      backgroundColor: "#7D1C48",
      color: "white",
    },
  },

  rightArrow: {
    position: "absolute",
    top: "50%",
    right: 20,
    transform: "translateY(-50%)",
    zIndex: 2,
    backgroundColor: "white",
    color: "#7D1C48",
    boxShadow: 3,
    "&:hover": {
      backgroundColor: "#7D1C48",
      color: "white",
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

  lightboxMedia: {
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
      backgroundColor: "#7D1C48",
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
      backgroundColor: "#7D1C48",
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
