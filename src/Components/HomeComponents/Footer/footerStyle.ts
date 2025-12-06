import { styled } from "@mui/material/styles";
import { Box, Typography, Link, IconButton } from "@mui/material";

export const FooterWrapper = styled(Box)<{ component?: React.ElementType }>({
  backgroundColor: "white",
  paddingTop: "10px",
});

export const BottomBar = styled(Box)({
  backgroundColor: "#6E0B2A",
  marginTop: "48px",
  padding: "16px 0",
});

export const BrandTitle = styled(Typography)({
  color: "#6E0B2A",
  fontWeight: 700,
  fontSize: "2rem",
  marginBottom: "12px",
});

export const BrandDescription = styled(Typography)({
  color: "#666",
  fontSize: "0.85rem",
  lineHeight: 1.6,
  marginBottom: "16px",
});

export const ColumnTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "0.95rem",
  color: "#6E0B2A",
  marginBottom: "16px",
});

export const FooterLink = styled(Link)({
  color: "#666",
  fontSize: "0.85rem",
  textDecoration: "none",
  "&:hover": {
    color: "#6E0B2A",
  },
});

export const BottomLink = styled(Link)({
  color: "white",
  fontSize: "0.8rem",
  textDecoration: "none",
  "&:hover": {
    opacity: 0.8,
  },
});

export const Column = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const SocialIcons = styled(Box)({
  display: "flex",
  gap: "4px",
});

export const SocialButton = styled(IconButton)({
  color: "#6E0B2A",
  "&:hover": {
    backgroundColor: "#8B15381A",
  },
});

export const ContactRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
