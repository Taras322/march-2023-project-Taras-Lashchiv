import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slice/movies.slice";
import MovieListCard from "../MovieListCard/MovieListCard";


const Searcher = () => {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const state = useSelector(state=>state.movies.searchMovies);

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    const handleClick = () =>{
        dispatch(movieActions.search(search))
    }
    useEffect(()=>{
        console.log(state);
    },[state])
    return (
        <div className={'search-page'}>
            <input type={'text'} placeholder={'search'} onChange={handleSearch} value={search}/>
            <button type={'button'} onClick={handleClick}>search</button>
            <h3>Results:</h3>
            <div className='MovieList'>
            {
                state.map((movie)=> <MovieListCard movie={movie} key={movie.id}/>)
            }
            </div>
        </div>
    );
};

export default Searcher;