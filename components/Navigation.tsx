'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/trustees', label: 'Trustees' },
    { href: '/objectives', label: 'Objectives' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/donation', label: 'Donation' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`block py-5 px-4 font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-secondary'
                      : 'text-dark hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary group-hover:w-2/3 transition-all duration-300 -translate-x-1/2"></span>
              </li>
            ))}
          </ul>
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl p-5"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <i className="fas fa-times"></i>
        </button>
        <ul className="pt-16 px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 border-b transition-colors ${
                    pathname === link.href
                      ? 'text-secondary font-semibold'
                      : 'hover:text-secondary'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

