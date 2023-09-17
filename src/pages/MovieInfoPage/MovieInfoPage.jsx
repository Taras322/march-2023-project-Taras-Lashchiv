import React from 'react';
import {useLocation} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import {posterURL} from "../../const/urls";



const MovieInfoPage = () => {
    const {state} = useLocation();

    return (
        <MainLayout>
        <div className={'movie-info-card app'}>
            <img src={posterURL + `${state.backdrop_path}`} className={'movie-info-card-img'}/>
            <div>{state.title}</div>
            <div>{state.overview}</div>
            <div>{state.vote_average}</div>
        </div>
        </MainLayout>
    );
};

export default MovieInfoPage;