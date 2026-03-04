import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
