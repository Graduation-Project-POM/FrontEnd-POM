import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import PageShell from "../Components/layout/PageShell";
import LibraryHero from "../Components/resources/LibraryHero";
import LibraryNav from "../Components/resources/LibraryNav";
import SearchResults from "../Components/resources/SearchResults";
import BookShelf from "../Components/resources/BookShelf";
import DocumentSection from "../Components/resources/DocumentSection";
import WorksheetLibrary from "../Components/resources/WorksheetLibrary";
import VideoLibrary from "../Components/resources/VideoLibrary";
import ExternalLibrary from "../Components/resources/ExternalLibrary";
import { GUIDES, MATERIALS, PROBLEMS, searchResources } from "../data/resources";

export default function Resources() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const searching = query.trim().length > 0;

  const resultCount = useMemo(
    () => (searching ? searchResources(query, t, "all").length : 0),
    [query, searching, t]
  );

  return (
    <PageShell>
      <LibraryHero query={query} onQuery={setQuery} resultCount={resultCount} />

      {searching ? (
        <SearchResults query={query} onClear={() => setQuery("")} />
      ) : (
        <>
          <LibraryNav />
          <BookShelf />

          <DocumentSection
            id="problems"
            title={
              <>
                {t("resources.problems.headline1")}{" "}
                <em>{t("resources.problems.headline2")}</em>
              </>
            }
            lede={t("problems.heroDesc")}
            items={PROBLEMS}
            tone="muted"
            metaFor={(item) => String(item.meta?.source ?? "")}
          />

          <WorksheetLibrary />

          <DocumentSection
            id="materials"
            title={
              <>
                {t("resources.materials.headline1")}{" "}
                <em>{t("resources.materials.headline2")}</em>
              </>
            }
            lede={t("resources.materials.lede")}
            items={MATERIALS}
            tone="muted"
            tagFor={(item) => t(`resources.topics.${item.topic ?? "general"}`)}
            metaFor={() => "PDF"}
          />

          <VideoLibrary />

          <DocumentSection
            id="guides"
            title={
              <>
                {t("resources.guides.headline1")}{" "}
                <em>{t("resources.guides.headline2")}</em>
              </>
            }
            lede={t("resources.guides.lede")}
            items={GUIDES}
            tone="muted"
            tagFor={(item) => t(`resources.topics.${item.topic ?? "general"}`)}
            metaFor={() => "Google Docs"}
          />
          <ExternalLibrary />
        </>
      )}
    </PageShell>
  );
}
