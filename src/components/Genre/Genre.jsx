import React from 'react';
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slice/movies.slice";



const Genre = ({genre}) => {
    const {name, id} = genre;

    const dispatch = useDispatch();



    const handleClick = () =>{
        dispatch(movieActions.allMovieByGenres(id))
    };


    return (
        <div>
            <div>
                <button onClick={handleClick} type={'button'} className={'button-genre'}>{name}</button>
            </div>
        </div>

    );
};

export default Genre;