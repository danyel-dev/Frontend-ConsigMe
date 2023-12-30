import Services from './Components/Services'
import Informations from '../Components/Informations';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact';
import Header from '../Components/Header/Header'

import styles from './home.module.css'


export default function Home() {
    return(
        <div className={styles.home}>
            <Header />

            <main className={styles.main}>
                <div className={styles.banner}>
                    <div className={styles.bannerText}>
                        <h1>Consig-Me é uma plataforma para compra e revenda de produtos por consignação, que saber mais sobre como funciona esse modelo de negócio? então clique no botão abaixo.</h1>

                        <button>Saiba mais</button>
                    </div>           

                    <img className={styles.bannerImage} src="https://img.freepik.com/vetores-gratis/ilustracao-de-revendedor-de-design-plano_23-2149484586.jpg?w=2000" />
                </div>

                <Services />
                
                <div className={styles.abount}>
                    <h1>Como funciona a venda por consignação?</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe voluptatem laboriosam? Cumque, quas, tempora perspiciatis aut consequuntur expedita corporis dolor quaerat dignissimos accusantium ullam adipisci praesentium possimus! Libero, nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, cupiditate minima similique quisquam quo error, sint officiis fugiat, repellat facere quidem velit praesentium? Ullam molestiae animi tenetur nesciunt voluptate dolores!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores repudiandae ab corrupti adipisci natus ut vel ducimus commodi quisquam magnam fuga nobis, ea at consequatur sunt voluptatibus, accusantium ipsum?</p>
                </div>
                
                <Informations />
                <Contact />
            </main>
  
            <Footer />
        </div>
    );
}
