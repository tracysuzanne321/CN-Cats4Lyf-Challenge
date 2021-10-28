//shopping cart needs to be state object. setCart triggers when clicked button (handler paired).  functions to add and remove it should be an array that stores the id and image of cat so we can use the array index to map which one it is.  find index method may be hte easiest way.

const Shop = () => {
  const [cart, setCart] = useState([]); // stores value of the items in basket
  const [cartTotal, setCartTotal] = useState(0); // cart total number of items in basket
  const items = []; // cat API to go here.

  //useEffect sets value of the total in the cart on every update.
  useEffect(() => {
    total();
  }, [cart]);

  //for loop working out the total price
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  //addToCart takes the element selected and adds it to the cart array.
  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  //We can create our removeFromCart function using the filter method. note* We will make a copy of the cart state before filtering:
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  // variable that displays list of cats with map to work with cat/setCart.
  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  //variable that displays the new formatted array from the cart array.
  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  //RETURNS variables
  return (
    <div>
      SHOP
      <div>{listItems}</div>
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;
