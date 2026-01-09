import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

type Language = 'en' | 'ha'  // Only English and Hausa

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'site.title': 'Birin Bolawa - Historical Archive',
    'hero.title': 'Preserving Our Heritage',
    'hero.subtitle': 'A community-driven archive documenting the rich history and culture of Birin Bolawa',
    'nav.home': 'Home',
    'nav.archive': 'Archive',
    'nav.contribute': 'Contribute',
    'nav.about': 'About',
    'language.en': 'English',
    'language.ha': 'Hausa',
    // Add more English translations as needed
  },
  ha: {
    'site.title': 'Birin Bolawa - Taskar Tarihi',
    'hero.title': 'Kiyaye Al\'adunmu',
    'hero.subtitle': 'Taskar al\'umma da ke rubuta tarihi da al\'adun Birin Bolawa',
    'nav.home': 'Gida',
    'nav.archive': 'Taskar',
    'nav.contribute': 'Ba da gudummawa',
    'nav.about': 'Game da',
    'language.en': 'Turanci',
    'language.ha': 'Hausa',
    // Add more Hausa translations as needed
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  const toggleLanguage = () => {
    // Toggle between English and Hausa
    setLanguageState(prev => prev === 'en' ? 'ha' : 'en')
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
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
