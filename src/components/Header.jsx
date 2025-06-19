import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utility/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
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
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
//  Unsubscribe when component will unmount;
    return () => unsubscribe()
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full flex absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center">
          <img
            className="w-14 h-14 p-2 rounded-2xl"
            src={
              user?.photoURL ??
              USER_AVATAR
            }
            alt="userIcon"
          />
          <button
            className="w-full bg-red-700 p-2 text-white rounded-lg font-bold cursor-pointer"
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
