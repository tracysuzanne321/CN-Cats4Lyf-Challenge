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
        <h3>{name}</h3>
        <h3>{price}</h3>
        <img className="about-img" src={url} alt="" />
        <p>{breed}</p>
        <p>{city}</p>
        <p>{age}</p>
        <p>{gender}</p>
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
      </div>
    </>
  );
};

export default About;
