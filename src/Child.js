import React, { useContext } from 'react';
import ValueContext from './ValueContext';
import NumberReducer from './NumberReducer';


function Child(){
    let number=useContext(ValueContext);
    return(
        <div>
            Hello world from Child {number[0]}
            <button onClick={()=>number[1](++number[0])}>Increment number</button>
        </div>
    );
}

export default Child;