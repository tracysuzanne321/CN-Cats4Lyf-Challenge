import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';

//shopping cart needs to be state object. setCart triggers when clicked button (handler paired).  functions to add and remove it should be an array that stores the id and image of cat so we can use the array index to map which one it is.  find index method may be hte easiest way.

const Shop = ({ cart, setCart, isOpen, handleClose, top }) => {
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
      {`${el.name}: £${el.price}`}
      <input className="removeButton" type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  //RETURNS variables
  return (
    <>
      <div
        className={`modal-background ${isOpen ? '' : 'hidden'} `}
        style={{ top: top }}
      >
        &nbsp;
      </div>
      <div
        className={`modal-cart ${isOpen ? '' : 'hidden'} `}
        style={{
          top: top,
          transform: 'translate(-50%, calc(100vh / 2 - 50%))',
        }}
      >
        
        <div><h1>Shopping Cart</h1></div>
        <div>{cartItems}</div>
        <div>
          <h4 className="total-price">Total Cost: £{cartTotal}</h4>
        </div>
        <IconContext.Provider value={{ color: 'black', size: '15px' }}>
          <button className="modal-close" onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Shop;
