"use client";

import { useTheme } from "next-themes";

/** Switches between dark and light. `label` comes from the dictionary (client components cannot read it). */
export function ThemeToggle({ label }: { label: string }) {
  const {resolvedTheme , setTheme} = useTheme();

  const toggleTheme = () => {

    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark' ) ;
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {/* Sun: shown in dark mode (click to go light) */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        className="hidden size-5 dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Moon: shown in light mode (click to go dark) */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 dark:hidden"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
