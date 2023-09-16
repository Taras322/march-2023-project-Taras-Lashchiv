import React from 'react';


import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Pagination = () => {

    const dispatch = useDispatch();

    const {total_pages} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams();

    const page = query.get('page');

    const clickPrevPage = ()=>{
        if (page > 1) {
            setQuery({page:`${+page-1}`})
        }
    }
    const clickNextPage = ()=>{
        if (page < total_pages) {
            setQuery({page:`${+page+1}`})
        }
    }
    return (
        <div>
            <p>1</p>
            <button onClick={clickPrevPage}>prev</button>
            {page || 0}
            <button onClick={clickNextPage}>next</button>
            <p>{total_pages}</p>
        </div>
    );
};

export default Pagination;