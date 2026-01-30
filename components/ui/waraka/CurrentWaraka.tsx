import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { Waraka } from "@/data/waraka"

type Props = {
  waraka: Waraka
}

export default function CurrentWaraka({ waraka }: Props) {
  return (
    <Card className="border-amber-600 bg-amber-50">
      <CardContent className="p-8 space-y-4">
        <h2 className="text-2xl font-bold text-amber-700">
          {waraka.title}
        </h2>

        <p className="text-gray-700">{waraka.description}</p>

        <div className="flex gap-4 flex-wrap">
          <Button asChild variant="outline">
            <a href={waraka.pdfUrl} target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Tazama Waraka
            </a>
          </Button>

          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <a href={waraka.pdfUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Pakua PDF
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
