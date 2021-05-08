import React from 'react'
import {Loader} from "./Loader"

interface Props {
    text?: string;
    type?: any;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    rest?: any;
    onClick?: ()=>void;
}

export const Button= ({ text, type, loading, disabled, className, onClick, ...rest }: Props) => {
    return (
        <button 
            type={type || undefined}
            className={`button ${disabled ? "disable" : ""} ${loading ? "loading" : ""} ${className} `}
            onClick={onClick}
        >
            {loading ? <Loader/> : text}
        </button>
    )
}
