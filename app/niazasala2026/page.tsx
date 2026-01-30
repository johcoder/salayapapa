"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const intentions = [
  {
    month: "Januari",
    title: "Kwa ajili ya kusali kwa kutumia Neno la Mungu",
    text:
      "Tuombe ili kusali kwa kutumia Neno la Mungu kuwe kirutubisho kwa maisha yetu na chanzo cha matumaini katika jumuiya zetu, na msaada wa kujenga Kanisa la kidugu na kimisionari zaidi.",
  },
  {
    month: "Februari",
    title: "Kwa ajili ya watoto wenye maradhi yasiyotibika",
    text:
      "Tusali ili watoto walio na magonjwa yasiotibika na familia zao, wapate huduma muhimu za kitabibu, bila kupoteza nguvu na matumaini.",
  },
  {
    month: "Machi",
    title: "Kwa upokonyaji silaha na amani",
    text:
      "Tusali ili mataifa yaelekee upande wa kukomesha matumizi ya silaha, hasa silaha za nyuklia, na kwamba viongozi wa dunia wachague njia ya mazungumzo na diplomasia badala ya matumizi ya nguvu.",
  },
  {
    month: "Aprili",
    title: "Kwa ajili ya mapadre wenye changamoto",
    text:
      "Tusali kuwaombea makasisi wanaopitia nyakati ngumu katika miito yao, wapate msaada wanaohitaji na jumuiya za watu ziwasaidie kwa kuelewa wanayopitia na kuwaombea.",
  },
  {
    month: "Mei",
    title: "Kwamba kila mtu awe na chakula",
    text:
      "Tusali ili kila mtu, kuanzia wazalishaji wakubwa hadi wanunuzi wadogo wa chakula, wawe makini kukwepa ufujaji wa chakula, na kuhakikisha kuwa kila mtu anaweza kupata chakula bora.",
  },
  {
    month: "Juni",
    title: "Kwa ajili ya umuhimu wa michezo",
    text:
      "Tusali ili michezo iwe chombo cha amani, maonano na mazungumzo baina ya tamaduni na mataifa, na kujenga maadili ya heshima, mshikamano na makuzi binafsi.",
  },
  {
    month: "Julai",
    title: "Kwa ajili ya heshima ya maisha ya binadamu",
    text:
      "Tusali kwa ajili ya heshima na ulinzi wa maisha ya mwanadamu katika hatua zake zote, tukiyatambua maisha kama zawadi ya Mungu.",
  },
  {
    month: "Agosti",
    title: "Kwa ajili ya uinjilishaji mjini",
    text:
      "Tusali ili kwamba katika miji mikubwa iliyogubikwa na kutotambuana na upweke wa watu, tuweze kupata njia mpya za kutangaza Injili, na kubuni njia mpya za kujenga jamii ya watu.",
  },
  {
    month: "Septemba",
    title: "Kwa ajili ya utunzaji wa maji",
    text:
      "Tusali kwa ajili ya usimamizi endelevu na wa haki wa maji iliyo rasilimali muhimu, ili kila mtu awe na nafasi sawa ya kupata maji.",
  },
  {
    month: "Oktoba",
    title: "Kwa ajili ya utume wa afya ya akili",
    text:
      "Tusali kuomba ili utume wa afya ya akili uanzishwe katika Kanisa zima, ili kusaidia kuondoa unyanyapaa na ubaguzi dhidi ya walio na maradhi ya akili.",
  },
  {
    month: "Novemba",
    title: "Kwa matumizi sahihi ya mali",
    text:
      "Tusali kuombea matumizi mazuri ya mali, kwamba tusiangukie kishawishi cha ubinafsi, bali mali daima itumike kwa manufaa ya wote na kwa usaidizi wa wale waliopungukiwa nayo.",
  },
  {
    month: "Desemba",
    title: "Kwa ajili ya familia zenye mzazi mmoja",
    text:
      "Tusali kuziombea familia zisizo na baba au mama, ili kwamba zipate usaidizi na ushirikiano katika Kanisa, na kuimarishwa katika Imani zipitiapo nyakati ngumu.",
  },
];

export default function NiaZaSalaPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Nia za Sala za Baba Mtakatifu – 2026
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Nia za Sala zilizokabidhiwa kwa mtandao wa Sala wa Kanisa kwa mwaka
            2026. Chagua mwezi kutafakari na kusali.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {intentions.map((item, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ y: -4 }}
              className="rounded-2xl border bg-white shadow-sm p-6 cursor-pointer"
              onClick={() => setActive(active === index ? null : index)}
            >
              <h3 className="text-xl font-semibold text-slate-800">
                {item.month}
              </h3>
              <p className="text-slate-500 text-sm mt-1">{item.title}</p>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
