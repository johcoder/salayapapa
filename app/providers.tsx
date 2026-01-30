"use client"  // ✅ must be a client component

import { SessionProvider } from "next-auth/react"
import React from "react"

interface ProvidersProps {
  children: React.ReactNode
  session?: any
}

export function Providers({ children, session }: ProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
