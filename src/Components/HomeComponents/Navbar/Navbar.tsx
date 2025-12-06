import { useState } from "react"
import { Toolbar, Container, IconButton, Box, Drawer } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

import {
  LoginButton,
  Logo,
  NavLink,
  NavLinks,
  StyledAppBar,
  MobileLoginButton,
  SidebarContent,
  SidebarNavLink,
} from "./NavbarStyle.ts"

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleOpen = () => {
    setIsSidebarOpen(true)
  }

  const handleClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo>PMO</Logo>

          <NavLinks sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink active>Home</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Program</NavLink>
            <NavLink>About</NavLink>
            <LoginButton variant="contained">Log In</LoginButton>
          </NavLinks>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleOpen} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={isSidebarOpen}
            onClose={handleClose}
            sx={{
              "& .MuiDrawer-paper": {
                width: "280px",
                backgroundColor: "#7A1E3C",
              },
            }}
          >
            <SidebarContent>
              <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
                <IconButton onClick={handleClose} sx={{ color: "#ffffff" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0 1rem" }}>
                <SidebarNavLink onClick={handleClose}>Home</SidebarNavLink>
                <SidebarNavLink onClick={handleClose}>Services</SidebarNavLink>
                <SidebarNavLink onClick={handleClose}>Program</SidebarNavLink>
                <SidebarNavLink onClick={handleClose}>About</SidebarNavLink>
                <MobileLoginButton onClick={handleClose}>Log In</MobileLoginButton>
              </Box>
            </SidebarContent>
          </Drawer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}
