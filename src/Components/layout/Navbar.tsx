import { useEffect, useState } from "react";
import { Box, Container, IconButton, Typography, useScrollTrigger } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { palette, motion, fonts, radius, zIndex } from "../../theme/tokens";
import useDirection from "../ui/useDirection";
import { NAV_ITEMS } from "./navItems";
import { s3Url } from "../../utils/media";

export const LOGIN_ROUTE = "/credentials/login";

interface NavbarProps {
  overlay?: boolean;
}

export function Navbar({ overlay = false }: NavbarProps) {
  const { t } = useTranslation();
  const { isRTL, toggle } = useDirection();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 18 });
  const transparent = overlay && !scrolled;

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.toLowerCase().startsWith(to.toLowerCase());

  const fg = transparent ? "#fff" : palette.text;
  const fgMuted = transparent ? "rgba(255,255,255,0.72)" : palette.textSecondary;

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: zIndex.header,
          backgroundColor: transparent ? "transparent" : "rgba(255,255,255,0.86)",
          backdropFilter: transparent ? "none" : "saturate(160%) blur(14px)",
          borderBottom: `1px solid ${transparent ? "transparent" : palette.line}`,
          transition: `background-color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease}`,
        }}
      >
        <Container>
          <Box
            sx={{
              height: "var(--pmo-header-h)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 3 },
            }}
          >
            <Box
              component={Link}
              to="/"
              aria-label={t("footer.brand.title")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                flexShrink: 0,
                "&:hover img": { transform: "scale(1.04)" },
              }}
            >
              <Box
                component="img"
                src={s3Url("olm pal math22.png")}
                alt=""
                sx={{
                  height: { xs: 40, md: 48 },
                  width: "auto",
                  transition: `transform ${motion.base} ${motion.ease}`,
                  filter: transparent ? "brightness(0) invert(1)" : "none",
                }}
              />
              <Box sx={{ display: { xs: "none", lg: "block" }, lineHeight: 1 }}>
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontWeight: 800,
                    fontSize: "0.9375rem",
                    letterSpacing: "-0.02em",
                    color: fg,
                    lineHeight: 1.1,
                  }}
                >
                  {t("brand.short")}
                </Typography>
                <Typography
                  variant="eyebrow"
                  sx={{ color: fgMuted, fontSize: "0.5625rem", letterSpacing: "0.2em" }}
                >
                  {t("brand.tagline")}
                </Typography>
              </Box>
            </Box>

            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
                marginInlineStart: "auto",
              }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.to);
                return (
                  <Box
                    key={item.to}
                    component={Link}
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    sx={{
                      position: "relative",
                      px: 1.75,
                      py: 1,
                      fontSize: "0.9375rem",
                      fontWeight: active ? 600 : 400,
                      color: active ? (transparent ? "#fff" : palette.maroon[600]) : fgMuted,
                      textDecoration: "none",
                      transition: `color ${motion.base} ${motion.ease}`,
                      "&:hover": { color: transparent ? "#fff" : palette.maroon[600] },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        insetInline: 14,
                        bottom: 2,
                        height: "2px",
                        borderRadius: 2,
                        backgroundColor: transparent ? "#fff" : palette.maroon[600],
                        transform: active ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "center",
                        transition: `transform ${motion.base} ${motion.ease}`,
                      },
                      "&:hover::after": { transform: "scaleX(0.6)" },
                    }}
                  >
                    {t(item.label)}
                  </Box>
                );
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginInlineStart: { xs: "auto", md: 2 },
              }}
            >
              <Box
                component={Link}
                to={LOGIN_ROUTE}
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  alignItems: "center",
                  px: 2,
                  py: 1,
                  borderRadius: `${radius.pill}px`,
                  border: `1px solid ${transparent ? "rgba(255,255,255,0.4)" : palette.lineStrong}`,
                  color: transparent ? "#fff" : palette.text,
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  transition: `all ${motion.snap} ${motion.easeSnap}`,
                  "&:hover": {
                    borderColor: transparent ? "#fff" : palette.maroon[600],
                    color: transparent ? "#fff" : palette.maroon[600],
                    backgroundColor: transparent
                      ? "rgba(255,255,255,0.12)"
                      : palette.maroon[50],
                  },
                }}
              >
                {t("nav.login")}
              </Box>

              <LanguageToggle onToggle={toggle} isRTL={isRTL} transparent={transparent} />

              <Box
                component="button"
                onClick={() => navigate("/resources")}
                sx={{
                  display: { xs: "none", lg: "inline-flex" },
                  alignItems: "center",
                  gap: 0.75,
                  px: 2.25,
                  py: 1.125,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: `${radius.pill}px`,
                  fontFamily: fonts.body,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: transparent ? palette.maroon[700] : "#fff",
                  backgroundColor: transparent ? "#fff" : palette.maroon[600],
                  transition: `all ${motion.base} ${motion.ease}`,
                  "&:hover": {
                    backgroundColor: transparent ? "#fff" : palette.maroon[700],
                    transform: "translateY(-1px)",
                    boxShadow: "0 10px 24px -12px rgba(122,30,60,0.7)",
                  },
                  "& svg": { fontSize: 16, transition: `transform ${motion.base} ${motion.ease}` },
                  "&:hover svg": { transform: isRTL ? "translateX(-3px)" : "translateX(3px)" },
                }}
              >
                {t("cta.startTraining")}
                <ArrowForwardIcon sx={{ transform: isRTL ? "scaleX(-1)" : "none" }} />
              </Box>

              <IconButton
                onClick={() => setMenuOpen(true)}
                aria-label={t("nav.openMenu")}
                sx={{
                  display: { xs: "inline-flex", md: "none" },
                  color: fg,
                  border: `1px solid ${transparent ? "rgba(255,255,255,0.28)" : palette.line}`,
                  borderRadius: `${radius.sm}px`,
                  width: 42,
                  height: 42,
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>

        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -1,
            height: 2,
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: `${progress * 100}%`,
              background: `linear-gradient(90deg, ${palette.maroon[600]}, ${palette.gold[400]})`,
              transition: "width 90ms linear",
            }}
          />
        </Box>
      </Box>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
    </>
  );
}

function LanguageToggle({
  onToggle,
  isRTL,
  transparent,
}: {
  onToggle: () => void;
  isRTL: boolean;
  transparent: boolean;
}) {
  return (
    <Box
      component="button"
      onClick={onToggle}
      aria-label="Toggle language"
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        p: "3px",
        cursor: "pointer",
        borderRadius: `${radius.pill}px`,
        border: `1px solid ${transparent ? "rgba(255,255,255,0.28)" : palette.line}`,
        backgroundColor: transparent ? "rgba(255,255,255,0.08)" : palette.surfaceMuted,
        transition: `all ${motion.base} ${motion.ease}`,
      }}
    >
      {(["EN", "ع"] as const).map((code, i) => {
        const on = i === (isRTL ? 1 : 0);
        return (
          <Box
            key={code}
            component="span"
            sx={{
              minWidth: 32,
              textAlign: "center",
              px: 1,
              py: 0.5,
              borderRadius: `${radius.pill}px`,
              fontFamily: fonts.mono,
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
              lineHeight: 1.4,
              color: on ? "#fff" : transparent ? "rgba(255,255,255,0.7)" : palette.textMuted,
              backgroundColor: on ? palette.maroon[600] : "transparent",
              transition: `all ${motion.base} ${motion.ease}`,
            }}
          >
            {code}
          </Box>
        );
      })}
    </Box>
  );
}

function MobileMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (to: string) => boolean;
}) {
  const { t } = useTranslation();
  const { isRTL, toggle } = useDirection();

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: zIndex.drawer,
        display: { xs: "block", md: "none" },
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transition: `opacity ${motion.base} ${motion.ease}`,
      }}
      aria-hidden={!open}
    >
      <Box
        onClick={onClose}
        sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(12,7,10,0.5)" }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: palette.night,
          color: palette.textOnDark,
          display: "flex",
          flexDirection: "column",
          transform: open ? "translateY(0)" : "translateY(-2%)",
          transition: `transform ${motion.slow} ${motion.ease}`,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            height: "var(--pmo-header-h)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2.5,
            borderBottom: `1px solid ${palette.nightLine}`,
          }}
        >
          <Typography variant="eyebrow" sx={{ color: palette.textOnDarkMuted }}>
            {t("nav.menu")}
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label={t("nav.closeMenu")}
            sx={{ color: "#fff", border: `1px solid ${palette.nightLine}`, borderRadius: 2 }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Box component="nav" sx={{ px: 2.5, py: 3, flex: 1 }}>
          {NAV_ITEMS.map((item, i) => {
            const active = isActive(item.to);
            return (
              <Box
                key={item.to}
                component={Link}
                to={item.to}
                onClick={onClose}
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 2,
                  py: 2,
                  textDecoration: "none",
                  borderBottom: `1px solid ${palette.nightLine}`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(14px)",
                  transition: `opacity ${motion.slow} ${motion.ease} ${80 + i * 60}ms, transform ${motion.slow} ${motion.ease} ${80 + i * 60}ms`,
                }}
              >
                <Typography
                  variant="mono"
                  sx={{ color: active ? palette.gold[300] : "rgba(255,255,255,0.35)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fonts.display,
                    fontSize: "2rem",
                    fontWeight: active ? 700 : 400,
                    letterSpacing: "-0.02em",
                    color: active ? "#fff" : "rgba(246,241,243,0.78)",
                  }}
                >
                  {t(item.label)}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            p: 2.5,
            pt: 0,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            borderTop: `1px solid ${palette.nightLine}`,
          }}
        >
          <Box
            component={Link}
            to={LOGIN_ROUTE}
            onClick={onClose}
            sx={{
              mt: 2.5,
              py: 1.5,
              textAlign: "center",
              borderRadius: `${radius.pill}px`,
              border: `1px solid ${palette.nightLine}`,
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.9375rem",
              fontWeight: 500,
            }}
          >
            {t("nav.login")}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            component="button"
            onClick={toggle}
            sx={{
              flex: 1,
              py: 1.5,
              cursor: "pointer",
              borderRadius: `${radius.pill}px`,
              border: `1px solid ${palette.nightLine}`,
              background: "transparent",
              color: "#fff",
              fontFamily: fonts.mono,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
            }}
          >
            {isRTL ? "ENGLISH" : "العربية"}
          </Box>
          <Box
            component={Link}
            to="/resources"
            onClick={onClose}
            sx={{
              flex: 1,
              py: 1.5,
              textAlign: "center",
              borderRadius: `${radius.pill}px`,
              backgroundColor: palette.maroon[600],
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            {t("cta.startTraining")}
          </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
