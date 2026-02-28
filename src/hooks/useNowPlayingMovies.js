import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS, BASE_URL } from "../utils/contants";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update the store

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
};

export default useNowPlayingMovies;
