import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { stack } from "@/data/stack";
import { getDictionary } from "@/lib/dictionaries";

/** Photo, a short bio and the technologies José works with. */
export async function About() {
  const dict = await getDictionary();

  return (
    <Section id="about" title={dict.about.title}>
      <div className="grid gap-10 md:grid-cols-[16rem_1fr] md:gap-16">
        {/* Placeholder until the photo arrives (will become next/image) */}
        <div
          aria-hidden
          className="flex aspect-square w-48 items-center justify-center rounded-2xl border border-line bg-surface font-mono text-4xl text-muted md:w-full"
        >
          JH
        </div>

        <div>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-12 mb-4 font-mono text-sm uppercase tracking-wider text-muted">
            {dict.about.stackTitle}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
