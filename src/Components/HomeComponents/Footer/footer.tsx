import { Container, Grid, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import i18n from "i18next";
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
} from "./footerStyle.ts";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <FooterWrapper component="footer" sx={{ direction: isRTL ? "rtl" : "ltr" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 6, justifyContent: "center", }}>
          <Grid>
            <BrandTitle>{t("footer.brand.title")}</BrandTitle>
            <BrandDescription>
              {t("footer.brand.description")}
            </BrandDescription>

            <SocialIcons>
              <SocialButton size="small"><FacebookIcon fontSize="small" /></SocialButton>
              <SocialButton size="small"><InstagramIcon fontSize="small" /></SocialButton>
              <SocialButton size="small"><YouTubeIcon fontSize="small" /></SocialButton>
              <SocialButton size="small"><LinkedInIcon fontSize="small" /></SocialButton>
            </SocialIcons>
          </Grid>

          <Grid>
            <ColumnTitle>{t("footer.company.title")}</ColumnTitle>
            <Column>
              <FooterLink href="#">{t("footer.company.links.about")}</FooterLink>
              <FooterLink href="#">{t("footer.company.links.services")}</FooterLink>
              <FooterLink href="#">{t("footer.company.links.community")}</FooterLink>
              <FooterLink href="#">{t("footer.company.links.testimonial")}</FooterLink>
            </Column>
          </Grid>

          <Grid>
            <ColumnTitle>{t("footer.developers.title")}</ColumnTitle>
            <Column>
              <FooterLink href="#">{t("footer.developers.links.webTech")}</FooterLink>
              <FooterLink href="#">{t("footer.developers.links.learnWeb")}</FooterLink>
              <FooterLink href="#">{t("footer.developers.links.mmPlus")}</FooterLink>
              <FooterLink href="#">{t("footer.developers.links.blog")}</FooterLink>
            </Column>
          </Grid>

          <Grid>
            <ColumnTitle>{t("footer.communities.title")}</ColumnTitle>
            <Column>
              <FooterLink href="#">{t("footer.communities.links.mmCommunities")}</FooterLink>
              <FooterLink href="#">{t("footer.communities.links.mmForum")}</FooterLink>
              <FooterLink href="#">{t("footer.communities.links.mmChat")}</FooterLink>
            </Column>
          </Grid>

          <Grid>
            <ColumnTitle>{t("footer.contact.title")}</ColumnTitle>
            <Column>
              <ContactRow>
                <PhoneIcon sx={{ fontSize: "1rem", color: "#6E0B2A" }} />
                <FooterLink href="tel:+324847890">{t("footer.contact.phone")}</FooterLink>
              </ContactRow>
              <ContactRow>
                <EmailIcon sx={{ fontSize: "1rem", color: "#6E0B2A" }} />
                <FooterLink href="mailto:support@mmm.com">
                  {t("footer.contact.email")}
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
              {t("footer.bottom.rights")}
            </Typography>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <BottomLink href="#">{t("footer.bottom.privacy")}</BottomLink>
              <BottomLink href="#">{t("footer.bottom.terms")}</BottomLink>
              <BottomLink href="#">{t("footer.bottom.legal")}</BottomLink>
              <BottomLink href="#">{t("footer.bottom.sitemap")}</BottomLink>
            </Box>
          </Box>
        </Container>
      </BottomBar>
    </FooterWrapper>
  );
}

export default Footer;
