import { Machapisho } from "@/data/types/machapisho"
import { Button } from "@/components/ui/button"

type Props = {
  machapisho: Machapisho[]
}

export default function MachapishoGrid({ machapisho }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {machapisho.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-5 space-y-3 hover:shadow-md transition"
        >
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            Aina: {item.category}
          </p>

          <Button asChild className="w-full">
            <a href={item.fileUrl} download>
              Pakua
            </a>
          </Button>
        </div>
      ))}
    </div>
  )
}
