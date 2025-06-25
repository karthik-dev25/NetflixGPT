import { useDispatch, useSelector } from "react-redux";
import lang from "../../utility/languageConstant";
import { useRef } from "react";
import AI from "../../utility/gemini";
import { API_OPTIONS, MOVIE_SEARCH_API } from "../../utility/constant";
import { addSearchMovieResults } from "../../store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const getSearchMovies = async (movieName) => {
    try {
      let data = await fetch(MOVIE_SEARCH_API + movieName, API_OPTIONS);
      let json = await data.json();
      return json.results;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchGptApi = async () => {
    const gptQuery =
      "Act as Movie Recommendation system and suggest some movies for the Query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example:Ghilli,Thuppaki,Kaththi,LEO,GOAT";
    const gptResults = await AI.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: gptQuery,
    });
    const gptSearchResults =
      gptResults.candidates[0].content.parts[0].text.split(", ");

    const result = gptSearchResults.map((movie) => getSearchMovies(movie));
    try {
      let movieSearchResults = await Promise.all(result);
      dispatch(
        addSearchMovieResults({
          movieName: gptSearchResults,
          movieResults: movieSearchResults,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-[20%] md:pt-[10%] flex justify-center">
      <form
        className="w-11/12 md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-2 col-span-9 rounded-lg bg-white text-sm"
          type="text"
          placeholder={lang[language].searchPlaceHolder}
        />
        <button
          className="col-span-3 bg-red-700 py-2 px-2 m-2 text-white rounded-lg cursor-pointer"
          onClick={handleSearchGptApi}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
