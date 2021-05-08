import React from 'react'
import {Button} from "./Button"
import {Loader} from "./Loader"
import {useSelector, useDispatch} from "react-redux"
import {NominateMovie} from "../redux/actions/action"

interface Props {
}

export const Result = () => {
    const dispatch = useDispatch()
    const _nominateMovie = NominateMovie()

    const {data, keyword, loading} = useSelector((state: any) => state.search)

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
                    {data?.map(({Title, Year, imdbID}: any, i: any) => (
                        <div className="flex mb-4 md:mb-3 ml-2 " key={i} >
                            <li className="w-full mr-2 flex justify-between items-center">
                                <p className="w-9/12 mr-2">{Title}</p>
                                <p className="w-2/12 text-center mr-2 text-red-400">{Year}</p>

                                <Button
                                    text="Nominate"
                                    className=" ml-2 w-1/12"
                                    onClick={() => dispatch(_nominateMovie({Title, Year, imdbID}))}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    )
}
