import type { Metadata } from "next";
import { Archivo_Black, Bebas_Neue, Fraunces, Orbitron, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-loaded",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const mono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const sci = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shanaim Shourov — Full-Stack Developer",
  description: "Full-stack developer building end-to-end web applications — from pixel-precise interfaces to scalable backend integrations. React, TypeScript, Next.js, Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${grotesk.variable} ${mono.variable} ${serif.variable} ${sci.variable} ${bebas.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
