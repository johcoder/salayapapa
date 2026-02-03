"use client";

import { motion } from "framer-motion";

const cards = [
  {
    subtitle: "URAFIKI NA YESU",
    content:
      "Moyo wa Wana Ekaristia ni urafiki na Yesu. Wanajitahidi kujua mapenzi ya Mungu kupitia mafundisho ya Yesu katika Injili.",
  },
  {
    subtitle: "MAISHA NA YESU",
    content:
      "Moyo wa Wana Ekaristia ni kuishi urafiki huu, wakipata lishe na mfano katika Ekaristi Takatifu. Ekaristi huwapa vijana wa utume huu nguvu ya kuyaishi mapenzi ya Mungu na mfano wa kujisadaka.",
  },
  {
    subtitle: "USHIRIKA NA YESU",
    content:
      "Moyo wa Wana Ekaristia ni kushiriki maisha na utume wa Yesu kama Kanisa, kutumikia haki ya Ufalme wa Mungu. Humshuhudia Kristo pale walipo kwa kuyaishi maadili ya Kikristo na kuruhusu Yesu kutumia maisha yao katika utume wa upendo na ukombozi.",
  },
];

export default function MarafikiMezaYaKristo() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Marafiki Katika Meza Ya Kristo
        </h2>
        <div className="mt-4 h-1 w-24 bg-amber-600 mx-auto rounded-full" />
      </div>

      {/* CARDS */}
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-amber-700 mb-4 text-center">
              {card.subtitle}
            </h3>

            <p className="text-gray-700 text-base leading-relaxed text-center">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
