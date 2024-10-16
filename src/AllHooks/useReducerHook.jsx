import React, { useReducer } from 'react'

const HookuseReducer = () => {
    
    const countReducer=(state,action)=>{
        switch(action.type){
            case 'add':
                return state+1+action.payload;
            case 'subtract':
                return state-1;
            default:
                return state;
        }
    }

    const [state,dispatch]=useReducer(countReducer,0);
  
  
  return (
    <>
        <button onClick={()=>dispatch({type:'add',payload:5})}>+</button>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:'subtract'})}>-</button>
    </>
  )
}

export default HookuseReducer