import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utility/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form Data
    let nameValue = name && name.current && name.current.value;
    const Valid = checkValidData(
      nameValue,
      email.current.value,
      password.current.value,
      isSignup
    );
    setErrorMessage(Valid);

    if (Valid) return;
    if (isSignup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((res) => {
          // signup
          console.log(res, res.user);
          const user = res.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL:
              "https://avatars.githubusercontent.com/u/125140155?s=400&u=9c34da079ca19a8aab2e37413ca69dd2a529cf2d&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setIsSignup(false);
              navigate("/browse");
            })
            .catch((err) => {
              const errorMessage = err.message;
              setErrorMessage(errorMessage);
            });
        })
        .catch((err) => {
          console.log(err, err.code, err.message);
          setErrorMessage(err.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((err) => {
          console.log(err);
          const errorMessage = err.message;
          setErrorMessage(errorMessage);
        });
    }
  };
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-1/3 p-12 absolute bg-black opacity-85 my-14 mx-auto left-0 right-0 text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        {isSignup && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full my-4 p-2  border-1 border-gray-400 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="w-full my-4 p-2 border-1 border-gray-400 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full my-4 p-2 border-1 border-gray-400 rounded-sm"
        />
        <p className="py-1 text-red-600 font-bold">{errorMessage}</p>
        <button
          className="w-full p-2 my-6 bg-red-700 rounded-sm font-bold cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <p className="flex justify-center">OR</p>
        <button className="w-full p-2 bg-gray-800 rounded-sm font-bold cursor-pointer">
          Use a sign-in code
        </button>
        <p className="flex justify-center font-semibold underline cursor-pointer">
          Forgot password?
        </p>
        <p className="font-semibold py-2">Remember Me</p>
        <p className="py-2" onClick={toggleSignup}>
          {isSignup ? "Already have account?" : "New to Netflix?"}
          <span className="font-bold cursor-pointer">
            {isSignup ? "Sign in now." : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
