"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createClient } from "@/utils/superbase/client"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("subscribers")
        .insert({ email: email.trim().toLowerCase(), name: name.trim() })

      if (error) {
        // Duplicate email error
        if (error.code === "23505") {
          setMessage("Barua pepe hii imeshasajiliwa!")
          setStatus("error")
        } else {
          throw error
        }
        return
      }

      setStatus("success")
      setMessage("Umesajiliwa! Utapata habari zetu kila wakati.")
      setEmail("")
      setName("")
    } catch {
      setStatus("error")
      setMessage("Hitilafu imetokea. Jaribu tena.")
    }
  }

  return (
    <section className="relative py-20 px-6 bg-[#fdf8f0] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center mx-auto mb-5 shadow-md">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <p
            className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Habari za Sala
          </p>
          <h2
            className="text-4xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Jiunge na Familia Yetu
          </h2>
          <p className="text-stone-500 text-base leading-relaxed"
            style={{ fontFamily: "'Lora', Georgia, serif" }}>
            Sajili barua pepe yako upate waraka wa sala, taarifa mpya na
            mwongozo wa kila mwezi moja kwa moja kwenye sanduku lako.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl shadow-lg border border-amber-100 p-8">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-stone-800 mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Asante!
                </h3>
                <p className="text-stone-500" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  {message}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-amber-600 underline"
                >
                  Sajili barua pepe nyingine
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-stone-600 mb-1">
                    Jina lako (si lazima)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="mfano: Maria Salome"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-stone-600 mb-1">
                    Barua Pepe <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mfano: salome@gmail.com"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-2">
                    ✗ {message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-200/60 hover:shadow-lg tracking-wide mt-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
                >
                  {status === "loading" ? "Inasajili..." : "Sajili Sasa →"}
                </button>

                <p className="text-xs text-stone-400 text-center pt-1"
                  style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  Hatutumii barua pepe yako vibaya. Unaweza kujisajili wakati wowote.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
