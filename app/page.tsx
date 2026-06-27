import Navbar from "@/components/home/Navbar";
import HeroBanner from "@/components/home/HeroBanner";
import ContinueWatching from "@/components/home/ContinueWatching";
import MovieSection from "@/components/home/MovieSection";
import UpcomingBanner from "@/components/home/UpcomingBanner";
import GenreSection from "@/components/home/GenreSection";
import Footer from "@/components/home/Footer";

import {
  continueWatching,
  topMovies,
  latestMovies,
} from "@/data/movies";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <ContinueWatching title="Resume Watching"
        movies={continueWatching} />

      <MovieSection
        title="Top 10 Movies"
        movies={topMovies}
      />

      <UpcomingBanner />

      <MovieSection
        title="Latest Movies"
        movies={latestMovies}
      />

      <GenreSection />

      <Footer />
    </>
  );
}