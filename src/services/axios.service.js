import axios from "axios";
import {baseURL} from "../const/urls";

const API_KEY = 'aaa7a705a557622e2f291ce4c5ab2ba1';

const axiosService = axios.create({baseURL,
        params:{
            api_key:API_KEY
        }
});

export {
    axiosService
}