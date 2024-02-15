import { Movie } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state: any, action: PayloadAction<Movie>) => {
      state.push(action.payload);
    },
    editMovie: (state, action) => {
      const { id, name, review } = action.payload;
      const movieIndex = state.findIndex((movie: Movie) => movie.id === id);
      if (movieIndex !== -1) {
        state[movieIndex].name = name;
        state[movieIndex].review = review;
      }
    },
    setMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const { addMovie, setMovies, editMovie } = movieSlice.actions;
export default movieSlice.reducer;
