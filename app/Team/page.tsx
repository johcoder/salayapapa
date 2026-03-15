"use client";
import { motion } from "framer-motion";
import Team from "@/components/ui/Team";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#fdf8f0] overflow-x-hidden">

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">

        {/* Radial warm glow behind heading */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />

        {/* Subtle cross-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 48px, #92400e 48px, #92400e 50px),
              repeating-linear-gradient(90deg, transparent, transparent 48px, #92400e 48px, #92400e 50px)`,
          }}
        />

        {/* Ornamental top icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative z-10 mb-6"
        >
          <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center shadow-md">
            <svg
              className="w-8 h-8 text-amber-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 text-amber-600 uppercase tracking-[0.35em] text-xs font-semibold mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Mtandao wa Sala
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          className="relative z-10 text-6xl md:text-7xl font-bold text-stone-800 leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Watu Nyuma ya
          <br />
          <span className="bg-linear-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Dhamira Hii
          </span>
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-10 flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-20 bg-linear-to-r from-transparent to-amber-400" />
          <div className="w-2 h-2 rotate-45 bg-amber-500" />
          <div className="h-px w-20 bg-linear-to-l from-transparent to-amber-400" />
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="relative z-10 max-w-2xl text-stone-600 text-lg leading-relaxed"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Tunaamini kwamba sala inaunganisha mioyo. Timu yetu inajumuisha watu
          wanaojitoa kwa upendo, wakihakikisha kwamba kila siku unaweza kusali
          pamoja na Baba Mtakatifu na Kanisa lote duniani.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative z-10 mt-16 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest uppercase text-stone-400"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Gundua
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-5 h-8 rounded-full border-2 border-amber-300 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-amber-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Divider Wave ── */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 text-amber-100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ── Quote Banner ── */}
      <section className="bg-amber-100 py-12 px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p
            className="text-2xl md:text-3xl text-amber-900 font-medium leading-relaxed italic"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            "Maana pale ambapo wawili au watatu wamekusanyika kwa jina langu,
            mimi nipo kati yao."
          </p>
          <footer
            className="mt-4 text-amber-600 text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            — Mathayo 18:20
          </footer>
        </motion.blockquote>
      </section>

      {/* ── Divider Wave (bottom) ── */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 text-amber-100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ── Team Component ── */}
      <Team />

      {/* ── Footer CTA ── */}
      <section className="py-20 px-6 text-center bg-[#fdf8f0]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-amber-300" />
            <div className="w-2 h-2 rotate-45 bg-amber-400" />
            <div className="h-px w-16 bg-amber-300" />
          </div>
          <p
            className="text-stone-500 text-base leading-relaxed"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Je, unataka kujiunga na timu yetu ya sala? Wasiliana nasi leo.
          </p>
          <a
            href="/mawasiliano"
            className="inline-block mt-6 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl tracking-wide transition-all duration-300 shadow-md hover:shadow-amber-300/50 hover:shadow-lg"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Wasiliana Nasi
          </a>
        </motion.div>
      </section>

    </main>
  );
}
