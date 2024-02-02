import React, {ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import {BoxWrapper} from '../helpers/StyledBoxWrapper';
import {Display, DisplayProps} from '../screen/Display'
import {Button} from '../button/Button';

export type CounterProps = {
    displayMsg: string
    // start:string
    // max:string

}
export const Counter = (props:CounterProps) => {
    let localMax = Number(localStorage.getItem('maxValue'));
    let localStart = Number(localStorage.getItem('startValue'));

    let [countStart, setCountStart] = useState(localStart ? localStart : 0);

    const [countError, setCountError] = useState(false)
    //let [countValue, setCountValue] = useState

    useEffect(() => {
        window.addEventListener('storage', ()=> {
            //let newLocalStart = Number(localStorage.getItem('startValue'))
           // console.log('change to local Storage');
            setCountStart(Number(localStorage.getItem('startValue')) || 0)
            setCountError(false);
        })

    }, [localStart])

    const addCount = () => {

        if (countStart < localMax) {
            setCountStart(countStart + 1);
        }
        setCountError((countStart + 1) === localMax);

    }

    const resetCount = () => {
        setCountStart(localStart)
        setCountError(false);
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
    const dataDisplay = props.displayMsg === '' ? String(countStart) : props.displayMsg

    return (
        <BoxWrapper>
            <WrapperBlock>
                {/*<Display countValue={startValue} maxValue={maxValue}/>*/
                }

                <Display displayData={props.displayMsg ? props.displayMsg : String(countStart)} error={countError}/>
            </WrapperBlock>

            <WrapperBlock className='dflex block-btn'>
                <Button title="inc" isDisabled={countError} onClick={() => addCount()}/>

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