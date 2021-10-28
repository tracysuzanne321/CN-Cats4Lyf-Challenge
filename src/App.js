import { useEffect, useState } from 'react';
import './App.css';
import fetchImg from './utils/fetchImg';
import fetchData from './utils/fetchData';
import Hero from "./utils/hero"
import Footer from './utils/footer';

const App = () => {
  const [catImgArr, setCatImgArr] = useState([]);
  const [catDataArr, setCatDataArr] = useState([]);

  useEffect(() => {
    (async () => {
      const data = fetchData();
      const imgs = await fetchImg();
      console.log(data);
      setCatImgArr(imgs);
      setCatDataArr(data);
    })();
  }, []);

  return (
    <>
      <div>
        <h1>Cats4Lyf</h1>
        <Hero />
        {catImgArr.map((cat, i) => (
          <div id={cat.id} key={cat.id}>
            <img className="img" alt="" src={cat.url} />
            <span>{catDataArr[i]?.name}</span>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default App;
