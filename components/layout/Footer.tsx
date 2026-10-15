import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";
import { getDictionary } from "@/lib/dictionaries";

/** Bottom bar: copyright, social links and a "back to top" link. */
export async function Footer() {
  const dict = await getDictionary();

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center gap-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {year} José Henrique. {dict.footer.rights}</p>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-surface hover:text-accent"
                >
                  <SocialIcon name={social.label} className="size-4" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-1 py-1.5 transition-colors hover:text-foreground"
          >
            {dict.footer.backToTop} ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
