import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, motion, radius, zIndex } from "../../theme/tokens";
import { COLLECTIONS, COUNTS } from "../../data/resources";

export function LibraryNav() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>(COLLECTIONS[0]);

  useEffect(() => {
    const sections = COLLECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "var(--pmo-header-h)",
        zIndex: zIndex.rail,
        backgroundColor: "rgba(252,251,251,0.9)",
        backdropFilter: "saturate(150%) blur(12px)",
        borderBottom: `1px solid ${palette.line}`,
      }}
    >
      <Container>
        <Box
          component="nav"
          aria-label={t("resources.indexLabel")}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            overflowX: "auto",
            py: 1.25,
            mx: { xs: -2.5, sm: 0 },
            px: { xs: 2.5, sm: 0 },
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {COLLECTIONS.map((c) => {
            const on = active === c;
            return (
              <Box
                key={c}
                component="a"
                href={`#${c}`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.875,
                  flexShrink: 0,
                  px: 1.5,
                  py: 0.75,
                  borderRadius: `${radius.pill}px`,
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  fontWeight: on ? 600 : 400,
                  color: on ? "#fff" : palette.textSecondary,
                  backgroundColor: on ? palette.maroon[600] : "transparent",
                  transition: `color ${motion.snap} ${motion.easeSnap}, background-color ${motion.snap} ${motion.easeSnap}`,
                  "&:hover": {
                    color: on ? "#fff" : palette.maroon[600],
                    backgroundColor: on ? palette.maroon[600] : palette.maroon[50],
                  },
                }}
              >
                {t(`resources.nav.${c}`)}
                <Typography
                  component="span"
                  variant="mono"
                  sx={{ fontSize: "0.625rem", opacity: on ? 0.75 : 0.55 }}
                >
                  {COUNTS[c]}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default LibraryNav;
