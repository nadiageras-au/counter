import './App.css';
import styled from 'styled-components';
import {Settings} from './components/settings/Settings'
import {Counter} from './components/counter/Counter';
import {useState} from 'react';

// type ValueType = {
//     valueRange: 0 | 1 | 2 | 3 | 4 | 5
// }

type LocalStorageType = {
    name: string
    value: string
}

function App() {


    // let [localStorage, setlocalStorage] = useState<LocalStorageType[]>([
    //     {name: '', value:'' },
    //     {name: '', value:''},
    // ]);

    let [localStart, setLocalStart] = useState('')
    let [localMax, setLocalMax] = useState('')

    const setToLocalStorage = (startValue: number, maxValue: number) => {
       // console.log("start ", startValue, "max ", maxValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        window.dispatchEvent(new Event('storage'));
        
    }

    

    return (
        <div className="App">
            <Container>
                <Settings set={setToLocalStorage}/>
                <Counter />
            </Container>

        </div>
    );
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 200px auto;
  font-size: 42px;
  padding: 20px;

`
export default App;

