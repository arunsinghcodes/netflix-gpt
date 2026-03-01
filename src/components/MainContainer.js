import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(movies === null) return;

  console.log(movies);
  const mainMovie = movies[0];
  console.log(mainMovie);

  const {original_title, overview, id } = mainMovie;
  return (
   <div className="relative w-full h-screen overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <VideoBackground movieId={id} />

      {/* TOP GRADIENT */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent z-10"></div>

      {/* TEXT CONTENT */}
      <VideoTitle title={original_title} overview={overview} />

    </div>
  );
};

export default MainContainer;
