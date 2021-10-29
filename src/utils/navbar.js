import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="shop-cart">
    <a href="link">
      <IconContext.Provider value={{ color: "black", size: "25px", marginLeft:"100px" }}>
        <div className="shop-cart">
          <AiOutlineShoppingCart />
        </div>
      </IconContext.Provider>
      </a>
      </div>
  );
};

export default Navbar;
