import { Landmark, ScrollText, MapPin } from 'lucide-react'

const tourSpots = [
  { 
    title: "400-Year-Old Jumu'ah Mosque", 
    description: "Historic mosque built in traditional Sudano-Sahelian architecture",
    features: ["Mud-brick construction", "Original minaret", "Community gathering space"],
    icon: Landmark,
    color: "text-gold"
  },
  { 
    title: "Tomb of Emir Abdulkadir Zailani", 
    description: "Resting place of the 4th Emir of Gombe",
    features: ["Royal burial site", "Historical significance", "Pilgrimage destination"],
    icon: ScrollText,
    color: "text-green"
  },
  { 
    title: "Ancient Settlement Site", 
    description: "Original 14th-century settlement area",
    features: ["Archaeological interest", "Cultural heritage", "Historical artifacts"],
    icon: MapPin,
    color: "text-brown"
  },
]

export default function Gallery() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green mb-2 text-center">
          Virtual Tour
        </h2>
        <p className="text-brown text-center mb-10">
          Explore the historic sites of Birin Bolawa
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tourSpots.map((spot, i) => {
            const Icon = spot.icon
            return (
              <div key={i} className="bg-sand/20 rounded-2xl p-6 border border-gold/20">
                <div className={`w-16 h-16 ${spot.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${spot.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-brown mb-3">
                  {spot.title}
                </h3>
                
                <p className="text-brown/80 mb-4">
                  {spot.description}
                </p>
                
                <div className="space-y-2">
                  {spot.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-brown/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green/90 transition">
            <MapPin className="inline w-5 h-5 mr-2" />
            Explore Full Virtual Tour
          </button>
        </div>
      </div>
    </div>
  )
}
