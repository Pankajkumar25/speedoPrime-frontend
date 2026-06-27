import { Movie } from "@/types/movie";

const img = (id: number) => `/image/movie/img${((id - 1) % 15) + 1}.jpg`;

export const continueWatching: Movie[] = [
  { id: 1, title: "John Wick", image: img(1), year: "2024", rating: 8.9, duration: "2h 48m", genre: "Action" },
  { id: 2, title: "Avengers: Endgame", image: img(2), year: "2019", rating: 8.7, duration: "2h 35m", genre: "Action" },
  { id: 3, title: "Batman", image: img(3), year: "2022", rating: 8.5, duration: "2h 56m", genre: "Action" },
  { id: 4, title: "Dune", image: img(4), year: "2024", rating: 8.6, duration: "2h 46m", genre: "Sci-Fi" },
  { id: 5, title: "Spider-Man: No Way Home", image: img(5), year: "2021", rating: 8.4, duration: "2h 28m", genre: "Adventure" },
  { id: 6, title: "The Matrix Resurrections", image: img(6), year: "2025", rating: 8.1, duration: "2h 28m", genre: "Sci-Fi" },
  { id: 7, title: "Oppenheimer", image: img(7), year: "2023", rating: 9.0, duration: "3h 0m", genre: "Drama" },
  { id: 8, title: "Interstellar", image: img(8), year: "2014", rating: 9.3, duration: "2h 49m", genre: "Sci-Fi" },
  { id: 9, title: "Inception", image: img(9), year: "2010", rating: 9.2, duration: "2h 28m", genre: "Thriller" },
  { id: 10, title: "The Dark Knight", image: img(10), year: "2008", rating: 9.5, duration: "2h 32m", genre: "Action" },
  { id: 11, title: "Top Gun: Maverick", image: img(11), year: "2022", rating: 8.8, duration: "2h 10m", genre: "Action" },
  { id: 12, title: "Gladiator", image: img(12), year: "2000", rating: 8.8, duration: "2h 35m", genre: "Action" },
  { id: 13, title: "Deadpool & Wolverine", image: img(13), year: "2024", rating: 8.3, duration: "2h 8m", genre: "Action" },
  { id: 14, title: "Furiosa", image: img(14), year: "2024", rating: 8.2, duration: "2h 28m", genre: "Action" },
  { id: 15, title: "The Fall Guy", image: img(15), year: "2024", rating: 7.8, duration: "2h 6m", genre: "Action" },
];

export const latestMovies: Movie[] = [
  { id: 16, title: "Dune: Part Two", image: img(16), year: "2024", rating: 8.9, duration: "2h 46m", genre: "Sci-Fi" },
  { id: 17, title: "Oppenheimer", image: img(17), year: "2023", rating: 9.0, duration: "3h 0m", genre: "Drama" },
  { id: 18, title: "The Matrix Resurrections", image: img(18), year: "2025", rating: 8.1, duration: "2h 28m", genre: "Sci-Fi" },
  { id: 19, title: "Deadpool & Wolverine", image: img(19), year: "2024", rating: 8.3, duration: "2h 8m", genre: "Action" },
  { id: 20, title: "Furiosa", image: img(20), year: "2024", rating: 8.2, duration: "2h 28m", genre: "Action" },
  { id: 21, title: "Inside Out 2", image: img(21), year: "2024", rating: 8.4, duration: "1h 36m", genre: "Animation" },
  { id: 22, title: "Godzilla x Kong", image: img(22), year: "2024", rating: 7.6, duration: "1h 55m", genre: "Action" },
  { id: 23, title: "Civil War", image: img(23), year: "2024", rating: 8.0, duration: "1h 49m", genre: "Drama" },
  { id: 24, title: "Kingdom of the Planet of the Apes", image: img(24), year: "2024", rating: 8.1, duration: "2h 25m", genre: "Sci-Fi" },
  { id: 25, title: "The Fall Guy", image: img(25), year: "2024", rating: 7.8, duration: "2h 6m", genre: "Action" },
  { id: 26, title: "John Wick: Chapter 4", image: img(26), year: "2023", rating: 8.7, duration: "2h 49m", genre: "Action" },
  { id: 27, title: "Spider-Man: Across the Spider-Verse", image: img(27), year: "2023", rating: 8.9, duration: "2h 20m", genre: "Animation" },
  { id: 28, title: "The Creator", image: img(28), year: "2023", rating: 7.8, duration: "2h 13m", genre: "Sci-Fi" },
  { id: 29, title: "Mission: Impossible Dead Reckoning", image: img(29), year: "2023", rating: 8.3, duration: "2h 43m", genre: "Action" },
  { id: 30, title: "Guardians of the Galaxy Vol. 3", image: img(30), year: "2023", rating: 8.5, duration: "2h 30m", genre: "Adventure" },
  { id: 31, title: "A Quiet Place: Day One", image: img(31), year: "2024", rating: 7.9, duration: "1h 39m", genre: "Thriller" },
  { id: 32, title: "Twisters", image: img(32), year: "2024", rating: 7.7, duration: "2h 2m", genre: "Action" },
  { id: 33, title: "Wicked", image: img(33), year: "2024", rating: 8.6, duration: "2h 40m", genre: "Drama" },
];

export const topMovies: Movie[] = [
  { id: 34, title: "The Dark Knight", image: img(34), year: "2008", rating: 9.5, duration: "2h 32m", genre: "Action" },
  { id: 35, title: "Interstellar", image: img(35), year: "2014", rating: 9.3, duration: "2h 49m", genre: "Sci-Fi" },
  { id: 36, title: "Inception", image: img(36), year: "2010", rating: 9.2, duration: "2h 28m", genre: "Thriller" },
  { id: 37, title: "Oppenheimer", image: img(37), year: "2023", rating: 9.0, duration: "3h 0m", genre: "Drama" },
  { id: 38, title: "John Wick", image: img(38), year: "2024", rating: 8.9, duration: "2h 48m", genre: "Action" },
  { id: 39, title: "Avengers: Endgame", image: img(39), year: "2019", rating: 8.7, duration: "2h 35m", genre: "Action" },
  { id: 40, title: "Batman", image: img(40), year: "2022", rating: 8.5, duration: "2h 56m", genre: "Action" },
  { id: 41, title: "Dune", image: img(41), year: "2024", rating: 8.6, duration: "2h 46m", genre: "Sci-Fi" },
  { id: 42, title: "Spider-Man: No Way Home", image: img(42), year: "2021", rating: 8.4, duration: "2h 28m", genre: "Adventure" },
  { id: 43, title: "The Matrix", image: img(43), year: "1999", rating: 9.0, duration: "2h 16m", genre: "Sci-Fi" },
  { id: 44, title: "Gladiator", image: img(44), year: "2000", rating: 8.8, duration: "2h 35m", genre: "Action" },
  { id: 45, title: "Top Gun: Maverick", image: img(45), year: "2022", rating: 8.8, duration: "2h 10m", genre: "Action" },
  { id: 46, title: "Parasite", image: img(46), year: "2019", rating: 9.1, duration: "2h 12m", genre: "Thriller" },
  { id: 47, title: "The Shawshank Redemption", image: img(47), year: "1994", rating: 9.6, duration: "2h 22m", genre: "Drama" },
  { id: 48, title: "Pulp Fiction", image: img(48), year: "1994", rating: 9.1, duration: "2h 34m", genre: "Thriller" },
  { id: 49, title: "The Godfather", image: img(49), year: "1972", rating: 9.7, duration: "2h 55m", genre: "Drama" },
  { id: 50, title: "Whiplash", image: img(50), year: "2014", rating: 9.0, duration: "1h 46m", genre: "Drama" },
];
