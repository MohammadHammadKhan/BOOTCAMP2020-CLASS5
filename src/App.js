import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext';

function App() {
  let [number, setNumber] = React.useState(45);
  let value=81;
  return (
    // <ValueContext.Provider value={45}>
        <div className="App">
          Hello world from App {React.useContext(ValueContext)}
            <Parent/>
            {/* <button onClick={()=>setNumber(++number)}>Increment Number</button> */}
        </div>
    // </ValueContext.Provider>
  );
}

export default App;
