import type { Metadata } from "next";
import { Raleway, Pixelify_Sans } from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "andrea's desktop",
  description: "Andrea Loria is a Computer Science student at De La Salle University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${pixelify.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
