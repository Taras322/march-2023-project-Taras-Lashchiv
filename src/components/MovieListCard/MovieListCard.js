import React from 'react';
import {posterURL} from "../../const/urls";
import {useNavigate} from "react-router-dom";


const MovieListCard = ({movie}) => {

    const {title, backdrop_path, id} = movie;
    const navigate = useNavigate();
    const showMovieInfo = () => {
        navigate({pathname:`${id}`}, {state: {...movie}})
    }

    return (
        <div className={'movie-card'}>
            <div><img src={posterURL + `${backdrop_path}`} className={'movie-cover'}/></div>
            <h5 className={'movie-title'}>{title}</h5>
            <button onClick={showMovieInfo}>About movie</button>
        </div>
    );
};

export default MovieListCard;