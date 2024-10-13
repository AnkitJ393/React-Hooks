import { useState } from "react";


const HookuseState=()=>{

    const [count, setCount] = useState({
        id:1,
        content:'ABCDEF'
    })
    
    const handleAddition=()=>{
        setCount((prev)=>{
            return {
                ...prev,
                id:prev.id+1,
            }
        })
        // setCount({...count,id:count.id+1});
          // so useState is asynchronoous we can do setCount(count.id+1)  to make it synchronous useState takes one callback func. with argument as previous state
    }

    const handleSubtraction=()=>{
        setCount((prev)=>{
            return {
                ...prev,
                id:prev.id-1,
            }
        })
    }

    return (
    <div>
        <button onClick={handleAddition} >+</button>
            <span>{count.id}</span>
        <button onClick={handleSubtraction}>-</button>   
    </div>)
}

export default HookuseState;