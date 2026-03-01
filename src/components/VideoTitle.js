const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0  z-20 flex flex-col justify-center px-6 md:px-24 text-white bg-gradient-to-r from-black/90 via-black/60 to-transparent">
      <h1 className="text-3xl md:text-6xl font-bold max-w-2xl">{title}</h1>

      <p className="hidden md:block mt-6 text-lg max-w-xl line-clamp-4">
        {overview}
      </p>

      <div className="flex gap-3 mt-6">
        <button className="bg-white text-black px-6 py-2 md:px-10 md:py-3 rounded-lg font-semibold hover:bg-opacity-80 transition">
          ▶ Play
        </button>

        <button className="hidden md:block bg-gray-500/60 px-10 py-3 rounded-lg hover:bg-gray-500/80 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
