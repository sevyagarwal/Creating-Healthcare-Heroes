"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Our Mission", href: "#mission" },
    { name: "What We Teach", href: "#what-we-teach" },
    { name: "Impact", href: "#impact" },
    { name: "The Movement", href: "#movement" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Meet the Founder", href: "#founder" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-[#A8D8D8]/90 backdrop-blur-md",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-bold text-xl transition-colors duration-300",
            scrolled ? "text-[#2A6970]" : "text-[#1E1E1E]", // Changed from #FFFACD to #1E1E1E (black)
          )}
        >
          Creating Healthcare Heroes
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-bold transition-colors",
                scrolled ? "text-[#1E1E1E] hover:text-[#2A6970]" : "text-[#1E1E1E] hover:text-[#2A6970]",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="ml-4 bg-[#E6544F] hover:bg-[#E6544F]/90 text-[#F5F5F5] font-bold">
            <Link href="#save-a-life">Save a Life in 60s</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-[#1E1E1E]" : "text-[#1E1E1E]")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-[#1E1E1E]" : "text-[#1E1E1E]")} />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-[#C7E7F5]">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-bold text-[#1E1E1E] hover:text-[#2A6970] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-[#E6544F] hover:bg-[#E6544F]/90 text-[#F5F5F5] font-bold">
              <Link href="#save-a-life" onClick={() => setIsOpen(false)}>
                Save a Life in 60s
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
