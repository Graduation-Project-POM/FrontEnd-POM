import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { palette, motion, fonts } from "../../theme/tokens";
import { NAV_ITEMS } from "./navItems";

const RESOURCE_LINKS = [
  { to: "/resources#books", label: "resources.nav.books" },
  { to: "/resources#problems", label: "resources.nav.problems" },
  { to: "/resources#worksheets", label: "resources.nav.worksheets" },
  { to: "/resources#materials", label: "resources.nav.materials" },
  { to: "/resources#videos", label: "resources.nav.videos" },
];

const PARTNER_LINKS = [
  { href: "https://www.taawon.org/en", label: "partners.partner1" },
  { href: "https://moe.edu.ps", label: "partners.partner2" },
  { href: "https://www.palast.ps/ar", label: "partners.partner3" },
];

const SOCIALS = [
  { icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
  { icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
  { icon: <YouTubeIcon fontSize="small" />, label: "YouTube" },
  { icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn" },
];

export function Footer() {
  const { t } = useTranslation();

  const linkSx = {
    display: "inline-block",
    py: 0.625,
    color: palette.textOnDarkMuted,
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: 300,
    transition: `color ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease}`,
    "&:hover": { color: "#fff", transform: "translateX(3px)" },
    '[dir="rtl"] &:hover': { transform: "translateX(-3px)" },
  } as const;

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor: palette.night,
        color: palette.textOnDark,
        overflow: "hidden",
      }}
    >
      {/* Ambient brand glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-30%",
          insetInlineEnd: "-10%",
          width: "60%",
          height: "120%",
          background: `radial-gradient(closest-side, ${palette.maroon[700]}66, transparent)`,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", pt: { xs: 8, md: 12 }, pb: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "1.6fr repeat(3, 1fr)",
            },
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Brand */}
          <Box>
            <Box
              component="img"
              src="/olm pal math22.png"
              alt=""
              sx={{ height: 54, width: "auto", filter: "brightness(0) invert(1)", mb: 2.5 }}
            />
            <Typography
              sx={{
                fontFamily: fonts.display,
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                mb: 1.5,
                maxWidth: "18ch",
                lineHeight: 1.15,
              }}
            >
              {t("footer.brand.title")}
            </Typography>
            <Typography
              sx={{
                color: palette.textOnDarkMuted,
                fontSize: "0.875rem",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "38ch",
                mb: 3,
              }}
            >
              {t("footer.brand.description")}
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {SOCIALS.map((s) => (
                <IconButton
                  key={s.label}
                  aria-label={s.label}
                  sx={{
                    color: palette.textOnDarkMuted,
                    border: `1px solid ${palette.nightLine}`,
                    borderRadius: 2,
                    width: 38,
                    height: 38,
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: palette.maroon[600],
                      borderColor: "transparent",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Explore */}
          <FooterColumn title={t("footer.explore.title")}>
            {NAV_ITEMS.map((item) => (
              <Box key={item.to} component={Link} to={item.to} sx={linkSx}>
                {t(item.label)}
              </Box>
            ))}
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title={t("footer.resourcesTitle")}>
            {RESOURCE_LINKS.map((item) => (
              <Box key={item.to} component={Link} to={item.to} sx={linkSx}>
                {t(item.label)}
              </Box>
            ))}
          </FooterColumn>

          {/* Partners + contact */}
          <FooterColumn title={t("partners.title")}>
            {PARTNER_LINKS.map((item) => (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkSx}
              >
                {t(item.label)}
              </Box>
            ))}
            <Box sx={{ mt: 2.5 }}>
              <Typography variant="eyebrow" sx={{ color: palette.gold[300], display: "block", mb: 1 }}>
                {t("footer.contact.title")}
              </Typography>
              <Box component="a" href={`mailto:${t("footer.contact.email")}`} sx={linkSx}>
                {t("footer.contact.email")}
              </Box>
            </Box>
          </FooterColumn>
        </Box>
      </Container>

      {/* Oversized wordmark — the sign-off */}
      <Box
        aria-hidden
        sx={{
          position: "relative",
          overflow: "hidden",
          borderTop: `1px solid ${palette.nightLine}`,
          pt: { xs: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            fontFamily: fonts.display,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: 0.85,
            fontSize: "clamp(3.5rem, 16vw, 15rem)",
            color: "transparent",
            WebkitTextStroke: `1px ${palette.nightLine}`,
            userSelect: "none",
            transform: "translateY(12%)",
          }}
        >
          PMO · IMO
        </Typography>
      </Box>

      <Box sx={{ borderTop: `1px solid ${palette.nightLine}` }}>
        <Container
          sx={{
            py: 2.5,
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="mono" sx={{ color: "rgba(255,255,255,0.42)" }}>
            {t("footer.bottom.rights")}
          </Typography>
          <Box
            component={Link}
            to="/Developers"
            sx={{
              ...linkSx,
              fontFamily: fonts.mono,
              fontSize: "0.78125rem",
              letterSpacing: "0.06em",
            }}
          >
            {t("footer.bottom.builtBy")}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box>
      <Typography variant="eyebrow" sx={{ color: palette.gold[300], display: "block", mb: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        {children}
      </Box>
    </Box>
  );
}

export default Footer;
