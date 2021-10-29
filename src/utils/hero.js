import catImage from "../imgs/cat_cart.webp" 



const Hero = () => {
    return (   
        <>
        <h2>"Cats choose us we don't own them"</h2> 
        <img className="main-img" alt="" src={catImage}  />
        <p>Find Your Furry Friend!</p>
        </>
    )
}


export default Hero