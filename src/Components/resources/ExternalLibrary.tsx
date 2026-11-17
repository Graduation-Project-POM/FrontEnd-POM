import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, Reveal } from "../ui";
import { EXTERNALS } from "../../data/resources";

export function ExternalLibrary() {
  const { t } = useTranslation();

  return (
    <Section tone="paper" id="external">
      <SectionHeading
        title={
          <>
            {t("resources.external.headline1")} <em>{t("resources.external.headline2")}</em>
          </>
        }
        lede={`${t("externalResources.externalSub")} ${t("externalResources.secExternalSub")}`}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, md: 6 } }}>
        {EXTERNALS.map((item, i) => (
          <Reveal key={item.id} variant="up" delay={i * 120}>
            <Box
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
                gap: { xs: 3, md: 6 },
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                direction: "inherit",
                "& .ext-media": { order: { xs: 0, md: i % 2 === 0 ? 0 : 2 } },
                "&:hover .ext-img": { transform: "scale(1.04)" },
                "&:hover .ext-title": { color: palette.maroon[600] },
                "&:hover .ext-arrow": { transform: "translate(3px, -3px)" },
              }}
            >
              <Box
                className="ext-media"
                sx={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  borderRadius: `${radius.md}px`,
                  overflow: "hidden",
                  backgroundColor: palette.surfaceSunken,
                  border: `1px solid ${palette.line}`,
                }}
              >
                <Box
                  className="ext-img"
                  component="img"
                  src={item.image}
                  alt=""
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: `transform ${motion.snapMedia} ${motion.easeSnap}`,
                  }}
                />
                <Typography
                  variant="mono"
                  sx={{
                    position: "absolute",
                    top: 12,
                    insetInlineStart: 14,
                    px: 1,
                    py: 0.5,
                    borderRadius: `${radius.xs}px`,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: palette.maroon[600],
                    fontSize: "0.625rem",
                    letterSpacing: "0.14em",
                  }}
                >
                  PDF
                </Typography>
              </Box>

              <Box>
                <Typography variant="mono" sx={{ color: palette.textMuted, display: "block", mb: 1.5 }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography
                  className="ext-title"
                  variant="h3"
                  component="h3"
                  sx={{ mb: 2, transition: `color ${motion.snap} ${motion.easeSnap}` }}
                >
                  {t(item.titleKey)}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.9375rem", md: "1rem" },
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: palette.textSecondary,
                    maxWidth: "56ch",
                  }}
                >
                  {item.descKey && t(item.descKey)}
                </Typography>

                {item.extraKey && t(item.extraKey) && (
                  <Typography
                    sx={{
                      mt: 2,
                      display: "inline-block",
                      px: 1.5,
                      py: 0.75,
                      borderRadius: `${radius.xs}px`,
                      backgroundColor: palette.gold[100],
                      color: palette.gold[600],
                      fontSize: "0.8125rem",
                      fontFamily: fonts.body,
                    }}
                  >
                    {t(item.extraKey)}
                  </Typography>
                )}

                <Box
                  className="ext-cta"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 3,
                    color: palette.maroon[600],
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                  }}
                >
                  {t("resources.openDocument")}
                  <NorthEastIcon
                    className="ext-arrow"
                    sx={{
                      fontSize: 16,
                      transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}

export default ExternalLibrary;
