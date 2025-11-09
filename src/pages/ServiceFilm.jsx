import { Link } from 'react-router-dom';

export default function ServiceFilm() {
  return (
    <main className="px-6 md:px-16 py-12">
      {/* Quote */}
      <p className="font-display italic text-xl md:text-2xl text-brand-navy mb-2 text-center">
        “Filmmaking is a chance to live many lifetimes.” – Robert Altman
      </p>

      <div className="h-1 bg-brand-navy/30 mb-8" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="bg-white rounded-xl shadow p-3 w-full max-w-sm mx-auto md:mx-0">
          <img
            src={`${import.meta.env.BASE_URL}servicefilm.png`}  // ✅ served from /public/
            alt="Film Production"
            className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-gray-700">Film Production</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-display text-3xl text-brand-navy mb-4">
            Who says films are just an escape?
          </h2>

          <p className="text-gray-700 mb-4">
            We see them as a way to live many lives — to feel, to explore, and to tell stories that
            stay. And with each film, we carry new memories and new reasons to keep creating.
            <br />
            <br />
            V crafts:
          </p>

          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          <div className="text-center md:text-left">
            <Link
              to="/portfolio"
              className="inline-block mt-6 text-brand-accent underline hover:text-brand-navy transition"
            >
              Explore Now →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
