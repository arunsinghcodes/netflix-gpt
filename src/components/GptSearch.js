// import GptMovieSuggestions from "./GptMovieSuggestions";
// import GptSearchBar from "./GptSearchBar";

import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
          alt="background"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="">
        <GptSearchBar />
        {/* <GptMovieSuggestions /> */}
      </div>
    </>
  );
};
export default GPTSearch;
