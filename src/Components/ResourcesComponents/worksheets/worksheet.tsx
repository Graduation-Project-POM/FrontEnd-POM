import { Box, Container, Typography, Button, CardContent, CardMedia } from '@mui/material';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from "react-router-dom";
import { Logo } from '../../HomeComponents/Navbar/NavbarStyle';
import {
  PageWrapper,
  TopBanner,
  HeaderWrapper,
  HeaderInner,
  HeaderLeft,
  MainTitle,
  DescriptionText,
  SectionTitle,
  SectionBox,
  SectionHeader,
  CardsGrid,
  StyledCard,
  NavButtonsWrapper,
  PrevBtn,
  NextBtn
} from './worksheet';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

export function Worksheet() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const worksheets = [
    {
      title: t("worksheet.card1.title"),
      image: '/images.png',
      pdf: '/secPDF.pdf',
      description: t("worksheet.card1.desc"),
      extraLine: t("worksheet.card1.extra")
    },
    {
      title: t("worksheet.card2.title"),
      image: '/secRes.png',
      pdf: '/educ_olymp.pdf',
      description: t("worksheet.card2.desc"),
      extraLine: null
    },
    {
      title: t("worksheet.card3.title"),
      image: '/thrdRes.jpg',
      pdf: 'https://www.joacademy.com/',
      description: t("worksheet.card3.desc"),
      extraLine: null
    }
  ];

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

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <SectionTitle variant="h4">{t("worksheet.externalTitle")}</SectionTitle>
        <SectionBox>
          <SectionHeader isrtl={isRTL}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#7A1E3C' }}>
              {t("worksheet.externalSub")}
              <br />
              {t("worksheet.secExternalSub")}
            </Typography>
            <Button sx={{ color: '#7A1E3C', textTransform: 'none', fontSize: '1rem', fontWeight: 600 }}>
              {t("worksheet.viewHistory")}
            </Button>
          </SectionHeader>
          <CardsGrid isrtl={isRTL}>
            {worksheets.map((w) => (
              <StyledCard key={w.title}>
                <a href={w.pdf} target="_blank">
                  <CardMedia component="img" image={w.image} sx={{ height: 200, objectFit: 'cover' }} />
                </a>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    {w.title}
                  </Typography>
                  <Typography sx={{ color: '#666', fontSize: '0.9rem' }}>
                    "{w.description}"
                  </Typography>
                  {w.extraLine && (
                    <Typography sx={{ color: '#999', fontSize: '0.85rem' }}>
                      {w.extraLine}
                    </Typography>
                  )}
                </CardContent>
              </StyledCard>
            ))}
          </CardsGrid>
          <NavButtonsWrapper isrtl={isRTL}>
            <PrevBtn><ChevronLeft size={20} /></PrevBtn>
            <NextBtn><ChevronRight size={20} /></NextBtn>
          </NavButtonsWrapper>
        </SectionBox>
      </Container>

    </PageWrapper>
  );
}

