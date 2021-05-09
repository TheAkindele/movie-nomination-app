/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo} from 'react'
import {Button} from "./Button"
import {Loader} from "./Loader"
import {useSelector, useDispatch} from "react-redux"
import {NominateMovie} from "../redux/actions/action"


export const Result = () => {
    const [result, setResult] = useState<any[]>()

    const dispatch = useDispatch()
    const _nominateMovie = NominateMovie()

    const {searchResult, keyword, loading, nominatedMovies} = useSelector((state: any) => state.search)

    const displayAlert = () => alert("maximum number of nominations reached")
    

    useMemo(() => {
        setResult(searchResult)
    }, [result, searchResult, nominatedMovies])

    const dispatchAction = (Title: any, Year: any, imdbID: any) => {
        if (nominatedMovies.length === 5) displayAlert()
        else  dispatch(_nominateMovie({Title, Year, imdbID}))
    }


    return (
        <div className="result border rounded py-4 px-1 md:p-8">
            <h2 className="mb-6 text-2xl text-gray-500">
                Result For {"  "}
                <span className="text-red-500 font-bold capitalize">{keyword}</span>
            </h2>

            {loading ? (
                <Loader />
            )
             : (
                <ul>
                    {result?.map((movie: any) => (
                        <div className="flex mb-4 md:mb-3 ml-2 " key={movie?.imdbID} >
                            <li className="w-full mr-2 flex justify-between items-center">
                                <p className="w-9/12 mr-2">{movie?.Title}</p>
                                <p className="w-2/12 text-center mr-2 text-red-400">{movie?.Year}</p>

                                { nominatedMovies?.some((item: any) => item.imdbID === movie.imdbID) ? (
                                    <Button
                                    text="Nominated"
                                    className="faded"
                                />
                                ) : (
                                    <Button
                                    text="Nominate"
                                    className="ml-2 w-1/12"
                                    onClick={() => dispatchAction(movie?.Title, movie?.Year, movie?.imdbID)}
                                />
                                )}
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}


