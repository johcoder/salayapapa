"use client"

import { useEffect, useState } from "react"
import CurrentWaraka from "./waraka/CurrentWaraka"
import { createClient, type Waraka } from "@/utils/supabase/client"

export default function WarakaCards() {
  const [warakaList, setWarakaList] = useState<Waraka[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchWaraka() {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from("waraka")
          .select("*")
          .eq("is_active", true)
          .order("created_at", { ascending: false })

        if (error) throw error
        setWarakaList(data || [])
      } catch (err) {
        setError("Hitilafu imetokea wakati wa kupakia data.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchWaraka()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-48 rounded-2xl bg-amber-100/60 animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500 font-medium">
        {error}
      </div>
    )
  }

  if (warakaList.length === 0) {
    return (
      <div className="text-center py-12 text-stone-400 font-medium">
        Hakuna waraka uliopo kwa sasa.
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {warakaList.map((item) => (
        <CurrentWaraka
          key={item.id}
          waraka={{
            id: item.id,
            month: item.month,
            year: item.year,
            description: item.description,
            title: item.title,
            pdfUrl: item.pdf_url,
          }}
        />
      ))}
    </div>
  )
}
