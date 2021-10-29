import { useEffect, useState } from "react";
import "./App.css";
import fetchImg from "./utils/fetchImg";
import fetchData from "./utils/fetchData";
import Navbar from "./utils/navbar";
import Hero from "./utils/hero";
import Footer from "./utils/footer";
import Tile from "./utils/tile";
import Shop from "./utils/shop";
import About from "./utils/about";

const App = () => {
  const [catImgArr, setCatImgArr] = useState([]);
  const [catDataArr, setCatDataArr] = useState([]);
  const [cart, setCart] = useState([]); // stores value of the items in basket
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [aboutCat, setAboutCat] = useState({});

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

    if (val === "add") {
      setCart([...cart, obj]);
    } else {
      //delete
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenAbout = (id) => {
    setIsAboutOpen(true);
    const i = catImgArr.findIndex((cat) => cat.id === id);
    const top = window.scrollY;

    const thisCat = {
      url: catImgArr[i].url,
      name: catDataArr[i].name,
      price: catDataArr[i].price,
      breed: catDataArr[i].breed,
      city: catDataArr[i].city,
      age: catDataArr[i].age,
      gender: catDataArr[i].gender,
      style: { top: top },
    };
    setAboutCat(thisCat);
  };

  const handleCloseAbout = () => {
    setIsAboutOpen(false);
  };

  return (
    <>
      <div className="app-container">
        <nav className="nav-bar">
          <Navbar handleOpen={handleOpen} cart={cart} />
        </nav>
        <div className="hero">
          <h1>Cats4Lyf</h1>
          <Hero />
        </div>
        <h3>Cats for Sale</h3>
        <div className="gallery">
          {catImgArr.map((cat, i) => (
            <Tile
              name={catDataArr[i]?.name}
              image={cat.url}
              price={catDataArr[i].price}
              key={cat.id}
              id={cat.id}
              setCart={setCart}
              cart={cart}
              handleSetCart={handleSetCart}
              handleOpenAbout={handleOpenAbout}
            />
          ))}
        </div>
        <div className="footer">
          <Footer />
        </div>
        <div className="shop">
          <Shop
            isOpen={isOpen}
            handleClose={handleClose}
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div className="about">
          <About
            cat={aboutCat}
            isOpen={isAboutOpen}
            handleClose={handleCloseAbout}
          />
        </div>
      </div>
    </>
  );
};

export default App;
