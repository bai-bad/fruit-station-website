import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Events",
  description: "See upcoming Fruit Station badminton socials and tournaments in Toronto.",
};

export default function EventsPage() {
  return (
    <PageIntro
      eyebrow="See you on court"
      title="Events"
      description="Upcoming weekly socials and Fruit Cup tournaments will live here. Dates, locations, and registration details are coming soon."
    />
  );
}
