import React from 'react';
import Child from './Child'
import ValueContext from './ValueContext';


function Parent (){
let number=React.useContext(ValueContext);
    return(
       <div>
           Hello world from Parent {number[0]}
           <Child />
       </div> 
    );
}

export default Parent;