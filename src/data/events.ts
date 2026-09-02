export type EventStatus = "upcoming" | "past";

export type RecurringEventStatus = "recurring";

export type EventSeries =
  | "kings-court"
  | "pineapple-cup"
  | "see-you-after-school"
  | "watermelon-cup"
  | "pomegranate-cup"
  | "grapefruit-cup"
  | "mango-cup";

export type EventResult = {
  champion?: string;
  runnerUp?: string;
  scores?: string[];
};

export type EventDraw = {
  label: string;
  url: string;
};

export type EventStats = {
  matchCount?: number;
};

export type ClubEvent = {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  players: number | null;
  teamSummary: string | null;
  system: string;
  series: EventSeries;
  results: EventResult | null;
  draw: EventDraw | null;
  photos: readonly string[];
  stats: EventStats | null;
  image?: string;
  accent: "yellow" | "coral" | "orange" | "green";
};

export type RecurringClubEvent = {
  id: string;
  slug: string;
  title: string;
  time: string;
  location: string;
  type: "social";
  status: RecurringEventStatus;
  recurring: true;
  recurrenceLabel: string;
  pinned: true;
  image?: string;
  accent: "green";
};

export const recurringEvents: RecurringClubEvent[] = [
  {
    id: "weekly-social-badminton",
    slug: "weekly-social-badminton",
    title: "Weekly Social Badminton",
    time: "9:00 PM – 12:00 AM",
    location: "Royal Badminton Club Etobicoke",
    type: "social",
    status: "recurring",
    recurring: true,
    recurrenceLabel: "Every Thursday",
    pinned: true,
    image: "/weekly-social-badminton.png",
    accent: "green",
  },
];

const sharedEventFields = {
  time: "9:30 PM – 11:30 PM",
  status: "past" as const,
  results: null,
  draw: null,
  photos: [] as const,
  stats: null,
};

const eventCoverImages: Record<EventSeries, string> = {
  "kings-court": "/images/events/covers/kings-court.png",
  "pineapple-cup": "/images/events/covers/pineapple-cup.png",
  "see-you-after-school": "/images/events/covers/after-school.png",
  "watermelon-cup": "/images/events/covers/watermelon-cup.png",
  "pomegranate-cup": "/images/events/covers/pomegranate-cup.png",
  "grapefruit-cup": "/images/events/covers/grapefruit-cup.png",
  "mango-cup": "/images/events/covers/mango-cup.png",
};

const eventHistory: ClubEvent[] = [
  {
    ...sharedEventFields,
    id: "kings-court-night-2026-01-01",
    slug: "kings-court-night-2026-01-01",
    title: "Kings Court Night",
    date: "2026-01-01",
    location: "Can Badminton Academy",
    players: null,
    teamSummary: null,
    system: "Kings Court System",
    series: "kings-court",
    accent: "green",
  },
  {
    ...sharedEventFields,
    id: "kings-court-night-2026-01-08",
    slug: "kings-court-night-2026-01-08",
    title: "Kings Court Night",
    date: "2026-01-08",
    location: "Can Badminton Academy",
    players: null,
    teamSummary: null,
    system: "Kings Court System",
    series: "kings-court",
    accent: "green",
  },
  {
    ...sharedEventFields,
    id: "kings-court-night-2026-01-15",
    slug: "kings-court-night-2026-01-15",
    title: "Kings Court Night",
    date: "2026-01-15",
    location: "Can Badminton Academy",
    players: null,
    teamSummary: null,
    system: "Kings Court System",
    series: "kings-court",
    accent: "green",
  },
  {
    ...sharedEventFields,
    id: "pineapple-cup-2026-01-29",
    slug: "pineapple-cup-2026-01-29",
    title: "Pineapple Cup",
    date: "2026-01-29",
    location: "Can Badminton Academy",
    players: 24,
    teamSummary: "12 Doubles Pairs",
    system: "Swiss Bracket + Elimination",
    series: "pineapple-cup",
    accent: "yellow",
  },
  {
    ...sharedEventFields,
    id: "see-you-after-school-2026-02-12",
    slug: "see-you-after-school-2026-02-12",
    title: "SEE YOU AFTER SCHOOL",
    date: "2026-02-12",
    location: "Can Badminton Academy",
    players: 24,
    teamSummary: "12 Doubles Pairs",
    system: "6 Matchups",
    series: "see-you-after-school",
    accent: "orange",
  },
  {
    ...sharedEventFields,
    id: "pineapple-cup-2026-02-26",
    slug: "pineapple-cup-2026-02-26",
    title: "Pineapple Cup",
    date: "2026-02-26",
    location: "Can Badminton Academy",
    players: 32,
    teamSummary: "16 Doubles Pairs",
    system: "Swiss Bracket + Elimination",
    series: "pineapple-cup",
    accent: "yellow",
  },
  {
    ...sharedEventFields,
    id: "see-you-after-school-2026-03-05",
    slug: "see-you-after-school-2026-03-05",
    title: "SEE YOU AFTER SCHOOL",
    date: "2026-03-05",
    location: "Can Badminton Academy",
    players: 28,
    teamSummary: "14 Doubles Pairs",
    system: "7 Matchups",
    series: "see-you-after-school",
    accent: "orange",
  },
  {
    ...sharedEventFields,
    id: "watermelon-cup-2026-03-12",
    slug: "watermelon-cup-2026-03-12",
    title: "Watermelon Cup",
    date: "2026-03-12",
    location: "Can Badminton Academy",
    players: 28,
    teamSummary: "14 Doubles Pairs",
    system: "Partial Round Robin + Elimination",
    series: "watermelon-cup",
    accent: "coral",
  },
  {
    ...sharedEventFields,
    id: "see-you-after-school-2026-03-19",
    slug: "see-you-after-school-2026-03-19",
    title: "SEE YOU AFTER SCHOOL",
    date: "2026-03-19",
    location: "Can Badminton Academy",
    players: 44,
    teamSummary: "22 Doubles Pairs",
    system: "11 Matchups",
    series: "see-you-after-school",
    accent: "orange",
  },
  {
    ...sharedEventFields,
    id: "pineapple-cup-2026-04-02",
    slug: "pineapple-cup-2026-04-02",
    title: "Pineapple Cup",
    date: "2026-04-02",
    location: "Can Badminton Academy",
    players: 32,
    teamSummary: "16 Doubles Pairs",
    system: "Swiss Bracket + Elimination",
    series: "pineapple-cup",
    accent: "yellow",
  },
  {
    ...sharedEventFields,
    id: "watermelon-cup-2026-04-09",
    slug: "watermelon-cup-2026-04-09",
    title: "Watermelon Cup",
    date: "2026-04-09",
    location: "Can Badminton Academy",
    players: 28,
    teamSummary: "14 Doubles Pairs",
    system: "Partial Round Robin + Elimination",
    series: "watermelon-cup",
    accent: "coral",
  },
  {
    ...sharedEventFields,
    id: "pomegranate-cup-100-point-2026-04-16",
    slug: "pomegranate-cup-100-point-2026-04-16",
    title: "Pomegranate Cup — 100 Point",
    date: "2026-04-16",
    location: "Can Badminton Academy",
    players: 28,
    teamSummary: "4 Teams · 7 Players Per Team",
    system: "Race to 100 Points",
    series: "pomegranate-cup",
    accent: "coral",
  },
  {
    ...sharedEventFields,
    id: "grapefruit-cup-100-point-2026-07-09",
    slug: "grapefruit-cup-100-point-2026-07-09",
    title: "Grapefruit Cup — 100 Point",
    date: "2026-07-09",
    location: "Royal Badminton Club Etobicoke",
    players: null,
    teamSummary: "4 Teams · 7 Players Per Team",
    system: "Race to 100 Points",
    series: "grapefruit-cup",
    accent: "coral",
  },
  {
    ...sharedEventFields,
    id: "mango-cup-100-point-2026-07-23",
    slug: "mango-cup-100-point-2026-07-23",
    title: "Mango Cup — 100 Point",
    date: "2026-07-23",
    location: "Royal Badminton Club Etobicoke",
    players: 28,
    teamSummary: "4 Teams · 7 Players Per Team",
    system: "Team Match — 10 Games",
    series: "mango-cup",
    accent: "orange",
  },
  {
    ...sharedEventFields,
    id: "pineapple-cup-2026-08-13",
    slug: "pineapple-cup-2026-08-13",
    title: "Pineapple Cup",
    date: "2026-08-13",
    location: "Royal Badminton Club Etobicoke",
    players: 32,
    teamSummary: "16 Doubles Pairs",
    system: "Swiss Bracket + Elimination",
    series: "pineapple-cup",
    accent: "yellow",
  },
];

export const events = eventHistory
  .map((event) => ({ ...event, image: eventCoverImages[event.series] }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const upcomingEvents = events.filter((event) => event.status === "upcoming");
export const archivedEvents = events.filter((event) => event.status === "past");
export const pinnedRecurringEvents = recurringEvents.filter((event) => event.pinned);
export const homepageRecurringEvent = pinnedRecurringEvents[0];
export const homepageArchiveEvents = archivedEvents.slice(0, 2);

export function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
