import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore coaching, social badminton, and Fruit Cup club programs.",
};

export default function ProgramsPage() {
  return (
    <PageIntro
      eyebrow="Play your way"
      title="Programs"
      description="Coaching, social badminton, and the Fruit Cup Series are coming together here. Full schedules and program details will be added next."
    />
  );
}
