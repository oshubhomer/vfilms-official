import { Link } from 'react-router-dom';

export default function TheirStory() {
  return (
    <main className="relative min-h-screen bg-[#FFF9F6] text-gray-800 font-sans overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
      {/* --- Decorative India Gate --- */}
      <img
        src="/indiagate.png"
        alt="India Gate"
        className="absolute bottom-[6%] left-[5%] w-[120px] sm:w-[180px] md:w-[240px] opacity-90 pointer-events-none select-none"
      />

      {/* --- Paper Note (pinned, floating) --- */}
      <img
        src="/paper-note.png"
        alt="VFilms Note"
        className="absolute top-[10%] left-[8%] sm:left-[10%] w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px]
        rotate-[-6deg] drop-shadow-[0_14px_22px_rgba(0,0,0,0.25)] animate-float"
      />

      {/* --- Team Section --- */}
      <section className="relative flex flex-col items-center justify-center text-center mt-48 md:mt-64">
        {/* Silhouettes */}
        <div className="relative w-[80%] sm:w-[65%] md:w-[50%] lg:w-[45%] max-w-[800px] mx-auto">
          <img
            src="/group.png"
            alt="Team Silhouettes"
            className="w-full drop-shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
          />

          {/* Role labels */}
          <p className="absolute -top-[40px] left-[10%] font-display italic text-brand-navy text-sm sm:text-base">
            Film Makers
          </p>
          <p className="absolute -top-[40px] right-[10%] font-display italic text-brand-navy text-sm sm:text-base">
            Art Curators
          </p>
        </div>

        {/* Branding Experts label */}
        <p className="font-display italic text-brand-navy text-base sm:text-lg mt-3 sm:mt-5">
          Branding Experts
        </p>
      </section>

      {/* --- CTA Section --- */}
      <div className="text-center mt-16 z-20">
        <h3 className="font-display text-[20px] sm:text-[24px] md:text-[28px] text-brand-navy mb-4 leading-snug">
          Take a closer look at the stories V bring to life.
        </h3>
        <Link
          to="/portfolio"
          className="inline-block bg-brand-accent text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          View Portfolio
        </Link>
      </div>

      {/* --- Floating animation --- */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: rotate(-6deg) translateY(0); }
            50% { transform: rotate(-6deg) translateY(-6px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
}
