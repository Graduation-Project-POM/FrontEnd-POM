import { Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Logo } from "../../HomeComponents/Navbar/NavbarStyle";
import {
  PageWrapper,
  HeaderWrapper,
  HeaderInner,
  HeaderLeft,
  MainTitle,
  DescriptionText,
} from "./header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function Header() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <PageWrapper isrtl={isRTL ? true : undefined}>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <HeaderInner isrtl={isRTL ? true : undefined}>
            <HeaderLeft isrtl={isRTL ? true : undefined}>
              <Logo>
                <Box
                  component="img"
                  src="/olm pal math22.png"
                  alt="logo"
                  sx={{
                    width: { xs: "100px", md: "150px" },
                    height: { xs: "60px", md: "75px" },
                  }}
                />
              </Logo>

              <Button
                component={Link}
                to="/"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  borderColor: "#7A1E3C",
                  color: "#7A1E3C",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {t("externalResources.headerBack")}
              </Button>
            </HeaderLeft>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#7A1E3C",
                  textTransform: "none",
                  fontSize: "1rem",
                  px: 3,
                  borderRadius: "10px",
                }}
              >
                {t("externalResources.login")}
              </Button>

              <Button
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
                }
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
          </HeaderInner>
        </Container>
      </HeaderWrapper>

      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 8 },
            flexDirection: {
              xs: "column",
              md: isRTL ? "row-reverse" : "row",
            },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <MainTitle variant="h3">
              {t("externalResources.title")}
            </MainTitle>
          </Box>

          <Box sx={{ flex: 1 }}>
            <DescriptionText>{t("externalResources.desc1")}</DescriptionText>
            <DescriptionText>{t("externalResources.desc2")}</DescriptionText>
            <DescriptionText>{t("externalResources.desc3")}</DescriptionText>
          </Box>
        </Box>
      </Container>
    </PageWrapper>
  );
}
