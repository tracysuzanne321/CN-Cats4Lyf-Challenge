import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = ({ handleOpen, cart }) => {
  return (
    <div className="shop-cart">
      <IconContext.Provider
        value={{ color: 'black', size: '25px', marginLeft: '100px' }}
      >
        <div onClick={handleOpen} className="shop-cart">
          <AiOutlineShoppingCart />
          <span>{cart.length ? cart.length + ' cats in basket' : ''}</span>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
