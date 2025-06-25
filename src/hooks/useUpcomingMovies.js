import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIE_API } from "../utility/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(UPCOMING_MOVIE_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
