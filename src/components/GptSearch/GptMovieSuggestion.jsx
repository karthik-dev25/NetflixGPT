import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";

const GptSearchSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  return (
    <div className=" bg-black text-white opacity-80">
      {movieNames.map((movieName, index) => (
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
