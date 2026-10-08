"use client";
import {useState} from "react"


type MobileMenuProps = {
  links: { href: string; label: string }[];
  label: string;
};

/** Hamburger button + dropdown panel with the section links. Only visible below the md breakpoint. */
export function MobileMenu({ links, label }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={label}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="size-5"
        >
          {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {isOpen && (
      <nav
        id="mobile-menu"
        className="absolute inset-x-0 top-full border-y border-line bg-background shadow-lg"
      >
        <ul className="mx-auto flex w-full max-w-5xl flex-col px-4 py-2 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                onClick={closeMenu}
                href={link.href}
                  className="block py-3 text-base text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>)}

    </div>
  );
}
