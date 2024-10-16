import React, { useContext } from 'react';
import './styles.css'
import { Cart } from './Context';

const SingleProduct = ({product}) => {
    
    const {cart,setCart}=useContext(Cart);

    if (!product) {
    return <div>No Product Found</div>;
  }
  console.log(cart)
  return (
    <div className="products">
        <img loading='lazy' src={product.image} alt={product.name} />
        <div className="productDesc">
            <span style={{ fontWeight: 700 }}>{product.name}</span>
            <span>₹ {product.price.substring(0, 3)}</span>
        </div>
        {!cart.includes(product) ?
            <button 
                className='add'
                onClick={()=>{
                    setCart([...cart,product]);
                }}
            >
                Add to Cart
            </button>
            :
            <button 
                className='add'
                onClick={()=>{
                    setCart(cart.filter((products)=>(products.id!=product.id)))
                }}
            >Remove from Cart</button>
    
        } 
        
    </div>
  )
}

export default SingleProduct;