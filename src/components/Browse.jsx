import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./Movies/MainContainer";
import SecondaryContainer from "./Movies/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch/GptSearch";
import { useSelector } from "react-redux";
import ErrorComponent from "./ErrorComponent";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : nowPlayingMovies ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <div>
          <ErrorComponent />
        </div>
      )}
    </div>
  );
};

export default Browse;
