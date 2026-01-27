// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Nia ya sala", href: "/niayasala" },
  { name: "Historia Yetu", href: "/historiayetu" },
  { name: "EYM", href: "/eym" },
  { name: "Waraka Wa Sala", href: "/warakawasala" },
  { name: "Mawasiliano", href: "/mawasiliano" },
];

export default function Footer() {
  return (
    <footer className="relative mt-40">
      {/* Clipped Background */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3">RMOP Tanzania</h3>
            <p className="text-white/70 leading-relaxed">
              Tunajenga jumuiya imara ya vijana kupitia sala, imani, na huduma.
              Jukwaa hili linaunganisha watu na safari ya kiroho kwa njia ya kisasa.
            </p>
          </div>

          {/* Links (from Navbar) */}
          <div>
            <h4 className="font-semibold mb-4">Kurasa</h4>
            <ul className="space-y-3 text-white/70">
              {links.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 8 }}
                  className="transition cursor-pointer hover:text-white"
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Jiunge Nasi</h4>
            <p className="text-white/70 mb-5">
              Kuwa sehemu ya harakati ya vijana katika imani na matumaini.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-amber-600 text-black font-medium shadow-lg"
            >
              Jiunge
            </motion.button>
          </div>
        </div>

        <div className="mt-20 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} RMOP Tanzania. Haki zote zimehifadhiwa.
        </div>
      </motion.div>
    </footer>
  );
}
