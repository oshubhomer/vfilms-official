import { Link } from 'react-router-dom'

const cards = [
  { title: 'Film Production', img: `${import.meta.env.BASE_URL}film.png`, to: '/services/film' },
  { title: 'Branding', img: `${import.meta.env.BASE_URL}brand.png`, to: '/services/branding' },
  { title: 'Art Curation', img: `${import.meta.env.BASE_URL}art.png`, to: '/services/art' },
]

export default function Services() {
  return (
    <main className="relative px-6 md:px-16 py-12 bg-[#FFF9F6] text-gray-800">
      <h2 className="text-center font-display text-3xl md:text-4xl text-brand-navy mb-2">
        The storyboard reveals the breadth of our craft.
      </h2>
      <p className="text-center text-gray-600 mb-10">Explore our services</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((c, i) => (
          <Link
            to={c.to}
            key={i}
            className="relative group bg-white shadow-md rounded-xl overflow-hidden transform transition hover:scale-[1.03] hover:shadow-2xl duration-300"
          >
            {/* Image */}
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Title */}
            <div className="p-5 text-center font-semibold text-lg text-brand-navy tracking-wide">
              {c.title}
            </div>

            {/* Stylized Accent Border */}
            <div className="absolute inset-0 border-4 border-brand-accent/80 -rotate-2 translate-x-2 translate-y-2 rounded-xl pointer-events-none" />
          </Link>
        ))}
      </div>
    </main>
  )
}
