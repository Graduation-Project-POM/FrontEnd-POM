import { styled, keyframes } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"


const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(231,171,198,0.15), 0 8px 32px rgba(0,0,0,0.4); }
  50%       { box-shadow: 0 0 40px rgba(231,171,198,0.35), 0 8px 48px rgba(0,0,0,0.5); }
`

export const AchievementsWrapper = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,
  animation: `${fadeSlideUp} 0.6s ease both`,

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
    gap: 16,
  },
}))

export const AchievementsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "40px",
  marginTop: "32px",
  fontSize: "52px",
  color: "#6E0B2B",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    marginBottom: "28px",
    marginTop: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    marginBottom: "20px",
    marginTop: "16px",
  },
}))

export const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bg",
})<{ bg: string }>(({ theme, bg }) => ({
  position: "relative",
  height: 200,
  borderRadius: "20px",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  cursor: "pointer",
  transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease",
  animation: `${glowPulse} 4s ease-in-out infinite`,


  "&:hover": {
    "& img": {
      transform: "scale(1.06) translateY(-4px)",
    },
  },

  [theme.breakpoints.down("md")]: {
    height: "185px",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    height: "165px",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const sharedImageStyle = {
  objectFit: "contain" as const,
  position: "absolute" as const,
  bottom: 0,
  zIndex: 2,
  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
}

export const StudentImageLeft = styled("img")(({ theme }) => ({
  ...sharedImageStyle,
  height: 225,
  width: "auto",
  left: theme.spacing(1),
  overflow:"visible",

  [theme.breakpoints.down("md")]: {
    height: "165px",
    left: theme.spacing(0.5),
  },
  [theme.breakpoints.down("sm")]: {
    height: "145px",
    left: theme.spacing(2),
  },
}))

export const StudentImageRight = styled("img")(({ theme }) => ({
  ...sharedImageStyle,
  height: 225,
  width: "auto",
  right: theme.spacing(1),
  overflow:"visible",

  [theme.breakpoints.down("md")]: {
    height: "165px",
    right: theme.spacing(0.5),
  },
  [theme.breakpoints.down("sm")]: {
    height: "145px",
    right: 0,
  },
}))

export const ActionWrapper = styled(Box)<{ align: "left" | "right" }>(({ theme, align }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(3),
  zIndex: 3,
  position: "relative",

  marginLeft: align === "right" ? "auto" : theme.spacing(25),
  marginRight: align === "left" ? "auto" : theme.spacing(25),

  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(2),
    marginLeft: align === "right" ? "auto" : theme.spacing(20),
    marginRight: align === "left" ? "auto" : theme.spacing(20),
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1.5),
    marginLeft: align === "right" ? "auto" : theme.spacing(20),
    marginRight: align === "left" ? "auto" : theme.spacing(13),
  },
}))



export const AchievementLabel = styled(Typography)(({ theme }) => ({
  color: "#E7ABC6",
  fontSize: "1rem",
  fontWeight: 400,
  marginBottom: theme.spacing(0.3),
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  textShadow: "0 2px 8px rgba(0,0,0,0.6)",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.78rem",
    letterSpacing: "1px",
  },

  "@media (max-width: 400px)": {
    fontSize: "0.7rem",
  },
}))

export const StudentName = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "1.6rem",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  lineHeight: 1.15,
  letterSpacing: "-1.3px",
  textShadow: "0 3px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },

  "@media (max-width: 400px)": {
    fontSize: "1rem",
  },
}))