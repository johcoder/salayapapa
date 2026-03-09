import { machapishoList } from "@/data/machapisho"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, BookOpen } from "lucide-react"

export default function CurrentWaraka() {

  const machiWaraka = machapishoList.find(
    (item) => item.title === "Prayer Letter for Machi 2026"
  )

  const mwongozo = machapishoList.find(
    (item) => item.title === "Mwongozo wa Kusali Kila Siku"
  )

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {/* Card 1 */}
      <Card className="border-amber-600 bg-amber-50">
        <CardContent className="p-8 space-y-4 text-center">

          <FileText className="mx-auto h-10 w-10 text-amber-600" />

          <h2 className="text-xl font-bold text-amber-700">
            Waraka wa Sala Machi
          </h2>

          <div className="flex justify-center gap-3">

            <Button asChild variant="outline">
              <a href={machiWaraka?.fileUrl} target="_blank">
                <BookOpen className="mr-2 h-4 w-4" />
                fungua
              </a>
            </Button>

            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <a href={machiWaraka?.fileUrl} download>
                <Download className="mr-2 h-4 w-4" />
                pakua
              </a>
            </Button>

          </div>

        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="border-amber-600 bg-amber-50">
        <CardContent className="p-8 space-y-4 text-center">

          <FileText className="mx-auto h-10 w-10 text-amber-600" />

          <h2 className="text-xl font-bold text-amber-700">
            {machiWaraka?.title}
          </h2>

          <div className="flex justify-center gap-3">

            <Button asChild variant="outline">
              <a href={machiWaraka?.fileUrl} target="_blank">
                <BookOpen className="mr-2 h-4 w-4" />
                fungua
              </a>
            </Button>

            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <a href={machiWaraka?.fileUrl} download>
                <Download className="mr-2 h-4 w-4" />
                pakua
              </a>
            </Button>

          </div>

        </CardContent>
      </Card>

      {/* Card 3 */}
      <Card className="border-amber-600 bg-amber-50">
        <CardContent className="p-8 space-y-4 text-center">

          <FileText className="mx-auto h-10 w-10 text-amber-600" />

          <h2 className="text-xl font-bold text-amber-700">
            {mwongozo?.title}
          </h2>

          <div className="flex justify-center gap-3">

            <Button asChild variant="outline">
              <a href={mwongozo?.fileUrl} target="_blank">
                <BookOpen className="mr-2 h-4 w-4" />
                fungua
              </a>
            </Button>

            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <a href={mwongozo?.fileUrl} download>
                <Download className="mr-2 h-4 w-4" />
                pakua
              </a>
            </Button>

          </div>

        </CardContent>
      </Card>

    </div>
  )
}