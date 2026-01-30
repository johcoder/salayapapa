import { Waraka } from "@/data/waraka"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

type Props = {
  warakaList: Waraka[]
}

export default function WarakaTable({ warakaList }: Props) {
  if (warakaList.length === 0) {
    return (
      <p className="text-gray-500 italic">
        Hakuna waraka bado.
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {warakaList.map((w) => (
        <div
          key={w.id}
          className="border rounded-xl p-4 flex items-center justify-between"
        >
          <div>
            <h3 className="font-semibold">
              {w.title}
              {w.isCurrent && (
                <Badge className="ml-2 bg-amber-600">Mpya</Badge>
              )}
            </h3>
            <p className="text-sm text-gray-600">
              {w.month} {w.year}
            </p>
          </div>

          <Button asChild variant="outline">
            <a href={w.pdfUrl} target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              PDF
            </a>
          </Button>
        </div>
      ))}
    </div>
  )
}
