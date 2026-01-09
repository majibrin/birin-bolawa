import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  category: string
  emir_related: boolean
  emir_name?: string
}

export default function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTimeline()
  }, [])

  async function fetchTimeline() {
    try {
      const { data, error } = await supabase
        .from('timeline_events')
        .select('*')
        .order('year', { ascending: true })
      
      if (error) throw error
      setEvents(data || [])
    } catch (error) {
      console.error('Error fetching timeline:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="py-16 bg-sand/10">
        <div className="container mx-auto px-4">
          <p className="text-center text-brown">Loading timeline...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-sand/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green mb-10 text-center">
          Historical Timeline
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {events.map((event) => (
            <div key={event.id} className="flex items-start mb-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mr-6 ${
                event.emir_related ? 'bg-gold text-green' : 'bg-green text-white'
              }`}>
                <span className="font-bold">{event.year}</span>
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-brown">
                  {event.title}
                  {event.emir_related && (
                    <span className="ml-2 text-gold text-sm">👑 Royal</span>
                  )}
                </h3>
                <p className="text-brown/80">{event.description}</p>
                {event.emir_name && (
                  <p className="text-gold text-sm mt-1">Emir: {event.emir_name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
