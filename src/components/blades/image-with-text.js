function ImageWithText(props){
    const { img , alt, text} = props;
    return (
        <section className="image-with-text">
            <img src={img} alt={alt}/>
            <p>{text}</p>
        </section>
    )

}

export default ImageWithText;