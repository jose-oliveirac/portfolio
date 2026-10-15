import { locale } from "next/root-params";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { experiences } from "@/data/experience";
import { getDictionary } from "@/lib/dictionaries";

/** Turns "2025-08" into "ago. de 2025" (pt) or "Aug 2025" (en). */
function formatMonth(value: string, lang: "pt" | "en") {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1));
}

/** Timeline of jobs and internships, newest first. */
export async function Experience() {
  const dict = await getDictionary();
  const lang = (await locale()) === "en" ? "en" : "pt";

  return (
    <Section id="experience" title={dict.experience.title}>
      <div className="relative">
        {/* Accent line drawn on top of the gray one as you scroll */}
        <span
          aria-hidden
          className="timeline-progress absolute inset-y-0 left-0 w-px origin-top bg-accent"
        />
        <ol className="space-y-12 border-l border-line pl-8">
          {experiences.map((job) => (
            <li key={job.company + job.start} className="reveal relative">
              {/* Dot on the timeline line */}
              <span
                aria-hidden
                className="absolute top-2 -left-[2.3rem] size-3 rounded-full border-2 border-accent bg-background"
              />

              <p className="font-mono text-sm text-muted">
                {formatMonth(job.start, lang)} —{" "}
                {job.end ? formatMonth(job.end, lang) : dict.experience.present}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">{job.role[lang]}</h3>
              <p className="mt-1 text-muted">
                <span className="text-accent">{job.company}</span> · {job.location}
              </p>

              <ul className="mt-5 max-w-prose list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line">
                {job.achievements.map((item) => (
                  <li key={item.pt}>{item[lang]}</li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
