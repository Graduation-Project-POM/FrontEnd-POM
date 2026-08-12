import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageShell from "../Components/layout/PageShell";
import WorksheetLibrary from "../Components/resources/WorksheetLibrary";
import { ActionLink, MathBackdrop, Reveal, Section } from "../Components/ui";
import { palette } from "../theme/tokens";
import { WORKSHEETS, DIRECTORATES } from "../data/resources";

/**
 * Dedicated route for the full exam archive. It reuses the same filtered list
 * component as the library section, so the two can never drift apart.
 */
export default function WorksheetsPage() {
  const { t } = useTranslation();

  return (
    <PageShell>
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: palette.canvas,
          borderBottom: `1px solid ${palette.line}`,
          pt: { xs: 6, md: 9 },
          pb: { xs: 5, md: 7 },
        }}
      >
        <MathBackdrop tone="light" variant="quiet" />

        <Container sx={{ position: "relative" }}>
          <Reveal variant="fade">
            <ActionLink component={Link} to="/resources" size="sm" sx={{ mb: 3 }}>
              {t("playlist.headerBack")}
            </ActionLink>
          </Reveal>

          <Reveal variant="up" delay={60}>
            <Typography variant="h1" component="h1" sx={{ mt: 2, mb: 2, maxWidth: "16ch" }}>
              {t("worksheets.heroTitle")}
            </Typography>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <Typography variant="lede" component="p" sx={{ maxWidth: "52ch" }}>
              {t("worksheets.heroDesc")}
            </Typography>
          </Reveal>

          <Reveal variant="fade" delay={180}>
            <Box sx={{ display: "flex", gap: { xs: 3, md: 6 }, mt: 4, flexWrap: "wrap" }}>
              <Metric value={WORKSHEETS.length} label={t("worksheets.metrics.papers")} />
              <Metric value={DIRECTORATES.length} label={t("worksheets.metrics.directorates")} />
              <Metric
                value={WORKSHEETS.filter((w) => w.kind === "answers").length}
                label={t("worksheets.metrics.answers")}
              />
            </Box>
          </Reveal>
        </Container>
      </Box>

      <Section tone="paper">
        <WorksheetLibrary variant="page" />
      </Section>
    </PageShell>
  );
}

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <Box>
      <Typography variant="h3" component="div" sx={{ color: palette.maroon[600], lineHeight: 1 }}>
        {String(value).padStart(2, "0")}
      </Typography>
      <Typography variant="eyebrow" sx={{ color: palette.textMuted, mt: 1, display: "block" }}>
        {label}
      </Typography>
    </Box>
  );
}
