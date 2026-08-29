import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDots,
  Racquet,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Toronto badminton community behind Fruit Station and our Learn, Practice, Compete, Review philosophy.",
};

const philosophy = [
  { name: "Learn", description: "Learn new skills.", accent: "yellow" },
  { name: "Practice", description: "Practice them regularly.", accent: "green" },
  { name: "Compete", description: "Compete in real games.", accent: "coral" },
  { name: "Review", description: "Review and keep improving.", accent: "orange" },
];

const communityMoments = [
  "Meet new players",
  "Find regular partners",
  "Play weekly",
  "Join community events",
  "Compete together",
  "Build friendships through badminton",
];

const pillars = [
  {
    title: "Programs",
    description: "Training and coaching that help players learn and improve.",
    icon: Racquet,
    accent: "yellow",
  },
  {
    title: "Events",
    description:
      "Tournaments, weekly socials and club events that give players more opportunities to play and compete.",
    icon: CalendarDots,
    accent: "coral",
  },
  {
    title: "Community",
    description:
      "A place to meet players, build connections and enjoy badminton together.",
    icon: UsersThree,
    accent: "green",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro-section" aria-labelledby="about-title">
        <div className="site-container about-intro-grid">
          <header className="about-heading">
            <p className="section-eyebrow">Toronto badminton community</p>
            <h1 id="about-title">About Fruit Station</h1>
            <p className="about-lead">
              Badminton is better when you have people to learn, play and compete with.
            </p>
          </header>

          <div className="about-story">
            <p>
              Fruit Station Badminton Club is a Toronto-based badminton community
              built around playing, learning, competing, and connecting with people.
            </p>
            <p>
              We believe badminton is more fun — and players improve faster — when
              they have a community around them. That&apos;s why Fruit Station brings
              together coaching, regular play, social sessions, community tournaments,
              and our signature Fruit Cup events.
            </p>
            <div className="about-story-note">
              <Sparkle weight="fill" aria-hidden="true" />
              <p>
                It&apos;s also about meeting people, finding regular partners, sharing
                games, joining events, and becoming part of an active badminton community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-philosophy-section" aria-labelledby="philosophy-title">
        <div className="site-container about-philosophy-layout">
          <header className="about-section-copy">
            <p className="section-eyebrow">Our philosophy</p>
            <h2 id="philosophy-title">A cycle for getting better.</h2>
            <p>
              Learn something new, put it into play, test it in real games, then
              reflect and begin again.
            </p>
          </header>

          <ol className="about-cycle" aria-label="Learn, practice, compete and review cycle">
            {philosophy.map((step, index) => (
              <li className={`about-cycle-step about-cycle-${step.accent}`} key={step.name}>
                <span className="about-cycle-number">0{index + 1}</span>
                <div>
                  <strong>{step.name}</strong>
                  <p>{step.description}</p>
                </div>
                {index < philosophy.length - 1 ? (
                  <ArrowDown className="about-cycle-arrow" weight="bold" aria-hidden="true" />
                ) : (
                  <span className="about-cycle-loop" aria-hidden="true">↺</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-community-section" aria-labelledby="community-title">
        <div className="site-container about-community-grid">
          <div className="about-section-copy">
            <p className="section-eyebrow">More than badminton</p>
            <h2 id="community-title">Come for a game. Find your people.</h2>
            <p>
              Whether you come for coaching, a weekly social, or your first tournament,
              Fruit Station creates more ways to play together, improve together, and
              enjoy badminton together.
            </p>
          </div>

          <ul className="about-community-list">
            {communityMoments.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">{index + 1}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-build-section" aria-labelledby="build-title">
        <div className="site-container">
          <header className="about-build-heading">
            <p className="section-eyebrow">What we build</p>
            <h2 id="build-title">Three parts of one club.</h2>
          </header>

          <div className="about-build-grid">
            {pillars.map(({ title, description, icon: Icon, accent }) => (
              <article className={`about-build-pillar about-build-${accent}`} key={title}>
                <span className="about-build-icon"><Icon weight="fill" aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section" aria-labelledby="about-cta-title">
        <div className="site-container about-cta">
          <div>
            <p className="section-eyebrow">Fruit Station Badminton Club</p>
            <h2 id="about-cta-title">Play together.<br />Grow together.</h2>
          </div>
          <div className="about-cta-actions">
            <Link className="button button-coral" href="/events">
              Explore Events <CalendarDots weight="bold" aria-hidden="true" />
            </Link>
            <Link className="button button-cream" href="/programs">
              View Programs <ArrowRight weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
