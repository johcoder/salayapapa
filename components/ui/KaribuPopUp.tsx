"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function KaribuPopup() {
  const [message, setMessage] = useState("KARIBU TUSALI")
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("KARIBU TUSALI KILA WAKATI")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bg-amber-50 border border-amber-200 rounded-3xl p-10 text-center space-y-6 max-w-sm w-full shadow-2xl"
          >
            {/* ICON / DECORATION */}
            <div className="mx-auto w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-2xl shadow-lg">
              🙏
            </div>

            {/* MESSAGE */}
            <motion.h2
              key={message}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-amber-700 tracking-wide"
            >
              {message}
            </motion.h2>

            {/* SUBTEXT */}
            <p className="text-sm text-amber-700/80">
              Tuungane katika Sala kila siku
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-xl font-medium transition shadow-md"
            >
              Endelea
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
