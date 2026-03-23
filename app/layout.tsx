import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const accent = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${sans.variable} ${display.variable} ${accent.variable} bg-ivory text-graphite antialiased`}>
        {children}
      </body>
    </html>
  );
}
