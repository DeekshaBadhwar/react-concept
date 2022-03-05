import React, { useReducer } from 'react'


const  initialvalue=0;
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1
         case 'Dec':
             return state -1
             
         case 'Res':
             return initialvalue    
        
    
        default:
            return state
    }
}
export default function Reducerone() {

//useReducer(reducerfun,initial state)
//newState=recuerfun(currentState,actin)
//pair of values return,[newSatet,dispatch(used to specifiy the)]
const [count,dispatch]=useReducer(reducer,initialvalue)

  return (
     
    <div>{count}

        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('Dec')}>Decrement</button>
        <button onClick={()=>dispatch('Res')}>Reset</button>
    </div>
  )
}
