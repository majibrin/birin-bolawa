import { Upload, User, Calendar, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ArchiveForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    relation: '',
    contact: '',
    title: '',
    description: '',
    category: 'oral_history',
    year: '',
    location: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    alert('Submission received! Our historians will review this.')
    // In future: Connect to Supabase
  }

  return (
    <div className="py-16 bg-gradient-to-b from-brown/10 to-green/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-gold/20 rounded-full mb-4">
            <Upload className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl font-bold text-green mb-2">
            Secure History Archive
          </h2>
          <p className="text-brown max-w-2xl mx-auto">
            Elders and historians: Submit oral history, photos, or documents about Birin Bolawa for verification and preservation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brown mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Contributor Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-brown/70 text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-sand rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-brown/70 text-sm mb-2">Age</label>
                <input
                  type="number"
                  className="w-full p-3 border border-sand rounded-lg"
                  placeholder="Optional"
                  value={form.age}
                  onChange={(e) => setForm({...form, age: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-brown/70 text-sm mb-2">Relation to Birin Bolawa</label>
                <select 
                  className="w-full p-3 border border-sand rounded-lg"
                  value={form.relation}
                  onChange={(e) => setForm({...form, relation: e.target.value})}
                >
                  <option value="">Select</option>
                  <option value="descendant">Descendant</option>
                  <option value="resident">Local Resident</option>
                  <option value="researcher">Researcher</option>
                  <option value="historian">Historian</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-brown/70 text-sm mb-2">Contact Email/Phone</label>
                <input
                  type="text"
                  className="w-full p-3 border border-sand rounded-lg"
                  placeholder="For verification follow-up"
                  value={form.contact}
                  onChange={(e) => setForm({...form, contact: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Submission Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brown mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Submission Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-brown/70 text-sm mb-2">Title *</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border border-sand rounded-lg"
                  placeholder="e.g., Story of the Great Mosque Construction"
                  value={form.title}
                  onChange={(e) => setForm({...form, title: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-brown/70 text-sm mb-2">Category *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['oral_history', 'photo', 'document', 'artifact'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`p-3 rounded-lg border text-center capitalize ${
                        form.category === cat 
                          ? 'border-gold bg-gold/10 text-brown' 
                          : 'border-sand text-brown/70 hover:border-gold'
                      }`}
                      onClick={() => setForm({...form, category: cat})}
                    >
                      {cat.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-brown/70 text-sm mb-2">Description *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full p-3 border border-sand rounded-lg"
                  placeholder="Provide detailed information about your submission..."
                  value={form.description}
                  onChange={(e) => setForm({...form, description: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-brown/70 text-sm mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Estimated Year/Period
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-sand rounded-lg"
                    placeholder="e.g., Early 1900s, 1950s, etc."
                    value={form.year}
                    onChange={(e) => setForm({...form, year: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-brown/70 text-sm mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location (if known)
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-sand rounded-lg"
                    placeholder="Specific area in Birin Bolawa"
                    value={form.location}
                    onChange={(e) => setForm({...form, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="border-2 border-dashed border-sand rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-sand mx-auto mb-4" />
                <p className="text-brown/70 mb-2">
                  <span className="font-semibold">Upload photos or documents</span>
                </p>
                <p className="text-brown/50 text-sm mb-4">
                  (Feature coming soon - currently accept text submissions)
                </p>
                <button
                  type="button"
                  className="px-4 py-2 bg-sand/20 text-brown rounded-lg hover:bg-sand/30"
                  disabled
                >
                  Select Files
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-green text-white font-bold rounded-lg hover:bg-green/90 transition flex items-center gap-2 mx-auto"
            >
              <Send className="w-5 h-5" />
              Submit for Verification
            </button>
            <p className="text-brown/50 text-sm mt-4">
              All submissions are reviewed by Birin Bolawa heritage committee before being added to the archive.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
