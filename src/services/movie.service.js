import {axiosService} from "./axios.service";
import {baseURL, urls} from "../const/urls";

const movieService = {
    getAll:(page=1)=>axiosService.get(urls.discover, {params:{page}}),
    getGenre:()=>axiosService.get(baseURL + urls.genre),
    searchMovie:(query)=>axiosService.get(baseURL + urls.search, {params:{query}}),
    getMovieByGenre:(with_genres)=>axiosService.get(baseURL + urls.discover,{params:{with_genres}})
}

export {
    movieService
}