import React,{useReducer} from 'react';
import NumberReducer from './NumberReducer';



function Child2(){
    let [state, dispatch]=useReducer(NumberReducer, 52);
    return(
        <div>
            hello world from Child2 {state}
            <button onClick={()=>{dispatch({type:'Increment'})}}>Increment Number</button>
            <button onClick={()=>{dispatch({type:'Decrement'})}}>Decrement Number</button>
            <button onClick={()=>{dispatch({type:'Square'})}}>Square Number</button>
            <button onClick={()=>{dispatch({type:'Cube'})}}>Cube Number</button>
            <button onClick={()=>{dispatch({type:'Reset'})}}>Reset Number</button>
        </div>
    );
}

export default Child2;