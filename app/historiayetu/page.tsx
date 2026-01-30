"use client";

import { motion } from "framer-motion";

export default function MtandaoWaSalaPage() {
  return (
    <main className="w-full text-gray-800">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-white px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/wanasali.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mtandao wa Sala wa Baba Mtakatifu Ulimwenguni
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Ushirika wa Kipapa unaowaunganisha Wakatoliki kote duniani
            kukabili changamoto za wanadamu na za utume wa Kanisa
            kwa njia ya Sala na matendo mema.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700"
        >
          Changamoto hizi hutolewa kila mwezi kwa Kanisa lote kupitia
          <span className="font-semibold text-amber-600"> Nia za Sala za Baba Mtakatifu</span>.
          Kila Mkristo anaalikwa kuziombea na kuziishi kwa vitendo katika maisha ya kila siku,
          akichangia kuujenga ulimwengu wa matumaini, huruma, na mshikamano.
        </motion.p>
      </section>

      {/* CHIMBUKO */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Chimbuko</h2>
            <p className="leading-relaxed text-gray-700">
              Mtandao wa Sala wa Baba Mtakatifu ulianzishwa mwaka 1884 kama “Utume wa Sala”.
              Ulizaliwa kutokana na hamu ya waamini kushiriki kazi ya kimisionari,
              hata wale ambao hawangeweza kusafiri mbali. Suluhisho likawa ni kushiriki
              utume huo kwa njia ya Sala na kwa kuuishi vema Ukristo wao katika maisha ya kila siku.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Leo, utume huu upo katika nchi 92 na unaunganisha zaidi ya Wakatoliki milioni 22,
              ukiwajumuisha pia vijana kupitia tawi la
              <span className="font-semibold"> Vijana Wana-Ekaristia (EYM)</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >
            <h3 className="text-xl font-semibold mb-2 text-amber-600">Ulimwengu Mmoja</h3>
            <p className="text-gray-700">
              Kutoka 1884 hadi leo, Mtandao wa Sala umekuwa daraja
              linalowaunganisha waamini duniani kote kuwa sauti moja ya Sala,
              mioyo iliyounganishwa kwa ajili ya Kristo na ulimwengu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION CARDS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Jukumu Letu",
              text: "Kutumia Sala na matendo mema kama njia ya kukabiliana na changamoto za wanadamu na za utume wa Kanisa.",
            },
            {
              title: "Lengo Letu",
              text: "Kuchangia katika kuutakatifuza ulimwengu kwa kuzisali na kuziishi nia za Sala za Baba Mtakatifu.",
            },
            {
              title: "Utume Wetu",
              text: "Kuwa mitume wa Kristo katika maisha ya kila siku kupitia “Njia ya Moyo” – njia ya huruma kwa ulimwengu.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-3 text-amber-600">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
