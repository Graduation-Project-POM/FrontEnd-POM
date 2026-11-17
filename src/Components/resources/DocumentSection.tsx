import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, Reveal, useDirection } from "../ui";
import type { ResourceItem, SectionTone } from "./types";

interface DocumentSectionProps {
  id: string;
  title: React.ReactNode;
  lede?: string;
  items: ResourceItem[];
  tone?: SectionTone;
  tagFor?: (item: ResourceItem) => string | undefined;
  metaFor?: (item: ResourceItem) => string | undefined;
}

export function DocumentSection({
  id,
  title,
  lede,
  items,
  tone = "muted",
  tagFor,
  metaFor,
}: DocumentSectionProps) {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  const shift = isRTL ? -6 : 6;

  return (
    <Section tone={tone} id={id}>
      <SectionHeading
        title={title}
        lede={lede}
        action={
          <Typography variant="mono" sx={{ color: palette.textMuted }}>
            {String(items.length).padStart(2, "0")} {t("resources.itemsShort")}
          </Typography>
        }
      />

      <Box sx={{ borderTop: `1px solid ${palette.lineStrong}` }}>
        {items.map((item, i) => {
          const tag = tagFor?.(item);
          const meta = metaFor?.(item);
          return (
            <Reveal key={item.id} variant="up" delay={Math.min(i * 45, 260)}>
              <Box
                component="a"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "28px minmax(0, 1fr) auto",
                    md: "56px minmax(0, 1fr) 200px 24px",
                  },
                  alignItems: "center",
                  gap: { xs: 1.5, md: 3 },
                  py: { xs: 2, md: 2.75 },
                  borderBottom: `1px solid ${palette.line}`,
                  textDecoration: "none",
                  color: "inherit",
                  transition: `background-color ${motion.snap} ${motion.easeSnap}`,
                  "& .doc-shift": {
                    transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
                  },
                  "&:hover": { backgroundColor: palette.surface },
                  "&:hover .doc-shift": { transform: `translateX(${shift}px)` },
                  "&:hover .doc-title": { color: palette.maroon[600] },
                  "&:hover .doc-arrow": { opacity: 1, transform: "none" },
                }}
              >
                <Typography
                  className="doc-shift"
                  variant="mono"
                  sx={{ color: palette.textMuted }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>

                <Box className="doc-shift" sx={{ minWidth: 0 }}>
                  {tag && (
                    <Typography
                      variant="mono"
                      sx={{
                        display: "inline-block",
                        mb: 0.75,
                        px: 1,
                        py: 0.25,
                        fontSize: "0.625rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        borderRadius: `${radius.xs}px`,
                        color: palette.maroon[600],
                        backgroundColor: palette.maroon[50],
                      }}
                    >
                      {tag}
                    </Typography>
                  )}
                  <Typography
                    className="doc-title"
                    sx={{
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: { xs: "0.9375rem", md: "1.125rem" },
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                      transition: `color ${motion.snap} ${motion.easeSnap}`,
                    }}
                  >
                    {t(item.titleKey)}
                  </Typography>
                  {item.descKey && (
                    <Typography
                      sx={{
                        mt: 0.5,
                        fontSize: "0.8125rem",
                        lineHeight: 1.6,
                        color: palette.textMuted,
                        maxWidth: "62ch",
                      }}
                    >
                      {t(item.descKey)}
                    </Typography>
                  )}
                </Box>

                <Typography
                  variant="mono"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: palette.textMuted,
                    textAlign: "end",
                    fontSize: "0.6875rem",
                  }}
                >
                  {meta}
                </Typography>

                <Box
                  className="doc-arrow"
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    color: palette.maroon[600],
                    opacity: 0.35,
                    transform: item.external
                      ? "translateY(3px)"
                      : `translateX(${isRTL ? 3 : -3}px)`,
                    transition: `opacity ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
                  }}
                >
                  {item.external ? (
                    <NorthEastIcon sx={{ fontSize: 18 }} />
                  ) : (
                    <ArrowForwardIcon
                      sx={{ fontSize: 18, transform: isRTL ? "scaleX(-1)" : "none" }}
                    />
                  )}
                </Box>
              </Box>
            </Reveal>
          );
        })}
      </Box>
    </Section>
  );
}

export default DocumentSection;
