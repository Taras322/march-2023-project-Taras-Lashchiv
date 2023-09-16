import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const initialState = {
    movies:[],
    searchMovies:[],
    searchMoviesByGenres:[],
    total_pages:0,
    errors:null,
    isLoading:null,

};

const all = createAsyncThunk(
    'moviesSlice/all',
    async (page,thunkAPI)=>{
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    });

const search = createAsyncThunk(
    'moviesSlice/search',
    async (query,thunkAPI)=>{
        try {
            const {data} = await movieService.searchMovie(query);
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    });

const allMovieByGenres = createAsyncThunk(
    'moviesSlice/allMovieByGenres',
    async (id, thunkAPI)=>{
        try {
            const {data} = await movieService.getMovieByGenre(id);
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    });

const moviesSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [all.fulfilled]:(state, actions)=>{
            state.movies = actions.payload.results
            state.total_pages = actions.payload.total_pages
            console.log('k1',actions)
        },
        [search.fulfilled]:(state, actions)=>{
            state.searchMovies = actions.payload.results
        },
        [allMovieByGenres.fulfilled]:(state, actions)=>{
            state.searchMoviesByGenres = actions.payload.results
        }
    }
});

const {reducer: movieReducer, actions} = moviesSlice;

const movieActions = {
    all,
    search,
    allMovieByGenres

}

export {
    movieReducer,
    movieActions
}