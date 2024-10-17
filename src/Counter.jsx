import React, { useImperativeHandle, useState } from 'react'
import { forwardRef } from 'react'

const Counter =forwardRef((props,ref) => {
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

    useImperativeHandle(
      ref,
      () =>( {
        handleAddition,
        handleSubtraction
      })
    )

    return (
        <span>{count.id}</span>
        )
})

export default Counter