import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import "./globals.css"


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
