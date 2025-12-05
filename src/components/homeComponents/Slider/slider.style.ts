import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

interface StyledSlideProps {
  bg: string;
  overlay?: boolean;
}

export const StyledSlide = styled(Box)<StyledSlideProps>(({ bg, overlay }) => ({
  position: "relative",
  backgroundImage: overlay
    ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`
    : `url(${bg})`, display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "530px",
}));

export const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 1,
  marginTop: "10rem",
})

export const Heading = styled(Typography)({
  color: "#7A1E3C",
  fontWeight: 600,
  fontSize: "48px",
  marginBottom: "1.5rem",
  textAlign: "center",
})

export const SecondHeading = styled(Typography)({
  color: "#ffffff",
  textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
  fontWeight: 700,
  fontSize: "48px",
  marginBottom: "10rem",
  marginTop: "-10rem",
  display: "flex",
  justifyContent: "flex-end",
})

export const Subtext = styled(Typography)({
  color: "#9CA3AF",
  fontSize: "34px",
  marginBottom: "2rem",
  textAlign: "center",
})

export const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
})

export const ExploreButton = styled(Button)({
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
})

export const StartButton = styled(Button)({
  backgroundColor: "#7A1E3C",
  color: "#fff",
  padding: "0.75rem 3rem",
  borderRadius: "25px",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#5A0E2C",
  },
})