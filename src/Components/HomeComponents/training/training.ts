import type { SxProps } from "@mui/material";

export const styles: Record<string, SxProps> = {
  title: {
    color: "#7D1C48",
    fontWeight: 700,
    fontSize: { xs: "40px", sm: "46px", md: "52px", lg: "64px" },
    textAlign: "center",
    mb: { xs: 5, md: 10 },
  },

  cardsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: { xs: "wrap", md: "nowrap" },
    gap: { xs: 3, sm: 6 },
  },

  card: {
    p: 2,
    borderRadius: 2,
    width: { xs: 140, sm: 160, md: 180 },
    minHeight: { xs: 220, sm: 240, md: 250 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: 'url("/background.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
    transition:
      "transform 0.6s ease, box-shadow 0.3s ease, opacity 0.3s ease",
    "&:hover": {
      boxShadow: "0px 10px 25px rgba(125,28,72,0.25)",
    },
  },

  cardTitle: {
    fontWeight: 800,
    mt: 1.5,
    fontSize: { xs: 14, sm: 16, md: 18 },
    color: "#fff",
    textAlign: "center",
  },

  cardSubtitle: {
    fontWeight: 500,
    color: "#fff",
    fontSize: { xs: 12, sm: 14 },
    textAlign: "center",
  },

  image: {
    height: { xs: 120, sm: 160, md: 200 },
    width: "auto",
  },
};
