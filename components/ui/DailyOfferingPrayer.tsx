"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DailyOfferingPrayer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold 
                   shadow-lg hover:bg-amber-700 transition"
      >
        SALA YA MAJITOLEO YA KILA SIKU
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl p-8 relative"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold text-amber-600 mb-8 text-center">
                SALA YA MAJITOLEO YA KILA SIKU
              </h2>

              {/* PART 1 */}
              <section className="mb-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  Ee Baba mwema, natambua uko hapa pamoja nami.
                  Nakuja mbele yako katika siku hii mpya.
                  Weka moyo wangu kwa mara nyingine tena
                  karibu na Moyo wa Mwanao Yesu,

                  anayejitoa kwa ajili yangu na anayekuja kwangu katika Ekaristi.
                  Roho wako Mtakatifu anifanye kuwa rafiki na mtume wake,
                  aliye tayari kwa utume wake wa huruma ulimwenguni.
                </p>
              </section>

              {/* PART 2 */}
              <section className="mb-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  Ninaweka mikononi mwako furaha na matumaini yangu,
                  kazi zangu na maumivu yangu, mimi mzima na kila kila nilichonacho,

                  kwa kushirikiana na kaka na dada zangu
                  wa Mtandao huu wa Sala Ulimwenguni.
                </p>
              </section>

              {/* PART 3 */}
              <section>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  Pamoja na Mama Maria, ninakutolea siku yangu
                  kwa ajili ya utume wa Kanisa

                  na kwa nia ya Sala ya Baba Mtakatifu [na Askofu wangu] kwa mwezi huu.

                  Amina.
                </p>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
