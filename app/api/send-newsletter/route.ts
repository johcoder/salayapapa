import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/utils/superbase/server-admin"
const supabase = createAdminClient()

export async function POST(req: NextRequest) {
  try {
    const { subject, message, adminKey } = await req.json()

    // Simple admin key check — set this in your .env.local
    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: "Hairuhusiwi." }, { status: 401 })
    }

    if (!subject || !message) {
      return NextResponse.json({ error: "Subject na message zinahitajika." }, { status: 400 })
    }

    // Fetch all active subscribers from Supabase
    const supabase = createAdminClient()
    const { data: subscribers, error } = await supabase
      .from("subscribers")
      .select("email, name")
      .eq("is_active", true)

    if (error) throw error
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ error: "Hakuna wanachama waliopo." }, { status: 400 })
    }

    // Send emails using Resend
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send to all subscribers in batches of 50
    const batchSize = 50
    let sentCount = 0

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize)
      const emailList = batch.map((s) => s.email)

      await resend.emails.send({
        from: process.env.FROM_EMAIL || "noreply@salinapapa.or.tz",
        to: [process.env.FROM_EMAIL || "noreply@salinapapa.or.tz"],
        bcc: emailList, // BCC so subscribers don't see each other's emails
        subject,
        text: message,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fdf8f0; padding: 40px 32px; border-radius: 16px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <p style="color: #d97706; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 8px;">Mtandao wa Sala</p>
              <h1 style="color: #1c1917; font-size: 28px; font-weight: bold; margin: 0;">${subject}</h1>
              <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 16px;">
                <div style="height: 1px; width: 60px; background: #fbbf24;"></div>
                <div style="width: 6px; height: 6px; background: #f59e0b; transform: rotate(45deg);"></div>
                <div style="height: 1px; width: 60px; background: #fbbf24;"></div>
              </div>
            </div>
            <div style="color: #44403c; font-size: 16px; line-height: 1.8; white-space: pre-line;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
            <hr style="border: none; border-top: 1px solid #fde68a; margin: 32px 0;" />
            <p style="color: #a8a29e; font-size: 12px; text-align: center;">
              Umepokea barua hii kwa sababu umesajili kwenye mtandao wetu wa sala.<br/>
              <a href="{unsubscribe_url}" style="color: #d97706;">Jisajili hapa</a> ukitaka kuacha kupokea barua hizi.
            </p>
          </div>
        `,
      })

      sentCount += batch.length
    }

    return NextResponse.json({
      success: true,
      message: `Barua imetumwa kwa watu ${sentCount} kwa mafanikio!`,
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Hitilafu imetokea."
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
