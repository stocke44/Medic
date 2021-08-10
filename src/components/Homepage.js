import Intro from './blades/Intro';
import ImageWithText from './blades/image-with-text';

function Home(){
    return (
    <div>
        <Intro title="Welcome to Helpfully Healthy" text="A service created to help you find out more about your health"/>
        <ImageWithText img="/images/doctor.jpg" alt="doctor" text="Find out more about our your symptoms or illness to make informed decisons about your healthcare."/>
    </div>
    )
}

export default Home;