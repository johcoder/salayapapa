"use client"

import { useState } from "react"
import WarakaForm from "@/components/ui/admin/WarakaForm"
import WarakaTable from "@/components/ui/admin/WarakaTable"
import { Waraka } from "@/data/waraka"

export default function AdminWarakaPage() {
  const [warakaList, setWarakaList] = useState<Waraka[]>([])

  function addWaraka(waraka: Waraka) {
    setWarakaList((prev) => [waraka, ...prev])
  }

  return (
    <main className="max-w-6xl mx-auto py-12 px-6 space-y-10">
      <h1 className="text-3xl font-bold text-amber-600">
        Admin – Waraka wa Sala
      </h1>

      <WarakaForm onAdd={addWaraka} />

      <WarakaTable warakaList={warakaList} />
    </main>
  )
}
