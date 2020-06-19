import React from 'react';
import Child from './Child'


function Parent ({number}){
    return(
       <div>
           Hello world from Parent {number}
           <Child number={number}/>
       </div> 
    );
}

export default Parent;