import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Racquet,
  Sparkle,
  Target,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Fruit Station badminton coaching, group practice, skill clinics, and sparring sessions in Toronto.",
};

type ProgramService = {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  format: string;
  accent: "pineapple" | "watermelon" | "leaf" | "mango" | "mint";
};

const services: ProgramService[] = [
  {
    number: "01",
    slug: "one-on-one-coaching",
    name: "1-on-1 Coaching",
    tagline: "Personalized training built around you.",
    description:
      "Focused coaching based on your level, goals and areas for improvement. Ideal for players who want detailed feedback and faster individual progress.",
    bestFor: "Personalized development",
    format: "1 player + 1 coach",
    accent: "pineapple",
  },
  {
    number: "02",
    slug: "one-on-two-coaching",
    name: "1-on-2 Coaching",
    tagline: "Train together. Improve together.",
    description:
      "A semi-private session for two players who want structured coaching while practicing with a partner.",
    bestFor: "Friends, partners & doubles players",
    format: "2 players + 1 coach",
    accent: "watermelon",
  },
  {
    number: "03",
    slug: "group-practice",
    name: "Group Practice",
    tagline: "Learn. Practice. Improve together.",
    description:
      "Structured group training combining technique, movement, drills and game-based practice in a social environment.",
    bestFor: "Consistent weekly development",
    format: "Group",
    accent: "leaf",
  },
  {
    number: "04",
    slug: "skill-clinic",
    name: "Skill Clinic",
    tagline: "One session. One focus.",
    description:
      "Focused training sessions built around a specific topic such as footwork, net play, defense, doubles rotation or attacking patterns.",
    bestFor: "Developing a specific skill",
    format: "1v1",
    accent: "mango",
  },
  {
    number: "05",
    slug: "sparring-session",
    name: "Sparring Session",
    tagline: "Turn training into match performance.",
    description:
      "Game-based practice with an experienced player or coach to improve shot selection, positioning, rhythm and match decision-making.",
    bestFor: "Match preparation & tactical practice",
    format: "1–2 players",
    accent: "mint",
  },
];

function ProgramServiceCard({
  service,
  featured,
}: {
  service: ProgramService;
  featured: boolean;
}) {
  return (
    <article
      id={service.slug}
      className={`program-service-card program-service-${service.accent}${featured ? " program-service-featured" : ""}`}
    >
      <div className="program-service-topline">
        <span className="program-service-number">{service.number}</span>
        <Racquet weight="fill" aria-hidden="true" />
      </div>

      <div className="program-service-copy">
        <h3>{service.name}</h3>
        <p className="program-service-tagline">{service.tagline}</p>
        <p className="program-service-description">{service.description}</p>
      </div>

      <dl className="program-service-details">
        <div>
          <dt><Target weight="fill" aria-hidden="true" /> Best for</dt>
          <dd>{service.bestFor}</dd>
        </div>
        <div>
          <dt><UsersThree weight="fill" aria-hidden="true" /> Format</dt>
          <dd>{service.format}</dd>
        </div>
      </dl>

      <Link
        className="program-service-link"
        href="/contact"
        aria-label={`Learn more about ${service.name}`}
      >
        Learn More <ArrowRight weight="bold" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function ProgramsPage() {
  return (
    <main className="programs-page programs-services-page">
      <section className="programs-services-hero" aria-labelledby="programs-title">
        <div className="site-container programs-services-hero-layout">
          <div className="programs-services-hero-copy">
            <p className="programs-services-label">
              <Sparkle weight="fill" aria-hidden="true" /> Fruit Station training
            </p>
            <h1 id="programs-title">Ways to Improve</h1>
            <p className="programs-services-tagline">
              Train with purpose. Play with confidence.
            </p>
            <p className="programs-services-intro">
              From personalized coaching to game-based practice, choose the training
              format that fits your goals.
            </p>
          </div>

          <div className="programs-services-mark" aria-hidden="true">
            <span className="programs-mark-orbit"><Racquet weight="fill" /></span>
            <span className="programs-mark-dot programs-mark-yellow" />
            <span className="programs-mark-dot programs-mark-coral" />
            <span className="programs-mark-dot programs-mark-green" />
            <span className="programs-mark-dot programs-mark-orange" />
            <span className="programs-mark-dot programs-mark-mint" />
          </div>
        </div>
      </section>

      <section className="programs-services-section" aria-label="Five training formats">
        <div className="site-container">
          <p className="programs-services-kicker">5 Training Formats</p>

          <div className="program-services-grid">
            {services.map((service, index) => (
              <ProgramServiceCard
                key={service.slug}
                service={service}
                featured={index < 2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="programs-contact-section" aria-labelledby="programs-contact-title">
        <div className="site-container programs-contact-card">
          <div>
            <h2 id="programs-contact-title">Not sure which program is right for you?</h2>
            <p>
              Tell us your level and goals, and we&apos;ll help you find the right
              training option.
            </p>
          </div>
          <Link className="button button-green" href="/contact">
            Contact Us <ArrowRight weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
