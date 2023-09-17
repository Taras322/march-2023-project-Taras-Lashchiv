import React, {useEffect} from 'react';

import MovieListCard from "../../components/MovieListCard/MovieListCard";
import MainLayout from "../MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slice/movies.slice";
import Pagination from "../../components/paginations/Paginations";
import {useSearchParams} from "react-router-dom";

const MovieListPage = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams();
    const page = query.get('page');

    useEffect(()=>{
        if (page === null){
            setQuery({page:'1'})
        }
    },[]);

    useEffect(()=>{
        if (page !== null){
            console.log('page',page);
            dispatch(movieActions.all(+page))
        }
    },[page]);


    return (
        <MainLayout>
        <div className="app">
            <div className='MovieList'>
                {
                    movies.map((movie)=> <MovieListCard movie={movie} key={movie.id}/>)
                }
            </div>
            <Pagination/>
        </div>
        </MainLayout>
    );
};

export default MovieListPage;