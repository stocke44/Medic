function Intro(props){
    const { title , text} = props;
    return (
        <section className="intro">
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    )
}

export default Intro;