function Hero(props){
    const { title, subtitle, image, alt } = props;
    return (
        <section className="hero-banner">
            <div className="hero-img">
                <img src={image} alt={alt}></img>  
            </div>
            <div classsName="hero-text">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            

        </section>
    )


}

export default Hero;