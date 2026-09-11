export type ProgramAccent = "pineapple" | "watermelon" | "leaf" | "mango" | "mint";

export type ProgramService = {
  id: string;
  number: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  format: string;
  accent: ProgramAccent;
  status: "active" | "inactive";
};

export const programs: readonly ProgramService[] = [
  {
    id: "one-on-one-coaching",
    number: "01",
    slug: "one-on-one-coaching",
    name: "1-on-1 Coaching",
    tagline: "Personalized training built around you.",
    description:
      "Focused coaching based on your level, goals and areas for improvement. Ideal for players who want detailed feedback and faster individual progress.",
    bestFor: "Personalized development",
    format: "1 player + 1 coach",
    accent: "pineapple",
    status: "active",
  },
  {
    id: "one-on-two-coaching",
    number: "02",
    slug: "one-on-two-coaching",
    name: "1-on-2 Coaching",
    tagline: "Train together. Improve together.",
    description:
      "A semi-private session for two players who want structured coaching while practicing with a partner.",
    bestFor: "Friends, partners & doubles players",
    format: "2 players + 1 coach",
    accent: "watermelon",
    status: "active",
  },
  {
    id: "group-practice",
    number: "03",
    slug: "group-practice",
    name: "Group Practice",
    tagline: "Learn. Practice. Improve together.",
    description:
      "Structured group training combining technique, movement, drills and game-based practice in a social environment.",
    bestFor: "Consistent weekly development",
    format: "Group",
    accent: "leaf",
    status: "active",
  },
  {
    id: "skill-clinic",
    number: "04",
    slug: "skill-clinic",
    name: "Skill Clinic",
    tagline: "One session. One focus.",
    description:
      "Focused training sessions built around a specific topic such as footwork, net play, defense, doubles rotation or attacking patterns.",
    bestFor: "Developing a specific skill",
    format: "1v1",
    accent: "mango",
    status: "active",
  },
  {
    id: "sparring-session",
    number: "05",
    slug: "sparring-session",
    name: "Sparring Session",
    tagline: "Turn training into match performance.",
    description:
      "Game-based practice with an experienced player or coach to improve shot selection, positioning, rhythm and match decision-making.",
    bestFor: "Match preparation & tactical practice",
    format: "1–2 players",
    accent: "mint",
    status: "active",
  },
];

export const activePrograms = programs.filter((program) => program.status === "active");
