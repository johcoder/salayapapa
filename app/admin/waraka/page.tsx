"use client"

import { useEffect, useState } from "react"
import { createClient, type Waraka } from "@/utils/superbase/client"

const MONTHS_SW = [
  "Januari", "Februari", "Machi", "Aprili", "Mei", "Juni",
  "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"
]

export default function AdminWarakaPage() {
  const supabase = createClient()

  const [warakaList, setWarakaList] = useState<Waraka[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Form state
  const [title, setTitle] = useState("")
  const [month, setMonth] = useState("Januari")
  const [year, setYear] = useState(new Date().getFullYear())
  const [description, setDescription] = useState("")
  const [language, setLanguage] = useState("sw")
  const [pdfFile, setPdfFile] = useState<File | null>(null)

  useEffect(() => {
    fetchAll()
  }, [])

  async function fetchAll() {
    const { data } = await supabase
      .from("waraka")
      .select("*")
      .order("created_at", { ascending: false })
    setWarakaList(data || [])
    setLoading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!pdfFile) {
      setMessage({ type: "error", text: "Tafadhali chagua faili la PDF." })
      return
    }

    setSubmitting(true)
    setMessage(null)

    try {
      // 1. Upload PDF to Supabase Storage
      const fileName = `${Date.now()}-${pdfFile.name.replace(/\s+/g, "-")}`
      const { error: uploadError } = await supabase.storage
        .from("waraka-pdfs")
        .upload(fileName, pdfFile, { contentType: "application/pdf" })

      if (uploadError) throw uploadError

      // 2. Get public URL
      const { data: urlData } = supabase.storage
        .from("waraka-pdfs")
        .getPublicUrl(fileName)

      // 3. Insert record into database
      const { error: insertError } = await supabase.from("waraka").insert({
        title,
        month,
        year,
        description,
        language,
        pdf_url: urlData.publicUrl,
        is_active: true,
      })

      if (insertError) throw insertError

      setMessage({ type: "success", text: "Waraka umehifadhiwa!" })
      // Reset form
      setTitle("")
      setMonth("Januari")
      setYear(new Date().getFullYear())
      setDescription("")
      setLanguage("sw")
      setPdfFile(null)
      // Refresh list
      fetchAll()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Hitilafu imetokea."
      setMessage({ type: "error", text: msg })
    } finally {
      setSubmitting(false)
    }
  }

  async function handleToggleActive(item: Waraka) {
    await supabase
      .from("waraka")
      .update({ is_active: !item.is_active })
      .eq("id", item.id)
    fetchAll()
  }

  async function handleDelete(item: Waraka) {
    if (!confirm(`Futa "${item.title}"?`)) return

    // Extract filename from URL and delete from storage
    const parts = item.pdf_url.split("/")
    const fileName = parts[parts.length - 1]
    await supabase.storage.from("waraka-pdfs").remove([fileName])

    // Delete from database
    await supabase.from("waraka").delete().eq("id", item.id)
    fetchAll()
  }

  return (
    <div
      className="min-h-screen bg-[#fdf8f0] py-16 px-4"
      style={{ fontFamily: "'Lora', Georgia, serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Lora&display=swap');`}</style>

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Usimamizi
          </p>
          <h1 className="text-4xl font-bold text-stone-800"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ongeza Waraka Mpya
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-amber-300" />
            <div className="w-2 h-2 rotate-45 bg-amber-500" />
            <div className="h-px w-16 bg-amber-300" />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12 border border-amber-100">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-stone-600 mb-1">
                Kichwa cha Habari <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="mfano: Waraka wa Sala – Aprili 2026"
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30"
              />
            </div>

            {/* Month + Year + Language row */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1">Mwezi</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30"
                >
                  {MONTHS_SW.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1">Mwaka</label>
                <input
                  type="number"
                  required
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  min={2020}
                  max={2099}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-600 mb-1">Lugha</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30"
                >
                  <option value="sw">Kiswahili</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-stone-600 mb-1">
                Maelezo (si lazima)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Maelezo mafupi kuhusu waraka huu..."
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/30 resize-none"
              />
            </div>

            {/* PDF Upload */}
            <div>
              <label className="block text-sm font-semibold text-stone-600 mb-1">
                Faili la PDF <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                  className="w-full border-2 border-dashed border-amber-300 rounded-xl px-4 py-6 text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-amber-50/20 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-100 file:text-amber-700 file:font-semibold hover:bg-amber-50"
                />
              </div>
              {pdfFile && (
                <p className="mt-2 text-xs text-amber-700">
                  ✓ {pdfFile.name} ({(pdfFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>

            {/* Message */}
            {message && (
              <div className={`rounded-xl px-4 py-3 text-sm font-medium ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}>
                {message.type === "success" ? "✓ " : "✗ "}{message.text}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-300 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-200/60 hover:shadow-lg tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
            >
              {submitting ? "Inahifadhi..." : "Hifadhi Waraka"}
            </button>
          </form>
        </div>

        {/* Existing documents list */}
        <div>
          <h2 className="text-2xl font-bold text-stone-700 mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Waraka Uliopo ({warakaList.length})
          </h2>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 rounded-2xl bg-amber-100/60 animate-pulse" />
              ))}
            </div>
          ) : warakaList.length === 0 ? (
            <p className="text-stone-400 text-center py-8">Hakuna waraka bado.</p>
          ) : (
            <div className="space-y-3">
              {warakaList.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border ${
                    item.is_active ? "border-amber-100" : "border-stone-100 opacity-60"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-stone-700 truncate">{item.title}</p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {item.month} {item.year} · {item.language === "sw" ? "Kiswahili" : "English"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Toggle active */}
                    <button
                      onClick={() => handleToggleActive(item)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        item.is_active
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                      }`}
                    >
                      {item.is_active ? "Inaonekana" : "Imefichwa"}
                    </button>

                    {/* View PDF */}
                    <a
                      href={item.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 font-semibold transition-all"
                    >
                      Angalia
                    </a>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 font-semibold transition-all"
                    >
                      Futa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
