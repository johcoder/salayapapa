"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalCardProps {
  title: string;
  symbol: React.ReactNode
  content: string;
}

export default function ModalCard({ title, symbol, content }: ModalCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center w-72"
        onClick={() => setIsOpen(true)}
      >
        <div className="text-6xl mb-4">{symbol}</div>
        <h3 className="font-bold text-xl">{title}</h3>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh]">
                <h2 className="text-2xl font-bold mb-6">{title}</h2>
                <p className="whitespace-pre-line leading-relaxed">{content}</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 px-6 py-2 bg-amber-600 rounded-xl font-semibold text-black hover:bg-amber-500 transition"
                >
                  Funga
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
