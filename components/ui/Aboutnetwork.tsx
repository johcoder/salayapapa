"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronDown, Heart, Cross } from "lucide-react"

function AccordionItem({
  title,
  icon: Icon,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  icon: any
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-amber-600" />
          {title}
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden px-6 pb-5 text-gray-700"
          >
            <p className="leading-relaxed">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AboutPrayerNetworkAccordion() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (inView) {
      setTimeout(() => setOpenIndex(0), 500)
    }
  }, [inView])

  return (
    <section
      ref={sectionRef}
      className="bg-linear-to-b from-gray-50 to-white py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold text-gray-900"
        >
          Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 text-lg leading-relaxed text-gray-700"
        >
          Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni ni Ushirika wa Kipapa (Pontifical Society)
          unaolenga kuwahamasisha waamini Wakatoliki kote ulimwenguni kukabiliana na
          changamoto za ulimwengu na za Utume wa Kanisa kwa njia ya sala na matendo mema. Hii
          hufanyika kwa kuongozwa na Nia za Sala za Baba Mtakatifu anazotoa kila mwezi kwa Kanisa
          lote.
        </motion.p>

        {/* Accordions */}
        <div className="space-y-4">
          <AccordionItem
            title="Historia ya Utume"
            icon={Cross}
            isOpen={openIndex === 0}
            onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
          >
            Utume huu ulianzishwa mwaka 1884 ukiwa unajulikana kama “Utume wa Sala”
            (Apostleship of Prayer), ukiwa na lengo la kuwawezesha waamini kushiriki kikamilifu katika
            kazi ya kimisionari hata pale wasiposafiri mbali na nyumbani. Waamini walihimizwa
            kumshuhudia Kristo, kueneza na kudumisha maadili ya Kiinjili na nguvu ya Sakramenti.
          </AccordionItem>

          <AccordionItem
            title="Tulipo sasa"
            icon={Heart}
            isOpen={openIndex === 1}
            onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
          >
            Kwa sasa jina rasmi ya utume huu ni Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni, na
            Njia ya Moyo (The Way of the Heart) ni utaratibu wake maalum wa malezi. Mtandao sasa
            umeenea katika nchi 92 duniani kote na unawahusisha zaidi ya waamini Wakatoliki milioni
            22, wakiwemo vijana kupitia tawi la lao liitwalo Vijana Wana-Ekaristia (Eucharistic Youth
            Movement, EYM).
          </AccordionItem>
        </div>
      </div>
    </section>
  )
}
