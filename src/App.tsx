import React from 'react'
import { Search, Result, Nominations} from "./components"

interface Props {
    
}

const App = (props: Props) => {
    return (
        <div className="w-full md:w-5/6 py-16 px-10 border mx-auto">
            <h1 className="text-2xl mb-4">The Shoppies</h1>
            <Search />
            <div className="flex flex-col md:flex-row justify-between ">
              <Result />
              <Nominations/>
            </div>
        </div>
    )
}

export default App
