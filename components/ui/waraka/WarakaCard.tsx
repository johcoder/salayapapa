import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download } from "lucide-react"
import { Waraka } from "@/data/waraka"

type Props = {
  waraka: Waraka
}

export default function WarakaCard({ waraka }: Props) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {/* HEADER */}
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            {waraka.title}
          </CardTitle>

          {waraka.isCurrent && (
            <Badge className="bg-amber-600 text-white">
              Mpya
            </Badge>
          )}
        </div>

        <CardDescription>
          {waraka.month} {waraka.year}
        </CardDescription>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex-1">
        <p className="text-gray-700 leading-relaxed">
          {waraka.description}
        </p>
      </CardContent>

      {/* FOOTER – STACKED BUTTONS */}
      <CardFooter className="mt-auto flex flex-col gap-3">
        <Button asChild variant="outline" className="w-full">
          <a
            href={waraka.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="mr-2 h-4 w-4" />
            Tazama
          </a>
        </Button>

        <Button
          asChild
          className="w-full bg-amber-600 hover:bg-amber-700"
        >
          <a href={waraka.pdfUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Pakua
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
