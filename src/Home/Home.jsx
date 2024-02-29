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
                        <h1>Consig-Me é uma plataforma para facilitar lojistas, sacoleiras, e consumidores no processo de compra e venda de produtos consignados. clique no botão abaixo e encontre sacoleiras perto da sua região e veja seus produtos</h1>

                        <a href='/sacoleiras'>Encontrar sacoleiras</a>
                    </div>           

                    <img className={styles.bannerImage} src="https://img.freepik.com/vetores-gratis/ilustracao-de-revendedor-de-design-plano_23-2149484586.jpg?w=2000" />
                </div>

                <Services />
                
                <div className={styles.about} id='about'>
                    <h1>Como funciona a venda por consignação?</h1>

                    <p>A venda por consignação é um arranjo comercial em que um consignador(fornecedor) fornece mercadorias a um consignatário(varejista), mas a propriedade legal permanece com o fornecedor até que as mercadorias sejam vendidas aos consumidores finais. O varejista exibe e vende os produtos, pagando ao fornecedor uma comissão acordada sobre as vendas realizadas. Isso permite ao fornecedor expandir a distribuição sem assumir riscos financeiros, enquanto o varejista diversifica seu estoque sem a necessidade de investir antecipadamente nas mercadorias. O modelo envolve contratos detalhados e relatórios transparentes para garantir uma gestão eficaz do estoque consignado.</p>
                </div>
                
                <Informations />
                <Contact />
            </main>
  
            <Footer />
        </div>
    );
}
