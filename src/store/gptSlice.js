import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: [],
    movieResults: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovieResults: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieNames = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addSearchMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
