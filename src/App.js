import React,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext';

function App() {
  let value= React.useState(45);
  // let value=81;
  return (
    <ValueContext.Provider value={value}>
        <div className="App">
          Hello world from App {value[0]}
            <Parent/>
            {/* <button onClick={()=>setNumber(++number)}>Increment Number</button> */}
        </div>
     </ValueContext.Provider>
  );
}

export default App;
