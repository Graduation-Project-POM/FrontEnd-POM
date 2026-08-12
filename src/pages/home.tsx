import PageShell from "../Components/layout/PageShell";
import Hero from "../Components/home/Hero";
import Mission from "../Components/home/Mission";
import Vision from "../Components/home/Vision";
import Partners from "../Components/home/Partners";
import Journey from "../Components/home/Journey";
import NationalTeam from "../Components/home/NationalTeam";
import GazaSection from "../Components/home/GazaSection";
import ResourceIndex from "../Components/home/ResourceIndex";
import ClosingCTA from "../Components/home/ClosingCTA";

/**
 * Page rhythm alternates paper / muted only — hierarchy comes from spacing,
 * type scale, hairlines, brand-tinted washes and raised panels rather than from
 * dark backdrops. Partners sits directly after the vision, as it did
 * originally, so the institutional backing is stated early.
 */
export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Mission />
      <Vision />
      <Partners />
      <Journey />
      <NationalTeam />
      <GazaSection />
      <ResourceIndex />
      <ClosingCTA />
    </PageShell>
  );
}
