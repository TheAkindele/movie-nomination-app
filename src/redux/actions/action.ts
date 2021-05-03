import axios from 'axios';
import * as types from "../types"
import { Dispatch } from "redux";

export const searchMovie = () => {
    return async() => (dispatch: Dispatch) => {
        dispatch({type: types.SEARCH_MOVIE_REQUEST}),
        
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data = await response
            dispatch({
                type: types.SEARCH_MOVIE_SUCCESS,
                payload: response
            })
        }
        catch (error: any) {
            dispatch({type: types.SEARCH_MOVIE_FAILURE, payload: error})
        }
    }
}


// }