import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Store from "./Store"
import styles from "./stores.module.css";
import axios from "axios";


export default function Stores() {
    const [stores, setStores] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios.get('http://127.0.0.1:8000/lojista/', config).then(response => setStores(response.data))
    }, [])

    return (
        <>
            <Header />
            
            <main className={styles.main}>
                <div className={styles.containerForm}>
                    <h1>Consulte lojas de diversos segmentos em todo o pais e seja um revendedor associado a elas, venha ser um sacoleiro(a) consignado.</h1>
                    
                    <form className={styles.searchStore}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Pesquise pelo nome da loja, endereço, ou segmento de venda" />
                    </form>
                </div>

                <div className={styles.stores}>
                    {stores.map(store => <Store key={store.id} store={store} />)}
                </div>
            </main>
            
            <Footer />
        </>
    );
}