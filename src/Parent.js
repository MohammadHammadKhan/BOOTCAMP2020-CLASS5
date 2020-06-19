import React from 'react';
import Child from './Child'
import ValueContext from './ValueContext';
import Child2 from './Child2';


function Parent (){
let number=React.useContext(ValueContext);
    return(
       <div>
           Hello world from Parent {number[0]}
           <Child />
           <Child2></Child2>
       </div> 
    );
}

export default Parent;