import PageShell from "../Components/layout/PageShell";
import NewsHero from "../Components/news/NewsHero";
import StoryImo from "../Components/news/StoryImo";
import StorySupervisors from "../Components/news/StorySupervisors";

export default function NewsPage() {
  return (
    <PageShell>
      <NewsHero />
      <StoryImo />
      <StorySupervisors />
    </PageShell>
  );
}
