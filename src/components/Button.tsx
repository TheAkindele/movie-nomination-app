import React, {FC} from 'react'
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

export const Button: FC<Props> = ({ text, type, loading, disabled, className, onClick, ...rest }) => {
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
