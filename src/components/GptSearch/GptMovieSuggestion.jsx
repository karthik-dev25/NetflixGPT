import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";

const GptSearchSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieResults[0]) {
    return (
      <div className="mt-4 md:mx-auto text-white bg-black">
        TMDB is currently blocked on the Jio network. If you're a Jio user, you
        may not be able to access the site or its API. Please try switching to a
        different internet provider or use a VPN to access the content.
      </div>
    );
  }
  return (
    <div className=" text-white mt-5 md:mt-0">
      {movieResults[0] && movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchSuggestion;
