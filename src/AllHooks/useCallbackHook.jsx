import React, { useState } from 'react'
import { useCallback } from 'react';


// when we change even count which is in parent component still the log in child component is running meaning child component renders even though it is not needed
const ChildComponent=React.memo(({handleChange,setShow})=>{  // React.memo memoizeing whateve inside CHild COmpoenent
    console.log('Child Component ran');
    return <>
        <p>{handleChange()}</p>
        <button onClick={()=>setShow(prev=>!prev)}>Change</button>
    
    </>
})

const HookuseCallback = () => {
    const [count, setCount] = useState({
        id:1,
        content:'ABCDEF'
    })
    const [show,setShow]=useState(false)

    const handleChange=useCallback(()=>{
        return count.id*2;
    },[count])
    
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
            { show && <span> {count.content} </span> }
        <button onClick={handleSubtraction}>-</button>   
        
        <ChildComponent handleChange={handleChange} setShow={setShow}/>
    </div>
    
    )
}

export default HookuseCallback