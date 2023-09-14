import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movie.service";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import css from "./Movielist.module.css"
import MainLayout from "../MainLayout/MainLayout";

const MovieListPage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        movieService.getAll()
            .then(value => value.data)
            .then(value => setMovies(value.results))
    },[]);

    return (
        <MainLayout>
        <div className={css.MovieListPage}>
            {
                movies.map((movie)=><MovieListCard movie={movie} key={movie.id}/>)
            }
        </div>
        </MainLayout>
    );
};

export default MovieListPage;