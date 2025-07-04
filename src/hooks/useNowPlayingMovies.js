import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS, NOW_PLATING_MOVIE_API } from "../utility/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      let data = await fetch(NOW_PLATING_MOVIE_API, API_OPTIONS);
      let json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useNowPlayingMovies;
