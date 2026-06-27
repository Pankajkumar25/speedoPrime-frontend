"use client";

import { useState } from "react";

const upcomingMovies = [
  {
    id: 1,
    title: "Avengers : Infinity War",
    genre: "Action, Adventure",
    date: "Apr 2024",
    rating: 4.5,
    image: "/image/movie/upcomming1.jpg",
  },
  {
    id: 2,
    title: "Avengers : Civil War",
    genre: "Action, Thriller",
    date: "May 2024",
    rating: 4.2,
    image: "/image/movie/upcomming2.jpg",
  },
  {
    id: 3,
    title: "Venom",
    genre: "Action, Thriller",
    date: "Jun 2024",
    rating: 4.3,
    image: "/image/movie/upcomming3.jpg",
  },
];

export default function UpcomingSection() {
  const [featured, setFeatured] = useState(upcomingMovies[2]);

  return (
    <section className="px-4 md:px-8 py-8 bg-[#070b16]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-xl font-bold">
          Upcoming Movies
        </h2>

        <button className="text-gray-400 hover:text-white transition">
          See More →
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[430px]">

        {/* Left Sidebar */}

        <div className="lg:w-[26%] w-full flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">

          {upcomingMovies.map((movie) => (
            <button
              key={movie.id}
              onClick={() => setFeatured(movie)}
              className={`relative overflow-hidden rounded-xl lg:flex-1 h-44 lg:h-auto min-w-[260px] lg:min-w-0 transition ${
                featured.id === movie.id
                  ? "ring-2 ring-[#E50914]"
                  : "hover:scale-[1.02]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${movie.image})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-bold leading-tight">
                  {movie.title}
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  2hr : 20min
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Hero */}

        <div className="relative flex-1 rounded-2xl overflow-hidden">

          <div
            className="absolute inset-0 bg-cover bg-right"
            style={{ backgroundImage: `url(${featured.image})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050912] via-[#050912]/80 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-xl px-6 md:px-10">

              <h1 className="text-white text-4xl md:text-6xl font-black uppercase mb-5">
                {featured.title}
              </h1>

              {/* Rating */}

              <div className="flex items-center gap-3 mb-5">

                <div className="flex text-yellow-400 text-lg">
                  ★★★★☆
                </div>

                <span className="text-white">
                  {featured.rating}
                </span>

                <span className="bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                  IMDb
                </span>

                <span className="border border-gray-500 px-1.5 py-0.5 rounded text-[10px] text-gray-300">
                  NC-17
                </span>

                <span className="text-gray-400 text-sm">
                  2hr : 20min
                </span>

              </div>

              <p className="text-gray-300 text-sm leading-7 max-w-lg mb-6">
                A thrilling continuation of an iconic franchise. Don't miss the
                next chapter in this spectacular cinematic universe.
              </p>

              <div className="mb-6">
                <p className="text-red-500 font-semibold mb-1">
                  Genres
                </p>

                <div className="flex gap-4 text-gray-300 text-sm">
                  {featured.genre.split(", ").map((g) => (
                    <span key={g}>{g}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">

                <button className="bg-[#E50914] hover:bg-red-700 transition px-7 py-3 rounded-lg text-white font-semibold flex items-center gap-2">
                  🔔 Notify me
                </button>

                <button className="w-12 h-12 border border-gray-500 rounded-lg flex items-center justify-center text-white hover:border-white">
                  ❤
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}