import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import "./globals.css"
import { Providers } from "./providers"

// Import server function from next-auth
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth" // your NextAuth config

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch session on the server
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning>
        <Providers session={session}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
