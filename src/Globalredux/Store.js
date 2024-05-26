import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "../utils/reduxslice/MovieSlice"
import favouriteReducer from "../utils/reduxslice/favouriteSlice"

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        favorites: favouriteReducer,
    },
});
