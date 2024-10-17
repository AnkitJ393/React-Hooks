import React, { useRef } from 'react'
import Counter from '../Counter';

const HookuseImperativeHandle = () => {
    const ref=useRef();

  return (
    <>
        <button onClick={()=>ref.current.handleAddition()}>+</button>
        <Counter ref={ref} />
        <button onClick={()=>ref.current.handleSubtraction()}>-</button>
    </>
  )
}

export default HookuseImperativeHandle