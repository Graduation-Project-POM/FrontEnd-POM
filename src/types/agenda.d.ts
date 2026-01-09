export interface AgendaItem {
  id: number;
  time: string;
  title: string;
  speakers: string[] | null;
  type: "break" | "session";
}

export type Day = "day1" | "day2" | "day3" | "day4" | "day5" | "day6";
