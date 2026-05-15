import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andres Coseani | Full Stack Developer",
  description:
    "Portfolio de Andres Coseani — Full Stack Web Developer & Analista de Sistemas. Especializado en Next.js, React, NestJS, Firebase y PostgreSQL. Córdoba, Argentina.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "NestJS",
    "Firebase",
    "PostgreSQL",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Andres Coseani" }],
  openGraph: {
    title: "Andres Coseani | Full Stack Developer",
    description:
      "Full Stack Web Developer & Analista de Sistemas — Córdoba, Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
