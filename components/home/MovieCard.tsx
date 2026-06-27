"use client";
import { useState } from "react";

interface MovieCardProps {
  title: string;
  genre?: string;
  rating?: number;
  year?: string;
  image?: string;
  bgColor?: string;
  size?: "sm" | "md" | "lg";
}

const genreColors: Record<string, string> = {
  Action: "from-red-900 to-red-700",
  Adventure: "from-blue-900 to-blue-700",
  Comedy: "from-yellow-900 to-yellow-700",
  Animation: "from-purple-900 to-purple-700",
  Thriller: "from-gray-900 to-gray-700",
  Drama: "from-green-900 to-green-700",
};

export default function MovieCard({
  title,
  genre = "Action",
  rating,
  year,
  image,
  bgColor,
  size = "md",
}: MovieCardProps) {
  const [imgError, setImgError] = useState(false);
  const sizeClasses = {
    sm: "w-36 h-52",
    md: "w-44 h-64",
    lg: "w-52 h-72",
  };

  const gradient = bgColor || genreColors[genre] || "from-gray-900 to-gray-700";

  return (
    <div
      className={`${sizeClasses[size]} flex-shrink-0 rounded-lg overflow-hidden cursor-pointer group relative`}
    >
      {image && !imgError ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Title overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-xs font-bold uppercase tracking-wide leading-tight line-clamp-2">
          {title}
        </p>
        {(rating || year) && (
          <div className="flex items-center gap-2 mt-1">
            {rating && (
              <div className="flex items-center gap-0.5">
                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-300 text-xs">{rating}</span>
              </div>
            )}
            {year && <span className="text-gray-400 text-xs">{year}</span>}
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#E50914]/0 group-hover:bg-[#E50914]/10 transition-colors rounded-lg" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}