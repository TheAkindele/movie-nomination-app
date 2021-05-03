import React from 'react'

interface Props {
    text?: string;
    disabled?: boolean;
    className?: string;
    rest?: any;
}

export const Search = (props: Props) => {
    return (
        <form className="w-100 py-4 px-8 shadow-xl border rounded mb-8">
            <label className="">Movie Search</label>
            <div className="w-100 search-box flex items-center justify-center border rounded mt-3">
                <div className="icon w-1/12 h-10 flex items-center justify-center">
                    <img src="/search.svg" alt="search icon" className="w-100 h-5 cursor-pointer"/>
                </div>
                <input type="text" placeholder="Search Movie Here.." className="w-11/12 h-10 outline-none mr-2"/>
            </div>
        </form>
    )
}
