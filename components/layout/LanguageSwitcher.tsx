import Link from "next/link";
import { locale } from "next/root-params";

/** Links to the same page in the other language: on /pt it shows "EN", on /en it shows "PT". */
export async function LanguageSwitcher() {
  const current = await locale();
  const other = current === 'pt' ? 'en' : 'pt';

  return (
    <Link
      href={`/${other}`} 
      className="inline-flex h-10 items-center justify-center rounded-lg border border-line px-3 font-mono text-sm uppercase text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {other}
    </Link>
  );
}
