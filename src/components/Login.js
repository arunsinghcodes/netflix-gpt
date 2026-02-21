import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

//? useRef:- useRef is a React Hook that lets you reference a value that's not needed for rendering

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(() => {
    const saved = localStorage.getItem("authMode");
    return saved ? saved === "signin" : true;
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickButtonClick = (e) => {
    // Logic goes here and first validation goes here
    e.preventDefault();
    console.log("Triggered by:", e.type);

    const nameValue = isSignInForm ? null : name.current?.value;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;

    const message = checkValidData(
      nameValue,
      emailValue,
      passwordValue,
      isSignInForm,
    );

    setErrorMessage(message);
    if (message) return;
  };

  const toggleSignInForm = () => {
    const newState = !isSignInForm;
    setIsSignInForm(newState);

    localStorage.setItem("authMode", newState ? "signin" : "signup");
  };

  return (
    <div className="relative min-h-screen text-white">
      <Header />

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

      {/* Form Container */}
      <div className="flex justify-center items-center min-h-screen px-4">
        <form
          onSubmit={handleClickButtonClick}
          className="w-full max-w-md bg-black bg-opacity-80 p-8 rounded-xl shadow-2xl"
        >
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 my-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 my-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm py-2">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full my-6 bg-red-600 hover:bg-red-700 transition duration-300 p-4 rounded-md font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="mt-6 text-sm text-gray-400 cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
