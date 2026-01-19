// components/AboutSalayaPapa.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSalayaPapa() {
  return (
    <section className="w-full py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About SalayaPapa
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are the Pope’s Worldwide Prayer Network, a mission at the heart of the Church. Our purpose is simple: to pray for and address the challenges facing humanity and the mission of the Church, guided by the Pope’s monthly intentions.
Through prayer, service, and spiritual formation, we connect hearts across continents, growing in compassion and solidarity. But this is more than just prayer—it’s a mission to live the Gospel daily, transforming our lives and the world through a journey we call “The Way of the Heart.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to empower communities by bringing essential services
            closer to everyone through innovation, reliability, and ease of use.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-black text-white font-medium shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="relative w-full h-80 md:h-105 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
        >
          <Image
            src="/popepraywithpeople.jpeg"  // put image in /public
            alt="SalayaPapa"
            fill
            className="object-cover"
          />

          {/* Glow overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/20" />
        </motion.div>

      </div>
    </section>
  );
}
