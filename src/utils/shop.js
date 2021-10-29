import { useEffect, useState } from 'react';

//shopping cart needs to be state object. setCart triggers when clicked button (handler paired).  functions to add and remove it should be an array that stores the id and image of cat so we can use the array index to map which one it is.  find index method may be hte easiest way.

const Shop = ({ cart, setCart, isOpen, handleClose }) => {
  const [cartTotal, setCartTotal] = useState(0); // cart total number of items in basket
  // const items = []; // cat API to go here.

  //useEffect sets value of the total in the cart on every update.
  useEffect(() => {
    total();
    //eslint-disable-next-line
  }, [cart]);

  //for loop working out the total price
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += +cart[i].price;
    }
    setCartTotal(totalVal);
  };

  //We can create our removeFromCart function using the filter method. note* We will make a copy of the cart state before filtering:
  const removeFromCart = el => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  //variable that displays the new formatted array from the cart array.
  const cartItems = cart.map(el => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  //RETURNS variables
  return (
    <>
      <div className={`modal-background ${isOpen ? '' : 'hidden'} `}>
        &nbsp;
      </div>
      <div className={`modal-cart ${isOpen ? '' : 'hidden'} `}>
        Shopping Cart
        {/* <div>{listItems}</div> */}
        <div>Cart</div>
        <div>{cartItems}</div>
        {/* <div>{price}</div> */}
        <div style={{border: "1px solid red",color:"blue", fontSize:"25px", display: "flex", justifyContent:"center", position:"absolute"}}>Total: £{cartTotal}</div>
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
      </div>
    </>
  );
};

export default Shop;
