import { AppBar, Box, Button } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#fff",
  boxShadow: "none",
  padding: "0.5rem 0",
  border: "2px solid #7A1E3C",
})

export const Logo = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "32px",
  color: "#7A1E3C",
  marginTop: "5px",
  marginLeft: "30px"

})

export const NavLinks = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isrtl"
})<{ isrtl?: boolean }>(({ isrtl }) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  marginLeft: "auto",
  justifyContent: isrtl ? "flex-end" : "flex-start",
}));


export const NavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>(({ active }) => ({
  color: active ? "#7A1E3C" : "#7A1E3C",
  fontWeight: active ? "900" : "700",
  fontSize: "17px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));


export const LoginButton = styled(Button)({
  backgroundColor: "#7A1E3C",
  color: "#fff",
  fontSize: "0.9rem",
  fontWeight: 600,
  textTransform: "none",
  padding: "0.5rem 2rem",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#9b4561ff",
  }
})

export const StyledMenu = styled(Box)({
  "& .MuiPaper-root": {
    backgroundColor: "#fff",
    color: "#7A1E3C",
    minWidth: "250px",
    borderRadius: "8px",
    marginTop: "0.5rem",
  },
  "& .MuiMenuItem-root": {
    color: "#7A1E3C",
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

export const SidebarNavLink = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})<{ active?: boolean }>(({ active }) => ({
  color: "#fff",
  fontSize: "16px",
  textTransform: "none",
  padding: "1rem 1.5rem",
  justifyContent: "flex-start",
  fontWeight: active ? "700" : "400",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}))

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
