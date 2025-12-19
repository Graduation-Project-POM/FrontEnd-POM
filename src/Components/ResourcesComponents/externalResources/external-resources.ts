import { Box, Typography, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

interface RTLProps {
  isrtl?: boolean;
}

export const PageWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl",
})<RTLProps>(({ isrtl }) => ({
  backgroundColor: "#f5f5f5",
  direction: isrtl ? "rtl" : "ltr",
  paddingTop: "10rem",
  "@media (max-width: 900px)": {
    paddingTop: "6rem",
  },
  "@media (max-width: 600px)": {
    paddingTop: "4rem",
  },
}));

export const SectionTitle = styled(Typography)({
  color: "#333",
  marginBottom: "32px",
  fontSize: "48px",
  textAlign: "center",
  "@media (max-width: 900px)": {
    fontSize: "36px",
    marginBottom: "24px",
  },
  "@media (max-width: 600px)": {
    fontSize: "28px",
    marginBottom: "16px",
  },
});

export const SectionBox = styled(Box)({
  backgroundColor: "#F7E6D1",
  borderRadius: "16px",
  padding: "32px",
  "@media (max-width: 900px)": {
    padding: "24px",
    borderRadius: "12px",
  },
  "@media (max-width: 600px)": {
    padding: "16px",
    borderRadius: "8px",
  },
});
export const SectionHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl",
})<RTLProps>(({ isrtl }) => ({
  alignItems: "center",
  flexDirection: isrtl ? "row-reverse" : "row",
  marginBottom: "3rem",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "2rem",
  },
  "@media (max-width: 600px)": {
    marginBottom: "1.5rem",
  },
}));

export const CardsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl",
})<RTLProps>(({ isrtl }) => ({
  display:"inline-flex",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  marginTop: "24px",
  marginBottom: "24px",
  direction: isrtl ? "rtl" : "ltr",
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
    gap: "16px",
    marginTop: "16px",
    marginBottom: "16px",
  },
}));

export const StyledCard = styled(Card)({
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  overflow: "hidden",
  "@media (max-width: 900px)": {
    borderRadius: "12px",
  },
  "@media (max-width: 600px)": {
    borderRadius: "8px",
  },
});

export const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  cursor: "pointer",
  "@media (max-width: 600px)": {
    height: "180px",
  },
});
