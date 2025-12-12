import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { Link } from "react-router-dom";
import { Logo } from '../../HomeComponents/Navbar/NavbarStyle';
import {
  PageWrapper,
  TopBanner,
  HeaderWrapper,
  HeaderInner,
  HeaderLeft,
  MainTitle,
  DescriptionText
} from './header';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

export function Header() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <PageWrapper isrtl={isRTL}>
      <TopBanner>
        <Box sx={{ position: "absolute", left: 20 }}>
          <Button
            onClick={() => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")}
            variant="outlined"
            sx={{
              minWidth: "95px",
              height: "40px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "0.9rem",
              borderColor: "#7A1E3C",
              color: "#7A1E3C",
              backgroundColor: "#fff",
              textTransform: "none",
            }}
          >
            {i18n.language === "ar" ? "English" : "العربية"}
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">{t("worksheet.bannerText1")}</Typography>
          <Heart size={16} fill="white" />
          <Typography variant="body2">{t("worksheet.bannerText2")}</Typography>
        </Box>
        <Box sx={{ width: 120 }} />
      </TopBanner>

      <HeaderWrapper>
        <Container maxWidth="lg">
          <HeaderInner isrtl={isRTL}>
            <HeaderLeft isrtl={isRTL}>
              <Logo>
                <Box
                  component="img"
                  src="/olm pal math22.png"
                  alt=""
                  sx={{
                    width: { md: "150px", xs: "100px" },
                    height: { md: "75px", xs: "60px" }
                  }}
                />
              </Logo>
              <Button
                sx={{ color: '#333', textTransform: 'none', fontSize: '1rem' }}
                endIcon={isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              >
                <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                  {t("worksheet.headerBack")}
                </Link>
              </Button>
            </HeaderLeft>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button sx={{ color: '#333', textTransform: 'none', fontSize: '1rem' }}>
                {t("worksheet.signup")}
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: '#7A1E3C', textTransform: 'none', fontSize: '1rem', px: 3 }}
              >
                {t("worksheet.login")}
              </Button>
            </Box>
          </HeaderInner>
        </Container>
      </HeaderWrapper>

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Box sx={{ display: 'flex', gap: 8 }}>
          <Box sx={{ flex: 1 }}>
            <MainTitle variant="h3">{t("worksheet.title")}</MainTitle>
          </Box>
          <Box sx={{ flex: 1 }}>
            <DescriptionText>{t("worksheet.desc1")}</DescriptionText>
            <DescriptionText>{t("worksheet.desc2")}</DescriptionText>
            <DescriptionText>{t("worksheet.desc3")}</DescriptionText>
          </Box>
        </Box>
      </Container>
    </PageWrapper>
  )
}