'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/trustees', label: 'Trustees' },
    { href: '/objectives', label: 'Objectives' },
    { href: '/projects', label: 'Projects' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/donation', label: 'Donation' },
    { href: '/contact', label: 'Contact' },
  ]

  const serviceGroups: Array<{ label: string; href?: string; children?: Array<{ label: string; href: string }> }> = [
    { label: 'All Services', href: '/services' },
    { label: 'Dental Service', href: '/services/dental-service' },
    { label: 'मृणाल ताई दालन', href: '/services/mrunal-tai-dalan' },
    { label: 'य. दि. फडके प्रगत संशोधन केंद्र', href: '/services/yd-phadke-research-center' },
    {
      label: 'ग्रंथालय',
      children: [
        { label: 'केशव गोरे स्मारक ट्रस्ट संदर्भ', href: '/services/library-kgst-reference' },
        { label: 'केशव गोरे स्मारक ट्रस्ट संचालित साने गुरुजी ग्रंथालय', href: '/services/library-sane-guruji' },
      ],
    },
    {
      label: 'अभ्यासिका',
      children: [
        { label: 'केशव गोरे स्मारक ट्रस्ट आरे रोड', href: '/services/study-are-road' },
        { label: 'केशव गोरे स्मारक ट्रस्ट कल्याण केंद्र', href: '/services/study-kalyan-center' },
      ],
    },
    { label: 'केशव गोरे स्मारक ट्रस्ट सभागृह', href: '/services/trust-auditorium' },
  ]

  return (
    <nav className="bg-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex">
            {navLinks.slice(0, 4).map((link) => (
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
            <li className="relative group">
              <button
                type="button"
                aria-haspopup="true"
                className={`flex items-center gap-2 py-5 px-4 font-medium transition-colors ${pathname.startsWith('/services') ? 'text-secondary' : 'text-dark hover:text-secondary'}`}
              >
                Services <i className="fas fa-chevron-down text-xs" aria-hidden="true"></i>
              </button>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary group-hover:w-2/3 group-focus-within:w-2/3 transition-all duration-300 -translate-x-1/2"></span>
              <ul className="absolute left-0 top-full hidden max-h-[75vh] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-b-lg bg-white py-2 shadow-lg group-hover:block group-focus-within:block">
                {serviceGroups.map((group) => (
                  <li key={group.label}>
                    {group.href ? (
                      <Link href={group.href} className="block px-5 py-3 text-dark hover:bg-cream hover:text-secondary">
                        {group.label}
                      </Link>
                    ) : (
                      <div className="px-5 pt-3 pb-1 text-sm font-bold text-secondary">{group.label}</div>
                    )}
                    {group.children && (
                      <ul className="border-l-2 border-primary-light ml-5 mb-2">
                        {group.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="block px-4 py-2 text-sm text-dark hover:bg-cream hover:text-secondary">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.slice(4).map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`block py-5 px-4 font-medium transition-colors ${pathname === link.href ? 'text-secondary' : 'text-dark hover:text-secondary'}`}
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
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full overflow-y-auto bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
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
          {navLinks.slice(0, 4).map((link) => (
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
          <li className="border-b">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              aria-expanded={isMobileServicesOpen}
              className="flex w-full items-center justify-between py-3 hover:text-secondary"
            >
              Services <i className={`fas fa-chevron-${isMobileServicesOpen ? 'up' : 'down'} text-xs`}></i>
            </button>
            {isMobileServicesOpen && (
              <ul className="pb-2">
                {serviceGroups.map((group) => (
                  <li key={group.label}>
                    {group.href ? (
                      <Link
                        href={group.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 pl-4 text-sm hover:text-secondary"
                      >
                        {group.label}
                      </Link>
                    ) : (
                      <div className="py-2 pl-4 text-sm font-semibold text-secondary">{group.label}</div>
                    )}
                    {group.children && (
                      <ul className="border-l border-primary-light ml-5">
                        {group.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 pl-3 text-xs leading-relaxed hover:text-secondary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
          {navLinks.slice(4).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 border-b transition-colors ${pathname === link.href ? 'text-secondary font-semibold' : 'hover:text-secondary'}`}
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
