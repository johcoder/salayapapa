"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import MottoList from "@/components/ui/waraka/MottoList";
import MarafikiMezaYaKristo from "@/components/ui/MarafikiMezayaKristo";


interface AccordionItem {
  title: string;
  content: string;
  pillars?: { title: string; description: string; color: string }[];
}
const eymMottos = [
  "USHIRIKA WA KIPAPA",
  "MTANDAO WA WANAOSALI",
  "MITUME PALE TULIPO",
];

const accordionData: AccordionItem[] = [
  {
    title: "Utangulizi ",
    content: `EYM-VWN (Eucharistic Youth Movement, Vijana Wana-Ekaristia) ni tawi la vijana la Mtandao wa Sala wa Baba Mtakatifu Ulimwengu. VWE ni ushirika uliojikita katika malezi na makuzi ya Kikristo kwa vijana na watoto wenye umri kati ya miaka 5 hadi 25. Utume huu ulianzishwa mwaka 1915 kama Kongamano la Ekaristi (kwa vijana) na kuundwa upya mwaka 1962 kama Ushirika wa Vijana wa Kiekaristia (Eucharist Youth Movement, EYM). Ushirika huu unatoa kwa vijana njia ya malezi ya kiutu na kiimani.`,
  },
  {
    title: "Dhana za Msingi",
    content: `EYM-VWN hunawahimiza wanachama wake kujijengea urafiki na Yesu Kristo kupitia nguzo tatu kuu au “dhana za msingi”, ambazo wanaziishi katika maisha yao ya kawadia, kila siku.`,
    pillars: [
      {
        title: "Neno la Mungu",
        description:
          "Wakiweka msisitizo maalum kwenye Injili: kusali na kutafakari maisha ya Yesu ili kuishi kama Yeye.",
        color: "bg-blue-100 text-blue-900",
      },
      {
        title: "Ekaristia",
        description:
          "Kupokea Ekaristi Takatifu na kuishi maisha ya kuhurumia, kupenda na kutenda pamoja na Yesu, tena kama Yesu.",
        color: "bg-green-100 text-green-900",
      },
      {
        title: "Umisionari",
        description:
          "Kushiriki katika Utume wa Kristo: kushughulikia mahitaji na changamoto zinazomkumba mwanadamu. Hii huhusisha kujifunza katika hali endelevu kuhusu utambuzi wa kiroho na ufanyaji wa maamuzi.",
        color: "bg-yellow-100 text-yellow-900",
      },
    ],
  },
  {
    title: "Wana Ekaristia Ulimwenguni ",
    content: `EYM-VWN uko katika nchi 59, na unajumuisha takriban watoto na vijana milioni 1.7 wenye umri wa miaka 5 hadi 25. Katika hao 80% hushiriki kupitia parokia, wakati 20% hushiriki kupitia shule na vyuo wanaposoma.
    Shirika la Yesu (Jesuit Fathers) linajihusisha na 25% ya walio katika utume huu, na makundi ya kitawa kama ya Religious of Jesus and Mary, Company of Mary, Esclavas del Corazón de Jesús, Siervas del Corazón de Jesús, Marist Brothers, Brothers of Christian Schools, n.k., pamoja na parokia katika majimbo mbalimbali wanajihusisha na 75% nyingine za wanachama.
    `,
  },
  
];

export default function EYMPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative">
      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
  <img
    src="/eymlogo.jpg"
    alt="EYM Hero"
    className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Centered Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-white">
    
    {/* TITLE */}
    <h1 className="text-2xl md:text-5xl font-bold mb-6">
      Vijana Wana-Ekaristia
    </h1>

    {/* MOTTO LIST – ALWAYS VISIBLE & CENTERED */}
    <div className="max-w-3xl">
      <MottoList mottos={eymMottos} />
    </div>
  </div>
</div>
<MarafikiMezaYaKristo />

      {/* Accordion */}
      <div className="max-w-4xl mx-auto mt-12 space-y-4 px-4">
        {accordionData.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-lg">{item.title}</span>
              <motion.span
                animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ChevronDownIcon className="w-6 h-6 text-gray-700" />
              </motion.span>
            </button>

            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="px-6 py-4 bg-white text-gray-700 text-base leading-relaxed space-y-4"
              >
                <p>{item.content}</p>

                {/* Render pillars if present */}
                {item.pillars && (
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    {item.pillars.map((pillar, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                        transition={{ type: "spring", stiffness: 120, damping: 15, delay: i * 0.1 }}
                        className={`rounded-xl p-4 shadow-md ${pillar.color}`}
                      >
                        <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                        <p className="text-sm">{pillar.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
