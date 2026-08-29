import Image from "next/image";
import {
  ArrowRight,
  CalendarDots,
  Clock,
  MapPin,
  Racquet,
  Tag,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import {
  formatEventDate,
  type ClubEvent,
  type EventSeries,
} from "@/data/events";

type EventCardProps = {
  event: ClubEvent;
  compact?: boolean;
};

const seriesLabels: Record<EventSeries, string> = {
  "kings-court": "Kings Court",
  "pineapple-cup": "Pineapple Cup",
  "see-you-after-school": "After School",
  "watermelon-cup": "Watermelon Cup",
  "pomegranate-cup": "Pomegranate Cup",
  "grapefruit-cup": "Grapefruit Cup",
  "mango-cup": "Mango Cup",
};

export default function EventCard({ event, compact = false }: EventCardProps) {
  const displayDate = formatEventDate(event.date);
  const hasParticipation = event.players !== null || event.teamSummary !== null;

  return (
    <article
      id={event.slug}
      data-detail-path={`/events/${event.slug}`}
      className={`event-card event-${event.accent} event-${event.status}${compact ? " event-compact" : ""}`}
    >
      <div className="event-image-wrap">
        {event.image ? (
          <Image className="event-image" src={event.image} alt={`${event.title} artwork from ${displayDate}`} fill sizes="(max-width: 720px) 92vw, 32vw" />
        ) : (
          <div className="event-image-placeholder" aria-hidden="true">
            <Racquet weight="fill" />
            <small>Fruit Station archive</small>
            <strong>{event.title}</strong>
            <span>{displayDate}</span>
          </div>
        )}
        <span className="event-phase-badge">{event.status === "past" ? "Past Event" : "Upcoming"}</span>
        <span className="event-type-badge"><Tag weight="fill" /> {seriesLabels[event.series]}</span>
      </div>
      <div className="event-card-body">
        <div className="event-title-row"><h3>{event.title}</h3></div>

        <div className="event-system">
          <Tag weight="fill" />
          <span><small>Competition system</small><strong>{event.system}</strong></span>
        </div>

        <div className="event-meta">
          <span><CalendarDots weight="fill" /> {displayDate}</span>
          <span><Clock weight="fill" /> {event.time}</span>
          <span><MapPin weight="fill" /> {event.location}</span>
        </div>

        {hasParticipation && (
          <div className="event-participation" aria-label="Participation">
            {event.players !== null && <span><UsersThree weight="fill" /><strong>{event.players}</strong> players</span>}
            {event.teamSummary !== null && <span><Racquet weight="fill" /> {event.teamSummary}</span>}
          </div>
        )}

        {!compact && (
          <div className="event-detail-preview" aria-label="Event detail page coming soon">
            View Event <ArrowRight weight="bold" />
          </div>
        )}
      </div>
    </article>
  );
}
