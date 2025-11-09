import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceFilm from './pages/ServiceFilm.jsx';
import ServiceBranding from './pages/ServiceBranding.jsx';
import ServiceArt from './pages/ServiceArt.jsx';
import TheirStory from './pages/TheirStory.jsx';
import OurStory from './pages/OurStory.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

// --- Navbar Component ---
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { to: '/services', label: 'Services' },
    { to: '/their-story', label: 'Their Story' },
    { to: '/our-story', label: 'Our Story' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur border-b border-gray-200/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-brand-accent font-display italic text-2xl">V</span>
          <span className="text-gray-900 font-semibold text-lg">Films</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((i) => (
            <Link
              key={i.label}
              to={i.to}
              className="hover:text-brand-accent transition-colors"
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-brand-accent text-white px-4 py-2 text-sm hover:opacity-90 transition"
          >
            Let’s Talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-navy"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-brand-bg border-t border-gray-200 flex flex-col text-center py-4 space-y-4 text-sm">
          {items.map((i) => (
            <Link
              key={i.label}
              to={i.to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-brand-accent transition"
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-brand-accent text-white px-6 py-2 rounded-md hover:opacity-90"
          >
            Let’s Talk
          </Link>
        </nav>
      )}
    </header>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-600 border-t border-gray-200 mt-10">
      © {new Date().getFullYear()} <span className="font-semibold">V Films</span> • All rights reserved
    </footer>
  );
}

// --- Main App ---
export default function App() {
  // base handling works for localhost and GitHub Pages / Vercel both
  const base =
    import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/'
      ? import.meta.env.BASE_URL
      : '/';

  return (
    <BrowserRouter basename={base}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/film" element={<ServiceFilm />} />
        <Route path="/services/branding" element={<ServiceBranding />} />
        <Route path="/services/art" element={<ServiceArt />} />
        <Route path="/their-story" element={<TheirStory />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
