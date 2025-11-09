import { Link } from 'react-router-dom';

export default function ServiceBranding() {
  return (
    <main className="px-6 md:px-16 py-12">
      {/* Quote Section */}
      <p className="font-display italic text-xl md:text-2xl text-brand-navy mb-2 text-center">
        “A brand is a voice, and a product is a souvenir.” – Lisa Gansky
      </p>

      <div className="h-1 bg-brand-navy/30 mb-8" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="bg-white rounded-xl shadow p-3 w-full max-w-sm mx-auto md:mx-0">
          <img
            src={`${import.meta.env.BASE_URL}service-branding.png`}
            alt="Branding"
            className="w-full rounded-lg"
          />
          <p className="text-center mt-2 font-medium text-gray-700">Branding</p>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="font-display text-3xl text-brand-navy mb-4">
            A brand isn’t just what you see
          </h2>

          <p className="text-gray-700 mb-4">
            It’s what you remember, what you carry home, and what you trust.
            <br />
            <br />
            We shape brands that people remember, return to, and fall in love with.
            <br />
            <br />
            V creates:
          </p>

          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
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
