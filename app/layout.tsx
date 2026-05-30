import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ConceptLock } from "@/components/concept-lock";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://watch-minder.com"),
  title: {
    default: "WATCH-MINDER — For those who live in motion",
    template: "%s — WATCH-MINDER",
  },
  description:
    "A 100% superfine merino wool band that shields luxury watches from everyday wear. Made in Melbourne. Engineered to protect.",
  openGraph: {
    title: "WATCH-MINDER — For those who live in motion",
    description:
      "A 100% superfine merino wool band that shields luxury watches from everyday wear. Made in Melbourne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoNarrow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper font-body">
        <ConceptLock />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
