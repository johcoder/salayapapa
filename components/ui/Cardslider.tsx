"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Video ya Papa",
    description:
      "Angalia video ya Baba Mtakatifu akiongoza Nia ya Sala ya mwezi huu.",
    image: "/popesvideologo.jpg",
    link: "/video-ya-papa",
    logo: "/pope-logo.png", // optional logo overlay
  },
  {
    title: "Click to Pray Service",
    description:
      "Jiunge katika huduma za sala, kushiriki matendo ya ibada na maombi ya kila siku.",
    image: "/clicktopray.jpg",
    link: "/pray-service",
  },
  {
    title: "Click to Pray Rosary",
    description:
      "Ungana nasi kwa Sala ya Rosari kila siku na tafakari Nia za Papa.",
    image: "/erosary.jpg",
    link: "/pray-rosary",
  },
];

export default function InteractiveCards() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Ungana na Sala za Mtandaoni
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.a
              key={i}
              href={card.link}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                {/* Logo overlay for first card */}
                {card.logo && (
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-lg">
                    <Image
                      src={card.logo}
                      alt="Logo"
                      width={48}   // adjusted size
                      height={48}  // adjusted size
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-700 flex-1">{card.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
