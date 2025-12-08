import { useEffect, useState } from "react"
import { Toolbar, Container, IconButton, Box, Drawer, Button, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language ==="ar";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleOpen = () => {
    setIsSidebarOpen(true)
  }

  const handleClose = () => {
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);


  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between",MaxHeight: "64px" }}>
          <Logo><Box component="img" src="/public/olm pal math22.png" alt="" sx={{
            width: {
              md: "150px",
              xs: "100px"
            },
            height: {
              md: "75px",
              xs: "60px"
            }
          }} /></Logo>

          <NavLinks isrtl={isRTL} sx={{ display: { xs: "none", md: "flex" }, flex: 1 }}>
            <NavLink active>{t("nav.home")}</NavLink>
            <NavLink>{t("nav.services")}</NavLink>
            <NavLink>{t("nav.program")}</NavLink>
            <NavLink>{t("nav.about")}</NavLink>
            <LoginButton variant="contained" sx={{ marginInlineStart: "auto" }}>{t("nav.login")}</LoginButton>
          </NavLinks>

          <Box sx={{ display: "flex", gap: 1, padding: "0.5rem", background: "#fff" }}>
            {["en", "ar"].map((lang) => (
              <Button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                variant={i18n.language === lang ? "contained" : "outlined"}
                sx={{
                  minWidth: 40,
                  height: 40,
                  borderRadius: "50%",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  transition: "0.3s",
                  borderColor: "#7D1C48",
                  color: i18n.language === lang ? "#fff" : "#7D1C48",
                  backgroundColor: i18n.language === lang ? "#7D1C48" : "transparent",
                  boxShadow:
                    i18n.language === lang
                      ? "0 0 8px rgba(125,28,72,0.6)"
                      : "none",
                  "&:hover": {
                    backgroundColor: i18n.language === lang ? "#7D1C48" : "#f8f8f8",
                    color: i18n.language === lang ? "#fff" : "#7D1C48",
                    boxShadow:
                      i18n.language === lang
                        ? "0 0 12px rgba(125,28,72,0.8)"
                        : "0 0 6px rgba(125,28,72,0.3)",
                  },
                }}
              >
                {lang.toUpperCase()}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={handleOpen}
              sx={{
                color: "#7D1C48",
                borderRadius: "50%",
              }}
            >
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
              <Box sx={{ display: "flex", justifyContent: "flex-end", color: "#7A1E3C" }}>
                <IconButton onClick={handleClose} sx={{ backgroundColor: "#7A1E3C", color: "#7A1E3C" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0 1rem" }}>
                <SidebarNavLink onClick={handleClose}>{t("nav.home")}</SidebarNavLink>
                <SidebarNavLink onClick={handleClose}>{t("nav.services")}</SidebarNavLink>
                <SidebarNavLink onClick={handleClose}>{t("nav.program")}</SidebarNavLink>
                <SidebarNavLink onClick={handleClose}>{t("nav.about")}</SidebarNavLink>
                <MobileLoginButton onClick={handleClose}>{t("nav.login")}</MobileLoginButton>
              </Box>

            </SidebarContent>
          </Drawer>
        </Toolbar>
      </Container>
    </StyledAppBar >
  )
}
