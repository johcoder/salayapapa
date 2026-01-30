"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Waraka } from "@/data/waraka"

type Props = {
  onAdd: (waraka: Waraka) => void
}

export default function WarakaForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState<number>(2026)
  const [pdfUrl, setPdfUrl] = useState("")
  const [isCurrent, setIsCurrent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    onAdd({
      id: crypto.randomUUID(),
      title,
      description,
      month,
      year,
      pdfUrl,
      isCurrent,
    })

    setTitle("")
    setDescription("")
    setMonth("")
    setPdfUrl("")
    setIsCurrent(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ongeza Waraka Mpya</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Kichwa cha Waraka"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <Textarea
            placeholder="Maelezo mafupi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Mwezi (mf. Januari)"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Mwaka"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              required
            />
          </div>

          <Input
            placeholder="PDF URL (au upload link)"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
            required
          />

          <div className="flex items-center gap-2">
            <Checkbox
              checked={isCurrent}
              onCheckedChange={(v) => setIsCurrent(!!v)}
            />
            <span>Huu ni Waraka wa Mwezi wa Sasa</span>
          </div>

          <Button className="bg-amber-600 hover:bg-amber-700">
            Hifadhi Waraka
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
