import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRated";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  
  return (
     <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
