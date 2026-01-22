import Footer from "@/components/ui/Footer"
import "./globals.css"
import Navbar from "@/components/ui/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}
        <Footer/>
        </main>
        
      </body>
    </html>
  )
}
