export type Waraka = {
  month: string
  year: number
  title: string
  description: string
  pdfUrl: string
  isCurrent?: boolean
}

export const warakaList: Waraka[] = [
  {
    month: "December",
    year: 2025,
    title: "Waraka wa Sala – December 2025",
    description: "Sala ya mwaka mpya",
    pdfUrl: "/waraka/2026-01.pdf",
  },
  {
    month: "Januari",
    year: 2026,
    title: "Waraka wa Sala – januari 2026",
    description: "Kwa ajili ya Kusali kwa kutumia Neno la Mungu",
    pdfUrl: "/pdf/Waraka wa Sala wa Mwezi Januari 2026.pdf",
    isCurrent: true,
  },
  {
    month: "November",
    year: 2025,
    title: "Waraka wa Sala – November 2025",
    description: "Sala kwa vijana",
    pdfUrl: "/waraka/2026-02.pdf",
  }
]
