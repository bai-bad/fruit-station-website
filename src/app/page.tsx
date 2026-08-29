import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDots,
  Racquet,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import EventCard from "@/components/EventCard";
import ProgramCard from "@/components/ProgramCard";
import RecurringEventCard from "@/components/RecurringEventCard";
import { homepageArchiveEvents, homepageRecurringEvent } from "@/data/events";
import { programs } from "@/data/programs";

const journey = [
  { english: "Learn", chinese: "教会", color: "yellow" },
  { english: "Practice", chinese: "勤练", color: "green" },
  { english: "Compete", chinese: "常赛", color: "coral" },
  { english: "Improve", chinese: "总结", color: "blue" },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <h1>
              <span className="hero-fruit">FRUIT</span>
              <span className="hero-station">STATION</span>
              <span className="hero-club">Badminton Club</span>
            </h1>
            <p className="hero-offer">Badminton <strong>Events &amp; Programs</strong><br />for Toronto&apos;s badminton community.</p>
            <div className="hero-actions">
              <Link className="button button-coral" href="/events">Explore Events <CalendarDots weight="bold" /></Link>
              <Link className="button button-cream" href="/programs">View Programs <Racquet weight="bold" /></Link>
            </div>
          </div>
          <div className="hero-art-wrap">
            <Image className="hero-art" src="/hero-fruit-club-warm.png" alt="A pineapple and watermelon mascot playing badminton together" fill priority sizes="(max-width: 900px) 92vw, 52vw" />
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="site-container">
          <div className="pillars-heading"><Sparkle weight="fill" aria-hidden="true" /><h2>What we do</h2><Sparkle weight="fill" aria-hidden="true" /></div>

          <div className="pillars-grid">
            <article className="pillar-card pillar-events">
              <div className="pillar-content">
                <div className="pillar-title"><span className="pillar-icon"><CalendarDots weight="fill" /></span><h3>EVENTS</h3></div>
                <p>Fruit Cup tournaments, club competitions, and social sessions for every level.</p>
              </div>
              <div className="pillar-art"><Image src="/feature-events-watercolor.png" alt="Watercolour badminton racket, shuttlecocks, and watermelon" fill sizes="(max-width: 820px) 92vw, 28vw" /></div>
            </article>

            <article className="pillar-card pillar-programs">
              <div className="pillar-content">
                <div className="pillar-title"><span className="pillar-icon"><Racquet weight="fill" /></span><h3>PROGRAMS</h3></div>
                <p>Private coaching, small-group training, and social play—choose the format that fits you.</p>
              </div>
              <div className="pillar-art"><Image src="/feature-programs-watercolor.png" alt="Watercolour badminton racket, shuttlecocks, and yellow bottle" fill sizes="(max-width: 820px) 92vw, 28vw" /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section events-section">
        <div className="site-container">
          <div className="section-heading">
            <div><p className="section-eyebrow">Play this week</p><h2>Events</h2></div>
            <Link className="brush-link" href="/events">Explore Events <ArrowRight weight="bold" /></Link>
          </div>
          <div className="event-grid event-preview-grid">
            {homepageRecurringEvent && <RecurringEventCard event={homepageRecurringEvent} compact />}
            {homepageArchiveEvents.map((event) => <EventCard key={event.id} event={event} compact />)}
          </div>
        </div>
      </section>

      <section className="section programs-section">
        <div className="site-container">
          <div className="section-heading">
            <div><p className="section-eyebrow">Coaching formats</p><h2>Choose your format.</h2></div>
            <Link className="brush-link" href="/programs">View Programs <ArrowRight weight="bold" /></Link>
          </div>
          <div className="program-grid program-grid-four">{programs.map((program) => <ProgramCard key={program.id} program={program} />)}</div>
        </div>
      </section>

      <section className="journey-section">
        <div className="site-container journey-wrap">
          <div className="journey-copy">
            <h2>Our<br />philosophy.</h2>
          </div>
          <div className="journey-track">
            {journey.map((item, index) => (
              <div className={`journey-step journey-${item.color}`} key={item.english}>
                <span className="journey-number">0{index + 1}</span><strong>{item.english}</strong><span lang="zh">{item.chinese}</span>
                {index < journey.length - 1 && <ArrowRight className="journey-arrow" weight="bold" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="club-life-section">
        <div className="site-container club-life-grid">
          <div className="club-photo-frame">
            <Image src="/post-mango-cup.jpg" alt="Fruit Station players together at a badminton club event" fill sizes="(max-width: 820px) 92vw, 58vw" />
            <span>Fruit Station in action</span>
          </div>
          <div className="club-life-copy">
            <p className="section-eyebrow">Club life</p>
            <h2>See you on court.</h2>
            <p>Meet the players and match-day moments behind Fruit Station.</p>
            <Link className="button button-coral" href="/contact">Join Us <ArrowRight weight="bold" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
