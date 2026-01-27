"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  description: string;
}

interface Props {
  slides: Slide[];
}

export default function ImageDescriptionSlider({ slides }: Props) {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6 p-8"
        >
          {/* Image (smaller now) */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0">
            <Image
              src={slides[index].image}
              alt="slider image"
              fill
              className="object-contain"
            />
          </div>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-amber-600 text-4xl md:text-xl font-medium leading-relaxed text-center md:text-left"
          >
            {slides[index].description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
