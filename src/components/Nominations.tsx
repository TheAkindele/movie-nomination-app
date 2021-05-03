import React from 'react'
import {Button} from "./Button"


interface Props {
    
}

export const Nominations = (props: Props) => {
    const nominated = [1, 2, 3, 4]
    return (
        <div>
            <h2>Search results for {"ram"}</h2>
            <ul>
                {nominated?.map((nominees: any, i: any) => (
                    <div>
                        <li key={i} className="">{nominees}</li>
                        <Button />
                    </div>
                ))}
            </ul>
        </div>
    )
}
