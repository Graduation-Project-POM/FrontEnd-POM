import { styled } from "@mui/material/styles"
import { Box, Button, Typography } from "@mui/material"

export const AchievementsWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 24,
}))

export const AchievementsTitle = styled(Typography)(() => ({
  fontWeight: 600,
  textAlign: "center",
  marginBottom: "32px",
  marginTop: "32px",
  fontSize: "42px",
  color: "#6E0B2B",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
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
}))

export const StudentImageLeft = styled("img")(({ theme }) => ({
  height: 180,
  width: "auto",
  objectFit: "contain",
  position: "absolute",
  left: theme.spacing(2),
  bottom: 0,
  zIndex: 2,
}))

export const StudentImageRight = styled("img")(({ theme }) => ({
  height: 180,
  width: "auto",
  objectFit: "contain",
  position: "absolute",
  right: theme.spacing(2),
  bottom: 0,
  zIndex: 2,
}))

export const ActionWrapper = styled(Box)<{ align: "left" | "right" }>(
  ({ theme, align }) => ({
    flex: 1, display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 1,
    marginLeft: align === "right" ? "auto" : theme.spacing(30),
    marginRight: align === "left" ? "auto" : theme.spacing(30),
  })
)

export const ViewButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(0.5, 3),
  textTransform: "none",
  fontSize: "1rem",
  "&:hover": {
    borderColor: "white",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
}))
