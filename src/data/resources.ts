/**
 * The library catalogue.
 *
 * Every resource in the product is described here once, in one shape, so the
 * page can search across all of them, count them per collection and render each
 * collection with the presentation that suits it. Previously each resource type
 * lived inside its own component as a hard-coded array of cards, which made a
 * cross-cutting search impossible.
 *
 * Text lives as i18n keys — the catalogue stays bilingual by construction.
 */

export type Collection =
  | "books"
  | "problems"
  | "worksheets"
  | "materials"
  | "videos"
  | "external";

/** Olympiad domains, used as filters and as tags on individual entries. */
export type Topic =
  | "algebra"
  | "geometry"
  | "numberTheory"
  | "combinatorics"
  | "general";

export type Level = "starter" | "advanced";

/** Which figure the drawn book cover shows — chosen to match what is inside it. */
export type BookMotif =
  | "geometry"
  | "algebra"
  | "numberTheory"
  | "combinatorics"
  | "general"
  | "notes"
  | "problems"
  | "world";

export interface ResourceItem {
  id: string;
  collection: Collection;
  titleKey: string;
  descKey?: string;
  href: string;
  /** External links open in a new tab and get the ↗ affordance. */
  external?: boolean;
  topic?: Topic;
  level?: Level;
  /** Free-form display metadata (page counts, durations, directorate…). */
  meta?: Record<string, string | number>;
  featured?: boolean;
  /** Books only: the cover figure drawn for this volume. */
  motif?: BookMotif;
}

/* ------------------------------------------------------------------ books */

export const BOOKS: ResourceItem[] = [
  {
    id: "book-notes-1",
    collection: "books",
    motif: "notes",
    titleKey: "books.title4",
    descKey: "books.desc4",
    href: "https://drive.google.com/file/d/1tFTD2NoziAWdMKvzqCXZ7dMOPfeE3uS0/view?usp=drive_link",
    external: true,
    topic: "general",
    level: "starter",
    featured: true,
  },
  {
    id: "book-notes-2",
    collection: "books",
    motif: "notes",
    titleKey: "books.title5",
    descKey: "books.desc5",
    href: "https://drive.google.com/file/d/1M8-Cxxo4DL7DMwBHqeUYTqWZitPm69Le/view?usp=drive_link",
    external: true,
    topic: "general",
    level: "starter",
    featured: true,
  },
  {
    id: "book-imo-quba",
    collection: "books",
    motif: "world",
    titleKey: "books.title1",
    descKey: "books.desc1",
    href: "https://drive.google.com/file/d/13_yxdhInipKbN7zkbSRJJ3EyF7wKISR8/view",
    external: true,
    topic: "general",
    level: "advanced",
    featured: true,
  },
  {
    id: "book-aops",
    collection: "books",
    motif: "general",
    titleKey: "books.title2",
    descKey: "books.desc2",
    href: "https://drive.google.com/file/d/13N6cRcuQ4XgnHg08AMNqF3jZdHXYHqLx/view?usp=drive_link",
    external: true,
    topic: "general",
    level: "advanced",
  },
  {
    id: "book-imo-2023",
    collection: "books",
    motif: "problems",
    titleKey: "books.title3",
    descKey: "books.desc3",
    href: "https://drive.google.com/file/d/1qxBldC_S7bby4FQjdG74eYEjxzCgz3Fy/view?usp=drive_link",
    external: true,
    topic: "general",
    level: "advanced",
  },
  {
    id: "book-morocco",
    collection: "books",
    motif: "problems",
    titleKey: "books.title6",
    descKey: "books.desc6",
    href: "https://drive.google.com/file/d/1ON-wOaP5SE7xrPI5hse7FuoQqJ-3CuAH/view?usp=sharing",
    external: true,
    topic: "general",
    level: "advanced",
  },
  {
    id: "book-arab",
    collection: "books",
    motif: "world",
    titleKey: "books.title7",
    descKey: "books.desc7",
    href: "https://drive.google.com/file/d/1_52ccZFQhl7sUhwvbSD4hm8lUWNSiHH6/view?usp=sharing",
    external: true,
    topic: "general",
    level: "advanced",
  },
  {
    id: "book-number-theory",
    collection: "books",
    motif: "numberTheory",
    titleKey: "books.title8",
    descKey: "books.desc8",
    href: "https://drive.google.com/file/d/190G0DMUga8OI4DTQSCoFfgEO-jukl5hl/view?usp=sharing",
    external: true,
    topic: "numberTheory",
    level: "starter",
  },
  {
    id: "book-geometry",
    collection: "books",
    motif: "geometry",
    titleKey: "books.title9",
    descKey: "books.desc9",
    href: "https://drive.google.com/file/d/1UQlNfvtVsuRmZQBd8U7aXi0BSExciY6p/view?usp=sharing",
    external: true,
    topic: "geometry",
    level: "starter",
  },
  {
    id: "book-algebra",
    collection: "books",
    motif: "algebra",
    titleKey: "books.title10",
    descKey: "books.desc10",
    href: "https://drive.google.com/file/d/1sx9R2cN5eX_57Qrg-xGCjpEZwlSa2fcg/view?usp=sharing",
    external: true,
    topic: "algebra",
    level: "starter",
  },
  {
    id: "book-combinatorics",
    collection: "books",
    motif: "combinatorics",
    titleKey: "books.title11",
    descKey: "books.desc11",
    href: "https://drive.google.com/file/d/1-_F5d3wLCXfN0P6p9mLQac5yBVPRQ5Tw/view?usp=sharing",
    external: true,
    topic: "combinatorics",
    level: "starter",
  },
];

/* --------------------------------------------------------------- problems */

export const PROBLEMS: ResourceItem[] = [
  {
    id: "problems-1959-2018",
    collection: "problems",
    titleKey: "problems.title1",
    descKey: "problems.desc1",
    href: "https://www.imo-official.org/problems.aspx",
    external: true,
    meta: { source: "imo-official.org", span: "1959 — 2018" },
  },
  {
    id: "problems-poland-1965",
    collection: "problems",
    titleKey: "problems.title2",
    descKey: "problems.desc2",
    href: "/pdfs/problems1.pdf",
    meta: { source: "PDF" },
  },
  {
    id: "problems-imo",
    collection: "problems",
    titleKey: "problems.title3",
    descKey: "problems.desc3",
    href: "/pdfs/problems2.pdf",
    meta: { source: "PDF" },
  },
  {
    id: "problems-results",
    collection: "problems",
    titleKey: "problems.title4",
    descKey: "problems.desc4",
    href: "https://www.imo-official.org/results.aspx",
    external: true,
    meta: { source: "imo-official.org" },
  },
];

/* ------------------------------------------------------------- worksheets */

export interface Worksheet extends ResourceItem {
  directorate: string;
  /** Question paper or its answer key. */
  kind: "paper" | "answers";
}

export const WORKSHEETS: Worksheet[] = [
  { id: "ws-jenin-2025", collection: "worksheets", titleKey: "worksheets.jenin2025", href: "https://drive.google.com/file/d/12jc9IiI5QWN7rai_rfFgyhx-2omfzsVw/view?usp=drive_link", external: true, directorate: "jenin", kind: "paper" },
  { id: "ws-qabatiya-answers", collection: "worksheets", titleKey: "worksheets.qabatiyaAnswers2", href: "https://drive.google.com/file/d/1Nevq_VQueKyQiija0VAKfgZg2t5yyMHZ/view?usp=drive_link", external: true, directorate: "qabatiya", kind: "answers" },
  { id: "ws-qabatiya-math", collection: "worksheets", titleKey: "worksheets.qabatiyaMath", href: "https://drive.google.com/file/d/1LBgavGJUy9rTiNq65APpCvPowhLLYwnA/view?usp=drive_link", external: true, directorate: "qabatiya", kind: "paper" },
  { id: "ws-yatta", collection: "worksheets", titleKey: "worksheets.yattaExam", href: "https://drive.google.com/file/d/1jZoyfIEa_qTY6EYaCBkYxqvNXyRUzeXq/view?usp=drive_link", external: true, directorate: "yatta", kind: "answers" },
  { id: "ws-birzeit", collection: "worksheets", titleKey: "worksheets.birzeit2025", href: "https://drive.google.com/file/d/1L5tm7mpicaaw_JS7gZIhOmc-fUFJMdmO/view?usp=drive_link", external: true, directorate: "birzeit", kind: "answers" },
  { id: "ws-qalqilya", collection: "worksheets", titleKey: "worksheets.qalqilyaCompetition", href: "https://drive.google.com/file/d/1sTHWPPSovFOXHCULKp62Ak_shSoDGDXX/view?usp=drive_link", external: true, directorate: "qalqilya", kind: "paper" },
  { id: "ws-jerusalem", collection: "worksheets", titleKey: "worksheets.jerusalem2025", href: "https://drive.google.com/file/d/1o3p185eQ-6CWho51g3H3al5Hq5watSpR/view?usp=drive_link", external: true, directorate: "jerusalem", kind: "paper" },
  { id: "ws-jerusalem-answers", collection: "worksheets", titleKey: "worksheets.jerusalemAnswers", href: "https://drive.google.com/file/d/1W-8rO6c0msbRUrSWZO8ULhsZVFqf-Xfh/view?usp=drive_link", external: true, directorate: "jerusalem", kind: "answers" },
  { id: "ws-tulkarm", collection: "worksheets", titleKey: "worksheets.tulkarmFinal", href: "https://drive.google.com/file/d/1yeTrpFE5WuM_P7xiJ912dT99NXqe0JNw/view?usp=drive_link", external: true, directorate: "tulkarm", kind: "paper" },
  { id: "ws-tulkarm-solutions", collection: "worksheets", titleKey: "worksheets.tulkarmSolutions", href: "https://drive.google.com/file/d/1vmV308KK-qk7dtK0ohqvFW9dr3bYz-yI/view?usp=drive_link", external: true, directorate: "tulkarm", kind: "answers" },
  { id: "ws-ramallah", collection: "worksheets", titleKey: "worksheets.ramallahLast", href: "https://drive.google.com/file/d/1mGJbwnQP3wMnbd4UFFG-C6-i0tg1iR-9/view?usp=drive_link", external: true, directorate: "ramallah", kind: "paper" },
  { id: "ws-ramallah-answers", collection: "worksheets", titleKey: "worksheets.ramallahFinalAnswers", href: "https://drive.google.com/file/d/1RVwZPTIH014r9CK9SGm0jqOYDOpL-N1z/view?usp=drive_link", external: true, directorate: "ramallah", kind: "answers" },
  { id: "ws-nablus", collection: "worksheets", titleKey: "worksheets.nablusFinal", href: "https://drive.google.com/file/d/1R6ZvFhbKt3k9Kn_dSKD89ViBKFIXuak7/view?usp=drive_link", external: true, directorate: "nablus", kind: "paper" },
  { id: "ws-nablus-answers", collection: "worksheets", titleKey: "worksheets.nablusAnswers", href: "https://drive.google.com/file/d/1u4eUNo0Gjq4dY_YdcbK1RJFkDJQeu4vQ/view?usp=drive_link", external: true, directorate: "nablus", kind: "answers" },
  { id: "ws-nablus-en", collection: "worksheets", titleKey: "worksheets.nablusEng", href: "https://drive.google.com/file/d/13ylGGB3oli18oYVN0sgfEUJkM1Z7ggzE/view?usp=drive_link", external: true, directorate: "nablus", kind: "paper" },
  { id: "ws-nablus-questions", collection: "worksheets", titleKey: "worksheets.nablusQuestions", href: "https://drive.google.com/file/d/17jDUvIss-lya-ITciqyo5m094fDaq6_1/view?usp=drive_link", external: true, directorate: "nablus", kind: "paper" },
  { id: "ws-salfit", collection: "worksheets", titleKey: "worksheets.salfitAnswers", href: "https://drive.google.com/file/d/1m85o8CgVl9OkF-Ok4VOlZ7Fw1wipwpqn/view?usp=drive_link", external: true, directorate: "salfit", kind: "answers" },
  { id: "ws-jericho", collection: "worksheets", titleKey: "worksheets.jericho2025", href: "https://drive.google.com/file/d/1QMfY5cl_fTAl9wN086p48-EDm6BVmYbv/view?usp=sharing", external: true, directorate: "jericho", kind: "paper" },
];

export const DIRECTORATES = Array.from(
  new Set(WORKSHEETS.map((w) => w.directorate))
);

/* -------------------------------------------------------------- materials */

export const MATERIALS: ResourceItem[] = [
  { id: "mat-1", collection: "materials", titleKey: "winterCamp.pdfs.title1", href: "https://drive.google.com/file/d/1D6vwVIeRmdyOQwO9Em99fEmNIKOonihZ/view?usp=sharing", external: true, topic: "algebra" },
  { id: "mat-2", collection: "materials", titleKey: "winterCamp.pdfs.title2", href: "https://drive.google.com/file/d/18DaDTu9hH0JFqndEW7luUnhpTHt-XkqF/view?usp=sharing", external: true, topic: "algebra" },
  { id: "mat-3", collection: "materials", titleKey: "winterCamp.pdfs.title3", href: "https://drive.google.com/file/d/1tPTdEWyNZaiQkNLaQ5y3236GRFZ2DbPa/view?usp=sharing", external: true, topic: "algebra" },
  { id: "mat-4", collection: "materials", titleKey: "winterCamp.pdfs.title4", href: "https://drive.google.com/file/d/1NFokVPpB43y44WH6krX083hBJPMTHAym/view?usp=sharing", external: true, topic: "algebra" },
  { id: "mat-5", collection: "materials", titleKey: "winterCamp.pdfs.title5", href: "https://drive.google.com/file/d/1c-UdNnIBPkYbJs_2Uadrhs-iC9jcaSoc/view?usp=sharing", external: true, topic: "combinatorics" },
  { id: "mat-6", collection: "materials", titleKey: "winterCamp.pdfs.title6", href: "https://drive.google.com/file/d/1EmyQt4AqUDAwB2AEcUtweREwhbwHqG3p/view?usp=sharing", external: true, topic: "geometry" },
  { id: "mat-7", collection: "materials", titleKey: "winterCamp.pdfs.title7", href: "https://drive.google.com/file/d/1-DKa9SZ2RJESWvxitHpEmfOea0TErKIP/view?usp=sharing", external: true, topic: "geometry" },
  { id: "mat-8", collection: "materials", titleKey: "winterCamp.pdfs.title8", href: "https://drive.google.com/file/d/1Dvrg_3_bXYUu7wEovu_fd89dVzBLQ-Mp/view?usp=sharing", external: true, topic: "geometry" },
];

/* ----------------------------------------------------------------- videos */

export interface Playlist extends ResourceItem {
  videos?: number;
  duration?: string;
  language: "ar" | "en";
  isChannel?: boolean;
}

export const PLAYLISTS: Playlist[] = [
  {
    id: "pl-level-1",
    collection: "videos",
    titleKey: "playlist.heroTitle",
    descKey: "playlist.heroDesc",
    href: "https://www.youtube.com/watch?v=NV_YIWpNajs&list=PL9EgwsgADtexVP_Fj3WrmpgNtXlv0-fgl",
    external: true,
    videos: 13,
    duration: "8h 04m",
    language: "ar",
    featured: true,
  },
  {
    id: "pl-level-2",
    collection: "videos",
    titleKey: "playlist.heroTitle",
    descKey: "playlist.heroDesc2",
    href: "https://www.youtube.com/watch?v=HPILHO7NzcY&list=PL9EgwsgADteyGLxBjUNBL2GtWUXWM-dga",
    external: true,
    videos: 7,
    duration: "7h 03m",
    language: "en",
  },
  {
    id: "pl-level-3",
    collection: "videos",
    titleKey: "playlist.heroTitle",
    descKey: "playlist.heroDesc3",
    href: "https://www.youtube.com/watch?v=5mE7J7Vd1U0&list=PL9EgwsgADteyL3CsO5TDeay_4ntBPFc46",
    external: true,
    videos: 25,
    duration: "49h 10m",
    language: "en",
  },
  {
    id: "pl-aops",
    collection: "videos",
    titleKey: "playlist.heroTitle2",
    descKey: "playlist.heroDesc4",
    href: "https://www.youtube.com/@ArtofProblemSolving/playlists",
    external: true,
    language: "en",
    isChannel: true,
  },
];

/* --------------------------------------------------------------- external */

export interface ExternalResource extends ResourceItem {
  image: string;
  extraKey?: string;
}

export const EXTERNALS: ExternalResource[] = [
  {
    id: "ext-doha-2024",
    collection: "external",
    titleKey: "externalResources.card1.title",
    descKey: "externalResources.card1.desc",
    extraKey: "externalResources.card1.extra",
    href: "/secPDF.pdf",
    image: "/images.png",
  },
  {
    id: "ext-arab-2020",
    collection: "external",
    titleKey: "externalResources.card2.title",
    descKey: "externalResources.card2.desc",
    href: "/educ_olymp.pdf",
    image: "/secRes.png",
  },
];

/* ------------------------------------------------------------- catalogue */

export const ALL_RESOURCES: ResourceItem[] = [
  ...BOOKS,
  ...PROBLEMS,
  ...WORKSHEETS,
  ...MATERIALS,
  ...PLAYLISTS,
  ...EXTERNALS,
];

export const COLLECTIONS: Collection[] = [
  "books",
  "problems",
  "worksheets",
  "materials",
  "videos",
  "external",
];

export const COUNTS: Record<Collection, number> = COLLECTIONS.reduce(
  (acc, c) => ({ ...acc, [c]: ALL_RESOURCES.filter((r) => r.collection === c).length }),
  {} as Record<Collection, number>
);

/** Case-insensitive match over the *translated* title and description. */
export function searchResources(
  query: string,
  translate: (key: string) => string,
  collection?: Collection | "all"
): ResourceItem[] {
  const q = query.trim().toLowerCase();
  return ALL_RESOURCES.filter((item) => {
    if (collection && collection !== "all" && item.collection !== collection) return false;
    if (!q) return true;
    const haystack = [
      translate(item.titleKey),
      item.descKey ? translate(item.descKey) : "",
      item.topic ?? "",
      (item as Worksheet).directorate ?? "",
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
