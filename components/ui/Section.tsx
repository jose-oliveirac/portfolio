import { Container } from "./Container";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

/** A page section with an anchor id (for the header links) and an accessible heading. */
export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <h2
          id={headingId}
          className="reveal mb-10 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
