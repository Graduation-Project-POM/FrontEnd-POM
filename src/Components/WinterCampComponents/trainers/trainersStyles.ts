import { Box, Card, Typography, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"

export const MAROON = "#7C1C3B"

/* Page */
export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg,#fafaf9,#f5f5f4)",
  padding: "80px 16px",

  [theme.breakpoints.up("md")]: {
    padding: "128px 16px",
  },
}))

export const Container = styled(Box)(() => ({
  maxWidth: 1200,
  margin: "0 auto",
}))

/* Header */
export const Header = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: 96,
}))

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: 48,
  fontWeight: 800,
  color: MAROON,
  marginBottom: 16,

  [theme.breakpoints.up("md")]: {
    fontSize: 64,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 72,
  },
}))

export const HeaderLine = styled(Box)(() => ({
  width: 96,
  height: 6,
  margin: "0 auto",
  backgroundColor: MAROON,
  opacity: 0.2,
  borderRadius: 99,
}))

/* Teacher Card */
export const TeacherCard = styled(Card)(() => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: 16,
  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
  transition: "0.5s",

  "&:hover": {
    boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
  },
}))

export const HoverOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(124,28,59,0.06), transparent)",
  opacity: 0,
  transition: "0.5s",
  pointerEvents: "none",

  ".MuiCard-root:hover &": {
    opacity: 1,
  },
}))

/* Image */
export const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 32,

  [theme.breakpoints.up("md")]: {
    padding: 48,
  },
}))

export const ImageCard = styled(Card)(() => ({
  backgroundColor: "rgba(255,255,255,0.95)",
  borderRadius: 12,
  padding: 24,
  width: "100%",
  maxWidth: 320,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
}))

export const ImageBox = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  paddingTop: "100%",
  borderRadius: 8,
  overflow: "hidden",
  marginBottom: 16,
}))

export const TeacherImage = styled("img")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}))

export const TeacherName = styled(Typography)(() => ({
  color: MAROON,
  fontWeight: 700,
}))

export const TeacherJob = styled(Typography)(() => ({
  color: "#666",
  fontSize: 14,
}))

/* Content */
export const ContentGrid = styled(Grid)(({ theme }) => ({
  padding: 32,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 24,

  [theme.breakpoints.up("md")]: {
    padding: 48,
  },
  [theme.breakpoints.up("lg")]: {
    padding: 64,
  },
}))

export const Subtitle = styled(Typography)(() => ({
  fontSize: 32,
  fontWeight: 600,
  letterSpacing: 1.5,
  color: MAROON,
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  fontWeight: 800,
  color: MAROON,
  lineHeight: 1.1,

  [theme.breakpoints.up("md")]: {
    fontSize: 40,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 48,
  },
}))

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: "#57534e",
  lineHeight: 1.8,
  maxWidth: 520,

  [theme.breakpoints.up("md")]: {
    fontSize: 18,
  },
}))

/* Partners */
export const PartnerGrid = styled(Grid)(() => ({
  marginTop: 32,
}))

export const PartnerItem = styled(Grid)(() => ({}))

export const PartnerCard = styled(Card)(() => ({
  padding: 12,
  borderRadius: 16,
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",

  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
    transform: "translateY(-2px)",
  },
}))

export const PartnerImageBox = styled(Box)(() => ({
  width: "100%",
  height: 120,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: 8,
  backgroundColor: "#fafafa",
}))

export const PartnerImage = styled("img")(() => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
}))
