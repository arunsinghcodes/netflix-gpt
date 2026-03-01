import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(movies === null) return;

  console.log(movies);
  const mainMovie = movies[0];
  console.log(mainMovie);
  return (
    <div>
      <h1>MainContainer</h1>
    </div>
  );
};

export default MainContainer;
