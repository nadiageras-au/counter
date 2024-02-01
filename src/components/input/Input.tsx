import React, {ReactNode} from 'react';
import styled from 'styled-components';


export type InputProps = any & {
    label: string
    defaultValue: string
    onChange: ()=>void
    error: boolean
}
export const Input = (props:InputProps) => {

    return (
        <StyledInput aria-label={props.label} error={props.error}>
            <input
                type='number'
                defaultValue={String(props.defaultValue)}
                onChange={(e)=>props.onChange(e)}
            />
        </StyledInput>

    );
};

type StyledInputProps = {
    error: boolean
}
const StyledInput = styled.label<StyledInputProps>`
  //width: 180px;

  font-size: 20px;
  display: flex;
  justify-content: space-around;
  gap: 15px;
  //margin-bottom: 15px;
  align-items: center;

  & input {
    width: 120px;
    font-size: 20px;
    border: 2px solid deepskyblue;
    border-radius: 5px;
    text-align: center;
    
    ${props => props.error ? "background-color: #f5896c" : "background-color: white"}
  }

  &::before {

    content: attr(aria-label);
    color: #725225;
    font-weight: bold;
  }
`