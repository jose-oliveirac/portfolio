import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Starfield } from "@/components/ui/Starfield";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { siteUrl } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary();

  return {
    // Base for every relative URL below (and for the share image)
    metadataBase: new URL(siteUrl),
    title: dict.metadata.title,
    description: dict.metadata.description,
    // Tells Google that /pt and /en are the same page in two languages, not duplicates
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en", "x-default": "/en" },
    },
  };
}

// Only /pt and /en exist; any other first segment (e.g. /fr) is a 404
export const dynamicParams = false;

export async function generateStaticParams(){
  return [{locale:"pt"}, {locale:"en"}]

}

export default async function RootLayout({ children,  params }: LayoutProps<"/[locale]">) {
  const {locale} = await params ;
  return (
    <html
      lang={locale}
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

        <Starfield />
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
