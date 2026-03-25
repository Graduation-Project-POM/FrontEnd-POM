import type { SxProps, Theme } from "@mui/material";

export const sliderContainerStyles: Record<string, SxProps<Theme>> = {
  sliderWrapper: {
    backgroundColor:"#ffffff",
    position: "relative",
    px: { xs: 2, md: 8 },
    py: 2,
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
    minWidth: 550,
    height: 700,
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

export const titleStyles: SxProps<Theme> = {
  fontSize: { xs: "40px", sm: "46px", md: "52px", lg: "64px" },
  fontWeight: 700,
  color: "#7D1C48",
  mb: 4,
  mt: 8,
  textAlign: "center",
};

export const descriptionStyles: SxProps<Theme> = {
  maxWidth: 800,
  margin: "0 auto",
  fontSize: { xs: "16px", md: "20px" },
  color: "#444",
  lineHeight: 1.8,
  textAlign: "center",
};

export const sectionBoxStyles: SxProps<Theme> = {
  textAlign: "center",
  py: { xs: 6, md: 10 },
  px: 2,
};
