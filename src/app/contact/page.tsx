import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Fruit Station Badminton Club in Toronto.",
};

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Join the rally"
      title="Contact"
      description="Want to join a session, try coaching, or ask about the next event? Our community contact details and enquiry form will be added here next."
    />
  );
}
