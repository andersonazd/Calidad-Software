"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/estandares", label: "Estándares" },
  { href: "/metricas", label: "Métricas" },
  { href: "/pruebas", label: "Pruebas" },
  { href: "/devops", label: "DevOps" },
  { href: "/evaluacion", label: "Evaluación" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-primary">
              Calidad de Software
            </Link>
            <a
              href="https://github.com/andersonazd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-900 hover:text-blue-700 transition-colors"
            >
              by Anderson Am
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold transition-colors hover:text-primary rounded-md",
                  pathname === item.href ? "bg-secondary text-primary" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-sm font-semibold transition-colors hover:bg-secondary rounded-md",
                  pathname === item.href ? "bg-secondary text-primary" : "text-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
