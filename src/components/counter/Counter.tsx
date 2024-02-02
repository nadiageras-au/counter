import React, {ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import {BoxWrapper} from '../helpers/StyledBoxWrapper';
import {Display, DisplayProps} from '../screen/Display'
import {Button} from '../button/Button';

export type CounterProps = {
    // start:string
    // max:string

}
export const Counter = (props:CounterProps) => {
    let localMax = Number(localStorage.getItem('maxValue'));
    let localStart = Number(localStorage.getItem('startValue'));

    let [countStart, setCountStart] = useState(localStart ? localStart : 0);
    //let [countValue, setCountValue] = useState

    useEffect(() => {
        window.addEventListener('storage', ()=> {
            //let newLocalStart = Number(localStorage.getItem('startValue'))
           // console.log('change to local Storage');
            setCountStart(Number(localStorage.getItem('startValue')) || 0)
        })

    }, [localStart])

    const addCount = () => {

        setCountStart(countStart + 1)
    }

    const resetCount = () => {
        console.log('reset start ', localStart, "max ", localMax);
        setCountStart(localStart)
    }


    // const getToLocalStorage = () => {
    //     let valueAsString = localStorage.getItem('startValue');
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString);
    //         setValue(newValue)
    //     }
    // }


    const clearLocalStorage = () => {
        localStorage.clear();
    }


    const removeItemFromStorage = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <BoxWrapper>
            <WrapperBlock>
                {/*<Display countValue={startValue} maxValue={maxValue}/>*/
                }

                <Display countValue={countStart}/>
            </WrapperBlock>

            <WrapperBlock className='dflex block-btn'>
                <Button title="inc" isDisabled={false} onClick={() => addCount()}/>

                <Button title="reset" isDisabled={false} onClick={() => resetCount()}/>

            </WrapperBlock>
        </BoxWrapper>);
};

export const WrapperBlock = styled.div`
  min-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  border: 2px solid #08e5ec;
`