import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "OCYAN — Agentic AI for Go-To-Market",
  description:
    "From lead data enrichment to personalized sequences. Completely autonomous, human-level quality. Scale your top-of-funnel without lifting a finger.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${jakarta.variable} ${inter.variable} ${mono.variable}`}>
      <body className="min-h-full antialiased font-sans bg-[#fcf8fa] text-[#1b1b1d]">{children}</body>
    </html>
  );
}
