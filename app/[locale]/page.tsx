import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

// Temporary design-system preview. Replaced by the real sections in step 6.
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
      <div className="border-b border-line">
        <Container className="py-28 sm:py-40">
          <div>
            <h1 className="text-display font-semibold text-foreground">José Henrique</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              <span className="text-foreground">Front-end Developer.</span> Construo interfaces rápidas,
              acessíveis e bem acabadas com React, Next.js e TypeScript.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="#componentes">Ver projetos</ButtonLink>
              <ButtonLink href="#componentes" variant="secondary">
                Baixar currículo
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>

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
