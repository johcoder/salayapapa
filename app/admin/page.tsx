"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createClient } from "@/utils/supabase/client"
import LogoutButton from "@/components/ui/LogoutButton"

// ─── Types ───────────────────────────────────────────────
type Tab = "overview" | "waraka" | "subscribers" | "email"

type Waraka = {
  id: string
  title: string
  month: string
  year: number
  description: string
  pdf_url: string
  language: string
  is_active: boolean
  created_at: string
}

type Subscriber = {
  id: string
  email: string
  name: string
  is_active: boolean
  subscribed_at: string
}

// ─── Constants ───────────────────────────────────────────
const MONTHS = [
  "Januari","Februari","Machi","Aprili","Mei","Juni",
  "Julai","Agosti","Septemba","Oktoba","Novemba","Desemba"
]

const FONT_DISPLAY = "'Cormorant Garamond', Georgia, serif"
const FONT_BODY = "'Lora', Georgia, serif"

// ─── Sidebar Tab Button ───────────────────────────────────
function TabBtn({ id, label, icon, active, onClick, badge }: {
  id: Tab; label: string; icon: React.ReactNode
  active: boolean; onClick: () => void; badge?: number
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-amber-600 text-white shadow-md shadow-amber-200"
          : "text-stone-500 hover:bg-amber-50 hover:text-amber-700"
      }`}
      style={{ fontFamily: FONT_BODY }}
    >
      <span className="w-5 h-5 shrink-0">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
          active ? "bg-white/20 text-white" : "bg-amber-100 text-amber-700"
        }`}>
          {badge}
        </span>
      )}
    </button>
  )
}

// ─── Main Component ──────────────────────────────────────
export default function AdminDashboard() {
  const supabase = createClient()
  const [activeTab, setActiveTab] = useState<Tab>("overview")
  const [warakaList, setWarakaList] = useState<Waraka[]>([])
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)

  // Waraka form
  const [wTitle, setWTitle] = useState("")
  const [wMonth, setWMonth] = useState("Januari")
  const [wYear, setWYear] = useState(new Date().getFullYear())
  const [wDesc, setWDesc] = useState("")
  const [wLang, setWLang] = useState("sw")
  const [wFile, setWFile] = useState<File | null>(null)
  const [wSubmitting, setWSubmitting] = useState(false)
  const [wMsg, setWMsg] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Email form
  const [eAdminKey, setEAdminKey] = useState("")
  const [eSubject, setESubject] = useState("")
  const [eMessage, setEMessage] = useState("")
  const [eSending, setESending] = useState(false)
  const [eMsg, setEMsg] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    fetchAll()
  }, [])

  async function fetchAll() {
    setLoading(true)
    const [{ data: w }, { data: s }] = await Promise.all([
      supabase.from("waraka").select("*").order("created_at", { ascending: false }),
      supabase.from("subscribers").select("*").order("subscribed_at", { ascending: false }),
    ])
    setWarakaList(w || [])
    setSubscribers(s || [])
    setLoading(false)
  }

  // ── Waraka actions ──
async function handleWarakaSubmit(e: React.FormEvent) {
  e.preventDefault()
  if (!wFile) { setWMsg({ type: "error", text: "Chagua faili la PDF." }); return }
  setWSubmitting(true); setWMsg(null)

  try {
    // ── Step 1: Upload PDF via API route (bypasses RLS) ──
    const formData = new FormData()
    formData.append("file", wFile)

    const uploadRes = await fetch("/api/admin/upload-pdf", {
      method: "POST",
      body: formData,
    })

    // Read as text first to avoid JSON parse crash
    const rawText = await uploadRes.text()
    let uploadData: { url?: string; error?: string }
    try {
      uploadData = JSON.parse(rawText)
    } catch {
      console.error("Server returned non-JSON:", rawText)
      throw new Error("Seva ilirudisha jibu baya. Angalia console.")
    }

    if (!uploadRes.ok) throw new Error(uploadData.error || "Upload imeshindwa.")

    // ── Step 2: Insert waraka row ──
    const { error: insErr } = await supabase.from("waraka").insert({
      title: wTitle,
      month: wMonth,
      year: wYear,
      description: wDesc,
      language: wLang,
      pdf_url: uploadData.url,
      is_active: true,
    })
    if (insErr) throw insErr

    setWMsg({ type: "success", text: "Waraka umehifadhiwa!" })
    setWTitle(""); setWDesc(""); setWFile(null)
    fetchAll()

  } catch (err: unknown) {
    setWMsg({ type: "error", text: err instanceof Error ? err.message : "Hitilafu imetokea." })
  } finally {
    setWSubmitting(false)
  }
}

  async function toggleWaraka(item: Waraka) {
    await supabase.from("waraka").update({ is_active: !item.is_active }).eq("id", item.id)
    fetchAll()
  }

  async function deleteWaraka(item: Waraka) {
    if (!confirm(`Futa "${item.title}"?`)) return
    const parts = item.pdf_url.split("/"); const fileName = parts[parts.length - 1]
    await supabase.storage.from("waraka-pdfs").remove([fileName])
    await supabase.from("waraka").delete().eq("id", item.id)
    fetchAll()
  }

  // ── Subscriber actions ──
  async function toggleSubscriber(sub: Subscriber) {
    await supabase.from("subscribers").update({ is_active: !sub.is_active }).eq("id", sub.id)
    fetchAll()
  }

  async function deleteSubscriber(sub: Subscriber) {
    if (!confirm(`Futa ${sub.email}?`)) return
    await supabase.from("subscribers").delete().eq("id", sub.id)
    fetchAll()
  }

  // ── Email send ──
  async function handleSendEmail(e: React.FormEvent) {
    e.preventDefault(); setESending(true); setEMsg(null)
    try {
      const res = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject: eSubject, message: eMessage, adminKey: eAdminKey }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setEMsg({ type: "success", text: data.message })
      setESubject(""); setEMessage("")
    } catch (err: unknown) {
      setEMsg({ type: "error", text: err instanceof Error ? err.message : "Hitilafu imetokea." })
    } finally { setESending(false) }
  }

  // ── Stats ──
  const activeWaraka = warakaList.filter(w => w.is_active).length
  const activeSubscribers = subscribers.filter(s => s.is_active).length

  const tabs: { id: Tab; label: string; icon: React.ReactNode; badge?: number }[] = [
    {
      id: "overview", label: "Muhtasari",
      icon: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
    },
    {
      id: "waraka", label: "Waraka", badge: warakaList.length,
      icon: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    },
    {
      id: "subscribers", label: "Wanachama", badge: subscribers.length,
      icon: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
    },
    {
      id: "email", label: "Tuma Barua",
      icon: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
    },
  ]

  return (
    <div className="min-h-screen bg-[#fdf8f0] flex" style={{ fontFamily: FONT_BODY }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Lora&display=swap');`}</style>

      {/* ── Sidebar ── */}
      <aside className="w-64 shrink-0 bg-white border-r border-amber-100 shadow-sm flex flex-col min-h-screen sticky top-0">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-amber-100">
          <p className="text-amber-600 uppercase tracking-[0.25em] text-xs font-semibold mb-1">Msimamizi</p>
          <h1 className="text-2xl font-bold text-stone-800" style={{ fontFamily: FONT_DISPLAY }}>
            Sala ya Papa
          </h1>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(tab => (
            <TabBtn
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              badge={tab.badge}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-amber-100">
          <a href="/" className="flex items-center gap-2 text-xs text-stone-400 hover:text-amber-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Rudi Tovuti
          </a>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >

            {/* ══ OVERVIEW TAB ══ */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-stone-800 mb-1" style={{ fontFamily: FONT_DISPLAY }}>
                    Habari za Asubuhi 👋
                  </h2>
                  <p className="text-stone-400 text-sm">Hapa ndipo unaweza kusimamia tovuti yote.</p>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Waraka Wote", value: warakaList.length, color: "text-stone-700", bg: "bg-stone-50" },
                    { label: "Waraka Unaoonekana", value: activeWaraka, color: "text-green-600", bg: "bg-green-50" },
                    { label: "Wanachama Wote", value: subscribers.length, color: "text-amber-700", bg: "bg-amber-50" },
                    { label: "Wanaopokea Barua", value: activeSubscribers, color: "text-blue-600", bg: "bg-blue-50" },
                  ].map(stat => (
                    <div key={stat.label} className={`${stat.bg} rounded-2xl p-5 border border-white shadow-sm`}>
                      <p className={`text-4xl font-bold ${stat.color}`} style={{ fontFamily: FONT_DISPLAY }}>{stat.value}</p>
                      <p className="text-xs text-stone-400 mt-2 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent waraka */}
                <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6">
                  <h3 className="text-xl font-bold text-stone-700 mb-4" style={{ fontFamily: FONT_DISPLAY }}>Waraka wa Hivi Karibuni</h3>
                  {warakaList.slice(0, 3).map(item => (
                    <div key={item.id} className="flex items-center justify-between py-3 border-b border-stone-50 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-stone-700">{item.title}</p>
                        <p className="text-xs text-stone-400">{item.month} {item.year}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${item.is_active ? "bg-green-100 text-green-600" : "bg-stone-100 text-stone-400"}`}>
                        {item.is_active ? "Inaonekana" : "Imefichwa"}
                      </span>
                    </div>
                  ))}
                  {warakaList.length === 0 && <p className="text-stone-400 text-sm">Hakuna waraka bado.</p>}
                </div>

                {/* Recent subscribers */}
                <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6">
                  <h3 className="text-xl font-bold text-stone-700 mb-4" style={{ fontFamily: FONT_DISPLAY }}>Wanachama wa Hivi Karibuni</h3>
                  {subscribers.slice(0, 3).map(sub => (
                    <div key={sub.id} className="flex items-center justify-between py-3 border-b border-stone-50 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-stone-700">{sub.email}</p>
                        <p className="text-xs text-stone-400">{sub.name || "Bila jina"}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${sub.is_active ? "bg-green-100 text-green-600" : "bg-stone-100 text-stone-400"}`}>
                        {sub.is_active ? "Anapokelaa" : "Amezimwa"}
                      </span>
                    </div>
                  ))}
                  {subscribers.length === 0 && <p className="text-stone-400 text-sm">Hakuna wanachama bado.</p>}
                </div>
              </div>
            )}

            {/* ══ WARAKA TAB ══ */}
            {activeTab === "waraka" && (
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-stone-800" style={{ fontFamily: FONT_DISPLAY }}>Simamia Waraka</h2>

                {/* Add form */}
                <div className="bg-white rounded-3xl shadow-sm border border-amber-100 p-8">
                  <h3 className="text-xl font-bold text-stone-700 mb-6" style={{ fontFamily: FONT_DISPLAY }}>➕ Ongeza Waraka Mpya</h3>
                  <form onSubmit={handleWarakaSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-stone-600 mb-1">Kichwa cha Habari *</label>
                      <input type="text" required value={wTitle} onChange={e => setWTitle(e.target.value)}
                        placeholder="mfano: Waraka wa Sala – Aprili 2026"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-stone-600 mb-1">Mwezi</label>
                        <select value={wMonth} onChange={e => setWMonth(e.target.value)}
                          className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30">
                          {MONTHS.map(m => <option key={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-stone-600 mb-1">Mwaka</label>
                        <input type="number" required value={wYear} onChange={e => setWYear(Number(e.target.value))}
                          min={2020} max={2099}
                          className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-stone-600 mb-1">Lugha</label>
                        <select value={wLang} onChange={e => setWLang(e.target.value)}
                          className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30">
                          <option value="sw">Kiswahili</option>
                          <option value="en">English</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-600 mb-1">Maelezo (si lazima)</label>
                      <textarea value={wDesc} onChange={e => setWDesc(e.target.value)} rows={2} placeholder="Maelezo mafupi..."
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30 resize-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-600 mb-1">Faili la PDF *</label>
                      <input type="file" accept="application/pdf" onChange={e => setWFile(e.target.files?.[0] || null)}
                        className="w-full border-2 border-dashed border-amber-300 rounded-xl px-4 py-5 text-stone-500 bg-amber-50/20 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-100 file:text-amber-700 file:font-semibold hover:bg-amber-50" />
                      {wFile && <p className="mt-1 text-xs text-amber-700">✓ {wFile.name}</p>}
                    </div>
                    {wMsg && (
                      <div className={`rounded-xl px-4 py-3 text-sm font-medium ${wMsg.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                        {wMsg.type === "success" ? "✓ " : "✗ "}{wMsg.text}
                      </div>
                    )}
                    <button type="submit" disabled={wSubmitting}
                      className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white font-bold rounded-xl transition-all duration-300 shadow-md tracking-wide"
                      style={{ fontFamily: FONT_DISPLAY, fontSize: "1.05rem" }}>
                      {wSubmitting ? "Inahifadhi..." : "Hifadhi Waraka"}
                    </button>
                  </form>
                </div>

                {/* List */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-stone-700" style={{ fontFamily: FONT_DISPLAY }}>
                    Waraka Uliopo ({warakaList.length})
                  </h3>
                  {loading ? (
                    [1,2,3].map(i => <div key={i} className="h-16 rounded-2xl bg-amber-100/60 animate-pulse" />)
                  ) : warakaList.length === 0 ? (
                    <p className="text-stone-400 text-center py-8">Hakuna waraka bado.</p>
                  ) : warakaList.map(item => (
                    <div key={item.id} className={`flex items-center justify-between gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border ${item.is_active ? "border-amber-100" : "border-stone-100 opacity-60"}`}>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-stone-700 truncate">{item.title}</p>
                        <p className="text-xs text-stone-400 mt-0.5">{item.month} {item.year} · {item.language === "sw" ? "Kiswahili" : "English"}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => toggleWaraka(item)}
                          className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${item.is_active ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-stone-100 text-stone-500 hover:bg-stone-200"}`}>
                          {item.is_active ? "Inaonekana" : "Imefichwa"}
                        </button>
                        <a href={item.pdf_url} target="_blank" rel="noopener noreferrer"
                          className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 font-semibold transition-all">
                          Angalia
                        </a>
                        <button onClick={() => deleteWaraka(item)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-semibold transition-all">
                          Futa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══ SUBSCRIBERS TAB ══ */}
            {activeTab === "subscribers" && (
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-stone-800" style={{ fontFamily: FONT_DISPLAY }}>Wanachama</h2>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Wote", value: subscribers.length, color: "text-stone-700" },
                    { label: "Wanaopokea", value: activeSubscribers, color: "text-green-600" },
                    { label: "Waliozimwa", value: subscribers.length - activeSubscribers, color: "text-red-400" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-amber-100">
                      <p className={`text-4xl font-bold ${stat.color}`} style={{ fontFamily: FONT_DISPLAY }}>{stat.value}</p>
                      <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* List */}
                <div className="space-y-2">
                  {loading ? (
                    [1,2,3].map(i => <div key={i} className="h-14 rounded-2xl bg-amber-100/60 animate-pulse" />)
                  ) : subscribers.length === 0 ? (
                    <p className="text-stone-400 text-center py-10">Hakuna wanachama bado.</p>
                  ) : subscribers.map(sub => (
                    <div key={sub.id} className={`flex items-center justify-between gap-4 bg-white rounded-2xl px-5 py-3.5 shadow-sm border ${sub.is_active ? "border-amber-100" : "border-stone-100 opacity-60"}`}>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-stone-700 text-sm truncate">{sub.email}</p>
                        <p className="text-xs text-stone-400 mt-0.5">{sub.name || "Bila jina"} · {new Date(sub.subscribed_at).toLocaleDateString("sw-TZ")}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => toggleSubscriber(sub)}
                          className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${sub.is_active ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-stone-100 text-stone-500 hover:bg-stone-200"}`}>
                          {sub.is_active ? "Anapokelaa" : "Amezimwa"}
                        </button>
                        <button onClick={() => deleteSubscriber(sub)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-semibold transition-all">
                          Futa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══ EMAIL TAB ══ */}
            {activeTab === "email" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-stone-800" style={{ fontFamily: FONT_DISPLAY }}>Tuma Barua Pepe</h2>
                  <p className="text-stone-400 text-sm mt-1">Tuma ujumbe kwa wanachama {activeSubscribers} wanaopokea barua.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-amber-100 p-8 max-w-2xl">
                  <form onSubmit={handleSendEmail} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-stone-600 mb-1">Nywila ya Msimamizi *</label>
                      <input type="password" required value={eAdminKey} onChange={e => setEAdminKey(e.target.value)}
                        placeholder="Weka nywila yako ya siri"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-600 mb-1">Kichwa cha Barua *</label>
                      <input type="text" required value={eSubject} onChange={e => setESubject(e.target.value)}
                        placeholder="mfano: Waraka wa Sala – Aprili 2026"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-stone-600 mb-1">Ujumbe *</label>
                      <textarea required rows={8} value={eMessage} onChange={e => setEMessage(e.target.value)}
                        placeholder="Andika ujumbe wako hapa..."
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30 resize-none" />
                    </div>
                    {eMsg && (
                      <div className={`rounded-xl px-4 py-3 text-sm font-medium ${eMsg.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                        {eMsg.type === "success" ? "✓ " : "✗ "}{eMsg.text}
                      </div>
                    )}
                    <button type="submit" disabled={eSending || activeSubscribers === 0}
                      className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white font-bold rounded-xl transition-all duration-300 shadow-md tracking-wide"
                      style={{ fontFamily: FONT_DISPLAY, fontSize: "1.05rem" }}>
                      {eSending ? "Inatuma..." : `Tuma kwa Watu ${activeSubscribers} →`}
                    </button>
                  </form>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
<LogoutButton/>
      </main>
    </div>
  )
}
