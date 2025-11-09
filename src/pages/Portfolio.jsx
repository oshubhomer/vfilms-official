export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-[#FFF9F6] px-4 sm:px-8 md:px-16 py-12 md:py-20 overflow-hidden text-gray-800 font-sans">
      {/* Left Decorative Camera */}
      <img
        src={`${import.meta.env.BASE_URL}cam.png`}
        alt=""
        className="absolute hidden md:block left-4 lg:left-10 top-1/3 w-28 lg:w-52 opacity-80 select-none pointer-events-none"
      />

      {/* Bottom-right Decorative Mandala */}
      <img
        src={`${import.meta.env.BASE_URL}bottom-left.png`}
        alt=""
        className="absolute bottom-0 right-0 w-40 sm:w-56 lg:w-72 opacity-90 select-none pointer-events-none"
      />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center w-full">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-2 leading-snug">
          The Highlight Reel
        </h2>
        <p className="text-gray-700 mb-8 sm:mb-10 text-base sm:text-lg max-w-xl">
          Watch the magic we’ve captured.
        </p>

        {/* Video Section */}
        <div className="relative w-full max-w-3xl sm:max-w-4xl bg-[#fef5f3] rounded-xl p-3 sm:p-5 md:p-8 shadow-lg border border-[#f1d4c3]">
          {/* Film Frame Border Effect */}
          <div className="absolute inset-0 border-[8px] sm:border-[10px] md:border-[16px] border-dashed border-[#e9c2b0] rounded-lg pointer-events-none"></div>

          {/* Embedded Video */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-md relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
