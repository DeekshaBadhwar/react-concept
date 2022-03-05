import React, { useReducer } from 'react'


const  initialvalue={
    firstCounter:0,
    secondCounter:10
};
const reducer=(state,action)=>{
    switch (action.type) {
        case 'Inc1':
            return { ...state,firstCounter:state.firstCounter + action.value}
         case 'Dec1':
             return {...state,firstCounter:state.firstCounter - action.value }  
             case 'Inc2':
                return { ...state,secondCounter:state.secondCounter + action.value}
             case 'Dec2':
                 return {...state,secondCounter:state.secondCounter - action.value }          
         case 'Res':
             return initialvalue    
        
    
        default:
            return state
    }
}
export default function ReducerTwo() {

//useReducer(reducerfun,initial state)
//newState=recuerfun(currentState,actin)
//pair of values return,[newSatet,dispatch(used to specifiy the)]
const [count,dispatch]=useReducer(reducer,initialvalue)

  return (
     
    <div>
        {count.firstCounter}firstCounter
    {count.secondCounter}secondCounter

<button onClick={()=>dispatch({type:'Inc1',value:1})}>increment</button>
        <button onClick={()=>dispatch({type:'Dec1',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'Inc1',value:5})}>increment5</button>
        <button onClick={()=>dispatch({type:'Dec1',value:5})}>Decrement5</button>
        
        <br/>
        <button onClick={()=>dispatch({type:'Inc2',value:5})}>increment5</button>
        <button onClick={()=>dispatch({type:'Dec2',value:5})}>Decrement5</button>
        <button onClick={()=>dispatch({type:'Res'})}>Reset</button>
    </div>
  )
}
