import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the community and philosophy behind Fruit Station Badminton Club.",
};

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="Our community"
      title="About Fruit Station"
      description="We are a Toronto badminton community built around learning well, practicing often, competing with purpose, and improving together. Our full story is coming soon."
    />
  );
}
