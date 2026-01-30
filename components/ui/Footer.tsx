// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Karibu", href: "/" },
  { name: "Nia ya Sala", href: "/niayasala" },
  { name: "Historia Yetu", href: "/historiayetu" },
  { name: "EYM", href: "/eym" },
  { name: "Waraka Wa Sala", href: "/warakawasala" },
  { name: "Mawasiliano", href: "/mawasiliano" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Amber Glow */}
      <div className="absolute -top-24 -right-24 w-105 h-105 bg-amber-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -left-24 w-75 h-75 bg-amber-600/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl border border-amber-600/40 bg-black/40 backdrop-blur-md p-8"
          >
            <Image
              src="/logo3.png"
              alt="RMOP Tanzania Logo"
              width={400}
              height={130}
              className="object-contain mb-6"
            />

            <h3 className="text-2xl font-bold mb-4">
              Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni
            </h3>

            <p className="text-white/70 leading-relaxed">
              Tunajenga jumuiya imara ya vijana kupitia Sala, imani, na huduma.
              Jukwaa hili linaunganisha watu na safari ya kiroho kwa njia ya kisasa.
            </p>
          </motion.div>

          {/* Links Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl border border-amber-600/40 bg-black/40 backdrop-blur-md p-8"
          >
            <h4 className="font-semibold mb-6">Kurasa</h4>

            <ul className="space-y-4">
              {links.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.href}
                    className="relative inline-block text-white/70 hover:text-white transition"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-amber-600 transition-all duration-300 hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl border border-amber-600/40 bg-black/40 backdrop-blur-md p-8"
          >
            <h4 className="font-semibold mb-4">Jiunge Nasi</h4>

            <p className="text-white/70 mb-6">
              Kuwa sehemu ya imani na matumaini.
            </p>

            {/* ✅ SAFE BUTTON (no nested buttons) */}
            <motion.div
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 0px 25px rgba(245, 158, 11, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="px-7 py-3 rounded-xl bg-amber-600 text-black font-semibold shadow-lg"
              >
                <Link href="/subscribe">Jiunge</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni.
          Haki zote zimehifadhiwa.
        </div>
      </motion.div>
    </footer>
  );
}
