"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = () => {
    const subject = encodeURIComponent("Ujumbe kutoka RMOP Website");
    const body = encodeURIComponent(
      `Jina: ${name}\nBarua pepe: ${email}\n\nUjumbe:\n${message}`
    );

    window.location.href = `mailto:kabutta@jesuits.net?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Habari RMOP Tanzania,\n\nJina: ${name}\nBarua pepe: ${email}\n\nUjumbe:\n${message}`
    );

    window.open(`https://wa.me/255754865401?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-amber-600 px-4 py-20">
      <div className="mx-auto max-w-6xl grid gap-14 md:grid-cols-2 items-start">

        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-white">Mawasiliano</h1>
          <p className="mt-4 max-w-xl leading-relaxed text-amber-100">
            Tungependa kusikia kutoka kwako. Iwe ni swali, pendekezo,
            au hamu ya kujiunga nasi, tafadhali wasiliana nasi kupitia
            fomu hii au njia zilizo hapa chini.
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            {/* TANZANIA */}
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                🇹🇿 TANZANIA
              </h3>
              <p className="leading-relaxed text-amber-100">
                <strong className="text-white">
                  Fr. Josephat Leander Kabutta, SJ
                </strong><br />
                Mkurugenzi wa Utume wa Sala Tanzania<br />
                S. L. P. 266, Mwanza – TANZANIA
              </p>
              <p className="mt-4 text-amber-100">
                📧 Popesprayer@aorjesuits.org<br />
                📞 +255 754 865 401
              </p>
            </div>

            {/* KENYA */}
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                🇰🇪 KENYA
              </h3>
              <p className="leading-relaxed text-amber-100">
                <strong className="text-white">Fr. Jonas Keplimo</strong><br />
                National Coordinator
              </p>
              <p className="mt-4 text-amber-100">
                📧 omilpik@gmail.com<br />
                📞 +254 733 343 488
              </p>
            </div>

            {/* UGANDA 1 */}
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                🇺🇬 UGANDA
              </h3>
              <p className="leading-relaxed text-amber-100">
                <strong className="text-white">
                  Br. Sseruga Noa Mawaggali FICP
                </strong><br />
                National Coordinator
              </p>
              <p className="mt-4 text-amber-100">
                📧 nmsseru@gmail.com<br />
                📞 +256 782 524 779<br />
                📞 +256 703 581 048
              </p>
            </div>

            {/* UGANDA 2 */}
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                ET ETHIOPIA
              </h3>
              <p className="leading-relaxed text-amber-100">
                <strong className="text-white">
                  Biruktawit Assefa Kassa
                </strong><br />
                National Director of PWPN
              </p>
              <p className="mt-4 text-amber-100">
                📧 biruktawitkassa@gmail.com<br />
                📞 +251 911 430 310
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-2xl bg-white p-8 shadow-xl"
        >
          <div className="space-y-5">

            <div>
              <label className="text-sm font-medium text-slate-700">
                Jina Kamili
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Andika jina lako"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Barua pepe
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mfano@email.com"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Ujumbe
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Andika ujumbe wako hapa..."
                className="mt-1 min-h-30"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                onClick={handleEmail}
                className="bg-amber-600 text-white hover:bg-amber-700"
              >
                Tuma kwa Email
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 text-white hover:bg-green-700"
              >
                Tuma WhatsApp
              </Button>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
