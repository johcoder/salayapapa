"use client";

import { motion, Variants } from "framer-motion";

// Card animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Spring transition for a lively effect
const cardTransition = {
  type: "spring" as const,
  stiffness: 120, // speed of spring
  damping: 15,    // bounciness
  mass: 0.5,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // cards animate one after another
    },
  },
};

interface Card {
  text: string;
  style?: string;
  rightAlign?: boolean;
  accentNumber?: string;
  accentNumber2?: string;
}

const cards: Card[] = [
  {
    text: `Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni ni Ushirika wa Kipapa (Pontifical Society)
           unaolenga kuwahamasisha waamini Wakatoliki kote ulimwenguni kukabiliana na
           changamoto za ulimwengu na za Utume wa Kanisa kwa njia ya sala na matendo mema. Hii
           hufanyika kwa kuongozwa na Nia za Sala za Baba Mtakatifu anazotoa kila mwezi kwa Kanisa
           lote.`,
  },
  {
    text: `Utume huu ulianzishwa mwaka 1884 ukiwa unajulikana kama “Utume wa Sala”
           (Apostleship of Prayer), ukiwa na lengo la kuwawezesha waamini kushiriki kikamilifu katika
           kazi ya kimisionari hata pale wasipoweza kusafiri kwenda maeneo ya mbali. Waamini
           walihimizwa kumshuhudia Kristo, kueneza na kudumisha maadili ya Kiinjili. Walifanya
           kwanza kutafuta Mapenzi ya Mungu katika Neno la Mungu, kufanya majitoleo yao ya kila
           siku pamoja na katika Ekaristi takatifu na kujitahidi kuishi Mapenzi ya Mungu wakiwa
           wanapewa nguvu na Ekaristi Takatifu. Maisha haya tunaweza kuyaita “kuwa wamisionari
           mahali walipo” au “kuishi maisha ya ki-Ekaristi”. Walijitahidi kuishi kile walichomtolea
           Mungu pamoja na Kristo Mwanaye katika adhimisho la Misa. Mtume wa sala huwa mtume
           wa Kristo katika familia yake, parokia yake, kazi yake, nchi yake nk.`,
    rightAlign: true,
  },
  {
    text: `Katika maisha ya kila siku Mtume wa Sala hujiweka karibu na Moyo wa Yesu. Hivyo basi
           mikono yake, miguu yake, midomo yake, masikio yake nk kutumika kama vyombo vya Yesu
           vya uenezaji Habari Njema ya Upendo na Huruma kwa ulimwengu.`,
  },
  {
    text: `Kwa sasa jina rasmi ya utume huu ni Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni, na
           Njia ya Moyo (The Way of the Heart) ni utaratibu wake maalum wa malezi. Kwa sasa,
           Mtandao huu upo katika nchi 92 duniani kote na unawahusisha zaidi ya waamini Wakatoliki
           milioni 22, wakiwemo vijana kupitia tawi la lao liitwalo Vijana Wana-Ekaristia (Eucharistic
           Youth Movement, EYM).`,
    rightAlign: true,
    style: "bg-amber-600 text-white",
    accentNumber: "92",
    accentNumber2: "22M",
  },
];

export default function AboutMtandao() {
  return (
    <section className="relative bg-linear-to-b from-white to-amber-50 py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, mass: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni
          </h2>
          <div className="mx-auto mt-5 h-1 w-28 bg-amber-600 rounded-full" />
        </motion.div>

        {/* Cards container with stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={cardTransition}
              viewport={{ once: true }}
              className={`
                relative
                md:w-2/3 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow
                ${card.rightAlign ? "md:ml-auto" : ""}
                ${card.style ?? "bg-white text-slate-700"}
              `}
            >
              {card.accentNumber && (
                <div className="absolute right-4 top-4 text-6xl font-bold opacity-20">
                  {card.accentNumber}
                </div>
              )}
              {card.accentNumber2 && (
                <div className="absolute left-4 bottom-4 text-5xl font-bold opacity-20">
                  {card.accentNumber2}
                </div>
              )}
              <p className="relative leading-relaxed text-lg">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
