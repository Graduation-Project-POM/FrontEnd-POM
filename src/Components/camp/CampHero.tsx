import { Box, Container, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion } from "../../theme/tokens";
import { Reveal } from "../ui";
import { asset } from "../../utils/asset";

export function CampHero() {
  const { t } = useTranslation();

  const facts = [
    {
      icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 18 }} />,
      label: t("winterCamp.checkIn"),
      value: t("winterCamp.startDate"),
    },
    {
      icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 18 }} />,
      label: t("winterCamp.checkOut"),
      value: t("winterCamp.endDate"),
    },
    {
      icon: <PlaceOutlinedIcon sx={{ fontSize: 18 }} />,
      label: t("winterCamp.location"),
      value: t("winterCamp.university"),
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 18 }} />,
      label: t("camp.participantsLabel"),
      value: t("camp.participantsValue"),
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "78vh", md: "88vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "#fff",
        backgroundColor: palette.night,
        overflow: "hidden",
        mt: "calc(var(--pmo-header-h) * -1)",
        pt: "var(--pmo-header-h)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("${asset("/all.jpg")}")`,
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(21,15,18,0.24)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          insetInline: 0,
          top: 0,
          height: "calc(var(--pmo-header-h) * 2.6)",
          background: `linear-gradient(to bottom,
            rgba(21,15,18,0.52) 0%,
            rgba(21,15,18,0.47) 12%,
            rgba(21,15,18,0.4) 25%,
            rgba(21,15,18,0.31) 38%,
            rgba(21,15,18,0.23) 50%,
            rgba(21,15,18,0.15) 63%,
            rgba(21,15,18,0.09) 75%,
            rgba(21,15,18,0.04) 88%,
            rgba(21,15,18,0) 100%)`,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right,
            rgba(21,15,18,0.62) 0%,
            rgba(21,15,18,0.55) 18%,
            rgba(21,15,18,0.42) 34%,
            rgba(21,15,18,0.26) 50%,
            rgba(21,15,18,0.12) 66%,
            rgba(21,15,18,0.04) 82%,
            rgba(21,15,18,0) 100%)`,
          '[dir="rtl"] &': {
            background: `linear-gradient(to left,
              rgba(21,15,18,0.62) 0%,
              rgba(21,15,18,0.55) 18%,
              rgba(21,15,18,0.42) 34%,
              rgba(21,15,18,0.26) 50%,
              rgba(21,15,18,0.12) 66%,
              rgba(21,15,18,0.04) 82%,
              rgba(21,15,18,0) 100%)`,
          },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          insetInline: 0,
          bottom: 0,
          height: "82%",
          background: `linear-gradient(to top,
            rgba(21,15,18,0.9) 0%,
            rgba(21,15,18,0.78) 16%,
            rgba(21,15,18,0.62) 32%,
            rgba(21,15,18,0.45) 48%,
            rgba(21,15,18,0.29) 64%,
            rgba(21,15,18,0.15) 79%,
            rgba(21,15,18,0.06) 90%,
            rgba(21,15,18,0) 100%)`,
        }}
      />

      <Container sx={{ position: "relative", pb: { xs: 4, md: 6 }, pt: { xs: 10, md: 14 } }}>
        <Reveal variant="fade">
          <Typography variant="eyebrow" sx={{ color: palette.gold[300], display: "block", mb: 2.5 }}>
            {t("camp.eyebrow")}
          </Typography>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <Typography
            variant="display"
            component="h1"
            sx={{
              maxWidth: "14ch",
              mb: 2.5,
              fontSize: { xs: "2.75rem", md: "5rem" },
              textShadow: "0 2px 24px rgba(21,15,18,0.5)",
            }}
          >
            {t("winterCamp.header1")}
            <Box
              component="span"
              sx={{
                display: "block",
                fontWeight: 300,
                fontStyle: "italic",
                color: palette.gold[200],
                fontSize: "0.5em",
                letterSpacing: "-0.02em",
                mt: 1.5,
              }}
            >
              {t("winterCamp.header2")}
            </Box>
          </Typography>
        </Reveal>

        <Reveal variant="up" delay={140}>
          <Typography
            sx={{
              maxWidth: "54ch",
              color: "rgba(255,255,255,0.9)",
              textShadow: "0 1px 14px rgba(21,15,18,0.55)",
              fontSize: { xs: "1rem", md: "1.125rem" },
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {t("camp.heroLede")}
          </Typography>
        </Reveal>
      </Container>

      <Box
        sx={{
          position: "relative",
          borderTop: `1px solid rgba(255,255,255,0.16)`,
          backgroundColor: "rgba(21,15,18,0.42)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
          >
            {facts.map((f, i) => (
              <Box
                key={f.label}
                sx={{
                  py: { xs: 2, md: 2.75 },
                  px: { xs: 1.5, md: 3 },
                  borderInlineStart:
                    i === 0 ? "none" : "1px solid rgba(255,255,255,0.14)",
                  "&:first-of-type": { paddingInlineStart: 0 },
                  "@media (max-width: 899px)": {
                    borderInlineStart:
                      i % 2 === 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
                    borderTop: i > 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
                    paddingInlineStart: i % 2 === 0 ? 0 : undefined,
                  },
                  transition: `background-color ${motion.base} ${motion.ease}`,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.04)" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: palette.gold[300],
                    mb: 0.75,
                  }}
                >
                  {f.icon}
                  <Typography variant="eyebrow" sx={{ color: "rgba(255,255,255,0.6)" }}>
                    {f.label}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: fonts.body,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    fontWeight: 500,
                    lineHeight: 1.35,
                  }}
                >
                  {f.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default CampHero;
