import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import './styles.css';
import { Cart } from './Context';

const Header = () => {

    const {cart}=useContext(Cart);

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Cart({cart.length})
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
