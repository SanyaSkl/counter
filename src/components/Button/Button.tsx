import React from 'react';
import './Button.css';

type ButtonType = {
    name: string
    onClick: () => void
    className?: string
    disabled?: boolean
}

export const Button = (props: ButtonType) => {
    const{name, onClick, className, disabled} = props

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClickHandler}
        >{name}
        </button>
    );
};
