import { machapishoList } from "@/data/machapisho"
import MachapishoGrid from "@/components/ui/MachapishoGrid"
import { warakaList } from "@/data/waraka"
import CurrentWaraka from "@/components/ui/waraka/CurrentWaraka"
import WarakaGrid from "@/components/ui/waraka/WarakaGrid"
import { Separator } from "@/components/ui/separator"
import KaribuPopup from "@/components/ui/KaribuPopUp"

export default function WarakaWaSalaPage() {
  const current = warakaList.find(w => w.isCurrent)
  const previous = warakaList.filter(w => !w.isCurrent)

  return (
    <><><>
      <KaribuPopup />

      <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        ...
      </section>
    </><section className="max-w-7xl mx-auto px-4 py-16 space-y-12">

        {/* PAGE HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Waraka wa Sala</h1>
          <p className="text-muted-foreground">
            Soma au pakua Waraka wa Sala wa kila mwezi
          </p>
        </div>

        {/* CURRENT */}
        {current && <CurrentWaraka waraka={current} />}

        <Separator />

        {/* PREVIOUS */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Waraka za Miezi Iliyopita
          </h2>
          <WarakaGrid warakaList={previous} />
        </div>
      </section></><><Separator /><div className="space-y-6">
        <h2 className="text-xl font-semibold">
          Machapisho Mbalimbali
        </h2>
        <MachapishoGrid machapisho={machapishoList} />
      </div></></>
  )
}
