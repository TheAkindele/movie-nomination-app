import React from 'react'
import { Search, Result} from "./components"

interface Props {
    
}

const App = (props: Props) => {
    return (
        <div className="w-5/6 py-16 px-10 border mx-auto">
            <h1 className="text-2xl mb-4">The Shoppies</h1>
            <Search />
            <div className="flex justify-between items-center">
              <Result type="result" word="whatever" />
              <Result type="selected" btn="remove" />
            </div>
        </div>
    )
}

export default App
