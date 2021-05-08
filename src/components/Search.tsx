import React, {useState} from 'react'
import {SearchMovie} from "../redux/actions/action"
import {useDispatch} from "react-redux"

interface Props {
    text?: string;
    disabled?: boolean;
    className?: string;
    rest?: any;
}

export const Search = (props: Props) => {
    const dispatch = useDispatch()
    const _searchMovie = SearchMovie()

    const [value, setValue] = useState("")
    const searchMovie = () => {
        dispatch(_searchMovie(value))
        setValue("")
    }

    const submitForm = (e: any) => {
        e.preventDefault()
        searchMovie()
    }

    return (
        <form 
            className="w-100 py-4 px-8 shadow-xl border rounded mb-8"
            onSubmit={submitForm}
        >
            <label className="">Movie Search</label>
            <div className="w-100 search-box flex items-center justify-center border rounded mt-3">  
                <input 
                    type="text"
                    placeholder="Search Movie Here.." 
                    value={value}
                    className="w-10/12 md:w-11/12 h-10 outline-none mx-2"
                    onChange={(e: any) => setValue(e.target.value)}
                />
                <button 
                    className="icon w-2/12 md:w-1/12 h-10 flex items-center justify-center cursor-pointer border bg-yellow-400"
                    type="submit"
                >
                    <img src="/search.svg" alt="search icon" 
                        className="w-100 h-5 cursor-pointer"
                    />
                </button>
            </div>
        </form>
    )
}
