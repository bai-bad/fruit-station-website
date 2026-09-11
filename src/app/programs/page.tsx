import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Racquet,
  Sparkle,
  Target,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { activePrograms, type ProgramService } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Fruit Station badminton coaching, group practice, skill clinics, and sparring sessions in Toronto.",
};

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
            {activePrograms.map((service, index) => (
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
