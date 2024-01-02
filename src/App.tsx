import './App.css';
import {Button} from "./components/button/Button";
import {Display, DisplayProps} from './components/screen/Display'
import {useState} from "react";

// type ValueType = {
//     valueRange: 0 | 1 | 2 | 3 | 4 | 5
// }
function App() {

    const minValue = 0;
    const maxValue = 5;
    const [value, setValue] = useState(minValue)
    const addCount = () => {
        if (value < maxValue)
            setValue(prev => prev + 1)
    }

    const resetCount = () => {
        setValue(minValue)
    }

    const setToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    const getToLocalStorage = () => {
       let valueAsString =  localStorage.getItem('counterValue');
       if(valueAsString) {
           let newValue = JSON.parse(valueAsString);
           setValue(newValue)
       }
    }

    const clearLocalStorage = () => {
        localStorage.clear();
    }


    const removeItemFromStorage = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className="App">
            <div className="dflex block">
                <Display countValue={value} maxValue={maxValue}/>

                <div className='dflex block-btn'>
                    <Button title="inc" isDisabled={value >= maxValue} onClick={() => addCount()}/>
                    <Button title="reset" isDisabled={value === minValue} onClick={() => resetCount()}/>
                    <Button title="setToLocalStorage" isDisabled={false} onClick={() => setToLocalStorage()}/>
                    <Button title="getToLocalStorage" isDisabled={false} onClick={() => getToLocalStorage()}/>
                    <Button title="clearLocalStorage" isDisabled={false} onClick={() => clearLocalStorage()}/>
                    <Button title="removeItemFromStorage" isDisabled={false} onClick={() => removeItemFromStorage()}/>
                </div>
            </div>

        </div>
    );
}

export default App;

