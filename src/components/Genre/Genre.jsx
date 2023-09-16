import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Genre = ({genre}) => {
    const {name, id} = genre;

    const dispatch = useDispatch();


    const handleClick = () =>{
        console.log(id);
    };


    return (
        <div>
            <button onClick={handleClick} type={'button'}>{name}</button>
        </div>

    );
};

export default Genre;