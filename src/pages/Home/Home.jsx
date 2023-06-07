import styles from './Home.module.css'
import { ImageSlider } from '../../Components/imageSlider/ImageSlider';
import { AboutUs } from '../AboutUs/AboutUs';
import { Pricing } from '../Pricing/Pricing';
import { Training } from '../Training/Training'
import { Program } from '../Program/Program';
import { Footer } from '../../Components/footer/Footer';

export function Home() {


    return (
        <div id='home' className={styles.container}>
            {/* <h1>Home Page</h1> */}
            <ImageSlider />
            <AboutUs />
            <Program />
            <div>
            <Training />
            <Pricing />
            <Footer />  
            </div>
        </div>
    );
}