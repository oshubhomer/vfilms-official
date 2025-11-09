import { Link } from 'react-router-dom'
const cards = [
  { title:'Film Production', img:'./film.png', to:'/services/film' },
  { title:'Branding', img:'./brand.png', to:'/services/branding' },
  { title:'Art Curation', img:'./art.png', to:'/services/art' },
]
export default function Services(){
  return (
    <main className='px-6 md:px-16 py-12'>
      <h2 className='text-center font-display text-3xl md:text-4xl text-brand-navy mb-2'>The storyboard reveals the breadth of our craft.</h2>
      <p className='text-center text-gray-600 mb-10'>Explore our services</p>
      <div className='grid md:grid-cols-3 gap-8'>
        {cards.map((c,i)=> (
          <Link to={c.to} key={i} className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition relative'>
            <img src={c.img} alt={c.title} className='w-full h-64 object-cover'/>
            <div className='p-4 text-center font-medium'>{c.title}</div>
            <div className='absolute inset-0 pointer-events-none border-4 border-brand-accent/80 -rotate-2 translate-x-2 translate-y-2 rounded-xl'></div>
          </Link>
        ))}
      </div>
    </main>
  )
}
