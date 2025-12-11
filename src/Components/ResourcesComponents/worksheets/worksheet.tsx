import { Box, Container, Typography, Button, CardContent, CardMedia } from '@mui/material';
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Link } from "react-router-dom";
import { Logo } from '../../HomeComponents/Navbar/NavbarStyle';
import { PageWrapper, TopBanner, HeaderWrapper, HeaderInner, HeaderLeft, MainTitle, DescriptionText, SectionTitle, SectionBox, SectionHeader, CardsGrid, StyledCard, StyledCardMedia, NavButtonsWrapper, PrevBtn, NextBtn } from './worksheet';
import { useTranslation } from "react-i18next";

export function Worksheet() {
  const { i18n } = useTranslation();

  const worksheets = [
    {
      title: 'Arab Mathematics Olympiad – Doha 2024',
      image: '/images.png',
      pdf: '/secPDF.pdf',
      description: 'A regional mathematics competition hosted in Doha, Qatar. This event brings together top students from across the Arab world to compete in advanced problem-solving challenges.',
      extraLine: 'Includes an online training program held from 16–19 September 2025.'
    },
    {
      title: 'Arab Mathematics Olympiad – 2nd Edition (2020)',
      image: '/secRes.png',
      pdf: '/educ_olymp.pdf',
      description: 'The second edition of the Arab Mathematics Olympiad, featuring high-level mathematical problems and participation from students across the region.',
      extraLine: null
    },
    {
      title: 'Jordan Mathematics Olympiad – Past Papers',
      image: '/thrdRes.jpg',
      pdf: 'https://www.joacademy.com/',
      description: 'Archive of past papers, sample problems, and training booklets from the Jordanian Mathematics Olympiad, offering high-quality preparation material in Arabic.',
      extraLine: null
    }
  ];

  return (
    <PageWrapper>
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
              borderColor: "#7D1C48",
              color: "#7D1C48",
              backgroundColor: "#fff",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f5e5eb",
                borderColor: "#7D1C48",
              },
            }}
          >
            {i18n.language === "ar" ? "English" : "العربية"}
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">Push your limits</Typography>
          <Heart size={16} fill="white" />
          <Typography variant="body2">Great minds start with one problem</Typography>
        </Box>
        <Box sx={{ width: 120 }} />
      </TopBanner>


      <HeaderWrapper>
        <Container maxWidth="lg">
          <HeaderInner>
            <HeaderLeft>

              <Logo>
                <Box component="img" src="/olm pal math22.png" alt=""
                  sx={{
                    width: { md: "150px", xs: "100px" },
                    height: { md: "75px", xs: "60px" }
                  }}
                />
              </Logo>

              <Button
                sx={{ color: '#333', textTransform: 'none', fontSize: '1rem' }}
                endIcon={<ArrowRight size={20} />}
              >
                <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                  Back to Home Page
                </Link>
              </Button>
            </HeaderLeft>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button sx={{ color: '#333', textTransform: 'none', fontSize: '1rem' }}>
                Sign Up
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#7d2d3d',
                  textTransform: 'none',
                  fontSize: '1rem',
                  px: 3,
                  '&:hover': { bgcolor: '#6a2534' }
                }}
              >
                Login
              </Button>
            </Box>
          </HeaderInner>
        </Container>
      </HeaderWrapper>

      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Box sx={{ display: 'flex', gap: 8 }}>
          <Box sx={{ flex: 1 }}>
            <MainTitle variant="h3">
              Resources - Your Complete Learning Hub
            </MainTitle>
          </Box>

          <Box sx={{ flex: 1 }}>
            <DescriptionText>
              Welcome to the Resources section, where you can explore a wide range of materials
              designed to support students, teachers, and math enthusiasts.
            </DescriptionText>

            <DescriptionText>
              Here, you'll find organized collections of worksheets, external references, practice
              problems, video tutorials, and recommended math books.
            </DescriptionText>

            <DescriptionText>
              Browse through the categories below and start learning with high-quality,
              structured resources tailored just for you.
            </DescriptionText>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 8 }}>

        <SectionTitle variant="h4">External Resources</SectionTitle>

        <SectionBox>

          <SectionHeader>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#7d2d3d' }}>
              Boost your learning with trusted external resources designed
              <br /> to support your olympiad preparation.
            </Typography>

            <Button sx={{ color: '#7d2d3d', textTransform: 'none', fontSize: '1rem', fontWeight: 600 }}>
              View history
            </Button>
          </SectionHeader>

          <Box>
            <CardsGrid>
              {worksheets.map((worksheet) => (
                <StyledCard key={worksheet.title}>
                  <a href={worksheet.pdf} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                      component="img"
                      image={worksheet.image}
                      alt={worksheet.title}
                      sx={{ height: 200, objectFit: 'cover' }}
                    />
                  </a>

                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#333' }}>
                      {worksheet.title}
                    </Typography>

                    <Typography sx={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, mb: worksheet.extraLine ? 2 : 0 }}>
                      "{worksheet.description}"
                    </Typography>

                    {worksheet.extraLine && (
                      <Typography sx={{ color: '#999', fontSize: '0.85rem' }}>
                        {worksheet.extraLine}
                      </Typography>
                    )}
                  </CardContent>
                </StyledCard>
              ))}
            </CardsGrid>
            <NavButtonsWrapper>
              <PrevBtn>
                <ChevronLeft size={20} />
              </PrevBtn>
              <NextBtn>
                <ChevronRight size={20} />
              </NextBtn>
            </NavButtonsWrapper>
          </Box>
        </SectionBox>
      </Container>

    </PageWrapper>
  );
}
