import Image from "next/image";
import { locale } from "next/root-params";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects, type Project } from "@/data/projects";
import { getDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

type Labels = { code: string; live: string };

/** "Código ↗" / "Ao vivo ↗" links. Renders nothing if the project has neither. */
function ProjectLinks({ project, labels }: { project: Project; labels: Labels }) {
  if (!project.repo && !project.live) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline"
        >
          {labels.live} ↗
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-foreground"
        >
          {labels.code} ↗
        </a>
      )}
    </div>
  );
}

/** Project name, plus an "Em andamento" badge when the project is still being built. */
function ProjectTitle({ project, size, inProgressLabel }: { project: Project; size: string; inProgressLabel: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <h3 className={cn("font-semibold text-foreground", size)}>{project.title}</h3>
      {project.inProgress && (
        <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs text-accent-hover">
          {inProgressLabel}
        </span>
      )}
    </div>
  );
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech}>
          <Tag>{tech}</Tag>
        </li>
      ))}
    </ul>
  );
}

/** Wide featured cards (with screenshot, alternating sides) followed by a grid of the other projects. */
export async function Projects() {
  const dict = await getDictionary();
  const lang = (await locale()) === "en" ? "en" : "pt";
  const labels = { code: dict.projects.code, live: dict.projects.live };

  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" title={dict.projects.title}>
      <div className="space-y-6">
        {featured.map((project, index) => (
          // The reveal (scroll) and the tilt (mouse) both use transform, so they live on different elements
          <div key={project.title} className="reveal">
          <TiltCard
            className={cn(
              "grid overflow-hidden rounded-2xl border border-line bg-surface hover:border-accent/50",
              // Every second featured card puts the screenshot on the right
              index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr]",
            )}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                // The image column is ~60% of a 1024px container; the browser doubles it on sharp screens
                sizes="(min-width: 1024px) 620px, (min-width: 768px) 60vw, 100vw"
                quality={90}
                className={cn(
                  // Crop from the bottom-right, never the top-left where logos and headlines live
                  "h-full w-full border-b border-line object-cover object-left-top md:border-b-0",
                  // Slow zoom on the screenshot while the card is hovered, anchored to the same corner
                  "origin-top-left transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                  index % 2 === 0 ? "md:border-r" : "md:order-last md:border-l",
                )}
              />
            )}
            <div className="flex flex-col p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {dict.projects.featured}
              </p>
              <div className="mt-3">
                <ProjectTitle project={project} size="text-2xl" inProgressLabel={dict.projects.inProgress} />
              </div>
              <p className="mt-3 leading-relaxed text-muted">{project.description[lang]}</p>
              <StackTags stack={project.stack} />
              <ProjectLinks project={project} labels={labels} />
            </div>
          </TiltCard>
          </div>
        ))}

        <ul className={cn("grid gap-6", others.length > 1 && "sm:grid-cols-2")}>
          {others.map((project) => (
            <li key={project.title} className="reveal">
              <TiltCard className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 hover:border-accent/50">
                <ProjectTitle project={project} size="text-xl" inProgressLabel={dict.projects.inProgress} />
                <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description[lang]}</p>
                <StackTags stack={project.stack} />
                <ProjectLinks project={project} labels={labels} />
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
