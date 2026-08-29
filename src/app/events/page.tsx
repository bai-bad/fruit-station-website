import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import EventPagination from "@/components/EventPagination";
import RecurringEventCard from "@/components/RecurringEventCard";
import { archivedEvents, pinnedRecurringEvents } from "@/data/events";

const EVENTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Events",
  description: "Join Fruit Station weekly social badminton and explore our Toronto event archive.",
};

type EventsPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const requestedPageValue = (await searchParams).page;
  const requestedPage = Array.isArray(requestedPageValue) ? requestedPageValue[0] : requestedPageValue;
  const parsedPage = requestedPage && /^\d+$/.test(requestedPage) ? Number(requestedPage) : 1;
  const totalPages = Math.max(1, Math.ceil(archivedEvents.length / EVENTS_PER_PAGE));
  const currentPage = Math.min(Math.max(parsedPage, 1), totalPages);
  const pageStart = (currentPage - 1) * EVENTS_PER_PAGE;
  const visibleEvents = archivedEvents.slice(pageStart, pageStart + EVENTS_PER_PAGE);
  const pageEnd = pageStart + visibleEvents.length;

  return (
    <main className="events-page">
      <section className="events-page-section recurring-events-section events-page-top" id="weekly-social">
        <div className="site-container">
          <div className="recurring-event-list">
            {pinnedRecurringEvents.map((event) => <RecurringEventCard key={event.id} event={event} headingLevel="h1" />)}
          </div>
        </div>
      </section>

      <section className="events-page-section archive-section" id="event-archive">
        <div className="site-container">
          <div className="page-section-heading">
            <div><p className="section-eyebrow">Past one-time events</p><h2>Fruit Station Event Archive</h2></div>
            <p>Showing {pageStart + 1}–{pageEnd} of {archivedEvents.length} events · newest first</p>
          </div>
          <div className="archive-grid">{visibleEvents.map((event) => <EventCard key={event.id} event={event} />)}</div>
          <EventPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
