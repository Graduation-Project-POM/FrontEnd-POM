import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";

export const AboutContainer = styled(Container)({
    position: "relative",
    overflow: "hidden",
    paddingTop: "40px",
    paddingBottom: "40px",
});

export const AboutTitle = styled(Typography)({
    fontWeight: 700,
    textAlign: "center",
    color: "#7A1E3C",
    marginBottom: "32px",
    position: "relative",
    
});

export const AboutText = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "justify",
    lineHeight: 1.8,
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
});

