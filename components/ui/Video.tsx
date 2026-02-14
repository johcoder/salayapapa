// components/VideoYaPapaModal.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoYaPapaModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/jengovatcan.jpg')", // weka picha yako hapa
        }}
      />

      {/* Dark Overlay with ClipPath */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/80 via-gray-900/90 to-black/80"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Part */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Video ya Papa
          </h2>

          <p className="text-gray-200 leading-relaxed mb-4">
            Kila mwezi, Baba Mtakatifu hutoa video maalum inayowasilisha
            <span className=" bg-amber-600 px-2 py-1 rounded-md ml-1 font-medium">
              Nia ya Sala ya Mwezi
            </span>.
            Video hii inalenga kuwaunganisha waamini kote duniani katika sala
            moja, wakitafakari juu ya changamoto halisi za binadamu na utume wa Kanisa.
          </p>

          <p className="text-gray-200 leading-relaxed mb-6">
            Kupitia ujumbe huu wa moja kwa moja kutoka kwa Papa, tunaunganishwa
            katika Sala ya kimataifa, tukihamasishwa kuishi Injili kwa vitendo na
            kuchangia matumaini, amani, na mshikamano katika ulimwengu wetu.
          </p>
        </motion.div>

        {/* Video Preview Part */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black/40 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,191,0,0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-2xl shadow-lg transition-colors"
          >
            ▶ Tazama Video ya Mwezi
          </motion.button>
        </motion.div>

        {/* Modal Video */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 text-white text-3xl font-bold hover:text-red-500"
                >
                  ×
                </button>

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-REFhEErYHA"
                  title="Video ya Papa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
