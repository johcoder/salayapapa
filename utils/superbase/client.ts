import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export type Waraka = {
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
