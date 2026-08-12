import PageShell from "../Components/layout/PageShell";
import CampHero from "../Components/camp/CampHero";
import CampAbout from "../Components/camp/CampAbout";
import CampAgenda from "../Components/camp/CampAgenda";
import CampPeople from "../Components/camp/CampPeople";
import CampRoster from "../Components/camp/CampRoster";
import CampGallery from "../Components/camp/CampGallery";

export default function WinterCamp() {
  return (
    <PageShell overlayHeader>
      <CampHero />
      <CampAbout />
      <CampAgenda />
      <CampPeople />
      <CampRoster />
      <CampGallery />
    </PageShell>
  );
}
