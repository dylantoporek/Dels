import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Del's — A Modern Speakeasy",
  description:
    "Del's is a hidden cocktail bar pouring classic and original cocktails behind an unmarked door. Find us if you can.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} antialiased flex min-h-dvh flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
