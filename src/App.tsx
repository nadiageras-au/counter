import './App.css';
import styled from 'styled-components';
import {Settings} from './components/settings/Settings'
import {Counter} from './components/counter/Counter';
import {useState} from 'react';


 // type msgArrType = {
 //     type: string
 //     title: string
 // }
function App() {

    let msgArr= [
        {type: "info", title: "enter the values and press 'set'"},
        {type: "error", title: "Incorrect value!"},
    ]
    
    const [msgForDisplay, setMsgForDisplay] = useState('')
    
    const [msg, setMsg] = useState('');

    const setDisplayMessage = (num:number)=> {
       let newMsg = (num === 2) ? msgArr[1].title :
            (num === 1)  ? msgArr[0].title : ''
        setMsg(newMsg);
    }
    return (
        <div className="App">
            <Container>
                <Settings setDisplayMsg={setDisplayMessage}/>
                <Counter displayMsg={msg}/>
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

