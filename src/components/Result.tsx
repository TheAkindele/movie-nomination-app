import React, {FC} from 'react'
import {Button} from "./Button"

// use this component for search result and nominee list

interface Props {
    btn?: string;
    type?: string;
    word?: string;
}

export const Result: FC<Props> = ({btn, type, word}) => {
    const sampleResult = [1, 2, 3, 4]
    return (
        <div className="result border rounded p-8">
            <h2 className="mb-6 text-2xl">
                {type === "result" ? `Result for ${word}` : "Nomiated movies"}
            </h2>
            <ul>
                {sampleResult?.map((result: any, i: any) => (
                    <div className="flex justify-between items-center mb-3 ml-2">
                        <li key={i} className="">{result}</li>
                        {btn === "remove" ?
                            <Button
                                text="Remove"
                                className="second-btn"
                            /> 
                            : <Button
                                text="Nominate"
                            />
                        }
                    </div>
                ))}
            </ul>
        </div>
    )
}
