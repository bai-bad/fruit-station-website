import Link from "next/link";
import EventCard from "@/components/EventCard";
import ProgramCard from "@/components/ProgramCard";

const programs = [
  {
    number: "01",
    title: "Coaching",
    description: "Private and group badminton training for every stage of your game.",
    href: "/programs",
    accent: "lime" as const,
  },
  {
    number: "02",
    title: "Social Badminton",
    description: "Weekly social sessions built around good rallies and great people.",
    href: "/programs",
    accent: "mint" as const,
  },
  {
    number: "03",
    title: "Fruit Cup Series",
    description: "Friendly competitive tournaments and memorable club events.",
    href: "/programs",
    accent: "peach" as const,
  },
];

const events = [
  {
    name: "Pineapple Cup 🍍",
    date: "Coming this fall",
    location: "Toronto · Venue TBA",
    description: "A bright, friendly club tournament with competitive draws for multiple levels.",
    accent: "lime" as const,
  },
  {
    name: "Weekly Social Badminton",
    date: "Every week",
    location: "Toronto · Venue TBA",
    description: "Drop in, rotate partners, and enjoy quality games with the community.",
    accent: "mint" as const,
  },
  {
    name: "Watermelon Cup 🍉",
    date: "Date to be announced",
    location: "Toronto · Venue TBA",
    description: "A playful summer competition made for spirited rallies and new connections.",
    accent: "peach" as const,
  },
];

const philosophy = [
  { step: "01", english: "Learn", chinese: "教会" },
  { step: "02", english: "Practice", chinese: "勤练" },
  { step: "03", english: "Compete", chinese: "常赛" },
  { step: "04", english: "Improve", chinese: "总结" },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="hero-grid site-container">
          <div className="hero-copy">
            <p className="eyebrow">Toronto badminton community</p>
            <h1 className="hero-title">
              <span>FRUIT STATION</span>
              <span className="hero-title-accent">BADMINTON CLUB</span>
            </h1>
            <p className="hero-subtitle">Learn · Practice · Compete · Improve</p>
            <p className="hero-description">
              A welcoming place to build your game, find your people, and keep
              moving forward—one rally at a time.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/events">
                View Events <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-secondary" href="/contact">
                Join Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-court">
              <span className="court-line court-line-one" />
              <span className="court-line court-line-two" />
              <span className="court-net" />
              <span className="shuttle shuttle-one">◢</span>
              <span className="shuttle shuttle-two">◢</span>
              <div className="hero-badge">
                <span className="hero-badge-small">EST.</span>
                <strong>TORONTO</strong>
                <span className="hero-badge-small">PLAY · GROW · BELONG</span>
              </div>
            </div>
            <div className="fruit-orbit fruit-orbit-orange" />
            <div className="fruit-orbit fruit-orbit-green" />
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="intro-grid site-container">
          <div>
            <p className="section-kicker">More than court time</p>
            <h2 className="section-title">A badminton club built for progress—and people.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Fruit Station is a Toronto badminton community where players can
              learn the fundamentals, practice consistently, compete with
              purpose, and turn every game into something to improve from.
            </p>
            <div className="intro-tags" aria-label="Club qualities">
              <span>All levels welcome</span>
              <span>Toronto based</span>
              <span>Community first</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section programs-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Find your way to play</p>
              <h2 className="section-title">Programs for every kind of player.</h2>
            </div>
            <Link className="text-link" href="/programs">
              View Programs <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="program-grid">
            {programs.map((program) => <ProgramCard key={program.title} {...program} />)}
          </div>
        </div>
      </section>

      <section className="section events-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Meet us on court</p>
              <h2 className="section-title">Upcoming at Fruit Station.</h2>
            </div>
            <Link className="text-link" href="/events">
              All Events <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="event-grid">
            {events.map((event, index) => (
              <EventCard key={event.name} {...event} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section new-player-section">
        <div className="new-player-card site-container">
          <div className="new-player-copy">
            <p className="section-kicker">Your first rally starts here</p>
            <h2 className="section-title">New to Fruit Station?</h2>
            <p>
              Start wherever feels right. Join a relaxed social session, try
              coaching to build your skills, or jump into a club event and meet
              the community.
            </p>
            <Link className="button button-primary" href="/contact">
              Join the Community <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ol className="new-player-steps">
            <li><span>01</span><strong>Join a social session</strong></li>
            <li><span>02</span><strong>Try coaching</strong></li>
            <li><span>03</span><strong>Play a club event</strong></li>
          </ol>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="site-container">
          <div className="philosophy-heading">
            <p className="section-kicker section-kicker-light">The Fruit Station way</p>
            <h2>Keep the rally going.</h2>
          </div>
          <div className="philosophy-track">
            {philosophy.map((item, index) => (
              <div className="philosophy-step" key={item.english}>
                <span className="philosophy-number">{item.step}</span>
                <strong>{item.english}</strong>
                <span className="philosophy-chinese" lang="zh">{item.chinese}</span>
                {index < philosophy.length - 1 && <span className="philosophy-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
          <p className="philosophy-note">
            教会 → 勤练 → 常赛 → 总结 · Learn → Practice → Compete → Improve
          </p>
        </div>
      </section>
    </main>
  );
}
