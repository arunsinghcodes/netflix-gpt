import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <iframe
        className="
          absolute
          top-1/2 left-1/2
          w-[177.77vh]
          h-[56.25vw]
          min-w-full
          min-h-full
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="Trailer"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default VideoBackground;
