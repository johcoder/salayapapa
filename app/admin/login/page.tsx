"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const FONT_DISPLAY = "'Cormorant Garamond', Georgia, serif"
const FONT_BODY = "'Lora', Georgia, serif"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [showPassword, setShowPassword] = useState(false)
  const [attempts, setAttempts] = useState(0)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    // Small delay for UX feel
    await new Promise(r => setTimeout(r, 600))

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/admin")
      router.refresh()
    } else {
      setAttempts(a => a + 1)
      setStatus("error")
      setPassword("")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <div
      className="min-h-screen bg-[#fdf8f0] flex items-center justify-center px-4 relative overflow-hidden"
      style={{ fontFamily: FONT_BODY }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lora:wght@400;500&display=swap');`}</style>

      {/* Background cross grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 48px, #92400e 48px, #92400e 50px),
            repeating-linear-gradient(90deg, transparent, transparent 48px, #92400e 48px, #92400e 50px)
          `,
        }}
      />

      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-10">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <svg className="w-9 h-9 text-amber-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-amber-600 uppercase tracking-[0.35em] text-xs font-semibold mb-3"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            Eneo la Msimamizi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-5xl font-bold text-stone-800"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            Karibu Tena
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent to-amber-400" />
            <div className="w-2 h-2 rotate-45 bg-amber-500" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-amber-400" />
          </motion.div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-amber-100 p-8"
        >
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Password field */}
            <div>
              <label className="block text-sm font-semibold text-stone-600 mb-2">
                Nywila ya Msimamizi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  disabled={status === "loading"}
                  className={`w-full border rounded-xl px-4 py-3.5 pr-12 text-stone-700 focus:outline-none focus:ring-2 transition-all bg-amber-50/30 ${
                    status === "error"
                      ? "border-red-300 focus:ring-red-200 bg-red-50/30"
                      : "border-stone-200 focus:ring-amber-300"
                  }`}
                />
                {/* Show/hide toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-amber-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <span>
                    Nywila si sahihi.
                    {attempts >= 3 && " Umejaribu mara nyingi sana."}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading" || !password}
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-200/60 hover:shadow-lg flex items-center justify-center gap-2"
              style={{ fontFamily: FONT_DISPLAY, fontSize: "1.1rem" }}
            >
              {status === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Inaingia...
                </>
              ) : (
                <>
                  Ingia Dashibodi
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Back link */}
        <p className="text-center mt-6 text-sm text-stone-400">
          <a href="/" className="hover:text-amber-600 transition-colors">
            ← Rudi Tovuti
          </a>
        </p>
      </motion.div>
    </div>
  )
}
