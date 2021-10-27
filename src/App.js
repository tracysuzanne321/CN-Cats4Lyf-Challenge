import { useEffect, useState } from 'react';
import './App.css';
import fetchImg from './utils/fetchImg';

const App = () => {
  const [catImgArr, setCatImgArr] = useState([]);

  useEffect(async () => {
    const data = await fetchImg();
    setCatImgArr(data);
  }, []);

  return (
    <>
      <div>
        <h1>Cats4Lyf</h1>
        {catImgArr.map((cat, i) => (
          <img className="img" alt="" src={cat.url} />
        ))}
      </div>
    </>
  );
};

export default App;
