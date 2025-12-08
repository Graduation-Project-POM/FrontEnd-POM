import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

interface StyledSlideProps {
  bg: string
  overlay?: boolean
}

export const StyledSlide = styled(Box, {
  shouldForwardProp: (prop) => prop !== "overlay",
})<StyledSlideProps>(({ theme, bg, overlay }) => ({
  position: "relative",
  backgroundImage: overlay
    ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`
    : `url(${bg})`,
  display: "flex",
  alignItems: "center",
  backgroundPosition: "center",
  height: "530px",
  [theme.breakpoints.down("md")]: { height: "400px" },
  [theme.breakpoints.down("sm")]: { height: "500px" },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  marginTop: "10rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "20rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "30rem",
  },
}))

export const Heading = styled(Typography)(({ theme }) => ({
  color: "#7A1E3C",
  fontWeight: 600,
  fontSize: "48px",
  marginBottom: "1.5rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    marginBottom: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
    marginBottom: "2rem",
  },
}))

export const SecondHeading = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
  fontWeight: 700,
  fontSize: "48px",
  marginBottom: "4rem",
  marginTop: "-15rem",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    marginTop: "-20rem",
    marginBottom: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    marginTop: "-25rem",
    justifyContent: "center",
    textAlign: "center",
  },
}))

export const Subtext = styled(Typography)(({ theme }) => ({
  color: "#9CA3AF",
  fontSize: "34px",
  marginBottom: "2rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    marginBottom: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    marginBottom: "1rem",
    padding: "0 1rem",
  },
}))

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "0.75rem",
    padding: "0 1rem",
  },
}))

export const ExploreButton = styled(Button)(({ theme }) => ({
  borderColor: "#7A1E3C",
  color: "#7A1E3C",
  padding: "0.75rem 2.5rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    borderColor: "#5A0E2C",
    backgroundColor: "rgba(122, 30, 60, 0.04)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}))

export const StartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7A1E3C",
  color: "#fff",
  padding: "0.75rem 3rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#5A0E2C",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}))

export const ThirdSlideContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0 4rem",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: "0 2rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 0.1rem",
  },
}))

export const ThirdSlideHeading = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: "2rem",
  marginTop: "-4rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginTop: "-3rem",
    marginBottom: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
    marginTop: "-2rem",
    marginBottom: "1rem",
  },
}))

export const WhiteExploreButton = styled(Button)(({ theme }) => ({
  borderColor: "#fff",
  color: "#fff",
  backgroundColor: "transparent",
  padding: "0.75rem 2.5rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  "&:hover": {
    borderColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.625rem 2rem",
    fontSize: "0.875rem",
  },
}))

export const WhiteStartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#7A1E3C",
  padding: "0.75rem 2.5rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}))

export const ChartWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "-10rem",
  zIndex: 2,
  opacity: 0.9,
  [theme.breakpoints.down("md")]: {
    gap: "1rem",
    marginTop: "-6rem",
    "& img": {
      maxWidth: "120px",
      height: "auto",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "-4rem",
  },
}))

export const ComPersonImg = styled("img")(({ theme }) => ({
  width: "520px",
  height: "auto",
  objectFit: "contain",
  marginBottom: "8rem",
  marginLeft: "10rem",
  [theme.breakpoints.down("md")]: {
    width: "350px",
    marginLeft: "4rem",
    marginBottom: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    marginLeft: "1rem",
    marginBottom: "2rem",
  },
}))

export const MathBoy = styled("img")(({ theme }) => ({
  height: "340px",
  objectFit: "contain",
  marginBottom: "2rem",
  marginLeft: "18rem",
  marginTop: "-5rem",
  [theme.breakpoints.down("md")]: {
    height: "220px",
    marginLeft: "8rem",
    marginTop: "-3rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "150px",
    marginLeft: "2rem",
    marginTop: "-2rem",
    marginBottom: "1rem",
  },
}))
