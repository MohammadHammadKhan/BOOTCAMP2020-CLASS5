const NumberReducer=(state, action)=>{
    switch (action.type){
        case 'Increment':
        return state+1
        case 'Decrement':
        return state-1
        case 'Square':
        return state*state
        case 'Reset':
        return state*0
        case 'Cube':
        return state*state*state
    }
    
}
export default NumberReducer;