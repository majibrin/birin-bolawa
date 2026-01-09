import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import News from './components/News'
import LanguageToggle from './components/LanguageToggle'
import ArchiveForm from './components/ArchiveForm'
import VerifiedArchive from './components/VerifiedArchive'
import { Shield } from 'lucide-react'

function App() {
  return (
    <div>
      {/* Language Toggle */}
      <LanguageToggle />
      
      {/* Admin Link (remove in production) */}
      <a 
        href="/admin" 
        className="fixed top-4 left-4 z-50 bg-gold text-green px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gold/90"
      >
        <Shield className="w-4 h-4" />
        Admin
      </a>
      
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-b from-green to-brown">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gold mb-6">
            Birin Bolawa Heritage
          </h1>
          <p className="text-xl text-sand text-center mb-10">
            14th-century Islamic center in Nafada, Gombe
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Recent Event</h2>
            <p className="text-sand">
              HRH Abubakar Shehu Abubakar III (11th Emir of Gombe) 
              visited the royal tomb on January 8, 2026.
            </p>
          </div>
        </main>
      </div>
      
      {/* Timeline */}
      <Timeline />
      
      {/* Virtual Tour Gallery */}
      <Gallery />
      
      {/* Community Hub News */}
      <News />
      
      {/* Verified Archive (Public can see verified submissions) */}
      <VerifiedArchive />
      
      {/* Secure Archive Form (for submitting new content) */}
      <ArchiveForm />
    </div>
  )
}

export default App
