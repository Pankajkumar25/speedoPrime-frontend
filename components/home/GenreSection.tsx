"use client";

const genres = [
  {
    id: 1,
    name: "Action",
    image: "/image/movie/genre1.jpg",
    movies: [
      "/image/movie/genre5.jpg",
      "/image/movie/genre6.jpg",
     
    ],
  },
  {
    id: 2,
    name: "Adventure",
    image: "/image/movie/genre3.jpg",
    movies: [
      "/image/movie/genre9.jpg",
      "/image/movie/genre10.jpg",
     
    ],
  },
  {
    id: 3,
    name: "Comedy",
    image: "/image/movie/genre4.jpg",
    movies: [
      "/image/movie/genre13.jpg",
      "/image/movie/genre14.jpg",
     
    ],
  },
  {
    id: 4,
    name: "Animation",
    image: "/image/movie/genre5.jpg",
    movies: [
      "/image/movie/genre17.jpg",
      "/image/movie/genre18.jpg",
    
    ],
  },
];

export default function GenreSection() {
  return (
    <section className="px-4 md:px-8 py-8 bg-[#070b16]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-bold">
          Explore movies by genre
        </h2>

        <button className="text-gray-400 hover:text-white text-sm">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-[#101827] rounded-2xl p-4 border border-white/5 hover:border-red-500/40 transition-all duration-300 group"
          >
            {/* Large Poster */}

            <div className="overflow-hidden rounded-xl h-44">
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Small Posters */}

            <div className="grid grid-cols-2 gap-3 mt-3">
              {genre.movies.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg h-24"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Bottom */}

            <div className="flex items-center justify-between mt-5">
              <h3 className="text-white text-2xl font-bold">
                {genre.name}
              </h3>

              <button className="bg-white/10 hover:bg-red-600 transition px-4 py-2 rounded-lg text-white text-sm">
                Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}