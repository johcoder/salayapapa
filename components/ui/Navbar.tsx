"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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
  { name: "Waraka Wa Sala", href: "/warakawasala" },
  { name: "Mawasiliano", href: "/mawasiliano" },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMobileOpen(false) // close mobile menu
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo3.png"
            alt="RMOP Tanzania Logo"
            width={300}
            height={90}
            priority
            className="object-contain max-h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-black transition-colors
              hover:text-amber-600
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
              after:bg-amber-600 after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

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
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

            <nav className="mt-10 flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick} // ✅ auto-close when clicked
                  className="text-lg font-medium text-black transition-colors hover:text-amber-600"
                >
                  {item.name}
                </Link>
              ))}

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
