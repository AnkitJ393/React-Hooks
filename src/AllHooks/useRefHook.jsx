import React, { useEffect, useRef, useState } from 'react'


// Accessing DOM Elements: You can use useRef to get a reference to a DOM element and interact with it directly (e.g., focus an input, scroll to a specific element).
// Persisting Values Without Re-rendering: You can store values that need to persist across renders but don't trigger re-renders when they change (like timers or previous state values).
// its like document.queryselector for react

const HookuseRef = () => {
    const [count, setCount] = useState({
        id:1,
        content:'ABCDEF'
    })

    const   countRef=useRef();
    const countButtonref=useRef();
//     const ref=useRef(0);

const [name,setName]=useState('');

//  useEffect(() => {
//     ref.current=ref.current+1;
//  },)

useEffect(()=>{
    countRef.current=name;
},[name])
 
    
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
            <span ref={countButtonref}>{count.id}</span>
        <button onClick={handleSubtraction}>-</button> 
        {/* <p>{ref.current}</p>   */}
        <input type="text" ref={countRef} onChange={(e)=>setName(e.target.value)} />

        <p>
            {name} is state --  {countRef.current} is ref
        </p>
        <button onClick={()=>{countButtonref.current.innerHTML='10'}}>Change to 10</button>
    </div>)
}

export default HookuseRef;