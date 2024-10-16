import React, { useContext, useState } from 'react'
import SingleProduct from './singleProduct'
import { useEffect } from 'react';
import { Cart } from './Context';

const CartPage = () => {
    const {cart}=useContext(Cart);

    const [totalPrice,setTotalPrice]=useState();

    useEffect(()=>{
        setTotalPrice(cart.reduce((curr,acc)=>curr+Number(acc.price),0));
    }
    ,[cart])
    
  return (
    <div>
        <span style={{fontSize:30}}>My Cart</span>
        <br />
        <span style={{fontSize:30}}>Total:{Math.floor(totalPrice)}</span>
        <div className="productContainer">
            {cart.map((product)=> (
               <SingleProduct product={product} />
            ))}
        </div>
        
    </div>
  )
}

export default CartPage