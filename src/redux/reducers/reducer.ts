import * as types from "../types"

const initialState = {
    data: [],
    keyword: "",
    loading: false,
    movie: {}
}

const searchMovie = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case types.SEARCH_MOVIE_REQUEST:
            return {...state, loading: true}
        
        case types.SEARCH_MOVIE_SUCCESS:
            return {...state, loading: false, ...payload}
        
        case types.NOMINATE_MOVIE:
            return {...state, movie: payload}

        case types.SEARCH_MOVIE_FAILURE:
            return {...state, loading: false, payload}

        default:
            return state
    }
}


export default searchMovie