import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./stores.module.css";


export default function Stores() {
    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <h1>Consulte lojas de diversos segmentos em todo o pais e seja um revendedor associado a elas, venha ser um sacoleiro(a) consignado.</h1>
                
                <form className={styles.searchStore}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Pesquise pelo nome da loja, endereço, ou segmento de venda" />
                </form>
            </main>
            
            <Footer />
        </>
    );
}