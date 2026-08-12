import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, motion, radius, fonts } from "../../theme/tokens";
import { Section, Reveal } from "../ui";

const PARTNERS = [
  { key: "partner1", logo: "/Partner1.png", href: "https://www.taawon.org/en" },
  { key: "partner2", logo: "/Partner2.png", href: "https://moe.edu.ps" },
  { key: "partner3", logo: "/Partner3.jpg", href: "https://www.palast.ps/ar" },
];

export function Partners() {
  const { t } = useTranslation();

  return (
    <Section tone="paper" spacing="tight" id="partners">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
          gap: { xs: 3, md: 6 },
          alignItems: "center",
        }}
      >
        <Reveal variant="fade">
          <Typography
            component="h2"
            sx={{
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              letterSpacing: "-0.015em",
              color: palette.text,
              whiteSpace: { md: "nowrap" },
            }}
          >
            {t("partners.title")}
          </Typography>
        </Reveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: { xs: 1, md: 2 },
          }}
        >
          {PARTNERS.map((p, i) => (
            <Reveal key={p.key} variant="up" delay={i * 90}>
              <Box
                component="a"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 1.5,
                  borderRadius: `${radius.md}px`,
                  textDecoration: "none",
                  color: "inherit",
                  transition: `background-color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
                  border: `1px solid transparent`,
                  "&:hover": {
                    backgroundColor: palette.surfaceMuted,
                    borderColor: palette.line,
                  },
                  "&:hover img": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={p.logo}
                  alt=""
                  loading="lazy"
                  sx={{
                    width: 56,
                    height: 56,
                    objectFit: "contain",
                    borderRadius: `${radius.sm}px`,
                    transition: `transform ${motion.base} ${motion.ease}`,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: fonts.body,
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: palette.textSecondary,
                    lineHeight: 1.4,
                  }}
                >
                  {t(`partners.${p.key}`)}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Box>
    </Section>
  );
}

export default Partners;
