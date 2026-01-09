import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ha' : 'en'
    setLanguage(newLang)
    
    // Show notification (in a real app, use a toast library)
    const message = newLang === 'en' 
      ? 'Language switched to English' 
      : 'Harshen ya canza zuwa Hausa'
    
    // Temporary alert - replace with proper toast system
    alert(message)
  }

  const getLanguageText = () => {
    return language === 'en' ? 'EN' : 'HA'
  }

  const getFullLanguageName = () => {
    return language === 'en' ? 'English' : 'Hausa'
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sand/30 text-brown hover:bg-sand/50 transition group"
      title={`Switch to ${language === 'en' ? 'Hausa' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{getLanguageText()}</span>
      <span className="hidden sm:inline text-xs text-brown/70 group-hover:text-brown">
        ({getFullLanguageName()})
      </span>
    </button>
  )
}
