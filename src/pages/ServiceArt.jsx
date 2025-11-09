import { Link } from 'react-router-dom';

export default function ServiceArt() {
  return (
    <main className="px-6 md:px-16 py-12 bg-[#FFF9F6]">
      {/* Quote Section */}
      <p className="font-display italic text-xl md:text-2xl text-brand-navy mb-4 text-center leading-relaxed">
        “We take art where it belongs, to the people.” – Vernita Verma
      </p>

      <div className="h-1 bg-brand-navy/30 mb-10 w-2/3 md:w-1/3 mx-auto rounded-full" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-3 w-full max-w-sm mx-auto md:mx-0">
          <img
            src="/service-art.jpg"
            alt="Art Curation"
            className="w-full rounded-lg transform transition-transform duration-500 hover:scale-105"
          />
          <p className="text-center mt-3 font-medium text-gray-700">Art Curation</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-brand-navy mb-5 leading-snug">
            Art isn’t meant to sit on distant walls — it’s meant to breathe, to travel, to belong.
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            Through every festival, every performance, and every gathering, we help stories find
            their stage and their people.
          </p>

          <p className="text-gray-700 font-semibold mb-3">V curates:</p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>

          <div className="text-center md:text-left">
            <Link
              to="/portfolio"
              className="inline-block mt-6 bg-brand-accent text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Explore Now →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
