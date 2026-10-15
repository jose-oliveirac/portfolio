import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { getDictionary } from "@/lib/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

/** Sticky top bar: name, section links, language switcher and theme toggle. */
export async function Header() {
  const dict = await getDictionary();

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#experience", label: dict.nav.experience },
    { href: "#projects", label: dict.nav.projects },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <>
    {/* Keyboard users: the first Tab shows this link and jumps straight to the content */}
    <a
      href="#main"
      className="sr-only rounded-lg bg-accent text-sm font-medium text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:shadow-lg"
    >
      {dict.nav.skip}
    </a>

    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur-md">
      {/* Reading progress: fills as the page scrolls (pure CSS, see globals.css) */}
      <span
        aria-hidden
        className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent"
      />
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="#"
          className="font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          José Henrique
        </a>

        <nav className="hidden md:block">
          <NavLinks links={links} />
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle label={dict.nav.theme} />
          <MobileMenu links={links} label={dict.nav.menu} />
        </div>
      </Container>
    </header>
    </>
  );
}
