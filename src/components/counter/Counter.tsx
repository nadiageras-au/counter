import React, {ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import {BoxWrapper} from '../helpers/StyledBoxWrapper';
import {Input} from '../input/Input';
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

    useEffect(() => {
        window.addEventListener('storage', ()=> {
            //let newLocalStart = Number(localStorage.getItem('startValue'))
           // console.log('change to local Storage');
            setCountStart(Number(localStorage.getItem('startValue')) || 0)
        })

    }, [localStart])


    // const getToLocalStorage = () => {
    //     let startValueAsString = localStorage.getItem('startValue');
    //     if (startValueAsString) {
    //         let newStartValue = JSON.parse(startValueAsString);
    //         setCountStart(newStartValue)
    //     }
    //
    //     let maxValueAsString = localStorage.getItem('maxValue');
    //     if (maxValueAsString) {
    //         let newMaxValue = JSON.parse(maxValueAsString);
    //         //setLocalMax(newMaxValue)
    //     }
    // }

    //let [value, setValue] = useState(props.start)
    //
    // useEffect = (()=>{setValue(start);}, [])

    const addCount = () => {
       // console.log('start ', props.start, "max ", props.max);
        // setValue(Number(value) + 1)
    }
    //
    // const resetCount = () => {
    //     setValue(minValue)
    // }


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

                <Button title="reset" isDisabled={false} onClick={() => {}}/>

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