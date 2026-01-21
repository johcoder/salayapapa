// components/AboutSalayaPapa.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSalayaPapa() {
  return (
    <section className="w-full py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mtandao wa Sala ya Baba Mtakatifu Ulimwenguni ni nini?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Sala ya Papa ni mtandao wa kimataifa wa waumini ulio katikati ya maisha
            ya Kanisa Katoliki. Dhamira yake kuu ni kuwaunganisha waamini kote
            duniani katika sala na utume wa Kanisa, wakiongozwa na nia za kila
            mwezi za Baba Mtakatifu (Papa).
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Kupitia sala, huduma, na malezi ya kiroho, tunajenga mioyo yenye
            huruma na mshikamano, tukikabili changamoto za binadamu na za Kanisa
            kwa pamoja. Huu si mwito wa kusali tu, bali ni safari ya kubadilisha
            maisha kwa kuishi Injili kila siku.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Safari hii tunaiita <span className="font-medium">“Njia ya Moyo”</span> — 
            njia ya ndani inayotuongoza kumkaribia Mungu zaidi, kumjali jirani,
            na kushiriki kikamilifu katika utume wa Kanisa kwa ajili ya ulimwengu
            wenye matumaini na amani.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-black text-white font-medium shadow-lg"
          >
            Jifunze Zaidi
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="relative w-full h-80 md:h-105 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
        >
          <Image
            src="/popepraywithpeople.jpeg"
            alt="Sala ya Papa"
            fill
            className="object-cover"
          />

          {/* Glow overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/20" />
        </motion.div>

      </div>
    </section>
  );
}
