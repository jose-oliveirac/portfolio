import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Starfield } from "@/components/ui/Starfield";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
const dict = await getDictionary()
return {
  title: dict.metadata.title,
  description: dict.metadata.description,
};

}

export async function generateStaticParams(){
  return [{locale:"pt"}, {locale:"en"}]

}

export default async function RootLayout({ children,  params }: LayoutProps<"/[locale]">) {
  const {locale} = await params ;
  return (
    <html
      lang={locale}
    className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Starfield />
        {children}
      </body>
    </html>
  );
}
