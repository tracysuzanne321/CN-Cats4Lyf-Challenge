import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <a href="link">
      <IconContext.Provider value={{ color: "green", size: "50px" }}>
        <div>
          <AiOutlineShoppingCart />
        </div>
      </IconContext.Provider>
    </a>
  );
};

export default Navbar;
