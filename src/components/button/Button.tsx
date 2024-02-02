import React, {useState} from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";
import styled from 'styled-components';

type ButtonProps = {
    title: string
    isDisabled?: boolean
    onClick: ()=>void
}
export const Button:React.FC<ButtonProps> = ({title,isDisabled,onClick}) => {

    const onClickHandler = () => {
        onClick();
    }
    // @ts-ignore
    return (
        <StyledButton disabled={isDisabled} onClick={onClickHandler}>
            {title}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  max-width: 100px;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #caf0d8;
  text-transform: uppercase;
  font-size: 16px;
`
