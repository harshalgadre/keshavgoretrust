'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="bg-dark text-white pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Main Office
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <p className="mb-4">
                Keshav Gore Smarak Trust, Smruti, Aare Road, Goregaon (W), Mumbai – 400 062.
                Mobile - 93210 91313
              </p>
              <p>Email: kgstmtnl@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Branch
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <p>
                Keshav Gore Smarak Trust, Kalyan Kendra, Subhash Nagar, A One Bakery Near, Teen Dongri (W),
                Mumbai – 400 090.
                Phone: (022) 28787386
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> About
                  </Link>
                </li>
                <li>
                  <Link href="/trustees" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> Trustees
                  </Link>
                </li>
                <li>
                  <Link href="/objectives" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> Objectives
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/donation" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> Donation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-sm"></i> Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Follow Us
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © All Rights Reserved {new Date().getFullYear()} | Keshav Gore Smarak Trust
            </div>
            <div className="text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-primary mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-primary text-dark rounded-full flex items-center justify-center shadow-lg transition-all z-40 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

