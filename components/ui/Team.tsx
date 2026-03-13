"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Fr. Emmanuel Mkwawa",
    role: "Mratibu Mkuu",
    image: "/team/emmanuel.jpg",
    bio: "Mwongozaji wa kiroho na mwanzilishi wa mtandao wa sala.",
  },
  {
    name: "Sr. Agnes Nyamwezi",
    role: "Mshauri wa Kiroho",
    image: "/team/agnes.jpg",
    bio: "Dada wa watawa mwenye uzoefu wa miaka mingi katika huduma ya sala.",
  },
  {
    name: "Bro. Joseph Mwangi",
    role: "Mhariri wa Maudhui",
    image: "/team/joseph.jpg",
    bio: "Anashughulikia maandalizi ya maudhui ya kila siku ya sala.",
  },
  {
    name: "Maria Salome Kimaro",
    role: "Msanidi wa Teknolojia",
    image: "/team/maria.jpg",
    bio: "Mtaalamu wa teknolojia anayejenga mazingira ya kidijitali ya sala.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Team() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#fdf8f0]">
      {/* Decorative background cross pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 48px, #92400e 48px, #92400e 50px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 48px, #92400e 48px, #92400e 50px
          )`,
        }}
      />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <p
          className="text-amber-600 uppercase tracking-[0.3em] text-sm font-semibold mb-3"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Watu Wetu
        </p>
        <h2
          className="text-5xl font-bold text-stone-800 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Timu Yetu
        </h2>
        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-16 bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="h-px w-16 bg-amber-400" />
        </div>
      </div>

      {/* Team Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group flex flex-col items-center text-center"
          >
            {/* Image frame with golden border */}
            <div className="relative mb-5">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-amber-200 ring-offset-4 ring-offset-[#fdf8f0] shadow-lg group-hover:ring-amber-400 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to initials if image not found
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Initials fallback */}
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-amber-100 to-amber-200 text-amber-800 text-2xl font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
              </div>

              {/* Small decorative dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-[#fdf8f0] shadow-sm" />
            </div>

            {/* Name */}
            <h3
              className="text-xl font-bold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors duration-300"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {member.name}
            </h3>

            {/* Role badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-100 rounded-full mb-3">
              {member.role}
            </span>

            {/* Bio */}
            {member.bio && (
              <p className="text-stone-500 text-sm leading-relaxed max-w-50">
                {member.bio}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
