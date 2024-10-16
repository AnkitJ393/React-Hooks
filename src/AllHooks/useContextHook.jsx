import React from 'react'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Header from '../contextComponent/header'
import Home from '../contextComponent/home'
import CartPage from '../contextComponent/cart'
import { useState } from 'react'

const HookuseContext = () => {

  
  return (
    <BrowserRouter>
       <Header/>
        <div>
            <Routes>
            <Route path="/" element={<Home  />} />
          <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default HookuseContext