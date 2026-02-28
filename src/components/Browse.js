import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      Browse Page
    </div>
  );
};

export default Browse;
