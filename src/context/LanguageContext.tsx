import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ha'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Simple translations - expand this as needed
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.admin': 'Admin',
    'nav.home': 'Home',
    'nav.archive': 'Archive',
    'nav.submit': 'Submit',
    
    // Hero Section
    'hero.title': 'Birin Bolawa Heritage',
    'hero.subtitle': '14th-century Islamic center in Nafada, Gombe',
    'hero.recent': 'Recent Event',
    'hero.event': 'HRH Abubakar Shehu Abubakar III (11th Emir of Gombe) visited the royal tomb on January 8, 2026.',
    
    // Archive Form
    'form.title': 'Secure History Archive',
    'form.description': 'Elders and historians: Submit oral history, photos, or documents about Birin Bolawa for verification and preservation.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  ha: {
    // Navigation
    'nav.admin': 'Admin',
    'nav.home': 'Gida',
    'nav.archive': 'Taskar Tarihi',
    'nav.submit': 'Ƙaddamar da',
    
    // Hero Section
    'hero.title': 'Gado na Birin Bolawa',
    'hero.subtitle': 'Cibiyar Musulunci ta ƙarni na 14 a Nafada, Gombe',
    'hero.recent': 'Abin da Ya Faru Kwanan Nan',
    'hero.event': 'HRH Abubakar Shehu Abubakar III (Sarki na 11 na Gombe) ya ziyarci kabarin sarauta a ranar 8 ga Janairu, 2026.',
    
    // Archive Form
    'form.title': 'Taskar Tarihi mai Tsaro',
    'form.description': 'Dattawa da masana tarihi: Ƙaddamar da tarihin baka, hotuna, ko takardu game da Birin Bolawa don tabbatarwa da adanawa.',
    
    // Common
    'common.loading': 'Ana loading...',
    'common.error': 'Kuskure',
    'common.success': 'Nasara',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Load saved language
    const savedLang = localStorage.getItem('birinbolawa_lang') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'ha')) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('birinbolawa_lang', lang)
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }))
  }

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
