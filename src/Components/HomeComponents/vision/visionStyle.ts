export const styles = {
  visionContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", md: "flex-start" },
    gap: { xs: 1.5, md: 0 },
    textAlign: { xs: "center", md: "left" },
    mb: 3,
  },

  title: {
    color: "#7D1C48",
    fontWeight: "700",
    flex: 1,
    fontSize: { xs: "40px", sm: "46px", md: "52px", lg: "64px" },
    padding: { xs: "0 10px", md: "50px 150px" },
    textAlign: { xs: "center", md: "center" },
    textShadow: "0px 3px 6px rgba(27, 27, 27, 0.15)",
    marginTop: {
      xs: "100px",
      md: "28px",
    },
  },

  image: {
    width: { xs: "150px", sm: "250px", md: "400px" },
    height: "auto",
    margin: { xs: 0, md: "10px -70px" },
    zIndex: 10,
    animation: "float 3.8s ease-in-out infinite",
  },

  slidesWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: { xs: 1, sm: 2, md: 3 },
    width: { xs: "75%", sm: "70%", md: "60%" },
    flexWrap: "wrap",
    transition: "0.4s ease",
  },

  slideCard: {
    width: { xs: "180px", sm: "200px", md: "240px" },
    height: { xs: "160px", sm: "200px", md: "280px" },
    padding: "14px",
    borderRadius: "16px",
    backgroundColor: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    transition:
      "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.3s ease",
    "&:hover": {
      transform: "scale(0.95)",
      boxShadow: "0px 10px 25px rgba(125,28,72,0.25)",
    },
  },

  slideTitle: {
    fontWeight: "bold",
    color: "#7A1731",
    mb: 1,
  },

  slideText: {
    color: "gray",
    px: 1,
    fontSize: "15px",
  },
};
