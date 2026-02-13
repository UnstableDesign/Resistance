import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ScrollHandler from "@/components/ScrollHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-kyokasho",
  weight: "400",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Resistance: Digital Weaving to Save the World",
  description: "An Artists Guide to Warping the TC2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        <ScrollHandler />
        {children}
      </body>
    </html>
  );
}
