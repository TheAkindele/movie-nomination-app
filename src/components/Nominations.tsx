import React, { useState, useMemo} from 'react'
import {Button} from "./Button"
import {useSelector} from "react-redux"


export const Nominations = () => {
    const {movie} = useSelector((state: any) => state.search)
    const {Year, Title, imdbID} = movie

    const [nominated, setNominated] = useState<any>([])

    console.log("nominated length>> ", nominated.length);
    
    useMemo(() => {
        Object.keys(movie).length !== 0 && setNominated((prev: any) =>  [...prev, {title: Title, year: Year, id: imdbID}] )
    }, [movie])

    const removeMovie = (selectedId: any) => {
        const filtered = nominated.filter((item: any) => item.id !== selectedId)
        setNominated(filtered)
    }

    return (
        <div className="result border rounded py-4 px-1 md:p-8">
            <h2 className="mb-6 text-2xl text-gray-500">Nominated Movies</h2>
                <ul>
                    {nominated?.map((movie: any) => (
                        <div className="flex mb-4 md:mb-3 ml-2 " key={movie?.id} >
                            <li className="w-full mr-2 flex justify-between items-center">
                                <p className="w-9/12 mr-2">{movie?.title}</p>
                                <p className="w-2/12 text-center mr-2 text-red-400">{movie?.year}</p>
                                <Button
                                    text="Remove"
                                    className="second-btn ml-2 w-1/12"
                                    onClick={() => removeMovie(movie?.id)}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
        </div>
    )
}
