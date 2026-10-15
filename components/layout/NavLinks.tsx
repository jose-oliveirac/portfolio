"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  links: { href: string; label: string }[];
};

/**
 * Desktop section links. The link of the section currently in the middle of the
 * screen is highlighted ("scroll spy"), using an IntersectionObserver.
 */
export function NavLinks({ links }: NavLinksProps) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");

    // rootMargin shrinks the "viewport" to a thin band around the middle of the
    // screen: a section counts as active while it crosses that band.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center gap-8">
      {links.map((link) => {
        const isActive = link.href === active;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative text-sm transition-colors hover:text-foreground",
                // Small accent bar under the active link
                "after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300",
                isActive ? "text-foreground after:scale-x-100" : "text-muted",
              )}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
