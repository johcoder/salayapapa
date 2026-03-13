import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const adminKey = process.env.ADMIN_SECRET_KEY

  console.log("Entered:", password)
  console.log("Expected:", adminKey)

  if (!adminKey || password !== adminKey) {
    return NextResponse.json({ error: "Nywila si sahihi." }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })

  // Set cookie directly on the response (more reliable than cookies())
  response.cookies.set("admin_session", adminKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  })

  return response
}