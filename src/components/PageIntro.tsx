import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <main className="placeholder-page">
      <section className="placeholder-hero site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="text-link" href="/">
          Back to Home <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
