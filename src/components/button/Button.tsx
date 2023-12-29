import React, {useState} from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";

type ButtonProps = {
    title: string
    isDisabled: boolean
    onClick: ()=>void
}
export const Button:React.FC<ButtonProps> = ({title,isDisabled,onClick}) => {

    const onClickHandler = () => {
        onClick();
    }
    return (
        <button className="btn" disabled={isDisabled} onClick={onClickHandler}>
            {title}
        </button>
    );
};
