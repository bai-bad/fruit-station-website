export type CoachingProgram = {
  id: string;
  slug: string;
  title: string;
  format: "1v1" | "1v2" | "1v3" | "Group";
  description: string;
  bestFor: string;
  accent: "yellow" | "coral" | "orange" | "green";
};

export const programs: CoachingProgram[] = [
  {
    id: "private-coaching",
    slug: "private-coaching",
    title: "Private Coaching",
    format: "1v1",
    description: "One coach, one player, with every session shaped around your movement, technique, and goals.",
    bestFor: "Personalized technical development and focused individual improvement.",
    accent: "yellow",
  },
  {
    id: "semi-private-coaching",
    slug: "semi-private-coaching",
    title: "Semi-Private Coaching",
    format: "1v2",
    description: "One coach and two players training together with focused drills and shared feedback.",
    bestFor: "Partners or players of a similar level who want focused training together.",
    accent: "coral",
  },
  {
    id: "small-group-coaching",
    slug: "small-group-coaching",
    title: "Small Group Coaching",
    format: "1v3",
    description: "A compact training group with more interaction while preserving individual attention.",
    bestFor: "Players who learn through game-like drills and small-group energy.",
    accent: "orange",
  },
  {
    id: "group-class",
    slug: "group-class",
    title: "Group Class",
    format: "Group",
    description: "Structured badminton training for regular practice, skill development, and progression.",
    bestFor: "Players who want a consistent training rhythm and a supportive group environment.",
    accent: "green",
  },
];
