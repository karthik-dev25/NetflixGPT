import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constant";
import { addTrailerVideo } from "../store/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const getMovieVideo = async () => {
    try {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length !== 0 ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
