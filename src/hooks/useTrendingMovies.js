import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTreandingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  console.log("trendingMovies", trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTreandingMovies(json.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTrendingMovies;
