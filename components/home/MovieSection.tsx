"use client";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  genre?: string;
  rating?: number;
  year?: string;
  image?: string;
  bgColor?: string;
}

interface MovieRowProps {
  title: string;
  seeMore?: boolean;
  movies: Movie[];
  cardSize?: "sm" | "md" | "lg";
}

export default function MovieRow({ title, seeMore, movies, cardSize = "md" }: MovieRowProps) {
  return (
    <section className="px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        {seeMore && (
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            See More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            year={movie.year}
            image={movie.image}
            bgColor={movie.bgColor}
            size={cardSize}
          />
        ))}
      </div>
    </section>
  );
}