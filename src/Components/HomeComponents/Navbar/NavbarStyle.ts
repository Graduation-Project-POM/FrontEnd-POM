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

export const NavLink = styled(Button)<{ active?: boolean }>(({ active }) => ({
  color: active ? "#FFD1DC" : "#ffffff",
  fontWeight: active ? "bold" : "normal",
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
}))

export const LoginButton = styled(Button)({
  backgroundColor: "#ffffff",
  color: "#7A1E3C",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  padding: "0.5rem 2rem",
  borderRadius: "2rem",
})

export const StyledMenu = styled(Box)({
  "& .MuiPaper-root": {
    backgroundColor: "#7A1E3C",
    color: "#ffffff",
    minWidth: "250px",
    borderRadius: "8px",
    marginTop: "0.5rem",
  },
  "& .MuiMenuItem-root": {
    color: "#ffffff",
    fontSize: "16px",
    padding: "1rem 2rem",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
})

export const SidebarContent = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
})

export const SidebarNavLink = styled(Button)({
  color: "#ffffff",
  fontSize: "16px",
  textTransform: "none",
  padding: "1rem 1.5rem",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
})

export const MobileLoginButton = styled(Button)({
  backgroundColor: "#ffffff !important",
  color: "#7A1E3C !important",
  fontWeight: 600,
  margin: "1.5rem 1rem 1rem 1rem",
  borderRadius: "2rem",
  padding: "0.75rem 2rem",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9) !important",
  },
})
