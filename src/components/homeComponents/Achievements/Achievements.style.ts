import { styled } from "@mui/material/styles"
import { Box, Button, Typography } from "@mui/material"

export const AchievementsWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "@media (max-width: 600px)": {
    gap: 16,
  },
}))

export const AchievementsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: "32px",
  marginTop: "32px",
  fontSize: "52px",
  color: "#6E0B2B",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    marginBottom: "24px",
    marginTop: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    marginBottom: "16px",
    marginTop: "16px",
  },
}))

export const Card = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bg",
})<{ bg: string }>(({ theme, bg }) => ({
  position: "relative",
  height: 200,
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  boxShadow: theme.shadows[3],
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    height: "180px",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    height: "160px",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export const StudentImageLeft = styled("img")(({ theme }) => ({
  height: 180,
  width: "auto",
  objectFit: "contain",
  position: "absolute",
  left: theme.spacing(2),
  bottom: 0,
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    height: "160px",
    left: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    height: "140px",
    left: theme.spacing(-3),
  },
}))

export const StudentImageRight = styled("img")(({ theme }) => ({
  height: 180,
  width: "auto",
  objectFit: "contain",
  position: "absolute",
  right: theme.spacing(-1),
  bottom: 0,
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    height: "160px",
    right: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    height: "140px",
    right: theme.spacing(0),
  },
}))

export const ActionWrapper = styled(Box)<{ align: "left" | "right" }>(({ theme, align }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(10),
  textAlign: "left",

  marginLeft: align === "right" ? "auto" : theme.spacing(20),
  marginRight: align === "left" ? "auto" : theme.spacing(40),

  [theme.breakpoints.down("md")]: {
    marginLeft: align === "right" ? "auto" : theme.spacing(6),
    marginRight: align === "left" ? "auto" : theme.spacing(6),
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
    marginLeft: align === "right" ? "auto" : theme.spacing(10),
    marginRight: align === "left" ? "auto" : theme.spacing(15),
  },
}))


export const ViewButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(0.5, 3),
  textTransform: "none",
  fontSize: "1rem",
  whiteSpace: "nowrap",
  "&:hover": {
    borderColor: "white",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
    padding: theme.spacing(0.4, 2),
    marginTop: "-20px",
  },
  "@media (max-width: 400px)": {
    fontSize: "0.75rem",
    padding: theme.spacing(0.3, 1.5),
  },
}))

export const AchievementLabel = styled(Typography)(
  ({ theme }) => ({
    color: "#E7ABC6",
    fontSize: "1.6rem",
    fontWeight: 400,
    marginBottom: theme.spacing(0.5),
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
    "@media (max-width: 400px)": {
      fontSize: "0.75rem",
    },
  })
)

export const StudentName = styled(Typography)(
  ({ theme }) => ({
    color: "white",
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
    "@media (max-width: 400px)": {
      fontSize: "1.1rem",
    },
  })
)
