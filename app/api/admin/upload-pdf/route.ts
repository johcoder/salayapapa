// app/api/admin/upload-pdf/route.ts
import { createClient } from "@supabase/supabase-js"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs" // ← force Node.js runtime, not Edge

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  // ── Check admin cookie ──
  const session = req.cookies.get("admin_session")?.value
  const adminKey = process.env.ADMIN_SECRET_KEY

  if (!session || session !== adminKey) {
    return NextResponse.json({ error: "Haujaidhinishwa." }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Hakuna faili." }, { status: 400 })
    }

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const { data, error } = await supabaseAdmin.storage
      .from("waraka-pdfs")
      .upload(fileName, buffer, {
        contentType: "application/pdf",
        upsert: false,
      })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const { data: urlData } = supabaseAdmin.storage
      .from("waraka-pdfs")
      .getPublicUrl(fileName)

    return NextResponse.json({ url: urlData.publicUrl, path: data.path })

  } catch (err) {
    console.error("Upload error:", err)
    return NextResponse.json({ error: "Upload imeshindwa." }, { status: 500 })
  }
}