import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../../utility/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="Background image" />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearch;
