import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
          alt="Background image"
        />
      </div>
      <form className="w-1/3 p-12 absolute bg-black opacity-85 my-22 mx-auto left-0 right-0 text-white rounded-md">
        <h1 className="font-bold text-3xl py-2">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full my-4 p-2  border-1 border-gray-400 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="w-full my-4 p-2 border-1 border-gray-400 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-4 p-2 border-1 border-gray-400 rounded-sm"
        />
        <button className="w-full p-2 my-6 bg-red-700 rounded-sm font-bold cursor-pointer">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <p className="flex justify-center">OR</p>
        <button className="w-full p-2 my-4 bg-gray-800 rounded-sm font-bold cursor-pointer">
          Use a sign-in code
        </button>
        <p className="flex justify-center font-semibold underline cursor-pointer">
          Forgot password?
        </p>
        <p className="font-semibold py-2">Remember Me</p>
        <p className="py-2" onClick={toggleSignup}>
          {isSignup ? "Already have account? " : "New to Netflix?"}
          <span className="font-bold cursor-pointer">
            {isSignup ? "Sign in now." : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
