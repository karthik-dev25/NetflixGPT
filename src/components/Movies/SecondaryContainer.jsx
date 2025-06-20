import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  console.log(nowPlayingMovies);
  return (
    <div className=" bg-black pl-10">
      <div className="-mt-70 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Trending"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={nowPlayingMovies} />
      <MovieList title={"Horror"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
