import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slice/movies.slice";
import {genreReducer} from "./slice/genres.slice";


const store = configureStore({
    reducer:{
       movies: movieReducer,
        genres:genreReducer
    }
});

export {store}