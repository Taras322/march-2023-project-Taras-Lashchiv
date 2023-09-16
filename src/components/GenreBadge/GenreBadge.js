import React, {useEffect} from 'react';

import Genre from "../Genre/Genre";
import MainLayout from "../../pages/MainLayout/MainLayout";

import {useDispatch, useSelector} from "react-redux";
import {genreAction} from "../../redux/slice/genres.slice";
import MovieListCard from "../MovieListCard/MovieListCard";

const GenreBadge = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    const state = useSelector(state=>state.movies.searchMoviesByGenres);

    useEffect(()=>{
        dispatch(genreAction.all())
    },[])

    return (
        <MainLayout>
        <div className={'genres'}>
            {
                genres.map((genre, index)=><Genre genre={genre} key={index}/>)
            }
        </div>
            <div className={'MovieList'}>
                {
                    state.map((movie)=><MovieListCard movie={movie} key={movie.id}/>)
                }
            </div>
        </MainLayout>
    );
};

export default GenreBadge;