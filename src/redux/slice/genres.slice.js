import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";

const initialState = {
    genres:[],
    errors:null,
    isLoading:null
};

const all = createAsyncThunk(
    'genresSlice/all',
    async (_, thunkAPI)=>{
        try {
            const {data} = await movieService.getGenre();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    });

const genresSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [all.fulfilled]:(state, actions)=>{
            state.genres = actions.payload.genres
        }
    }
});

const {reducer:genreReducer, actions} = genresSlice;

const genreAction = {
    all
}

export {
    genreReducer,
    genreAction
}