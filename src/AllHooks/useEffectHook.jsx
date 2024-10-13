import React, { useEffect, useState } from 'react'

const HookuseEffect = () => {
    const [count, setCount] = useState({
        id:1,
        content:'ABCDEF'
    })

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
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

    // useEffect(() => {
    //   setCount({
    //     id:5,
    //     content:'random'
    //   })   
      
    // }, [])

    useEffect(() => {
        const handleResize = () => {
            console.log('hi', handleResize); // Log the function reference
            setScreenWidth(window.innerWidth);
        };
    
        console.log('Attaching:', handleResize); // Log when attaching
        window.addEventListener('resize', handleResize);
    
        return () => {
            console.log('Removing:', handleResize); // Log when removing
            // window.removeEventListener('resize', handleResize);
            window.onresize = null; 
        };
    }, [count]);
    

    return (
    <div>
        <button onClick={handleAddition} >+</button>
            <span>{count.id}</span>
            <span>{count.content}</span>
        <button onClick={handleSubtraction}>-</button> 
        <p>{screenWidth}</p>  
    </div>)
}

export default HookuseEffect