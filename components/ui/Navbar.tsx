"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

/* Single source of truth */
const navLinks = [
  { name: "Karibu", href: "/" },
  { name: "Nia ya Sala", href: "/niayasala" },
  { name: "Historia Yetu", href: "/historiayetu" },
  { name: "EYM", href: "/eym" },
  { name: "Sali Nasi", href: "/salinasi" },
  { name: "Mawasiliano", href: "/mawasiliano" },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
  src="/logo3.png"
  alt="RMOP Tanzania Logo"
  width={520}
  height={180}
  priority
  className="object-contain h-14 w-auto"
/>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-amber-600 after:w-full"
                      : "text-black hover:text-amber-600 hover:after:w-full"
                  }
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5
                  after:w-0 after:bg-amber-600 after:transition-all after:duration-300`}
              >
                {item.name}
              </Link>
            )
          })}

          <Button
            asChild
            size="sm"
            className="bg-amber-600 text-white hover:bg-gray-800 transition-colors"
          >
            <Link href="/subscribe">Jiunge</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-black hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-white">
            <SheetTitle className="sr-only">
              Mobile Navigation Menu
            </SheetTitle>

            <nav className="mt-10 flex flex-col gap-6">
              {navLinks.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`text-lg font-medium transition-colors
                      ${
                        isActive
                          ? "text-amber-600 font-semibold"
                          : "text-black hover:text-amber-600"
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              })}

              <Button
                asChild
                className="mt-6 bg-amber-600 text-white hover:bg-gray-800"
              >
                <Link href="/subscribe" onClick={handleLinkClick}>
                  Jiunge
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
