import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Section } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socials } from "@/data/socials";
import { getDictionary } from "@/lib/dictionaries";

const email = "jhenriquedevelop@gmail.com";

/** Short invitation, the email (with a copy button) and the social links. */
export async function Contact() {
  const dict = await getDictionary();

  return (
    <Section id="contact" title={dict.contact.title}>
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
        <p className="max-w-prose text-lg leading-relaxed text-muted">{dict.contact.text}</p>

        <a
          href={`mailto:${email}`}
          className="mt-6 inline-block break-all text-xl font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline sm:text-2xl"
        >
          {email}
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CopyEmailButton
            email={email}
            label={dict.contact.copy}
            copiedLabel={dict.contact.copied}
          />

          <ul className="flex items-center gap-1">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:bg-background hover:text-accent"
                >
                  <SocialIcon name={social.label} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
