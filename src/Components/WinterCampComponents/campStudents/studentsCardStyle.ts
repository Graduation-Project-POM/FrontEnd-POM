import { Card, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  borderRadius: theme.spacing(2),
  transition: "all 0.3s",
  width: "100%",
  maxWidth: 266,
  height: 150,
  paddingTop: 80,
  cursor: "pointer",
  marginInline: "auto",
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-4px)",
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
}));

export const RoleBadge = styled(Box)(({ theme }) => ({
  display: "inline-block",
  backgroundColor: "#7B2D47",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: theme.spacing(1),
  fontSize: 12,
  fontWeight: 600,
  boxShadow: theme.shadows[2],
}));

export const cardStyles: Record<string, SxProps<Theme>> = {
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pt: 4,
    pb: 1,
    textAlign: "center",
  },

  avatar: {
    width: "120%",
    height: "120%",
    border: "3px solid #7B2D47",
    boxSizing: "border-box",
  },

  name: {
    color: "#7B2D47",
    fontWeight: "bold",
    fontSize: 16,
    mt: 0.4,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  countryBox: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: "gray",
    fontSize: 12,
    mt: 1,
  },

  locationIcon: {
    fontSize: 18,
    color: "#888",
  },

};

export const GridStyles: Record<string, SxProps<Theme>> = {
  title: {
    fontWeight: 800,
    textAlign: "center",
    color: "#7B2D47",
    mb: 6,
    mt: 6,
    textShadow: "0 2px 8px rgba(123, 45, 71, 0.2)",
  },
  subtitle: {
   fontWeight: 400,
  textAlign: "center",
  color: "#5A5A5A",
  maxWidth: "600px",
  mx: "auto",
  lineHeight: 1.6,
  letterSpacing: "0.05em",
  position: "relative",
  mb: 3,
  mt: 2,
  },

  boxWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 6,
    m: 4,
    maxWidth: "1400px",
    mx: "auto",
  },
  line: {
    width: "100px",
    height: 4,
    backgroundColor: "#7D1C48",
    borderRadius: 2,
    mx: "auto",
    marginBottom: 10,
    mt: 3,
  },

  cardWrapper: {
    minWidth: 260,
    maxWidth: 260,
  },


  leftButton: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    boxShadow: 2,
    color: "#f5f5f5",
    bgcolor: "#7B2D47",
    "&:hover": {
      bgcolor: "#f5f5f5",
      color: "#7B2D47",
    },
  },
  rightButton: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    boxShadow: 2,
    color: "#f5f5f5",
    bgcolor: "#7B2D47",
    "&:hover": {
      bgcolor: "#f5f5f5",
      color: "#7B2D47",
    },
  },
};