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
    
    
    return (
        <div className="App">
            <Container>
                <Settings/>
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

