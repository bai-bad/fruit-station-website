import Link from "next/link";
import { ArrowRight, CheckCircle, Racquet } from "@phosphor-icons/react/dist/ssr";
import type { CoachingProgram } from "@/data/programs";

type ProgramCardProps = {
  program: CoachingProgram;
  detailed?: boolean;
};

export default function ProgramCard({ program, detailed = false }: ProgramCardProps) {
  return (
    <article id={program.slug} className={`program-card program-${program.accent}${detailed ? " program-detailed" : ""}`}>
      <div className="program-card-top">
        <span className="program-format">{program.format}</span>
        <Racquet className="program-racquet" weight="fill" aria-hidden="true" />
      </div>
      <p className="program-label">Coaching format</p>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <div className="program-best-for"><CheckCircle weight="fill" /><span><small>Best for</small>{program.bestFor}</span></div>
      <Link className="card-link" href={`/programs#${program.slug}`} aria-label={`Learn more about ${program.title}`}>Learn More <ArrowRight weight="bold" /></Link>
    </article>
  );
}
