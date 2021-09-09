import Intro from './blades/Intro';
import ImageWithText from './blades/image-with-text';
import Hero from './blades/Hero';

function Home(){
    return (
    <div>
        <Hero title="The dedicated platform for health in the Central Valley." subtitle="Find local doctors and search for symptoms affecting you." image="/images/doctors.jpg" alt="doctors"/>
        <Intro title="Welcome to Helpfully Healthy" text="A service created to help you find out more about your health"/>
        <ImageWithText img="/images/doctor.jpg" alt="doctor" text="Find out more about our your symptoms or illness to make informed decisons about your healthcare."/>
    </div>
    )
}

export default Home;