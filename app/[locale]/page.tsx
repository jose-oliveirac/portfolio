import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";


const palette = [
  { name: "background", className: "bg-background" },
  { name: "surface", className: "bg-surface" },
  { name: "line", className: "bg-line" },
  { name: "muted", className: "bg-muted" },
  { name: "foreground", className: "bg-foreground" },
  { name: "accent", className: "bg-accent" },
];

const stack = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git"];

export default function HomePage() {

  return (
    <main className="flex-1">
      
      <Hero />

      <About />

      <Experience />

      <Projects />

      <Section id="cores" title="Paleta">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {palette.map((color) => (
            <li key={color.name} className="rounded-xl border border-line bg-surface p-3">
              <div className={`h-16 rounded-lg border border-line ${color.className}`} />
              <p className="mt-3 font-mono text-sm text-muted">{color.name}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="componentes" title="Componentes">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <p className="mt-10 max-w-prose leading-relaxed text-muted">
          Texto corrido usa a cor <span className="text-foreground">muted</span> para o que é secundário e{" "}
          <a href="#cores" className="text-accent underline-offset-4 hover:underline">
            accent
          </a>{" "}
          só para o que é clicável.
        </p>
      </Section>
    </main>
  );
}
