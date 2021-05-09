import React, { useState, useMemo} from 'react'
import {Button} from "./Button"
import {useSelector, useDispatch} from "react-redux"
import {RemoveNominated} from "../redux/actions/action"


export const Nominations = () => {
    const dispatch = useDispatch()
    const _removeNominated = RemoveNominated()

    const {nominatedMovies} = useSelector((state: any) => state.search)

    const [nominated, setNominated] = useState<any>()
    
    useMemo(() => {
        Object.keys(nominatedMovies).length !== 0 && nominatedMovies.length !== 6 && setNominated(nominatedMovies)
    }, [nominatedMovies])

    const removeMovie = (selectedId: any) => {
        const filtered = nominatedMovies?.filter((item: any) => item?.imdbID !== selectedId)
        setNominated(filtered)
        dispatch(_removeNominated(filtered))
    }

    return (
        <div className="result border rounded py-4 px-1 md:p-8">
            <h2 className="mb-6 text-2xl text-gray-500">Nominated Movies</h2>
                <ul>
                    {nominated?.map((movie: any) => (
                        <div className="flex mb-4 md:mb-3 ml-2 " key={movie?.imdbID} >
                            <li className="w-full mr-2 flex justify-between items-center">
                                <p className="w-9/12 mr-2">{movie?.Title}</p>
                                <p className="w-2/12 text-center mr-2 text-red-400">{movie?.Year}</p>
                                <Button
                                    text="Remove"
                                    className="second-btn ml-2 w-1/12"
                                    onClick={() => removeMovie(movie?.imdbID)}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
        </div>
    )
}
