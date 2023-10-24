import Services from '../Components/Services'
import Informations from '../Components/Informations';
import styles from './home.module.css'
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Banner from '../Components/Banner';


export default function Home() {
    return(
        <>
            <Banner />

            <main className={styles.main}>
                <Services />
                <Informations />
                <Contact />
            </main>
  
            <Footer />
        </>
    );
}
