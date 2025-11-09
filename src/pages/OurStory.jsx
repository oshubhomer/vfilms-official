export default function OurStory(){
  return (
    <main className='px-6 md:px-16 py-12'>
      <div className='grid md:grid-cols-2 gap-10 items-start mb-12'>
        <div className='bg-white shadow rounded-xl p-6 -rotate-2'>
          <p className='font-display text-2xl text-brand-navy mb-2'>A montage of familiar faces and names.</p>
          <p className='text-gray-700'>Some stories come from the biggest names… Others begin with bold, rising voices.</p>
        </div>
        <p className='font-display italic text-3xl text-brand-navy'>Every project is more than what’s on a brief— it’s a new chapter…</p>
      </div>
      <div className='grid sm:grid-cols-3 gap-6 mb-16'>
        {[{num:'85+',label:'Projects'},{num:'50+',label:'Happy Clients'},{num:'10+',label:'Experts Team'}].map((s,i)=>(
          <div key={i} className='bg-white shadow rounded-xl p-6 text-center'>
            <div className='text-3xl font-display text-brand-navy'>{s.num}</div>
            <div className='text-gray-600'>{s.label}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
