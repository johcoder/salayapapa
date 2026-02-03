"use client"

import { motion } from "framer-motion"

type MottoListProps = {
  mottos: string[]
}

export default function MottoList({ mottos }: MottoListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="flex flex-wrap justify-center gap-5 mt-6"
    >
      {mottos.map((motto) => (
        <motion.span
          key={motto}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="px-6 py-3 rounded-full
                     bg-amber-600/95 text-black
                     font-semibold tracking-wide
                     shadow-xl cursor-default"
        >
          {motto}
        </motion.span>
      ))}
    </motion.div>
  )
}
