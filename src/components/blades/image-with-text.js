function ImageWithText(props){
    const { img , alt, text} = props;
    return (
        <section className="image-with-text container">
            <div className='img-container col-lg-6 col-sm-12'>
                <img src={img} alt={alt}/>                
            </div>
            <div className="text-container col-lg-6 col-sm-12">
                <p>{text}</p>
            </div> 
        </section>
    )

}

export default ImageWithText;