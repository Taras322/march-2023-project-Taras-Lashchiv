import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const initialState = {
    movies:[],
    searchMovies:[],
    errors:null,
    isLoading:null,

};

const all = createAsyncThunk(
    'moviesSlice/all',
    async (_,thunkAPI)=>{
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const search = createAsyncThunk(
    'moviesSlice/search',
    async (query,thunkAPI)=>{
        try {
            const {data} = await movieService.searchMovie(query);
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [all.fulfilled]:(state, actions)=>{
            state.movies = actions.payload.results
        },
        [search.fulfilled]:(state, actions)=>{
            state.searchMovies = actions.payload.results
        }
    }
});

const {reducer: movieReducer, actions} = moviesSlice;

const movieActions = {
    all,
    search

}

export {
    movieReducer,
    movieActions
}