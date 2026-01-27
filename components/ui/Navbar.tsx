"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky  top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

       {/* Logo */}
<Link href="/" className="flex items-center h-full py-4">
  <Image
    src="/logo3.png"
    alt="RMOP Tanzania Logo"
    width={400}
    height={130}
    className="object-contain max-h-30"
    priority
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            {name:"karibu",href:"/"},
            { name: "Nia ya sala", href: "/niayasala" },
            { name: "Historia yetu", href: "/historiayetu" },
            { name: "EYM", href: "/eym" },
            { name: "Waraka Wa Sala", href: "/warakawasala" },
            { name: "Mawasiliano", href: "/mawasiliano" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-black transition-colors duration-200 hover:text-gray-600
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-amber-600
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          <Button
            size="sm"
            className="bg-amber-600 text-white hover:bg-gray-800 transition-colors"
          >
            Jiunge
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
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
            <nav className="mt-10 flex flex-col gap-6">
              {[
                { name: "Nia ya Sala", href: "/niayasala" },
            { name: "Historia Yetu", href: "/historiayetu" },
            { name: "EYM", href: "/eym" },
            { name: "Habari", href: "/Habari" },
            { name: "Mawasiliano", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-black transition-colors hover:text-gray-600"
                >
                  {item.name}
                </Link>
              ))}

              <Button className="mt-4 bg-black text-white hover:bg-gray-800">
                Jiunge
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
