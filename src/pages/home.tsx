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
