import Link from "next/link";
import { ArrowRight, CheckCircle, Racquet } from "@phosphor-icons/react/dist/ssr";
import type { ProgramAccent, ProgramService } from "@/data/programs";

type ProgramCardProps = {
  program: ProgramService;
};

const previewAccents: Record<ProgramAccent, "yellow" | "coral" | "orange" | "green"> = {
  pineapple: "yellow",
  watermelon: "coral",
  leaf: "green",
  mango: "orange",
  mint: "green",
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className={`program-card program-${previewAccents[program.accent]}`}>
      <Racquet className="program-racquet" weight="fill" aria-hidden="true" />
      <h3>{program.name}</h3>
      <p>{program.tagline}</p>
      <div className="program-best-for"><CheckCircle weight="fill" /><span><small>Best for</small>{program.bestFor}</span></div>
      <Link className="card-link" href={`/programs#${program.slug}`} aria-label={`Learn more about ${program.name}`}>Learn More <ArrowRight weight="bold" /></Link>
    </article>
  );
}
