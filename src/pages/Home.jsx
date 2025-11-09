import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="px-6 md:px-16 bg-[#FFF9F6]">
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12 relative overflow-hidden">
        {/* Rotating Chakra / Mandala */}
        <div className="relative flex-1 flex items-center justify-center mb-10 md:mb-0">
          <img
            src={`${import.meta.env.BASE_URL}mandala.png`} // ✅ correct public reference
            alt="chakra"
            className="absolute w-[80%] md:w-[520px] opacity-30 animate-spin-slow pointer-events-none select-none"
          />
          <h1 className="relative text-5xl md:text-6xl tracking-tight flex items-center z-10 font-display">
            <span className="text-brand-accent mr-1 italic">V</span>
            <span className="text-gray-900 font-semibold">Films</span>
          </h1>
        </div>

        {/* Hero Text Section */}
        <div className="flex-1 text-center md:text-left md:pl-12 relative z-10">
          <h2 className="text-[34px] md:text-[48px] leading-snug mb-4 font-display italic text-brand-navy">
            Varnan is where stories find
            <br />
            their voice and form
          </h2>

          <p className="text-brand-accent text-lg mb-6 font-medium">
            Films <span className="mx-1">.</span> Brands <span className="mx-1">.</span> Art
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-md mx-auto md:mx-0">
            Since 2009, V’s been telling stories — stories of people, their journeys, and the
            places that shape them. Some begin in polished boardrooms, others in humble village
            squares. But every story starts the same way — by listening with intention. V believes
            it takes trust, patience, and an eye for the unseen to capture what truly matters. V
            doesn’t just tell stories — V honors them.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link
              to="/portfolio"
              className="bg-brand-accent text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="border border-brand-accent text-brand-accent px-6 py-3 rounded-md hover:bg-brand-accent/10 transition"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
