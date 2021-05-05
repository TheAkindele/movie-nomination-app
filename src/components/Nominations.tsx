import React, {FC, useState, useMemo, useEffect} from 'react'
import {Button} from "./Button"
import {useSelector} from "react-redux"

interface Props {
}

export const Nominations: FC<Props> = () => {
    const {movie} = useSelector((state: any) => state.search)
    console.log("selected== ", movie);

    const [nominated, setNominated] = useState<any>([])


    useMemo(() => {
        setNominated((previous: any) => 
        console.log("prev== ", previous))
     
    }, [movie])
  // previous && previous?.length !== 0 && [...previous, movie])
    console.log("nom arr== ", Array.isArray(nominated)); 


    return (
        <div className="result border rounded py-4 px-1 md:p-8">
            <h2 className="mb-6 text-2xl text-gray-500">Nominated Movies</h2>
                <ul>
                    {nominated.length > 0 && nominated?.map((movie: any, i: any) => (
                        <div className="flex mb-4 md:mb-3 ml-2 " key={i} >
                            <li className="w-full mr-2 flex justify-between items-center">
                                <p className="w-9/12 mr-2">{movie?.Title}</p>
                                <p className="w-2/12 text-center mr-2 text-red-400">{movie?.Year}</p>
                                <Button
                                    text="Remove"
                                    className="second-btn ml-2 w-1/12"
                                    //onClick={() => }
                                />
                            </li>
                        </div>
                    ))}
                </ul>
        </div>
    )
}
