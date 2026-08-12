/**
 * Winter Training Camp 2026 — Al-Istiqlal University, Jericho.
 *
 * Schedule, people and roster used to live inside the components that rendered
 * them. Pulling the data out means the roster can be searched, the schedule can
 * be summarised, and the same records can feed more than one view.
 */

export type Day = "day1" | "day2" | "day3" | "day4" | "day5" | "day6";

export interface AgendaItem {
  id: number;
  time: string;
  titleKey: string;
  speakerKeys: string[] | null;
  type: "session" | "break";
}

export const AGENDA: Record<Day, AgendaItem[]> = {
  day1: [
    { id: 1, time: "08:00 — 09:30", titleKey: "agenda.arrival", speakerKeys: null, type: "break" },
    {
      id: 2,
      time: "10:00 — 11:30",
      titleKey: "agenda.opening.title",
      speakerKeys: [
        "agenda.opening.welcome",
        "agenda.opening.hostUniversity",
        "agenda.opening.moe",
        "agenda.opening.past",
        "agenda.opening.taawon",
        "agenda.opening.intro",
      ],
      type: "session",
    },
    { id: 3, time: "12:30 — 13:30", titleKey: "agenda.lunch", speakerKeys: null, type: "break" },
    { id: 4, time: "14:00 — 15:20", titleKey: "agenda.sessions.algebra", speakerKeys: ["speakers.mohammadAlAdam"], type: "session" },
    { id: 5, time: "15:30 — 17:00", titleKey: "agenda.sessions.algebra", speakerKeys: ["speakers.mohammadAlAdam"], type: "session" },
    { id: 6, time: "17:00 — 18:30", titleKey: "agenda.dinner", speakerKeys: null, type: "break" },
    {
      id: 7,
      time: "19:00 — 20:30",
      titleKey: "agenda.videos",
      speakerKeys: ["organizations.moe", "organizations.past", "organizations.taawon"],
      type: "session",
    },
  ],
  day2: [
    { id: 1, time: "08:00 — 08:30", titleKey: "agenda.breakfast", speakerKeys: null, type: "break" },
    { id: 2, time: "09:00 — 10:30", titleKey: "agenda.sessions.geometry", speakerKeys: ["speakers.abdulrahimMousa"], type: "session" },
    { id: 3, time: "10:40 — 12:10", titleKey: "agenda.sessions.geometry", speakerKeys: ["speakers.abdulrahimMousa"], type: "session" },
    { id: 4, time: "12:30 — 14:00", titleKey: "agenda.lunch", speakerKeys: null, type: "break" },
    { id: 5, time: "14:00 — 15:20", titleKey: "agenda.sessions.geometry", speakerKeys: ["speakers.abdulrahimMousa"], type: "session" },
    { id: 6, time: "15:30 — 17:00", titleKey: "agenda.sessions.geometry", speakerKeys: ["speakers.abdulrahimMousa"], type: "session" },
    { id: 7, time: "17:00 — 18:30", titleKey: "agenda.dinner", speakerKeys: null, type: "break" },
    { id: 8, time: "19:00 — 20:30", titleKey: "agenda.talks.mathEnjoyment", speakerKeys: ["speakers.ahmadAlJundi"], type: "session" },
  ],
  day3: [
    { id: 1, time: "08:00 — 08:30", titleKey: "agenda.breakfast", speakerKeys: null, type: "break" },
    { id: 2, time: "09:00 — 10:30", titleKey: "agenda.sessions.algebra", speakerKeys: ["speakers.afafSaghir"], type: "session" },
    { id: 3, time: "10:40 — 12:10", titleKey: "agenda.sessions.algebra", speakerKeys: ["speakers.nadeenIssa"], type: "session" },
    { id: 4, time: "12:30 — 14:00", titleKey: "agenda.lunch", speakerKeys: null, type: "break" },
    { id: 5, time: "14:00 — 15:20", titleKey: "agenda.sessions.numberTheory", speakerKeys: ["speakers.salahFayyad"], type: "session" },
    { id: 6, time: "15:30 — 17:00", titleKey: "agenda.sessions.combinatorics", speakerKeys: ["speakers.mohammadMaraaba"], type: "session" },
    { id: 7, time: "17:00 — 18:30", titleKey: "agenda.dinner", speakerKeys: null, type: "break" },
    { id: 8, time: "19:00 — 20:30", titleKey: "agenda.talks.imoPath", speakerKeys: ["speakers.omarAlHusni"], type: "session" },
  ],
  day4: [
    { id: 1, time: "08:00 — 08:30", titleKey: "agenda.breakfast", speakerKeys: null, type: "break" },
    { id: 2, time: "09:00 — 10:30", titleKey: "agenda.sessions.numberTheory", speakerKeys: ["speakers.raniaWannan"], type: "session" },
    { id: 3, time: "10:40 — 12:10", titleKey: "agenda.sessions.numberTheory", speakerKeys: ["speakers.raniaWannan"], type: "session" },
    { id: 4, time: "12:30 — 14:00", titleKey: "agenda.lunch", speakerKeys: null, type: "break" },
    { id: 5, time: "14:00 — 15:20", titleKey: "agenda.sessions.numberTheory", speakerKeys: ["speakers.raniaWannan"], type: "session" },
    { id: 6, time: "15:30 — 17:00", titleKey: "agenda.sessions.numberTheory", speakerKeys: ["speakers.lubnaAbuBasha"], type: "session" },
    { id: 7, time: "17:00 — 18:30", titleKey: "agenda.dinner", speakerKeys: null, type: "break" },
    { id: 8, time: "19:00 — 20:30", titleKey: "agenda.talks.programmingMath", speakerKeys: ["speakers.mohammadKhalil"], type: "session" },
  ],
  day5: [
    { id: 1, time: "08:00 — 08:30", titleKey: "agenda.breakfast", speakerKeys: null, type: "break" },
    { id: 2, time: "09:00 — 10:30", titleKey: "agenda.sessions.combinatorics", speakerKeys: ["speakers.mohammadMaraaba"], type: "session" },
    { id: 3, time: "10:40 — 12:10", titleKey: "agenda.sessions.combinatorics", speakerKeys: ["speakers.mohammadMaraaba"], type: "session" },
    { id: 4, time: "12:30 — 14:00", titleKey: "agenda.lunch", speakerKeys: null, type: "break" },
    { id: 5, time: "14:00 — 15:20", titleKey: "agenda.sessions.combinatorics", speakerKeys: ["speakers.mohammadMaraaba"], type: "session" },
    { id: 6, time: "15:30 — 17:00", titleKey: "agenda.sessions.combinatorics", speakerKeys: ["speakers.mohammadMaraaba"], type: "session" },
    { id: 7, time: "17:00 — 18:30", titleKey: "agenda.dinner", speakerKeys: null, type: "break" },
  ],
  day6: [
    { id: 1, time: "08:00 — 08:30", titleKey: "agenda.breakfast", speakerKeys: null, type: "break" },
    { id: 2, time: "09:00 — 13:00", titleKey: "agenda.qualifiers", speakerKeys: null, type: "session" },
    { id: 3, time: "13:30 — 14:00", titleKey: "agenda.lunchOnly", speakerKeys: null, type: "break" },
    { id: 4, time: "14:00 — 15:00", titleKey: "agenda.departure", speakerKeys: null, type: "break" },
  ],
};

export const DAYS = Object.keys(AGENDA) as Day[];

/* ------------------------------------------------------------------ people */

export type PeopleGroup = "partners" | "speakers" | "trainers" | "supervisors";

export interface Person {
  nameKey: string;
  subtitleKey?: string;
  descKey: string;
  image: string;
}

export const PEOPLE: Record<PeopleGroup, Person[]> = {
  partners: [
    { nameKey: "partner.partner0.name", descKey: "partner.partner0.description", image: "/DrMaree.png" },
    { nameKey: "partner.partner1.name", descKey: "partner.partner1.description", image: "/DrAmmar.png" },
    { nameKey: "partner.partner2.name", descKey: "partner.partner2.description", image: "/DrShorook.png" },
  ],
  speakers: [
    { nameKey: "speaker.speaker0.name", subtitleKey: "speaker.speaker0.subtitle", descKey: "speaker.speaker0.description", image: "/DrOmer.png" },
    { nameKey: "speaker.speaker1.name", subtitleKey: "speaker.speaker1.subtitle", descKey: "speaker.speaker1.description", image: "/DrAhmed.png" },
    { nameKey: "speaker.speaker2.name", subtitleKey: "speaker.speaker2.subtitle", descKey: "speaker.speaker2.description", image: "/DrKhalil.png" },
  ],
  trainers: [
    { nameKey: "supervisors.supervisor0.name", subtitleKey: "supervisors.supervisor0.subtitle", descKey: "supervisors.supervisor0.description", image: "/DrRania.png" },
    { nameKey: "supervisors.supervisor2.name", subtitleKey: "supervisors.supervisor2.subtitle", descKey: "supervisors.supervisor2.description", image: "/DrAladam.png" },
    { nameKey: "supervisors.supervisor3.name", subtitleKey: "supervisors.supervisor3.subtitle", descKey: "supervisors.supervisor3.description", image: "/DrMaraabeh.png" },
  ],
  supervisors: [
    { nameKey: "supervisors.supervisor4.name", subtitleKey: "supervisors.supervisor4.subtitle", descKey: "supervisors.supervisor4.description", image: "/DrReham.png" },
    { nameKey: "supervisors.supervisor5.name", subtitleKey: "supervisors.supervisor5.subtitle", descKey: "supervisors.supervisor5.description", image: "/DrAfaf.png" },
    { nameKey: "supervisors.supervisor6.name", subtitleKey: "supervisors.supervisor6.subtitle", descKey: "supervisors.supervisor6.description", image: "/DrNadeen.png" },
    { nameKey: "supervisors.supervisor7.name", subtitleKey: "supervisors.supervisor7.subtitle", descKey: "supervisors.supervisor7.description", image: "/DrSalah.png" },
    { nameKey: "supervisors.supervisor8.name", subtitleKey: "supervisors.supervisor8.subtitle", descKey: "supervisors.supervisor8.description", image: "/DrRaeda.png" },
    { nameKey: "supervisors.supervisor9.name", subtitleKey: "supervisors.supervisor9.subtitle", descKey: "supervisors.supervisor9.description", image: "/DrLubna.png" },
    { nameKey: "supervisors.supervisor10.name", subtitleKey: "supervisors.supervisor10.subtitle", descKey: "supervisors.supervisor10.description", image: "/DrKamal.png" },
  ],
};

export const PEOPLE_GROUPS = Object.keys(PEOPLE) as PeopleGroup[];

/* ------------------------------------------------------------------ roster */

export interface CampStudent {
  id: number;
  image: string;
  /** Index into the `students.studentN.*` translation block. */
  key: string;
  /**
   * CSS `object-position` for the square portrait crop.
   *
   * Most of these are phone photos with the head near the top, so the default
   * of `top center` frames them well. A few are shot further back (or are
   * letterboxed), which puts the face below the crop — those get an explicit
   * focal point here rather than a magic number in the component.
   */
  focus?: string;
}

export const STUDENTS: CampStudent[] = [
  { id: 1, image: "/s4.jpg", key: "student0" },
  { id: 2, image: "/s14.jpg", key: "student1" },
  { id: 3, image: "/s42.jpg", key: "student2", focus: "center 32%" },
  { id: 4, image: "/s37.jpg", key: "student3" },
  { id: 5, image: "/s11.jpg", key: "student4" },
  { id: 6, image: "/s2.jpg", key: "student5" },
  { id: 7, image: "/s35.jpg", key: "student6" },
  { id: 8, image: "/s43.jpg", key: "student7", focus: "center 38%" },
  { id: 9, image: "/s13.jpg", key: "student8" },
  { id: 10, image: "/s41.jpg", key: "student9" },
  { id: 11, image: "/s15.jpg", key: "student10" },
  { id: 12, image: "/s16.jpg", key: "student11" },
  { id: 13, image: "/s29.jpg", key: "student12" },
  { id: 14, image: "/s19.jpg", key: "student13" },
  { id: 15, image: "/s22.jpg", key: "student14" },
  { id: 16, image: "/s27.jpg", key: "student15" },
  { id: 17, image: "/s8.jpg", key: "student16" },
  { id: 18, image: "/s26.jpg", key: "student17" },
  { id: 19, image: "/s40.jpg", key: "student18" },
  { id: 20, image: "/s12.jpg", key: "student19" },
  { id: 21, image: "/s18.jpg", key: "student20" },
  { id: 22, image: "/s3.jpg", key: "student21" },
  { id: 23, image: "/s31.jpg", key: "student22" },
  { id: 24, image: "/s32.jpg", key: "student23" },
  { id: 25, image: "/s10.jpg", key: "student24" },
  { id: 26, image: "/s24.jpg", key: "student25" },
  { id: 27, image: "/s6.jpg", key: "student26" },
  { id: 28, image: "/s47.jpg", key: "student27" },
  { id: 29, image: "/s44.jpg", key: "student28" },
  { id: 30, image: "/s49.jpg", key: "student29" },
  { id: 31, image: "/s23.jpg", key: "student30" },
  { id: 32, image: "/s33.jpg", key: "student31" },
  { id: 33, image: "/s45.jpg", key: "student32" },
  { id: 34, image: "/s9.jpg", key: "student33" },
  { id: 35, image: "/s7.jpg", key: "student34" },
  { id: 36, image: "/s28.jpg", key: "student35" },
  { id: 37, image: "/s34.jpg", key: "student36" },
  { id: 38, image: "/s5.jpg", key: "student37" },
  { id: 39, image: "/s1.jpg", key: "student38" },
  { id: 40, image: "/s46.jpg", key: "student39" },
  { id: 41, image: "/s36.jpg", key: "student40" },
  { id: 42, image: "/s38.jpg", key: "student41" },
  { id: 43, image: "/s21.jpg", key: "student42" },
  { id: 44, image: "/s25.jpg", key: "student43" },
  { id: 45, image: "/s48.jpg", key: "student44" },
  { id: 46, image: "/s17.jpg", key: "student45" },
  { id: 47, image: "/s39.jpg", key: "student46" },
  { id: 48, image: "/s20.jpg", key: "student47" },
  { id: 49, image: "/s30.jpg", key: "student48" },
];

/* ----------------------------------------------------------------- gallery */

export const CAMP_GALLERY: string[] = [
  "/1.png",
  ...[
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 4, 5,
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 34,
  ].map((n) => `/${n}.png`),
];
