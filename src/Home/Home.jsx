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

            <div className={styles.banner}>
                <div className={styles.bannerText}>
                    <h1>Consig-Me é uma plataforma para compra e revenda de produtos por consignação, que saber mais sobre como funciona esse modelo de negócio? então clique no botão abaixo.</h1>

                    <button>Saiba mais</button>
                </div>           

                <img className={styles.bannerImage} src="https://i.pinimg.com/736x/f8/b1/2b/f8b12bb1094ff13f3d2cca533cf3dc56.jpg" />
            </div>
            
            <main className={styles.main}>

                <Services />
                <Informations />
                <Contact />
            </main>
  
            <Footer />
        </div>
    );
}
