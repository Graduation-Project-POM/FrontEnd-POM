import { useState } from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTranslation } from "react-i18next";

import { palette, fonts, motion, radius, alpha } from "../../theme/tokens";
import { Section, SectionHeading, Reveal, FilterPill } from "../ui";
import { BOOKS, type BookMotif, type Topic } from "../../data/resources";
import BookCoverArt from "./BookCoverArt";

const TOPICS: (Topic | "all")[] = [
  "all",
  "algebra",
  "geometry",
  "numberTheory",
  "combinatorics",
];

/**
 * Books presented as books.
 *
 * There are no cover scans in the project, so the covers are drawn: a spine, a
 * stack of page edges and title typography sized to the plate. Three starter
 * volumes get full plates; the rest of the shelf is a scannable list, because
 * eleven identical cards were never the right answer.
 */
export function BookShelf() {
  const { t } = useTranslation();
  const [topic, setTopic] = useState<Topic | "all">("all");

  const filtered = BOOKS.filter((b) => topic === "all" || b.topic === topic);
  const featured = filtered.filter((b) => b.featured);
  const rest = filtered.filter((b) => !b.featured);

  return (
    <Section tone="paper" id="books">
      <SectionHeading
        title={
          <>
            {t("resources.books.headline1")} <em>{t("resources.books.headline2")}</em>
          </>
        }
        lede={t("books.heroDesc")}
        action={
          <Typography variant="mono" sx={{ color: palette.textMuted }}>
            {filtered.length} / {BOOKS.length}
          </Typography>
        }
      />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: { xs: 4, md: 5 } }}>
        {TOPICS.map((tp) => (
          <FilterPill
            key={tp}
            active={topic === tp}
            onClick={() => setTopic(tp)}
            count={tp === "all" ? BOOKS.length : BOOKS.filter((b) => b.topic === tp).length}
          >
            {t(`resources.topics.${tp}`)}
          </FilterPill>
        ))}
      </Box>

      {featured.length > 0 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 4 },
            mb: rest.length ? { xs: 6, md: 8 } : 0,
          }}
        >
          {featured.map((book, i) => (
            <Reveal key={book.id} variant="up" delay={i * 100}>
              <BookPlate
                title={t(book.titleKey)}
                description={book.descKey ? t(book.descKey) : ""}
                href={book.href}
                topic={book.topic ?? "general"}
                motif={book.motif ?? "general"}
                index={i}
                open={t("books.open")}
              />
            </Reveal>
          ))}
        </Box>
      )}

      {rest.length > 0 && (
        <Box>
          <Typography variant="eyebrow" sx={{ color: palette.textMuted, display: "block", mb: 2 }}>
            {t("resources.books.restTitle")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
              columnGap: 6,
              borderTop: `1px solid ${palette.line}`,
            }}
          >
            {rest.map((book) => (
              <Box
                key={book.id}
                component="a"
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  py: 2.25,
                  borderBottom: `1px solid ${palette.line}`,
                  textDecoration: "none",
                  color: "inherit",
                  // Only the properties that actually change, and only ones the
                  // compositor can handle — no `all`, no layout animation.
                  transition: `background-color ${motion.snap} ${motion.easeSnap}`,
                  "& .bk-inner": {
                    transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
                  },
                  "&:hover": { backgroundColor: palette.surfaceMuted },
                  "&:hover .bk-inner": { transform: "translateX(4px)" },
                  '[dir="rtl"] &:hover .bk-inner': { transform: "translateX(-4px)" },
                  "&:hover .bk-title": { color: palette.maroon[600] },
                  "&:hover .bk-arrow": { opacity: 1, transform: "translate(2px, -2px)" },
                  "&:hover .bk-spine": { transform: "scaleY(1)" },
                }}
              >
                <Box
                  className="bk-inner"
                  sx={{ display: "flex", alignItems: "flex-start", gap: 2, flex: 1, minWidth: 0 }}
                >
                  {/* Miniature of the drawn cover */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 36,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: "2px 4px 4px 2px",
                      background: `linear-gradient(135deg, ${palette.maroon[600]}, ${palette.maroon[800]})`,
                      overflow: "hidden",
                      mt: 0.25,
                      display: "grid",
                      placeItems: "center",
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    <Box
                      className="bk-spine"
                      sx={{
                        position: "absolute",
                        insetInlineStart: 0,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        backgroundColor: palette.gold[400],
                        transform: "scaleY(0.35)",
                        transformOrigin: "bottom",
                        transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
                      }}
                    />
                    <BookCoverArt
                      motif={book.motif ?? "general"}
                      sx={{ width: 22, height: 22, ml: "3px" }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                      <Typography
                        variant="mono"
                        sx={{
                          color: palette.maroon[500],
                          fontSize: "0.625rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                        }}
                      >
                        {t(`resources.topics.${book.topic ?? "general"}`)}
                      </Typography>
                      {book.level && (
                        <Typography
                          variant="mono"
                          sx={{ color: palette.textMuted, fontSize: "0.625rem" }}
                        >
                          · {t(`resources.levels.${book.level}`)}
                        </Typography>
                      )}
                    </Box>
                    <Typography
                      className="bk-title"
                      sx={{
                        fontFamily: fonts.display,
                        fontWeight: 600,
                        fontSize: "1rem",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        transition: `color ${motion.snap} ${motion.easeSnap}`,
                      }}
                    >
                      {t(book.titleKey)}
                    </Typography>
                    {book.descKey && (
                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: "0.8125rem",
                          color: palette.textMuted,
                          lineHeight: 1.6,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {t(book.descKey)}
                      </Typography>
                    )}
                  </Box>
                </Box>

                <NorthEastIcon
                  className="bk-arrow"
                  sx={{
                    fontSize: 16,
                    color: palette.maroon[600],
                    opacity: 0,
                    mt: 0.5,
                    flexShrink: 0,
                    transition: `opacity ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Section>
  );
}

/* --------------------------------------------------------------- the plate */

function BookPlate({
  title,
  description,
  href,
  topic,
  motif,
  index,
  open,
}: {
  title: string;
  description: string;
  href: string;
  topic: Topic;
  motif: BookMotif;
  index: number;
  open: string;
}) {
  const { t } = useTranslation();
  const dark = index % 2 === 0;

  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "block",
        textDecoration: "none",
        "&:hover .plate": {
          transform: "translateY(-6px)",
          boxShadow: `0 26px 44px -26px ${alpha(palette.maroon[800], 0.6)}`,
        },
        "&:hover .plate-cta": { opacity: 1, transform: "none" },
        "&:hover .plate-edge": { transform: "scaleX(1)" },
        "&:hover .plate-art": { transform: "rotate(-4deg) scale(1.06)", opacity: 0.55 },
      }}
    >
      <Box
        className="plate"
        sx={{
          position: "relative",
          aspectRatio: "3 / 4",
          borderRadius: `4px ${radius.sm}px ${radius.sm}px 4px`,
          overflow: "hidden",
          p: { xs: 2.5, md: 3 },
          pl: { xs: 3.5, md: 4.25 },
          display: "flex",
          flexDirection: "column",
          // Transform + shadow only. The old 3D rotateY over 620ms was the
          // main source of the "still moving after the cursor left" feeling.
          transition: `transform ${motion.snapSlow} ${motion.easeSnap}, box-shadow ${motion.snapSlow} ${motion.easeSnap}`,
          boxShadow: "0 16px 30px -24px rgba(21,15,18,0.55)",
          background: dark
            ? `linear-gradient(155deg, ${palette.maroon[600]} 0%, ${palette.maroon[800]} 100%)`
            : `linear-gradient(155deg, ${palette.ink[50]} 0%, ${palette.maroon[100]} 100%)`,
          color: dark ? "#fff" : palette.maroon[800],
          border: `1px solid ${dark ? "transparent" : palette.maroon[200]}`,
        }}
      >
        {/* Spine */}
        <Box
          sx={{
            position: "absolute",
            insetInlineStart: 0,
            top: 0,
            bottom: 0,
            width: { xs: 14, md: 18 },
            background: dark
              ? "linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0))"
              : `linear-gradient(90deg, ${alpha(palette.maroon[600], 0.22)}, rgba(0,0,0,0))`,
            borderInlineEnd: `1px solid ${dark ? "rgba(255,255,255,0.14)" : palette.maroon[200]}`,
          }}
        />
        {/* Page edges */}
        <Box
          sx={{
            position: "absolute",
            insetInlineEnd: 0,
            top: 6,
            bottom: 6,
            width: 6,
            background: `repeating-linear-gradient(180deg, ${
              dark ? "rgba(255,255,255,0.22)" : palette.ink[300]
            } 0 1px, transparent 1px 4px)`,
            opacity: 0.7,
          }}
        />

        {/* Drawn cover figure, matched to the book's subject */}
        <BookCoverArt
          motif={motif}
          className="plate-art"
          sx={{
            position: "absolute",
            insetInlineEnd: { xs: "-12%", md: "-8%" },
            top: { xs: "16%", md: "14%" },
            width: { xs: "62%", md: "66%" },
            height: "auto",
            color: dark ? "#fff" : palette.maroon[600],
            opacity: dark ? 0.42 : 0.4,
            pointerEvents: "none",
            transformOrigin: "center",
            transition: `transform ${motion.snapMedia} ${motion.easeSnap}, opacity ${motion.snapSlow} ${motion.easeSnap}`,
          }}
        />

        <Typography
          variant="eyebrow"
          sx={{
            position: "relative",
            color: dark ? palette.gold[300] : palette.maroon[500],
            mb: "auto",
          }}
        >
          {t(`resources.topics.${topic}`)}
        </Typography>

        <Typography
          sx={{
            position: "relative",
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: { xs: "1.125rem", md: "1.3125rem" },
            lineHeight: 1.22,
            letterSpacing: "-0.02em",
            mt: 3,
          }}
        >
          {title}
        </Typography>

        {/* Rule that wipes in under the title on hover */}
        <Box
          className="plate-edge"
          sx={{
            position: "relative",
            height: 2,
            width: 44,
            mt: 1.5,
            borderRadius: 2,
            backgroundColor: dark ? palette.gold[400] : palette.maroon[500],
            transform: "scaleX(0.35)",
            transformOrigin: "inline-start",
            transition: `transform ${motion.snapSlow} ${motion.easeSnap}`,
          }}
        />

        <Typography
          sx={{
            position: "relative",
            mt: 1.25,
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            color: dark ? "rgba(255,255,255,0.7)" : palette.maroon[700],
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Box
          className="plate-cta"
          sx={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.75,
            mt: 2.5,
            fontSize: "0.8125rem",
            fontWeight: 500,
            opacity: 0.65,
            transform: "translateY(3px)",
            transition: `opacity ${motion.snap} ${motion.easeSnap}, transform ${motion.snapSlow} ${motion.easeSnap}`,
          }}
        >
          {open}
          <NorthEastIcon sx={{ fontSize: 14 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default BookShelf;
