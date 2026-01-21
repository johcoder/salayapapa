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

    // Replace with your real WhatsApp number (no +, no spaces)
    window.open(`https://wa.me/255754865401?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-amber-600 px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white"
        >
          <h1 className="text-4xl font-bold">Mawasiliano</h1>
          <p className="mt-4 leading-relaxed text-amber-100">
            Tungependa kusikia kutoka kwako. Iwe ni swali, pendekezo,
            au hamu ya kujiunga nasi, tafadhali wasiliana nasi kupitia
            fomu hii au njia zilizo hapa chini.
          </p>

          <div className="mt-8 space-y-4 text-amber-100">
            <p>
                <strong className="text-white">Fr. Leander J. Kabutta, SJ. <br />
Eastern Africa Regional Director, <br />
Pope’s Worldwide Prayer Network</strong> <br />
              <strong className="text-white">St Francis Xavier Parish,
               <br />P. O. Box 266 Mwanza, TANZANIA </strong>
            </p>
            <p>
              <strong className="text-white">Simu:</strong> +255 7548 65401 <br />
+255 7864 97690
            </p>
            <p>
              <strong className="text-white">Barua pepe:</strong> info@rmoptanzania.org
            </p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-2xl bg-white p-8 shadow-lg"
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
