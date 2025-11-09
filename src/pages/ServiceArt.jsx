import { Link } from 'react-router-dom';

export default function ServiceArt() {
  return (
    <main className="px-6 md:px-16 py-12">
      {/* Quote Section */}
      <p className="font-display italic text-xl md:text-2xl text-brand-navy mb-2 text-center">
        “We take art where it belongs, to the people.” – Vernita Verma
      </p>

      <div className="h-1 bg-brand-navy/30 mb-8" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="bg-white rounded-xl shadow p-3 w-full max-w-sm mx-auto md:mx-0">
          <img
            src={`${import.meta.env.BASE_URL}service-art.jpg`}
            alt="Art Curation"
            className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-gray-700">Art Curation</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-display text-3xl text-brand-navy mb-4">
            Art isn’t meant to sit on distant walls —
            <br className="hidden md:block" /> it’s meant to breathe, to travel, to belong.
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Through every festival, every performance, and every gathering, we help stories find
            their stage and their people.
            <br />
            <br />
            V curates:
          </p>

          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
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
