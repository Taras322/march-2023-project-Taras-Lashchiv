import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import React from "react";
import MovieListPage from "../pages/MovieListPage/MovieListPage";
import MovieInfoPage from "../pages/MovieInfoPage/MovieInfoPage";
import User from "../components/User/User";
import GenreBadge from "../components/GenreBadge/GenreBadge";
export const Route = {
    Home: '/',
    Movies:'/movies',
    Movie:'/movies/:id',
    User:'/user',
    Genres: '/genres',
    Genre:'/genres/:id'
}

export const routes = createBrowserRouter([
    {
        path: Route.Home,
        element:<App/>,

    },
    {
        path:Route.Movies,
        element:<MovieListPage/>
    },
    {
        path:Route.Movie,
        element:<MovieInfoPage/>
    },
    {
        path:Route.User,
        element:<User/>
    },
    {
        path:Route.Genres,
        element:<GenreBadge/>
    }
])

