import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { palette, alpha } from "../../theme/tokens";
import { MediaRail, SectionHeading, type MediaItem } from "../ui";
import { CAMP_GALLERY } from "../../data/camp";

const ITEMS: MediaItem[] = CAMP_GALLERY.map((src) => ({ type: "image", src }));

export function CampGallery() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        position: "relative",
        backgroundColor: palette.surface,
        py: { xs: 8, md: 13 },
        overflow: "hidden",
        borderTop: `1px solid ${palette.line}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(65% 50% at 88% 0%, ${alpha(palette.maroon[200], 0.5)}, transparent 62%),
                       radial-gradient(55% 45% at 0% 95%, ${alpha(palette.gold[200], 0.4)}, transparent 66%)`,
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <SectionHeading
          title={t("winterCamp.gallaryTitle")}
          lede={t("winterCamp.gallarySubTitle")}
        />
      </Container>

      <Box sx={{ position: "relative" }}>
        <MediaRail items={ITEMS} size="lg" label={t("camp.galleryLabel")} />
      </Box>
    </Box>
  );
}

export default CampGallery;
