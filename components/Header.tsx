'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import trustLogo from '@/data/images/logo.png'

export default function Header() {
  const [currentDate, setCurrentDate] = useState('')
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const locale = language === 'mr' ? 'mr-IN' : 'en-IN'
    setCurrentDate(new Date().toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' }))
  }, [language])

  return (
    <>
      {/* Top Header Bar */}
      <header className="bg-cream shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-dark">
            <div>{currentDate}</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Logo Section */}
      <div className="bg-primary py-5 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 bg-white p-1.5 rounded-xl shadow-md mb-3 md:mb-0 md:mr-5">
              <Image
                src={trustLogo}
                alt="Keshav Gore Smarak Trust Logo"
                priority
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-bold text-center md:text-left">
              Keshav Gore Smarak Trust
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
            className="bg-secondary px-4 py-2 rounded-full text-white font-medium transition-all hover:bg-secondary-dark hover:-translate-y-1 hover:shadow-md"
            aria-label={language === 'en' ? 'मराठीमध्ये भाषांतर करा' : 'Switch to English'}
          >
            {language === 'en' ? '[ मराठी ]' : '[ English ]'}
          </button>
        </div>
      </div>
    </>
  )
}
