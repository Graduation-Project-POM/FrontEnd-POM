import { Container, Typography, Button, CardContent, CardMedia } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  PageWrapper,
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

