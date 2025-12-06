import { Toolbar, Container } from "@mui/material"
import { LoginButton, Logo, NavLink, NavLinks, StyledAppBar } from "./NavbarStyle"


function Navbar() {
  return (

    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo>PMO</Logo>
          <NavLinks>
            <NavLink>Home</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Program</NavLink>
            <NavLink>About</NavLink>
            <LoginButton variant="contained">Log In</LoginButton>
          </NavLinks>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Navbar