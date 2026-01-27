"use client";

import NiaYaSalaCard from "@/components/ui/Niayasalacard";
import { motion } from "framer-motion";

export default function NiaZaSalaPage() {
  return (
    <main className="w-full text-gray-800">
      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/africanpray.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nia ya Sala ya Baba Mtakatifu
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Kuunganisha sala na matendo kukabili  changamoto za wanadamu
            na utume wa Kanisa
          </p>
          <p className="text-lg md:text-xl"> Kila mwezi-Pamoja na Papa -Sauti Moja -Ulimwenguni Pote</p>
        </motion.div>
      </section>

      {/* WHAT IS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Nia ya Sala ni Nini?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700"
        >
          Nia ya Sala ya Papa huelekeza sala na matendo yetu kukabiliana na
          changamoto za ulimwengu na za utume wa Kanisa. Kila mwezi huanza na
          <span className="font-semibold text-amber-600"> Siku ya Sala Ulimwenguni</span>,
          ambapo waamini huanza kuishi nia mpya. Tunasali pamoja na tunaweka
          sala katika matendo—hivyo sala huipa maana na kusudi maisha yetu ya kila siku.
        </motion.p>
      </section>

      {/* PATHS */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Jinsi ya Kuishi kama Mtume wa Sala</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Ushiriki wa Wazi",
                text:
                  "Uko wazi kwa kila mbatizwa. Inahusisha kuingiza Nia za Sala za Papa katika sala za kila siku na kushiriki hasa Ijumaa ya Kwanza ya kila mwezi. Inaweza kufanywa na watu binafsi au vikundi kama wanakwaya, watumishi wa altare, wanafunzi, na jumuiya mbalimbali.",
              },
              {
                title: "Uanachama wa Utume",
                text:
                  "Ni njia ya kina zaidi kwa kuanzisha uhusiano na ofisi husika. Inajumuisha malezi, mikutano, mafungo na kufuatilia taarifa rasmi. Inaweza kuwa ya mtu binafsi au ya kikundi/jumuiya yenye muundo wa kitume.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl p-8"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP DETAILS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Mtu Binafsi",
              text:
                "Kuishi nyakati tatu za sala kila siku: Asubuhi (sala ya kujitoa), Mchana, na Usiku. Lengo ni kukua katika urafiki wa karibu na Bwana, kwa pamoja na Mama Maria.",
            },
            {
              title: "Kikundi/Jumuiya",
              text:
                "Jumuiya za parokia, shule, vyuo au vikundi vya kitume hushiriki sala, malezi, mafungo na matendo ya huruma; pia huunga mkono Vijana Wana-Ekaristia (EYM).",
            },
            {
              title: "Wakfu Binafsi",
              text:
                "Kwa wenye wito wa ukaribu na Moyo Mtakatifu wa Yesu. Hufanya agano rasmi na Kanisa, wakijiweka tayari kuhudumia familia ya Mtandao wa Sala na EYM.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-3 text-amber-600">{c.title}</h3>
              <p className="text-gray-700 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <NiaYaSalaCard title={"Nia ya sala "} description={"ungana nasi kwa kusoma au kudownload Nia ya sala"} viewLink={"/niazasala2026"} pdfLink={"/pdf/NIA ZA SALA ZA BABA MTAKATIFU 2026.pdf"} />
    </main>
  );
}
