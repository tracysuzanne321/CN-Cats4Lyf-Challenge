import { useEffect, useState } from 'react';
import './App.css';
import fetchImg from './utils/fetchImg';
import fetchData from './utils/fetchData';
import Navbar from './utils/navbar';
import Hero from './utils/hero';
import Footer from './utils/footer';
import Tile from './utils/tile';
import Shop from './utils/shop';

const App = () => {
  const [catImgArr, setCatImgArr] = useState([]);
  const [catDataArr, setCatDataArr] = useState([]);
  const [cart, setCart] = useState([]); // stores value of the items in basket

  useEffect(() => {
    (async () => {
      const data = fetchData();
      const imgs = await fetchImg();

      setCatDataArr(data);
      setCatImgArr(imgs);
    })();
  }, []);

  const handleSetCart = (e, obj) => {
    const val = e.target.dataset.value;

    if (val === 'add') {
      setCart([...cart, obj]);
    } else {
      //delete
    }
  };

  return (
    <>
      <div className ="app-container">
        <nav className= "nav-bar">
          <Navbar />
        </nav>
        <div className="hero">
        <h1>Cats4Lyf</h1>
          <Hero />
        </div>
        <h3>Cats for Sale</h3>
        <div className="gallery">
          {catImgArr.map((cat, i) => (
            // name, image, price, id, setCart, cart
            <Tile
              name={catDataArr[i]?.name}
              image={cat.url}
              price={catDataArr[i].price}
              key={cat.id}
              id={cat.id}
              setCart={setCart}
              cart={cart}
              handleSetCart={handleSetCart}
            />
          ))}
        </div>
          <div className="footer">
            <Footer />
          </div>
          <div className="shop">
            <Shop cart={ cart } setCart={ setCart } />
          </div>
      </div>
    </>
  );
};

export default App;
