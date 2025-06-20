import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 py-2 text-white">
      <h1 className="text-3xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll overflow-hidden">
        <div className="flex">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
