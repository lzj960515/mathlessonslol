import type { Metadata } from "next";
import localFont from "next/font/local";
import Scripts from "./components/Scripts";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Math Lessons LOL - Fun Math Games | Online Math Learning Platform",
  description: "Math Lessons LOL is an engaging online math education gaming platform. Make learning mathematics fun through interactive games. Suitable for students of all ages.",
  keywords: "math games, online math education, fun math, math learning, educational games, Math Lessons LOL",
  openGraph: {
    title: "Math Lessons LOL - Fun Math Games",
    description: "Learn mathematics through fun and interactive games",
    images: ['/og-image.jpg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
