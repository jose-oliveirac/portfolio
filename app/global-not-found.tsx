import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Starfield } from "@/components/ui/Starfield";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 | José Henrique",
  description: "Página não encontrada · Page not found",
};

// This page skips the [locale] layout (and next-themes), so it applies the saved theme itself.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;

/** 404 for any unknown URL. We don't know the visitor's language here, so it speaks both. */
export default function GlobalNotFound() {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col items-center justify-center px-6 text-center">
        <Starfield />

        <p className="font-mono text-sm uppercase tracking-widest text-accent">Erro 404 · Error 404</p>
        <h1 className="mt-4 text-display font-semibold text-foreground">Perdido no espaço</h1>
        <p className="mt-2 text-xl text-muted sm:text-2xl">Lost in space</p>

        <p className="mt-8 max-w-md leading-relaxed text-muted">
          Esta página não existe ou mudou de lugar.
          <br />
          This page doesn&apos;t exist or has moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/pt"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
          >
            Voltar ao início
          </Link>
          <Link
            href="/en"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
