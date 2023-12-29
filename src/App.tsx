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
    const [value, setValue  ] = useState(minValue)
    const addCount = () => {
        if (value < maxValue)
           setValue(prev => prev + 1)
    }

    const resetCount = () => {
        setValue(minValue)
    }

    return (
        <div className="App">
            <div className="dflex block">
                <Display countValue={value} maxValue={maxValue}/>

                <div className='dflex block-btn'>
                    <Button title="inc" isDisabled={value >= maxValue} onClick={()=>addCount()}/>
                    <Button title="reset" isDisabled={value === minValue} onClick={()=>resetCount()}/>
                </div>
            </div>

        </div>
    );
}

export default App;

