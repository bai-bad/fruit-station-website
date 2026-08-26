import Link from "next/link";

type ProgramCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  accent: "lime" | "mint" | "peach";
};

export default function ProgramCard({ number, title, description, href, accent }: ProgramCardProps) {
  return (
    <article className={`program-card program-card-${accent}`}>
      <div className="program-card-top">
        <span className="program-number">{number}</span>
        <span className="program-shuttle" aria-hidden="true">◢</span>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link className="card-link" href={href} aria-label={`Learn more about ${title}`}>
        Learn more <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
