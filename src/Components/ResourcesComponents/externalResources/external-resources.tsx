import {
  Container,
  Typography,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  PageWrapper,
  SectionTitle,
  SectionBox,
  SectionHeader,
  CardsGrid,
  StyledCard,
} from "./external-resources";
import { BottomBar } from "../../HomeComponents/Footer/footerStyle";

export function ExternalResources() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const externalResourcess = [
    {
      title: t("externalResources.card1.title"),
      image: "/images.png",
      pdf: "/secPDF.pdf",
      description: t("externalResources.card1.desc"),
      extraLine: t("externalResources.card1.extra"),
    },
    {
      title: t("externalResources.card2.title"),
      image: "/secRes.png",
      pdf: "/educ_olymp.pdf",
      description: t("externalResources.card2.desc"),
      extraLine: null,
    },
  ];

  return (
    <>
    
      <PageWrapper isrtl={isRTL ? true : undefined}>
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <SectionTitle
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 5,
              textAlign: "center",
              color: "#333",
            }}
          >
            {t("externalResources.externalTitle")}
          </SectionTitle>
          <Box>
            <Typography
              variant="h5"
              sx={{
                width: "200px",
                height: 4,
                backgroundColor: "#7D1C48",
                borderRadius: 2,
                mx: "auto",
                mt: 3,
                marginBottom: 5,
              }}
            ></Typography>
          </Box>

          <SectionBox>
            <SectionHeader isrtl={isRTL}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "#7A1E3C", textAlign: "center", }}
              >
                {t("externalResources.externalSub")}
                <br />
                {t("externalResources.secExternalSub")}
              </Typography>
            </SectionHeader>

            <CardsGrid isrtl={isRTL}>
              {externalResourcess.map((w) => (
                <StyledCard key={w.title}>
                  <a href={w.pdf} target="_blank">
                    <CardMedia
                      component="img"
                      image={w.image}
                      sx={{ height: 200, objectFit: "cover" }}
                    />
                  </a>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {w.title}
                    </Typography>
                    <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                      "{w.description}"
                    </Typography>
                    {w.extraLine && (
                      <Typography sx={{ color: "#999", fontSize: "0.85rem" }}>
                        {w.extraLine}
                      </Typography>
                    )}
                  </CardContent>
                </StyledCard>
              ))}
            </CardsGrid>
          </SectionBox>
        </Container>
      </PageWrapper>
      <BottomBar>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
              {t("footer.bottom.rights")}
            </Typography>
          </Box>
        </Container>
      </BottomBar>
    </>
  );
}
