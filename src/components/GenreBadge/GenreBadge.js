import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movie.service";
import Genre from "../Genre/Genre";

const GenreBadge = () => {
    const [genres, setGenres] = useState([]);
    useEffect(()=>{
        movieService.getGenre()
            .then(value => value.data)
            .then(value => setGenres(value.genres))
    })
    return (
        <div>
            {
                genres.map((genre, index)=><Genre genre={genre} key={index}/>)
            }
        </div>
    );
};

export default GenreBadge;