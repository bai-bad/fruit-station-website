import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDots,
  Clock,
  MapPin,
  PushPin,
  Racquet,
  Tag,
} from "@phosphor-icons/react/dist/ssr";
import type { RecurringClubEvent } from "@/data/events";

type RecurringEventCardProps = {
  event: RecurringClubEvent;
  compact?: boolean;
  headingLevel?: "h1" | "h3";
};

export default function RecurringEventCard({ event, compact = false, headingLevel = "h3" }: RecurringEventCardProps) {
  return (
    <article
      id={event.slug}
      className={`recurring-event-card${compact ? " recurring-event-compact" : ""}`}
    >
      <div className={`recurring-event-visual${event.image ? " recurring-event-cover-visual" : ""}`}>
        {event.image && (
          <Image
            className="recurring-cover-image"
            src={event.image}
            alt="Fruit-themed weekly badminton calendar with a racket, shuttlecocks, and playful fruit characters"
            fill
            preload
            sizes="(max-width: 860px) calc(100vw - 32px), 42vw"
          />
        )}
        <span className="recurring-pin"><PushPin weight="fill" /> Pinned weekly</span>
        <span className="recurring-day-badge">{event.recurrenceLabel}</span>
        {!event.image && (
          <>
            <div className="recurring-rally-mark" aria-hidden="true">
              <span><Racquet weight="fill" /></span>
              <CalendarDots weight="fill" />
            </div>
            <p>Fruit Station weekly social</p>
          </>
        )}
      </div>

      <div className="recurring-event-body">
        <p className="section-eyebrow">Ongoing social event</p>
        {headingLevel === "h1" ? <h1>{event.title}</h1> : <h3>{event.title}</h3>}
        <div className="recurring-event-meta">
          <span><CalendarDots weight="fill" /><strong>{event.recurrenceLabel}</strong></span>
          <span><Clock weight="fill" />{event.time}</span>
          <span><MapPin weight="fill" />{event.location}</span>
        </div>
        <div className="recurring-event-footer">
          <span className="recurring-type"><Tag weight="fill" /> Social</span>
          <Link className="button button-coral" href="/contact">
            Join Weekly Social <ArrowRight weight="bold" />
          </Link>
        </div>
      </div>
    </article>
  );
}
