import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import {
  NETFLIX_LOGO,
  ShowLanguageOptions,
  USER_AVATAR,
} from "../utility/constant";
import { addSearchMovieResults, toggleGptSearchView } from "../store/gptSlice";
import { changeLanguageOption } from "../store/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //  Unsubscribe when component will unmount;
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    dispatch(
      addSearchMovieResults({
        movieName: [],
        movieResults: [],
      })
    );
  };
  const handleLanguageOptionChange = (e) => {
    dispatch(changeLanguageOption(e.target.value));
  };

  return (
    <div className="w-full flex md:flex-row absolute md:px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-36 md:w-44" src={NETFLIX_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="w-full md:w-1/2 flex items-center justify-evenly md:justify-end">
          {showGptSearch && (
            <select
              className="p-1 md:m-2 md:p-2 bg-white rounded-lg"
              onChange={handleLanguageOptionChange}
            >
              {ShowLanguageOptions.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" bg-purple-800 p-1 md:p-2 text-white rounded-lg font-bold cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-14 h-14 p-2 rounded-2xl hidden md:block"
            src={user?.photoURL ?? USER_AVATAR}
            alt="userIcon"
          />
          <button
            className="md:w-1/4 bg-red-700 p-1 md:p-2 text-white rounded-lg font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
