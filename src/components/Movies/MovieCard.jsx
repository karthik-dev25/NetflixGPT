import React from "react";
import { IMG_CDN } from "../../utility/constant";

const MovieCard = ({ movie }) => {
    const { poster_path, original_title } = movie;
    if(!poster_path) return null;
  return (
    <div className="w-42 pr-4">
      <img src={IMG_CDN + poster_path} alt={original_title} />
    </div>
  );
};

export default MovieCard;
