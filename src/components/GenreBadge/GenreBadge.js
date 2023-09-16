import React, {useEffect} from 'react';

import Genre from "../Genre/Genre";
import MainLayout from "../../pages/MainLayout/MainLayout";

import {useDispatch, useSelector} from "react-redux";
import {genreAction} from "../../redux/slice/genres.slice";

const GenreBadge = () => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);
    console.log(genres);
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
        </MainLayout>
    );
};

export default GenreBadge;