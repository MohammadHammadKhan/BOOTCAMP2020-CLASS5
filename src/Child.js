import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child(){
    let number=useContext(ValueContext);
    return(
        <div>
            Hello world from Child {number}
        </div>
    );
}

export default Child;