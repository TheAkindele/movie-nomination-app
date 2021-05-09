import * as types from "../types"

const initialState = {
    searchResult: [],
    keyword: "",
    loading: false,
    nominatedMovies: []
}

const searchMovie = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case types.SEARCH_MOVIE_REQUEST:
            return {...state, loading: true}
        
        case types.SEARCH_MOVIE_SUCCESS:
            return {...state, loading: false, ...payload}

        case types.SEARCH_MOVIE_FAILURE:
            return {...state, loading: false, payload}

        case types.NOMINATE_MOVIE:
            return {...state, nominatedMovies: [...state?.nominatedMovies, payload]}

        case types.REMOVE_NOMINATED:
            return {...state, nominatedMovies: payload}

        default:
            return state
    }
}


export default searchMovie