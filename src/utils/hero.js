import catImage from "../imgs/cat_cart.webp" 



const Hero = () => {
    return (   
        <>
        <p style={{fontSize: "22px", fontWeight: 400, display: "flex", justifyContent: "center"}}> "Cats choose us we don't own them"</p>
        <img className="image" alt="" src={catImage} style={{ border:"8px solid rgb(147, 178, 153)",  marginBottom: 50, height:450 , width: 660,  display: "flex", justifyContent: "center", alignItems: "center"}} />
        <p style={{fontSize: "16px", fontWeight: 400, display: "flex", justifyContent: "center"}}>Find Your Furry Friend!</p>
        </>
    )
}


export default Hero