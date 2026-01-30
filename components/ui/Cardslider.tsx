"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Video ya Papa",
    description:
      "Angalia video ya Baba Mtakatifu akiongoza Nia ya Sala ya mwezi huu.",
    image: "/popesvideologo.jpg",
    link: "https://thepopevideo.org/",
    logo: "/pope-logo.png", // optional logo overlay
  },
  {
    title: "Click to Pray Service",
    description:
      "Jiunge katika huduma za Sala, kushiriki matendo ya ibada na maombi ya kila siku.",
    image: "/clicktopray.jpg",
    link: "https://www.popesprayer.va/pray/#clicktopray",
  },
  {
    title: "Click to Pray Rosary",
    description:
      "Ungana nasi kwa Sala ya Rosari kila siku na tafakari Nia za Papa.",
    image: "/erosary.jpg",
    link: "https://clicktopray.org/eRosary/3",
  },
];

export default function InteractiveCards() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Ungana Nasi kwa Kusali Mtandaoni
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
                  width={456}
                  height={45}
                  className="object-cover"
                />
               
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
