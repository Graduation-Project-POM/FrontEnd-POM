import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface RTLProps {
  isrtl?: boolean;
}

export const PageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl",
})<RTLProps>(({ isrtl }) => ({
  backgroundColor: "#f5f5f5",
  direction: isrtl ? "rtl" : "ltr",
}));


export const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderBottom: "1px solid #e0e0e0",
  padding: "16px 0",
}));

export const HeaderInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl",
})<RTLProps>(({ theme, isrtl }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: isrtl ? "row-reverse" : "row",
  gap: "16px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const HeaderLeft = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl",
})<RTLProps>(({ theme, isrtl }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: isrtl ? "row-reverse" : "row",
  gap: "12px",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
    width: "100%",
  },
}));


export const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#333",
  lineHeight: 1.3,
  fontSize: "2rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: "#666",
  marginBottom: "16px",
  lineHeight: 1.8,
  fontSize: "1rem",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    textAlign: "center",
  },
}));
