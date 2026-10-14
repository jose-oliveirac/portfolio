import Image from "next/image";
import photo from "@/public/foto-jose-henrique.jpg";
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
        <Image
          src={photo}
          alt="José Henrique"
          sizes="(min-width: 768px) 256px, 192px"
          quality={90}
          placeholder="blur"
          className="aspect-square w-48 rounded-2xl border border-line object-cover md:w-full"
        />

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
