import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
  },
});

export const { addNowPlayingMovie } = movieSlice.actions;

export default movieSlice.reducer;
