"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "The Problem", href: "/the-problem" },
    {
      name: "About",
      href: "#",
      dropdown: true,
      items: [
        { name: "Our Mission", href: "/about/mission" },
        { name: "The Movement", href: "/about/movement" },
        { name: "Meet the Team", href: "/about/founder" },
      ],
    },
    { name: "What We Teach", href: "/#what-we-teach" },
    { name: "Impact", href: "/#impact" },
    { name: "Get Involved", href: "/#get-involved" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#FFD6E8]/90 backdrop-blur-md shadow-sm" : "bg-[#FFD6E8] backdrop-blur-md",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="One Breath Ahead Logo"
                width={56}
                height={56}
                priority
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
            <span className="text-xl font-bold text-[#0A4B53]">One Breath Ahead</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-6 mr-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger
                      className={cn(
                        "px-3 py-2 text-sm font-bold transition-colors flex items-center",
                        "text-black hover:text-gray-700",
                      )}
                    >
                      {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.items?.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link href={item.href} className="w-full" onClick={handleLinkClick}>
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn("px-3 py-2 text-sm font-bold transition-colors", "text-black hover:text-gray-700")}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </nav>
            <Link
              href="/school-program"
              className="px-3 py-2 text-sm font-bold bg-[#C7E7F5] text-black hover:bg-[#A7D7E5] rounded-md flex items-center justify-center transition-colors"
              onClick={handleLinkClick}
            >
              Bring this to your school
            </Link>
            <Button asChild className="bg-[#E6544F] hover:bg-[#E6544F]/90 text-[#F5F5F5] font-bold">
              <Link href="/#save-a-life" onClick={handleLinkClick}>
                Can You Save a Life in 60s?
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-[#FFD6E8] border-t border-[#FFB6D3]">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-bold text-black border-b border-[#FFB6D3]/50">{link.name}</div>
                  <div className="pl-6 space-y-1">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-black hover:text-gray-700 hover:bg-[#FFB6D3]/30 rounded transition-colors"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-bold text-black hover:text-gray-700 hover:bg-[#FFB6D3]/30 rounded transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Link
              href="/school-program"
              className="px-3 py-2 text-sm font-bold bg-[#C7E7F5] text-black hover:bg-[#A7D7E5] rounded-md text-center inline-block mt-2 transition-colors"
              onClick={handleLinkClick}
            >
              Bring this to your school
            </Link>
            <Button asChild className="mt-2 bg-[#E6544F] hover:bg-[#E6544F]/90 text-[#F5F5F5] font-bold">
              <Link href="/#save-a-life" onClick={handleLinkClick}>
                Can You Save a Life in 60s?
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
