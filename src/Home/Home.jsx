import Services from '../Components/Services'
import Informations from '../Components/Informations';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Header from '../Components/Header/Header'

import styles from './home.module.css'


export default function Home() {
    return(
        <div className={styles.home}>
            <Header />

            <main className={styles.main}>
                <Services />
                <Informations />
                <Contact />
            </main>
  
            <Footer />
        </div>
    );
}
