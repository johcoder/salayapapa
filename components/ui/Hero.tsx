"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import CTAButton from "./CTAbutton";
import MottoList from "./waraka/MottoList";

const slides = [
  {
    type: "motto",
    headline: "Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni",
    mottos: [
      "USHIRIKA WA KIPAPA",
      "MTANDAO WA WANAOSALI",
      "MITUME PALE TULIPO",
    ],
  },
  {
    type: "normal",
    headline: "Nia ya Sala ya Baba Mtakatifu",
    body: "Mwezi Aprili 2026 — Kwa ajili ya Mapadre wenye changamoto",
  },
  {
    type: "normal",
    headline: "Umoja wa Waamini",
    body: "Kuimarisha imani na mshikamano katika Kristo kwa njia ya Sala ya pamoja",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="w-full min-h-[90vh] grid md:grid-cols-[1fr_1.4fr]">

      {/* LEFT SIDE IMAGE */}
      <div className="relative w-full h-[50vh] md:h-full overflow-hidden">
  <Image
    src="/popepraysmile.png"
    alt="Papa akisali"
    fill
    priority
    className="object-cover object-center"
  />
</div>

      {/* RIGHT SIDE CONTENT */}
      <div
        className="flex items-center justify-center bg-white text-amber-600 px-6 md:px-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="max-w-xl w-full text-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-amber-600 rounded-3xl shadow-xl p-8"
            >
              {/* Headline */}
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-amber-600">
                {slides[index].headline}
              </h1>

              {/* Motto slide */}
              {slides[index].type === "motto" && (
                <MottoList mottos={slides[index].mottos!} />
              )}

              {/* Normal slide */}
              {slides[index].type === "normal" && (
                <p className="text-lg md:text-xl text-amber-600 leading-relaxed">
                  {slides[index].body}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <CTAButton
              href="https://www.popesprayer.va/praywiththepope/"
              text="Sali na Papa"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}