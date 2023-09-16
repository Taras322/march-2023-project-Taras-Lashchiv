import React, {useEffect} from 'react';

import MovieListCard from "../../components/MovieListCard/MovieListCard";
import MainLayout from "../MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slice/movies.slice";

const MovieListPage = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);


    useEffect(()=>{
        dispatch(movieActions.all())
    },[])



    return (
        <MainLayout>
        <div className="App">
            <div className='MovieList'>
                {
                    movies.map((movie)=> <MovieListCard movie={movie} key={movie.id}/>)
                }
            </div>
        </div>
        </MainLayout>
    );
};

export default MovieListPage;