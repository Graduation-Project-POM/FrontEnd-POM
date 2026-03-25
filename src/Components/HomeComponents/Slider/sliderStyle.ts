import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

interface StyledSlideProps {
  bg: string
  overlay?: boolean
}

export const StyledSlide = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overlay",
})<StyledSlideProps>(({ bg, overlay }) => ({
  position: "relative",
  backgroundImage: overlay
    ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`
    : `url(${bg})`,
  display: "flex",
  alignItems: "center",
  backgroundPosition: "center",
  height: "530px",

  "@media (max-width:1400px)": { height: "500px" },
  "@media (max-width:1080px)": { height: "450px" },
  "@media (max-width:850px)": { height: "400px" },
  "@media (max-width:570px)": { height: "350px" },
}));


interface ContentWrapperProps {
  isArabic?: boolean;
}

export const ContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isArabic",
})<ContentWrapperProps>(({ isArabic }) => ({
  position: "relative",
  zIndex: 1,
  marginTop: isArabic ? "12rem" : "10rem",

  "@media (max-width:1400px)": {
    marginTop: isArabic ? "24rem" : "12rem",
    padding: "0 7rem",
  },
  "@media (max-width:1080px)": {
    marginTop: isArabic ? "23rem" : "10rem",
    padding: "0 5rem",
  },
  "@media (max-width:850px)": {
    marginTop: isArabic ? "20rem" : "12rem",
    padding: "0 2rem",
  },
  "@media (max-width:620px)": {
    marginTop: isArabic ? "20rem" : "10rem",
    padding: "0 1rem",
  },
  "@media (max-width:575px)": {
    marginTop: isArabic ? "39rem" : "32rem",
    padding: "0 1rem",
  },
}));

export const Heading = styled(Typography)({
  color: "#7A1E3C",
  fontWeight: 600,
  fontSize: "48px",
  marginBottom: "1.5rem",
  textAlign: "center",

  "@media (max-width:1400px)": { fontSize: "42px", marginBottom: "2rem" },
  "@media (max-width:1080px)": { fontSize: "36px", marginBottom: "2rem" },
  "@media (max-width:850px)": { fontSize: "30px", marginBottom: "1.5rem" },
  "@media (max-width:570px)": { fontSize: "28px", marginBottom: "1rem" },
});

export const ContentWrappersecond = styled(Box)<ContentWrapperProps>(({ isArabic }) => ({
  position: "relative",
  zIndex: 1,
  marginTop: isArabic ? "12rem" : "10rem",

  "@media (max-width:1400px)": {
    marginTop: isArabic ? "28rem" : "10rem",
    padding: "0 7rem",
  },
  "@media (max-width:1080px)": {
    marginTop: isArabic ? "22rem" : "12rem",
    padding: "0 5rem",
  },
  "@media (max-width:850px)": {
    marginTop: isArabic ? "16rem" : "14rem",
    padding: "0 2rem",
  },
  "@media (max-width:620px)": {
    marginTop: isArabic ? "20rem" : "12rem",
    padding: "0 1rem",
  },
  "@media (max-width:575px)": {
    marginTop: isArabic ? "18rem" : "32rem",
    padding: "0 1rem",
  },
}));

interface SecondHeadingProps {
  isArabic?: boolean;
}

export const SecondHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isArabic",
})<SecondHeadingProps>(({ isArabic }) => ({
  color: "#fff",
  textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
  fontWeight: 700,
  fontSize: "48px",
  marginBottom: "4rem",
  marginTop: isArabic ? "-12rem" : "-15rem",
  display: "flex",
  justifyContent: isArabic ? "center" : "flex-end",
  textAlign: isArabic ? "center" : "right",

  "@media (max-width:1400px)": {
    fontSize: "42px",
    marginTop: isArabic ? "-31rem" : "-18rem",
    marginBottom: "3.5rem",
  },
  "@media (max-width:1080px)": {
    fontSize: "36px",
    marginTop: isArabic ? "-24rem" : "-13rem",
    justifyContent: "center",
    textAlign: "center",
  },
  "@media (max-width:850px)": {
    fontSize: "28px",
    marginTop: isArabic ? "-22rem" : "-10rem",
    justifyContent: "center",
    textAlign: "center",
  },
  "@media (max-width:600px)": {
    fontSize: "24px",
    marginTop: isArabic ? "-40rem" : "-35rem",
  },
}));

export const Subtext = styled(Typography)({
  color: "#333",
  maxWidth: "1000px",
  fontSize: "28px",
  padding: "0 16rem",
  marginBottom: "2rem",
  textAlign: "center",

  "@media (max-width:1400px)": { fontSize: "26px", padding: "0 5rem" },
  "@media (max-width:1080px)": { fontSize: "24px", padding: "0 3rem" },
  "@media (max-width:850px)": { fontSize: "20px", padding: "0 2rem" },
  "@media (max-width:600px)": { fontSize: "16px", padding: "0 1rem" },
});

export const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",

  "@media (max-width:550px)": { flexDirection: "column", gap: "0.75rem" },
});

export const ExploreButton = styled(Button)({
  borderColor: "#7A1E3C",
  color: "#7A1E3C",
  backgroundColor: "#fff",
  padding: "0.75rem 2.5rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "16px",

  "&:hover": { borderColor: "#5A0E2C", backgroundColor: "rgba(122,30,60,0.04)" },

  "@media (max-width:850px)": { fontSize: "14px", padding: "0.6rem 2rem" },
});

export const StartButton = styled(Button)({
  backgroundColor: "#7A1E3C",
  color: "#fff",
  padding: "0.75rem 3rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "16px",

  "&:hover": { backgroundColor: "#5A0E2C" },
  "@media (max-width:850px)": { fontSize: "14px", padding: "0.6rem 2rem" },
});

export const ThirdSlideContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 4rem",
  color: "#fff",

  "@media (max-width:1080px)": { padding: "0 2rem" },
  "@media (max-width:850px)": { padding: "0 1rem" },
  "@media (max-width:600px)": { padding: "0 0.5rem" },
});

export const ThirdSlideHeading = styled(Typography)({
  color: "#fff",
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: "2rem",
  marginTop: "-4rem",

  "@media (max-width:1080px)": { fontSize: "2rem", marginTop: "-3rem", marginBottom: "1.5rem" },
  "@media (max-width:850px)": { fontSize: "1.5rem", marginTop: "-2.5rem", marginBottom: "1rem" },
  "@media (max-width:600px)": { fontSize: "1.2rem", marginTop: "-2rem", marginBottom: "0.8rem" },
});

export const WhiteExploreButton = styled(Button)({
  borderColor: "#fff",
  color: "#fff",
  backgroundColor: "transparent",
  padding: "0.75rem 2.5rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,

  "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.1)" },

  "@media (max-width:850px)": { fontSize: "0.875rem", padding: "0.625rem 2rem" },
});

export const WhiteStartButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#7A1E3C",
  padding: "0.75rem 2.5rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,

  "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
  "@media (max-width:850px)": { fontSize: "0.875rem", padding: "0.625rem 2rem" },
});

export const ChartWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "-10rem",
  zIndex: 2,
  opacity: 0.9,

  "@media (max-width:1080px)": { gap: "1rem", marginTop: "-6rem", "& img": { maxWidth: "120px" } },
  "@media (max-width:850px)": { marginTop: "-4rem" },
  "@media (max-width:600px)": { flexDirection: "row" },
});

export const ComPersonImg = styled("img")({
  width: "520px",
  height: "auto",
  objectFit: "contain",
  marginBottom: "8rem",
  marginLeft: "10rem",

  "@media (max-width:1080px)": { width: "400px", marginLeft: "5rem", marginBottom: "5rem" },
  "@media (max-width:850px)": { width: "300px", marginLeft: "2rem", marginBottom: "3rem" },
  "@media (max-width:600px)": { width: "200px", marginLeft: "1rem", marginBottom: "2rem" },
});

export const MathBoy = styled("img")<{ isrtl?: boolean }>(({ isrtl }) => ({
  height: "340px",
  objectFit: "contain",
  marginBottom: "2rem",
  marginLeft: isrtl ? "-10rem" : "20rem",
  marginRight: isrtl ? "18rem" : "-50rem",
  marginTop: "-5rem",

  "@media (max-width:1080px)": { height: "220px", marginLeft: "8rem", marginTop: "-3rem" },
  "@media (max-width:850px)": { height: "150px", marginLeft: "2rem", marginTop: "-2rem", marginBottom: "1rem" },
  "@media (max-width:600px)": { height: "120px", marginLeft: "1rem", marginTop: "-1rem", marginBottom: "0.5rem" },
}));
