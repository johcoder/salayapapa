import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import StructuredData from "@/components/ui/StructedData"

import './globals.css';

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://salinapapa.org"), // ✅ updated domain

  title: {
    default: "Mtandao wa Sala wa Baba Mtakatifu Tanzania",
    template: "%s | Mtandao wa Sala Tanzania",
  },

  description:
    "Tawi rasmi la Mtandao wa Sala wa Baba Mtakatifu (Pontifical Prayer Network) nchini Tanzania. Jiunge kusali kwa nia za kila mwezi za Baba Mtakatifu.",

  keywords: [
    "Mtandao wa Sala Tanzania",
    "Nia ya Sala ya Baba Mtakatifu",
    "Pontifical Prayer Network Tanzania",
    "Sala Katoliki Tanzania",
    "Njia ya Moyo",
  ],

  // 
  verification: {
    google: "XTtvYLwOwQ8mJEC-As6t-jT1D7yuurtqiOxC-9owCJM",
  },

  openGraph: {
    type: "website",
    locale: "sw_TZ",
    url: "https://salinapapa.org", // ✅ updated domain
    siteName: "Mtandao wa Sala Tanzania",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sw"> 
      <head>
        <StructuredData /> 
      </head>
      <body className="bg-white font-din font-bold" suppressHydrationWarning>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}