import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchMovies = createAsyncThunk(
    'movies/fetchdata', async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }
)

const initialState = {
    movies: [],
    status: 'idle',
    error: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

export default movieSlice.reducer;
