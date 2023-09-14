import React from 'react';
import {useLocation} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import {posterURL} from "../../const/urls";



const MovieInfoPage = () => {
    const {state} = useLocation();

    return (
        <MainLayout>
        <div>
            <div>{state.title}</div>
            <div>{state.overview}</div>
            <img src={posterURL + `${state.backdrop_path}`}/>
        </div>
        </MainLayout>
    );
};

export default MovieInfoPage;