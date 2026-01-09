const timelineEvents = [
  { year: "940 AD", title: "Migration from Yemen", description: "Bolewa people begin migration from Yemen to Lake Chad region", category: "migration" },
  { year: "14th C", title: "Establishment of Birin Bolawa", description: "Founded as Islamic learning center in present-day Nafada", category: "establishment" },
  { year: "1902-53", title: "Emir Abdulkadir Zailani", description: "4th Emir of Gombe, buried at Birin Bolawa", category: "royalty", emir: true },
  { year: "2026", title: "Royal Visit", description: "11th Emir visits royal tomb", category: "modern", emir: true },
]

export default function Timeline() {
  return (
    <div className="py-16 bg-sand/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green mb-10 text-center">
          Historical Timeline
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {timelineEvents.map((event, i) => (
            <div key={i} className="flex items-start mb-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mr-6 ${
                event.emir ? 'bg-gold text-green' : 'bg-green text-white'
              }`}>
                <span className="font-bold">{event.year}</span>
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-brown">
                  {event.title}
                  {event.emir && (
                    <span className="ml-2 text-gold text-sm">👑 Royal</span>
                  )}
                </h3>
                <p className="text-brown/80">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
