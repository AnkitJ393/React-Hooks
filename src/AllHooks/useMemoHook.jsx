import React, { useMemo, useState } from 'react'

const HookuseMemo = () => {
    const [count, setCount] = useState({
        id:1,
        content:'ABCDEF'
    })
    const [show,setShow]=useState(false);


    const handleChange=useMemo(()=>{
        for(let i=0;i<10000000;i++){}
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
           {show && <span>{count.content}</span>}
        <button onClick={handleSubtraction}>-</button>   

        <p>{handleChange}</p>

        <button onClick={()=>{setShow(prev=>!prev)}}>Change</button>
    </div>)
}

export default HookuseMemo