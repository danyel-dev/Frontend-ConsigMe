import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from "./storeDetail.module.css"


export default function StoreDetail() {
    const { id } = useParams()
    const [store, setStore] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "Application/json"
            }
        }

        axios.get(`http://127.0.0.1:8000/lojistaDetail/${id}`, config).then(response => {
            setStore(response.data)
            console.log(response)
        }).catch(response => console.log(response))
    }, [id])

    return(
        <>
            <Header />
            
            <main className={styles.mainContainer}>
                <h1>{store.name}</h1>

                <div>
                    <img src={store.image} alt={store.name} />
                    <p className={styles.address}>{store.address}</p>
                </div>
                
                <p className={styles.description}>{store.description}</p>
                <p className={styles.email}>E-mail para contato: {store.email}</p>
            </main>

            <Footer />            
        </>
    ); 
}
