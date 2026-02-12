import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import "./globals.css"

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://salinapapa.or.tz"),

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

  openGraph: {
    type: "website",
    locale: "sw_TZ",
    url: "https://salinapapa.or.tz",
    siteName: "Mtandao wa Sala Tanzania",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
