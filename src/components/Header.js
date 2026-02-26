import NetflixLogo from "../assets/Netflix_Logo_PMS.png";
import { USER_AVATAR } from "../utils/contants";

const Header = () => {
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NetflixLogo} alt="logo" />
      <div className="flex p-2 justify-between">
        {/* {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )} */}
        {/* <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button> */}
        <img
          className="hidden md:block w-12 h-12"
          alt="usericon"
          src={USER_AVATAR}
        />
        <button
          //    onClick={handleSignOut}

          className="font-bold text-white "
        >
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
