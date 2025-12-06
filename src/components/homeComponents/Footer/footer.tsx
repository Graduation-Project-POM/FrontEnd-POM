import { Container, Grid, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import {
  FooterWrapper,
  BottomBar,
  BrandTitle,
  BrandDescription,
  ColumnTitle,
  FooterLink,
  BottomLink,
  Column,
  SocialIcons,
  SocialButton,
  ContactRow,
} from "./footerStyle";

function Footer() {
  return (
    <FooterWrapper component="footer">
      <br /><br /><br /><br /><br />
      <Container maxWidth="lg">
        <Grid container spacing={8} justifyContent="center" >
          <Grid>
            <BrandTitle>Palestine Math Olympiad</BrandTitle>
            <BrandDescription>
              Empowering students across Palestine to explore,
              <br />
              learn and excel in mathematics
            </BrandDescription>

            <SocialIcons>
              <SocialButton size="small"><FacebookIcon fontSize="small" /></SocialButton>
              <SocialButton size="small"><InstagramIcon fontSize="small" /></SocialButton>
              <SocialButton size="small"><YouTubeIcon fontSize="small" /></SocialButton>
              <SocialButton size="small"><LinkedInIcon fontSize="small" /></SocialButton>
            </SocialIcons>
          </Grid>

          <Grid>
            <ColumnTitle>Company</ColumnTitle>
            <Column>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Services</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Testimonial</FooterLink>
            </Column>
          </Grid>

          <Grid>
            <ColumnTitle>Developers</ColumnTitle>
            <Column>
              <FooterLink href="#">Web Technologies</FooterLink>
              <FooterLink href="#">Learn Web Development</FooterLink>
              <FooterLink href="#">MM Plus</FooterLink>
              <FooterLink href="#">Hacks Blog</FooterLink>
            </Column>
          </Grid>

          <Grid>
            <ColumnTitle>Our Communities</ColumnTitle>
            <Column>
              <FooterLink href="#">MM Communities</FooterLink>
              <FooterLink href="#">MM Forum</FooterLink>
              <FooterLink href="#">MM Chat</FooterLink>
            </Column>
          </Grid>

          <Grid>
            <ColumnTitle>Contact</ColumnTitle>
            <Column>
              <ContactRow>
                <PhoneIcon sx={{ fontSize: "1rem", color: "#6E0B2A" }} />
                <FooterLink href="tel:+324847890">+32 484 7890</FooterLink>
              </ContactRow>
              <ContactRow>
                <EmailIcon sx={{ fontSize: "1rem", color: "#6E0B2A" }} />
                <FooterLink href="mailto:support@mmm.com">
                  support@mmm.com
                </FooterLink>
              </ContactRow>
            </Column>
          </Grid>
        </Grid>
      </Container>

      <BottomBar>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
              © 2025 Palestine Olympiad. All rights reserved.
            </Typography>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <BottomLink href="#">Privacy Policy</BottomLink>
              <BottomLink href="#">Terms of Use</BottomLink>
              <BottomLink href="#">Legal</BottomLink>
              <BottomLink href="#">Site Map</BottomLink>
            </Box>
          </Box>
        </Container>
      </BottomBar>
    </FooterWrapper>
  );
}


export default Footer
