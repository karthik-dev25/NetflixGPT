import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../../utility/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover lg:h-full"
          src={BACKGROUND_IMAGE}
          alt="Background image"
        />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
};

export default GptSearch;
