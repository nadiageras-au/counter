import React, {ReactNode} from 'react';
import styled from 'styled-components';

export type  DisplayProps = any & {
    countValue: number
    maxValue: number
    error: boolean

}
export const Display:React.FC<DisplayProps> = ({countValue, maxValue, error}) => {

    return (
        <StyledDisplay error={error}>
            {countValue}
        </StyledDisplay>
    );
};

type StyledDisplayProps = {
    error: boolean
}

const StyledDisplay = styled.div<StyledDisplayProps>`
  background-color: rgb(243, 252, 219);
  ${props => props.error ? "color: #f5896c" : ""}
`