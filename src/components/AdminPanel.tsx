import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Eye, CheckCircle, XCircle, Loader2 } from 'lucide-react'

interface Submission {
  id: string
  contributor_name: string
  title: string
  description: string
  category: string
  status: string
  created_at: string
}

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (authenticated) {
      fetchSubmissions()
    }
  }, [authenticated])

  const handleLogin = () => {
    if (password === 'birinbolawa2026') {
      setAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  async function fetchSubmissions() {
    try {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setSubmissions(data || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id: string, status: 'verified' | 'rejected') {
    try {
      const { error } = await supabase
        .from('submissions')
        .update({ status })
        .eq('id', id)
      
      if (error) throw error
      
      // Refresh submissions
      await fetchSubmissions()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green to-brown flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-brown mb-6 text-center">
            Admin Access
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-brown/70 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-sand rounded-lg"
                placeholder="Enter admin password"
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-green text-white font-semibold rounded-lg hover:bg-green/90"
            >
              Access Panel
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green">Submissions Panel</h1>
            <p className="text-brown/70">Review and verify history submissions</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchSubmissions}
              className="px-4 py-2 bg-green/10 text-green rounded-lg hover:bg-green/20"
            >
              Refresh
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              className="px-4 py-2 text-brown/70 hover:text-brown"
            >
              Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-green" />
            <p className="text-brown/70 mt-2">Loading submissions...</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-brown uppercase tracking-wider">
                      Contributor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-brown uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-brown uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-brown uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-brown uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-brown uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-brown">
                          {sub.contributor_name || 'Anonymous'}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-brown">{sub.title}</div>
                        <div className="text-sm text-brown/60 truncate max-w-xs">
                          {sub.description.substring(0, 100)}...
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-sand/30 text-brown capitalize">
                          {sub.category?.replace('_', ' ') || 'unknown'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          sub.status === 'verified' ? 'bg-green/20 text-green' :
                          sub.status === 'rejected' ? 'bg-red/20 text-red' :
                          'bg-yellow/20 text-yellow'
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-brown/70">
                        {new Date(sub.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => updateStatus(sub.id, 'verified')}
                          className="text-green hover:text-green/80"
                          title="Verify"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => updateStatus(sub.id, 'rejected')}
                          className="text-red hover:text-red/80"
                          title="Reject"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                        <button
                          className="text-brown/70 hover:text-brown"
                          title="View Details"
                          onClick={() => alert(`Description:\\n\\n${sub.description}`)}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {submissions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-brown/70">No submissions yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
