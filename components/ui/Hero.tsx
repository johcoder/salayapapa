"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import CTAButton from "./CTAbutton";
import MottoList from "./waraka/MottoList";

const slides = [
  {
    type: "motto", // 👈 first slide type
    headline: "Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni",
    mottos: ["USHIRIKA WA KIPAPA", "MTANDAO WA WANAOSALI", "MITUME PALE TULIPO"],
  },
  {
    type: "normal",
    headline: "Nia ya Sala ya Baba Mtakatifu",
    body: "Mwezi Februari 2026 — Kwa ajili ya watoto wenye maradhi yasiyotibika",
  },
  {
    type: "normal",
    headline: "Umoja wa Waamini",
    body: "Kuimarisha imani na mshikamano katika Kristo kwa njia ya Sala ya pamoja",
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slider
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  // Parallax background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/popepraysq.png"
          alt="papa akisali"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Slider */}
      <div
        className="relative z-10 w-full max-w-4xl px-6 text-center text-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="bg-black/35 backdrop-blur-md rounded-3xl
                       shadow-2xl px-6 py-8 md:px-10 md:py-12"
          >
            {/* Headline (ALL SLIDES) */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {slides[index].headline}
            </h1>

            {/* FIRST SLIDE → ONLY MOTTOS */}
            {slides[index].type === "motto" && (
  <MottoList mottos={slides[index].mottos!} />
)}


            {/* OTHER SLIDES → NORMAL BODY */}
            {slides[index].type === "normal" && (
              <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-white/90">
                {slides[index].body}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <CTAButton href={"https://www.popesprayer.va/praywiththepope/"} text={"Sali na Papa"} />
        </motion.div>
      </div>
    </section>
  );
}
