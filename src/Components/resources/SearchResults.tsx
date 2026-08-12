import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius } from "../../theme/tokens";
import { Section, Reveal, FilterPill, EmptyState } from "../ui";
import { COLLECTIONS, searchResources, type Collection } from "../../data/resources";

interface SearchResultsProps {
  query: string;
  onClear: () => void;
}

export function SearchResults({ query, onClear }: SearchResultsProps) {
  const { t } = useTranslation();
  const [collection, setCollection] = useState<Collection | "all">("all");

  const all = useMemo(() => searchResources(query, t, "all"), [query, t]);
  const results = useMemo(
    () => (collection === "all" ? all : all.filter((r) => r.collection === collection)),
    [all, collection]
  );

  return (
    <Section tone="paper">
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
        <FilterPill active={collection === "all"} onClick={() => setCollection("all")} count={all.length}>
          {t("resources.allCollections")}
        </FilterPill>
        {COLLECTIONS.map((c) => {
          const n = all.filter((r) => r.collection === c).length;
          if (!n) return null;
          return (
            <FilterPill
              key={c}
              active={collection === c}
              onClick={() => setCollection(c)}
              count={n}
            >
              {t(`resources.nav.${c}`)}
            </FilterPill>
          );
        })}
      </Box>

      {results.length === 0 ? (
        <EmptyState
          title={t("resources.empty.title")}
          hint={t("resources.empty.hint")}
          action={
            <Box
              component="button"
              onClick={onClear}
              sx={{
                px: 2.5,
                py: 1.125,
                cursor: "pointer",
                border: "none",
                borderRadius: `${radius.pill}px`,
                backgroundColor: palette.maroon[600],
                color: "#fff",
                fontFamily: fonts.body,
                fontSize: "0.875rem",
              }}
            >
              {t("resources.clearSearch")}
            </Box>
          }
        />
      ) : (
        <Box sx={{ borderTop: `1px solid ${palette.lineStrong}` }}>
          {results.map((item, i) => (
            <Reveal key={item.id} variant="up" delay={Math.min(i * 35, 240)}>
              <Box
                component="a"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr auto", md: "150px 1fr auto" },
                  alignItems: "center",
                  gap: { xs: 1.5, md: 3 },
                  py: 2.25,
                  borderBottom: `1px solid ${palette.line}`,
                  textDecoration: "none",
                  color: "inherit",
                  transition: `background-color ${motion.snap} ${motion.easeSnap}`,
                  "& .sr-shift": {
                    transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
                  },
                  "&:hover": { backgroundColor: palette.surfaceMuted },
                  "&:hover .sr-shift": { transform: "translateX(5px)" },
                  '[dir="rtl"] &:hover .sr-shift': { transform: "translateX(-5px)" },
                  "&:hover .sr-title": { color: palette.maroon[600] },
                  "&:hover .sr-arrow": { opacity: 1 },
                }}
              >
                <Typography
                  className="sr-shift"
                  variant="mono"
                  sx={{
                    color: palette.maroon[500],
                    fontSize: "0.625rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    order: { xs: 0, md: 0 },
                  }}
                >
                  {t(`resources.nav.${item.collection}`)}
                </Typography>

                <Box className="sr-shift" sx={{ gridColumn: { xs: "1 / -1", md: "auto" }, minWidth: 0 }}>
                  <Typography
                    className="sr-title"
                    sx={{
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                      lineHeight: 1.4,
                      transition: `color ${motion.snap} ${motion.easeSnap}`,
                    }}
                  >
                    {t(item.titleKey)}
                  </Typography>
                  {item.descKey && (
                    <Typography
                      sx={{
                        mt: 0.375,
                        fontSize: "0.8125rem",
                        color: palette.textMuted,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {t(item.descKey)}
                    </Typography>
                  )}
                </Box>

                <NorthEastIcon
                  className="sr-arrow"
                  sx={{
                    fontSize: 16,
                    color: palette.maroon[600],
                    opacity: 0.35,
                    transition: `opacity ${motion.snap} ${motion.easeSnap}`,
                  }}
                />
              </Box>
            </Reveal>
          ))}
        </Box>
      )}
    </Section>
  );
}

export default SearchResults;
