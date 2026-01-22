"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

interface NiaYaSalaCardProps {
  title: string
  description: string
  viewLink: string
  pdfLink: string
}

export default function NiaYaSalaCard({
  title,
  description,
  viewLink,
  pdfLink,
}: NiaYaSalaCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mb-6 text-sm text-gray-600">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {/* View Page */}
        <Link href={viewLink}>
          <Button className="bg-amber-600 text-white hover:bg-amber-700">
            <Eye className="mr-2 h-4 w-4" />
            Tazama
          </Button>
        </Link>

        {/* Download PDF */}
        <a href={pdfLink} download>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Pakua PDF
          </Button>
        </a>
      </div>
    </div>
  )
}
