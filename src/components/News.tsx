const newsUpdates = [
  {
    title: "Gombe 2026 Budget Allocation",
    description: "Increased funding for cultural heritage sites preservation",
    date: "Jan 2026",
    category: "development",
    relevance: "Direct funding for Birin Bolawa restoration"
  },
  {
    title: "Community Security Enhancement",
    description: "Improved security measures around historical sites",
    date: "Dec 2025",
    category: "security",
    relevance: "Protection of heritage assets"
  },
  {
    title: "Digital Heritage Project",
    description: "Digitization of Bolewa oral history archives",
    date: "Nov 2025",
    category: "education",
    relevance: "Preservation of cultural knowledge"
  },
]

export default function News() {
  return (
    <div className="py-16 bg-gradient-to-b from-sand/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green mb-2 text-center">
          Community Hub
        </h2>
        <p className="text-brown text-center mb-10">
          Latest updates from Gombe State & Bolewa community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsUpdates.map((news, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-green/10">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-green/10 text-green text-sm font-semibold rounded-full">
                  {news.category}
                </span>
                <span className="text-brown/60 text-sm">{news.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-brown mb-3">
                {news.title}
              </h3>
              
              <p className="text-brown/70 mb-4">
                {news.description}
              </p>
              
              <div className="pt-4 border-t border-sand">
                <p className="text-sm text-brown/60">
                  <span className="font-semibold">Relevance:</span> {news.relevance}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-gold text-green font-semibold rounded-lg hover:bg-gold/90 transition mr-4">
            📰 More Updates
          </button>
          <button className="px-6 py-3 border-2 border-green text-green font-semibold rounded-lg hover:bg-green/10 transition">
            📝 Submit Community News
          </button>
        </div>
      </div>
    </div>
  )
}
