import React from 'react';
import {posterURL} from "../../const/urls";
import {useNavigate} from "react-router-dom";


const MovieListCard = ({movie}) => {

    const {title, backdrop_path, overview, id} = movie;
    const navigate = useNavigate();
    const showMovieInfo = () => {
        navigate({pathname:`${id}`}, {state: {...movie}})
    }

    return (
        <div>
            <div><img src={posterURL + `${backdrop_path}`}/></div>
            <div>title: {title}</div>
            <div>{overview}</div>
            <button onClick={showMovieInfo}>button</button>
        </div>
    );
};

export default MovieListCard;