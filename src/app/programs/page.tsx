import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, CheckCircle, Racquet } from "@phosphor-icons/react/dist/ssr";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description: "Compare Fruit Station private, semi-private, small-group, and group badminton coaching in Toronto.",
};

export default function ProgramsPage() {
  return (
    <main className="programs-page">
      <section className="inner-page-hero programs-page-hero">
        <div className="site-container inner-page-hero-grid">
          <div>
            <p className="section-eyebrow">Coaching at Fruit Station</p>
            <h1>TRAIN<br />YOUR WAY.</h1>
            <p>Choose the coaching format that gives you the right balance of individual feedback, partner work, and group energy.</p>
            <Link className="button button-coral" href="#choose-program">Compare Programs <ArrowDown weight="bold" /></Link>
          </div>
          <div className="format-orbit" aria-label="Available coaching formats">
            <span>1v1</span><span>1v2</span><span>1v3</span><span>Group</span><Racquet weight="fill" />
          </div>
        </div>
      </section>

      <section className="programs-page-section" id="choose-program">
        <div className="site-container">
          <div className="page-section-heading programs-intro-heading">
            <div><p className="section-eyebrow">Which format is right for me?</p><h2>Four focused ways to improve.</h2></div>
            <p>Start with the amount of coach attention and training setting you prefer. Every format supports steady technical development.</p>
          </div>
          <div className="program-page-grid">{programs.map((program) => <ProgramCard key={program.id} program={program} detailed />)}</div>
        </div>
      </section>

      <section className="program-choice-section">
        <div className="site-container program-choice-card">
          <div><p className="section-eyebrow">Still deciding?</p><h2>We&apos;ll help you find the right court.</h2></div>
          <ul>
            <li><CheckCircle weight="fill" /> Tell us your current level</li>
            <li><CheckCircle weight="fill" /> Share your training goals</li>
            <li><CheckCircle weight="fill" /> Choose individual or group energy</li>
          </ul>
          <Link className="button button-green" href="/contact">Ask About Coaching <Racquet weight="bold" /></Link>
        </div>
      </section>
    </main>
  );
}
