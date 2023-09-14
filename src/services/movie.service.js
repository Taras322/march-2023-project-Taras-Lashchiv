import {axiosService} from "./axios.service";
import {baseURL, urls} from "../const/urls";

const movieService = {
    getAll:(page=1)=>axiosService.get(urls.discover, {params:{page}}),
    getGenre:()=>axiosService.get(baseURL + urls.genre)
}

export {
    movieService
}