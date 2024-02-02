import React, {ReactNode} from 'react';
import styled from 'styled-components';

export type  DisplayProps = {
    displayData: string
    error: boolean

}
export const Display:React.FC<DisplayProps> = ({displayData, error}) => {

    return (
        <StyledDisplay error={error}>
            {displayData}
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