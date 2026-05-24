import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abdelrahman Adel — Fullstack Developer",
    template: "%s | Abdelrahman Adel",
  },
  description:
    "Fullstack developer passionate about building clean, performant web experiences. Exploring Web3, open-source, and everything in between.",
  keywords: ["developer", "fullstack", "web3", "react", "nextjs", "portfolio"],
  authors: [{ name: "Abdelrahman Adel" }],
  creator: "Abdelrahman Adel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdelrahman.dev",
    title: "Abdelrahman Adel — Fullstack Developer",
    description:
      "Fullstack developer passionate about building clean, performant web experiences.",
    siteName: "Abdelrahman Adel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Adel — Fullstack Developer",
    description:
      "Fullstack developer passionate about building clean, performant web experiences.",
    creator: "@abdelrahmanadel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#0a0a0a] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
