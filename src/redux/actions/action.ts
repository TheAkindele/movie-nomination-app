import axios from 'axios';
import * as types from "../types"
import { Dispatch } from "redux";

export const SearchMovie =  () => {
    return (keyword?: any) => (dispatch: Dispatch) => {
        dispatch({type: types.SEARCH_MOVIE_REQUEST})

        axios.get(`http://www.omdbapi.com/?apikey=4a6c6b7c&s=${keyword}`)
        .then((response: any) => {
            const data = response?.data?.Search
            dispatch({
                type: types.SEARCH_MOVIE_SUCCESS,
                payload: {
                    data: [...data],
                    keyword: keyword
                }
            })
        })

        .catch((error: any) => {
            dispatch({
                type: types.SEARCH_MOVIE_FAILURE,
                payload: error
            })
        })
    }
}

export const NominateMovie = () => {
    return (movie?: any) => (dispatch: Dispatch) => {
        //console.log("selected== ", movie);
        
        dispatch({type: types.NOMINATE_MOVIE, payload: movie})
    }
}

