
import Slider from '../Components/HomeComponents/Slider/slider.tsx';
import About from '../Components/HomeComponents/about/about.tsx';
import Partner from '../Components/HomeComponents/partner/partner.tsx';
import Vision from '../Components/HomeComponents/vision/vision.tsx';
import Programs from '../Components/HomeComponents/programs/programs.tsx';
import TrainingField from '../Components/HomeComponents/training/training.tsx';
import Achievements from '../Components/HomeComponents/Achievements/Achievements.tsx';
import Footer from '../Components/HomeComponents/Footer/footer.tsx';
import { Navbar } from '../Components/HomeComponents/Navbar/Navbar.tsx';
// import ImageSlider from '../Components/HomeComponents/gaza-olympics/ImageSlider.tsx';
function Home() {

    return (
        <>
            <Navbar />
            <Slider />
            <About />
            <Vision />
            <Partner />
            {/* <ImageSlider /> */}
            <Programs />
            <TrainingField />
            <Achievements />
            <Footer />
        </>
    )
}

export default Home;