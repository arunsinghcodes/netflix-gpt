import { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS, BASE_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const url = BASE_URL + "movie/now_playing?page=1";

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    console.log(json?.results);
    dispatch(addNowPlayingMovie(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      Browse Page
    </div>
  );
};

export default Browse;
