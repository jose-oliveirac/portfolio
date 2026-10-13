import Image from "next/image";
import { locale } from "next/root-params";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { projects, type Project } from "@/data/projects";
import { getDictionary } from "@/lib/dictionaries";

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

/** A wide featured card (with screenshot) followed by a grid of the other projects. */
export async function Projects() {
  const dict = await getDictionary();
  const lang = (await locale()) === "en" ? "en" : "pt";
  const labels = { code: dict.projects.code, live: dict.projects.live };

  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" title={dict.projects.title}>
      <div className="space-y-6">
        {featured.map((project) => (
          <article
            key={project.title}
            className="grid overflow-hidden rounded-2xl border border-line bg-surface md:grid-cols-[3fr_2fr]"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                sizes="(min-width: 768px) 600px, 100vw"
                className="h-full w-full border-b border-line object-cover object-top md:border-r md:border-b-0"
              />
            )}
            <div className="flex flex-col p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {dict.projects.featured}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{project.description[lang]}</p>
              <StackTags stack={project.stack} />
              <ProjectLinks project={project} labels={labels} />
            </div>
          </article>
        ))}

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <li key={project.title}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description[lang]}</p>
                <StackTags stack={project.stack} />
                <ProjectLinks project={project} labels={labels} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
