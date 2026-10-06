'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Language = 'en' | 'mr'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

interface GoogleTranslateWindow extends Window {
  googleTranslateElementInit?: () => void
  google?: {
    translate?: {
      TranslateElement: new (options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean }, elementId: string) => unknown
    }
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('kgst-language')
    const initialLanguage = storedLanguage === 'mr' ? 'mr' : 'en'
    setLanguageState(initialLanguage)
    document.documentElement.lang = initialLanguage

    const translateWindow = window as GoogleTranslateWindow
    translateWindow.googleTranslateElementInit = () => {
      const TranslateElement = translateWindow.google?.translate?.TranslateElement
      if (TranslateElement) {
        new TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'mr', autoDisplay: false },
          'google_translate_element'
        )
      }
    }

    if (!document.querySelector('script[data-kgst-google-translate]')) {
      const script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      script.dataset.kgstGoogleTranslate = 'true'
      document.body.appendChild(script)
    }
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem('kgst-language', nextLanguage)
    document.cookie = `googtrans=/en/${nextLanguage}; path=/; max-age=31536000; SameSite=Lax`
    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage

    // Reload so the translation preference is applied consistently to the whole page.
    window.location.reload()
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
