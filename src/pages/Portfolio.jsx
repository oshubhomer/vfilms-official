export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-[#FFF9F6] text-gray-800 font-sans overflow-hidden px-6 md:px-16 py-16 flex flex-col items-center justify-center">
      
      {/* 🎥 Left Decorative Camera */}
      <img
        src={`${import.meta.env.BASE_URL}cam.png`}
        alt="camera decoration"
        className="absolute hidden md:block left-4 lg:left-10 top-1/3 w-28 lg:w-52 opacity-90 animate-float select-none pointer-events-none"
      />

      {/* 🌸 Bottom-right Decorative Accent */}
      <img
        src={`${import.meta.env.BASE_URL}bottom-left.png`}
        alt="bottom decoration"
        className="absolute bottom-0 right-0 w-36 sm:w-56 md:w-72 opacity-90 animate-fade-in select-none pointer-events-none"
      />

      {/* ✨ Main Content */}
      <section className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-navy mb-3 leading-snug tracking-tight">
          The Highlight Reel
        </h2>
        <p className="text-gray-700 mb-10 text-base sm:text-lg max-w-xl">
          Watch the magic we’ve captured — each frame tells a story worth remembering.
        </p>

        {/* 🎬 Video Frame */}
        <div className="relative w-full max-w-4xl bg-[#fef5f3] rounded-2xl p-3 sm:p-5 md:p-8 shadow-lg border border-[#f1d4c3] transition-transform duration-500 hover:scale-[1.02]">
          
          {/* Film Frame Border */}
          <div className="absolute inset-0 border-[8px] sm:border-[10px] md:border-[14px] border-dashed border-[#e9c2b0] rounded-2xl pointer-events-none"></div>

          {/* Embedded Video */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-md relative z-10">
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
