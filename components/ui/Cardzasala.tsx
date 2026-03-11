"use client"

import CurrentWaraka from "./waraka/CurrentWaraka"

export default function WarakaCards() {
  const cards = [
    {
      title: "Waraka wa Sala – Machi 2026",
      pdfUrl: "/pdf/Waraka wa Sala wa Mwezi Machi 2026.pdf"
    },
    {
      title: "Prayer Letter – March 2026",
      pdfUrl: "/pdf/Prayer Letter for March 2026.pdf"
    },
    {
      title: "Mwongozo wa Sala wa Kila Siku",
      pdfUrl: "/pdf/MWONGOZO WA KUSALI KILA SIKU.pdf"
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((item, index) => (
        <CurrentWaraka
          key={index}
          waraka={{
            id: String(index),
            month: "Machi",
            year: 2026,
            description: "",
            title: item.title,
            pdfUrl: item.pdfUrl
          }}
        />
      ))}
    </div>
  )
}