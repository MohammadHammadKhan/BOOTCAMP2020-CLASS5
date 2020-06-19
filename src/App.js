import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'

function App() {
  let [number, setNumber] = React.useState(45);
  return (
    <div className="App">
      Hello world from App {number}
        <Parent number ={number}/>
        <button onClick={()=>setNumber(++number)}>Increment Number</button>
    </div>
  );
}

export default App;
