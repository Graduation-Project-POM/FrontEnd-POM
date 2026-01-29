import { Card, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius: theme.spacing(2),
  transition: "all 0.3s",
  width: 220,
  height: 180,
  paddingTop: 80,
  cursor: "pointer",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-4px)",
  },
}));


export const GradientOverlay = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom right, #7B2D47, #5a2134)",
  opacity: 0,
  transition: "opacity 0.3s",
  pointerEvents: "none",
  [`${StyledCard}:hover &`]: {
    opacity: 0.05,
  },
}));

export const AvatarWrapper = styled(Box)(() => ({
  position: "absolute",
  top: -40,
  left: "50%",
  transform: "translateX(-50%)",
  width: 120,
  height: 120,
  zIndex: 2,
}));


export const Ring = styled(Box)(() => ({
  position: "absolute",
  inset: -4,
  borderRadius: "50%",
  border: "3px solid #7B2D47",
  opacity: 0,
  transform: "scale(0.85)",
  transition: "all 0.3s ease",
  pointerEvents: "none",
  [`${StyledCard}:hover &`]: {
    opacity: 1,
    transform: "scale(1)",
  },
}));

export const HoverBlur = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  backgroundColor: "#7B2D47",
  filter: "blur(12px)",
  opacity: 0.15,
  transition: "opacity 0.3s",
  [`${StyledCard}:hover &`]: {
    opacity: 0.3,
  },
}));

export const BadgeWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 10,
  right: -4,
  backgroundColor: "#7B2D47",
  borderRadius: "50%",
  padding: 2,
  boxShadow: theme.shadows[2],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s",
  transformOrigin: "center",
  [`${StyledCard}:hover &`]: {
    transform: "scale(1.1) rotate(12deg)",
  },
}));

export const RoleBadge = styled(Box)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: "#7B2D47",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: theme.spacing(1),
  fontSize: 12,
  fontWeight: 600,
  boxShadow: theme.shadows[1],
  transition: "transform 0.3s",
  [`${StyledCard}:hover &`]: {
    transform: "scale(1.05)",
  },
}));
