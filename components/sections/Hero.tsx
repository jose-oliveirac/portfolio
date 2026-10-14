import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";
import { getDictionary } from "@/lib/dictionaries";
import { HeroSky } from "./HeroSky";

const name = "José Henrique";

// Each letter starts 45ms after the previous one; the rest of the hero waits for the name
const letterDelay = 45;
const afterName = name.length * letterDelay + 200;

export async function Hero() {
  const dict = await getDictionary();

  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <HeroSky />

      <Container className="py-28 sm:py-40">
        {/* Screen readers get the whole name once; the animated letters are hidden from them */}
        <h1 aria-label={name} className="text-display font-semibold text-foreground">
          {Array.from(name).map((letter, index) => (
            <span
              key={index}
              aria-hidden
              className="inline-block animate-letter whitespace-pre"
              style={{ animationDelay: `${index * letterDelay}ms` }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p
          className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: `${afterName}ms` }}
        >
          <span className="text-foreground">{dict.hero.role}</span>{" "}
          {dict.hero.tagline}
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-wrap gap-3"
          style={{ animationDelay: `${afterName + 150}ms` }}
        >
          <ButtonLink href="#projects">{dict.hero.ctaProjects}</ButtonLink>
          <ButtonLink
            href="/curriculo-jose-henrique-castro.pdf"
            download
            variant="secondary"
          >
            {dict.hero.ctaResume}
          </ButtonLink>
        </div>

        <ul
          className="mt-8 flex animate-fade-up items-center gap-1"
          style={{ animationDelay: `${afterName + 300}ms` }}
        >
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex size-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-accent"
              >
                <SocialIcon name={social.label} className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
