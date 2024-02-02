import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';
import {BoxWrapper} from '../helpers/StyledBoxWrapper';
import {Input} from '../input/Input';
import {Display, DisplayProps} from '../screen/Display'
import {Button} from '../button/Button';
import {WrapperBlock} from '../counter/Counter';

export type SettingsProps = any & {
    setDisplayMsg: (num: number)=>void
    //label: string
}
export const Settings: React.FC<SettingsProps> = ({setDisplayMsg}) => {

    let localMax = Number(localStorage.getItem('maxValue'));
    let localStart = Number(localStorage.getItem('startValue'));

    const [maxValue, setMaxValue] = useState( localMax ? localMax : 5)
    const [startValue, setStartValue] = useState(localStart ? localStart : 0)
    const [inputError, setInputError] = useState(false)

    const setToLocalStorage = (startValue: number, maxValue: number) => {
        // console.log("start ", startValue, "max ", maxValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        window.dispatchEvent(new Event('storage'));
        setDisplayMessageHandler(0);

    }

    const setDisplayMessageHandler = (num:number)=> {
        setDisplayMsg(num)
    }
    const onChangeMaxhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newMaxtValue = Number(e.currentTarget.value);
        const newError = (startValue >= newMaxtValue || startValue < 0)
        setMaxValue(Number(e.currentTarget.value));
        setDisplayMessageHandler(newError ? 2 : 1);
        setInputError(newError);
    }

    const onChangeStarthandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Number(e.currentTarget.value);
        const newError = (newStartValue >= maxValue || newStartValue < 0)
        setStartValue(newStartValue);
        setDisplayMessageHandler(newError ? 2 : 1);
        setInputError(newError);
    }

    const clearLocalStorage = () => {
        localStorage.clear();
    }

    return (
        <BoxWrapper>
            <WrapperBlockSet>
                <Input label='max value'
                       onChange={onChangeMaxhandler}
                       defaultValue={String(maxValue)}
                       error={inputError}/>

                <Input label='start value'
                       onChange={onChangeStarthandler}
                       defaultValue={String(startValue)}
                       error={inputError}/>

            </WrapperBlockSet>

            <WrapperBlock>

                <Button title="set" isDisabled={inputError} onClick={() => setToLocalStorage(startValue, maxValue)}/>

            </WrapperBlock>
        </BoxWrapper>);
};


const WrapperBlockSet = styled(WrapperBlock)`
  flex-direction: column;
  justify-content: center;
  padding: none;

`