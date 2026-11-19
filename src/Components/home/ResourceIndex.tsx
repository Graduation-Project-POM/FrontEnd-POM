import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, SectionHeading, ActionLink, useDirection } from "../ui";
import { COUNTS, type Collection } from "../../data/resources";
import { asset } from "../../utils/asset";

interface Entry {
  key: Collection;
  to: string;
  image: string;
}

const ENTRIES: Entry[] = [
  { key: "books", to: "/resources#books", image: asset("/training5.png") },
  { key: "problems", to: "/resources#problems", image: asset("/training3.png") },
  { key: "worksheets", to: "/worksheets/all", image: asset("/training1.png") },
  { key: "materials", to: "/resources#materials", image: asset("/training4.png") },
  { key: "videos", to: "/resources#videos", image: asset("/training2.png") },
  { key: "guides", to: "/resources#guides", image: asset("/guides.svg") },
];

export function ResourceIndex() {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Section tone="paper" id="library" divider>
      <SectionHeading
        title={
          <>
            {t("training.headline1")} <em>{t("training.headline2")}</em>
          </>
        }
        lede={t("training.lede")}
        action={
          <ActionLink component={Link} to="/resources">
            {t("cta.browseLibrary")}
          </ActionLink>
        }
      />

      <Box sx={{ position: "relative" }}>
        <Box
          aria-hidden
          sx={{
            display: { xs: "none", lg: "grid" },
            placeItems: "center",
            position: "absolute",
            insetInlineEnd: "6%",
            top: "50%",
            transform: "translateY(-50%)",
            width: 260,
            height: 260,
            borderRadius: "50%",
            backgroundColor: palette.surface,
            border: `1px solid ${palette.line}`,
            opacity: hover === null ? 0 : 1,
            scale: hover === null ? "0.9" : "1",
            transition: `opacity ${motion.base} ${motion.ease}, scale ${motion.slow} ${motion.ease}`,
            pointerEvents: "none",
            zIndex: 0,
            boxShadow: "0 40px 80px -50px rgba(21,15,18,0.5)",
          }}
        >
          {ENTRIES.map((e, i) => (
            <Box
              key={e.key}
              component="img"
              src={e.image}
              alt=""
              sx={{
                gridArea: "1 / 1",
                width: "62%",
                height: "auto",
                opacity: hover === i ? 1 : 0,
                transform: hover === i ? "none" : "translateY(10px)",
                transition: `opacity ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
              }}
            />
          ))}
        </Box>

        <Box sx={{ position: "relative", zIndex: 1, borderTop: `1px solid ${palette.lineStrong}` }}>
          {ENTRIES.map((entry, i) => (
            <Box
              key={entry.key}
              component={Link}
              to={entry.to}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "auto 1fr auto", md: "56px 1fr auto auto" },
                alignItems: "center",
                gap: { xs: 2, md: 3 },
                py: { xs: 2.5, md: 3.5 },
                borderBottom: `1px solid ${palette.lineStrong}`,
                textDecoration: "none",
                color: "inherit",
                position: "relative",
                transition: `padding ${motion.slow} ${motion.ease}`,
                "&:hover": { paddingInlineStart: { md: 3 } },
                "&:hover .ri-title": { color: palette.maroon[600] },
                "&:hover .ri-arrow": {
                  opacity: 1,
                  transform: isRTL ? "scaleX(-1) translateX(6px)" : "translateX(6px)",
                },
                "&:hover .ri-thumb": { opacity: 1 },
              }}
            >
              <Typography
                variant="mono"
                sx={{ color: palette.textMuted, display: { xs: "none", md: "block" } }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>

              <Box
                className="ri-thumb"
                component="img"
                src={entry.image}
                alt=""
                loading="lazy"
                sx={{
                  display: { xs: "block", md: "none" },
                  width: 44,
                  height: 44,
                  objectFit: "contain",
                  opacity: 0.85,
                }}
              />

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  className="ri-title"
                  sx={{
                    fontFamily: fonts.display,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    fontSize: { xs: "1.25rem", md: "2rem" },
                    lineHeight: 1.15,
                    transition: `color ${motion.base} ${motion.ease}`,
                  }}
                >
                  {t(`resources.nav.${entry.key}`)}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: { xs: "0.8125rem", md: "0.9375rem" },
                    color: palette.textMuted,
                    display: { xs: "none", sm: "block" },
                    maxWidth: "48ch",
                  }}
                >
                  {t(`resources.blurb.${entry.key}`)}
                </Typography>
              </Box>

              <Typography
                variant="mono"
                sx={{
                  color: palette.maroon[500],
                  border: `1px solid ${palette.maroon[200]}`,
                  borderRadius: `${radius.pill}px`,
                  px: 1.25,
                  py: 0.375,
                  whiteSpace: "nowrap",
                }}
              >
                {COUNTS[entry.key]} {t("resources.itemsShort")}
              </Typography>

              <ArrowForwardIcon
                className="ri-arrow"
                sx={{
                  display: { xs: "none", md: "block" },
                  fontSize: 22,
                  color: palette.maroon[600],
                  opacity: 0,
                  transform: isRTL ? "scaleX(-1)" : "none",
                  transition: `all ${motion.base} ${motion.ease}`,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}

export default ResourceIndex;
