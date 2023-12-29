import React, {ReactNode} from 'react';

export type  DisplayProps = any & {
    countValue: number
    maxValue: number

}
export const Display:React.FC<DisplayProps> = ({countValue, maxValue}) => {

    return (
        <div className={countValue >= maxValue ? "red" : ""}>
            {countValue}
        </div>
    );
};
