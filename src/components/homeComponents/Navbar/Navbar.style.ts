import { AppBar, Box, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#7A1E3C",
  boxShadow: "none",
  padding: "0.5rem 0",
})

export const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "32px",
})

export const NavLinks = styled(Box)({
  display: "flex",
  gap: "3rem",
  alignItems: "center",
  marginLeft: "auto",
})

export const NavLink = styled(Button)({
  color: "#ffffff",
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
})

export const LoginButton = styled(Button)({
  backgroundColor: "#ffffff",
  color: "#7A1E3C",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  padding: "0.5rem 2rem",
  borderRadius: "2rem"
})