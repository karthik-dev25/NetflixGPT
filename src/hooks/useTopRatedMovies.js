import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIE_API } from "../utility/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIE_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
  },[])
};

export default useTopRatedMovies;
