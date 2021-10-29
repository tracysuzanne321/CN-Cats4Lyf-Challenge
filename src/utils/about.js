import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';

const About = ({
  isOpen,
  handleClose,
  cat: { name, price, url, breed, city, age, gender, style },
}) => {
  return (
    <>
      <div
        className={`modal-background ${isOpen ? '' : 'hidden'} `}
        style={{ top: style?.top }}
      >
        &nbsp;
      </div>
      <div
        className={`modal-cart ${isOpen ? '' : 'hidden'} `}
        style={{
          top: style?.top,
          transform: 'translate(-50%, calc(100vh / 2 - 50%))',
        }}
      >
        <h1>{name}</h1>
        <h4>£{price}</h4>
        <img className="about-img" src={url} alt="" />
        <p>{breed}</p>
        <p>{city}</p>
        <p>{age}</p>
        <p>{gender}</p>
        <IconContext.Provider value={{ color: 'black', size: '15px' }}>
          <button className="modal-close" onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default About;
