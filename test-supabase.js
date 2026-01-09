import('node-fetch').then(({ default: fetch }) => {
  const url = 'https://svbetbhdvhwowgtygckd.supabase.co/rest/v1/timeline_events?select=*'
  const options = {
    headers: {
      'apikey': 'sb_publishable_fKiX5o_t051pyKPzbrZDYg_Qfr7p4IB',
      'Authorization': 'Bearer sb_publishable_fKiX5o_t051pyKPzbrZDYg_Qfr7p4IB'
    }
  }
  
  fetch(url, options)
    .then(res => res.json())
    .then(data => console.log('Success:', data.length, 'timeline events'))
    .catch(err => console.error('Error:', err.message))
})
