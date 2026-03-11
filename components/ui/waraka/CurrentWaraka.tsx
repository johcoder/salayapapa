"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, BookOpen } from "lucide-react"
import { Waraka } from "@/data/waraka"

type Props = {
  waraka: Waraka
}

export default function CurrentWaraka({ waraka }: Props) {
  return (
    <Card className="border-amber-600 bg-amber-50">
      <CardContent className="p-8 text-center space-y-4">

        <FileText className="mx-auto h-10 w-10 text-amber-600" />

        <h2 className="text-lg font-bold text-amber-700">
          {waraka.title}
        </h2>

        <div className="flex justify-center gap-3">

          <Button asChild variant="outline">
            <a href={waraka.pdfUrl} target="_blank">
              <BookOpen className="mr-2 h-4 w-4" />
              Open
            </a>
          </Button>

          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <a href={waraka.pdfUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>

        </div>

      </CardContent>
    </Card>
  )
}