import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";
import { getDictionary } from "@/lib/dictionaries";

export async function Hero() {
  const dict = await getDictionary();

  return (
    <section className="border-b border-line">
      <Container className="py-28 sm:py-40">
        <h1 className="text-display font-semibold text-foreground">
          José Henrique
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          <span className="text-foreground">{dict.hero.role}</span>{" "}
          {dict.hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#projects">{dict.hero.ctaProjects}</ButtonLink>
          <ButtonLink
            href="/curriculo-jose-henrique-castro.pdf"
            download
            variant="secondary"
          >
            {dict.hero.ctaResume}
          </ButtonLink>
        </div>

        <ul className="mt-8 flex items-center gap-1">
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
