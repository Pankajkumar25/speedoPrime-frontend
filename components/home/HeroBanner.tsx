"use client";

export default function Hero() {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_5%]"
        style={{ backgroundImage: "url('/image/home/john_wick-banner.png')" }}
      />
      {/* Dark gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-16 px-12">
        <div className="max-w-xl">
          {/* Title */}
          <img
            src="/image/home/bannertext.png"
            alt="JOHN 4 WICK"
            className="h-20 md:h-28 w-auto mb-3"
          />

          {/* Rating & Meta */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">4.3 · 2023 · 18+</span>
             {["IMDb", "NC-17"].map((tag) => (
              <span key={tag} className="text-xs text-gray-400 border border-gray-700 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
            <p className="w-4 h-4 text-white-600">2hr:20min</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
          In John Wick: Chapter 4, the titular assassin embarks on his most dangerous journey yet as he seeks to dismantle the High Table, the shadowy organization controlling the criminal underworld. 
          </p>
            <p>
              <b className="text-red-500">Genres:</b> Action, Thriller
            </p>

            <p>
              <b className="text-red-500 ">Tag:</b> Action, Assassin, Thriller
            </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-[#E50914] hover:bg-[#c40812] text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch now
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded transition-colors text-sm backdrop-blur-sm border border-white/20">
              More Info
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-12 flex gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all ${i === 0 ? "w-6 bg-[#E50914]" : "w-2 bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}