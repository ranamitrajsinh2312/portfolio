import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBg from "@/components/GlowBg";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mitrajsinh Rana — Full-Stack Developer & ML Enthusiast",
  description:
    "Portfolio of Mitrajsinh Rana, a Computer Science undergraduate at Darshan University, Rajkot. Full-Stack Developer with Flutter, MERN, and Python.",
  keywords: [
    "Mitrajsinh Rana", "portfolio", "full-stack developer",
    "Flutter", "MERN", "machine learning", "Darshan University",
  ],
  authors: [{ name: "Mitrajsinh Rana" }],
  openGraph: {
    title: "Mitrajsinh Rana — Full-Stack Developer & ML Enthusiast",
    description:
      "Portfolio of Mitrajsinh Rana, a Computer Science undergraduate at Darshan University, Rajkot.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitrajsinh Rana — Full-Stack Developer & ML Enthusiast",
    description:
      "Portfolio of Mitrajsinh Rana — Full-Stack Developer with Flutter, MERN, and Python.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body">
        {/* Full-viewport edge-less animated glow — fixed, z:0, pointer-events:none */}
        <GlowBg />

        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
