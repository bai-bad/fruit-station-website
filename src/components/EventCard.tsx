import Link from "next/link";

type EventCardProps = {
  name: string;
  date: string;
  location: string;
  description: string;
  accent: "lime" | "mint" | "peach";
  index: number;
};

export default function EventCard({ name, date, location, description, accent, index }: EventCardProps) {
  return (
    <article className="event-card">
      <div className={`event-card-visual event-card-visual-${accent}`}>
        <span className="event-index">0{index}</span>
        <span className="event-court-line" aria-hidden="true" />
        <span className="event-ball" aria-hidden="true" />
      </div>
      <div className="event-card-body">
        <div className="event-meta">
          <span>{date}</span>
          <span>{location}</span>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link className="card-link" href="/events" aria-label={`View details for ${name}`}>
          View Details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
