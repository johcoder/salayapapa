"use client";

import { motion } from "framer-motion";

export default function AboutMtandao() {
  return (
    <section className="bg-linear-to-b from-white to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Utume wa kimataifa unaounganisha waamini katika sala, matendo mema, na uinjilishaji.
          </p>
          <div className="mx-auto mt-5 h-1 w-28 bg-amber-600 rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <p className="text-slate-700 leading-relaxed text-lg">
              Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni ni Ushirika wa Kipapa (Pontifical Society)
              unaolenga kuwahamasisha waamini Wakatoliki kote ulimwenguni kukabiliana na
              changamoto za ulimwengu na za Utume wa Kanisa kwa njia ya sala na matendo mema. Hii
              hufanyika kwa kuongozwa na Nia za Sala za Baba Mtakatifu anazotoa kila mwezi kwa Kanisa
              lote.
            </p>

            <p className="mt-6 text-slate-700 leading-relaxed text-lg">
              Utume huu ulianzishwa mwaka 1884 ukiwa unajulikana kama “Utume wa Sala”
              (Apostleship of Prayer), ukiwa na lengo la kuwawezesha waamini kushiriki kikamilifu katika
              kazi ya kimisionari hata pale wasipoweza kusafiri kwenda maeneo ya mbali. Waamini
              walihimizwa kumshuhudia Kristo, kueneza na kudumisha maadili ya Kiinjili. Walifanya
              kwanza kutafuta Mapenzi ya Mungu katika Neno la Mungu, kufanya majitoleo yao ya kila
              siku pamoja na katika Ekaristi takatifu na kujitahidi kuishi Mapenzi ya Mungu wakiwa
              wanapewa nguvu na Ekaristi Takatifu. Maisha haya tunaweza kuyaita “kuwa wamisionari
              mahali walipo” au “kuishi maisha ya ki-Ekaristi”. Walijitahidi kuishi kile walichomtolea
              Mungu pamoja na Kristo Mwanaye katika adhimisho la Misa. Mtume wa sala huwa mtume
              wa Kristo katika familia yake, parokia yake, kazi yake, nchi yake nk.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <p className="text-slate-700 leading-relaxed text-lg">
              Katika maisha ya kila siku Mtume wa Sala hujiweka karibu na Moyo wa Yesu. Hivyo basi
              mikono yake, miguu yake, midomo yake, masikio yake nk kutumika kama vyombo vya Yesu
              vya uenezaji Habari Njema ya Upendo na Huruma kwa ulimwengu.
            </p>

            <div className="mt-8 border-l-4 border-amber-600 pl-5">
              <p className="text-slate-700 leading-relaxed text-lg">
                Kwa sasa jina rasmi ya utume huu ni Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni, na
                Njia ya Moyo (The Way of the Heart) ni utaratibu wake maalum wa malezi. Kwa sasa,
                Mtandao huu upo katika nchi 92 duniani kote na unawahusisha zaidi ya waamini Wakatoliki
                milioni 22, wakiwemo vijana kupitia tawi la lao liitwalo Vijana Wana-Ekaristia (Eucharistic
                Youth Movement, EYM).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
