import React, { useState } from 'react';
import SingleProduct from './singleProduct';
import { faker } from '@faker-js/faker';
import './styles.css'


const Home = () => {
    const productsArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),   
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
      }));
      
    const [products]=useState(productsArray)
      console.log(products)
 
 
 return (<div className='productContainer'>
        {products.map((prod)=>(
            <SingleProduct  product={prod} key={prod.id}/>
        ))}
    </div>
  )
}

export default Home