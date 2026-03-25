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
    "&::after": {
        content: '""',
        display: "block",
        width: "100px",
        height: "4px",
        backgroundColor: "#7A1E3C",
        margin: "8px auto 0",
        borderRadius: "2px",
    },
    animation: "fadeIn 1s ease forwards",
});

export const AboutText = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "justify",
    lineHeight: 1.8,
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "32px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    animation: "fadeIn 1.2s ease forwards",
});

