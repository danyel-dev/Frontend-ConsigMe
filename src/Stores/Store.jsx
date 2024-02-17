import styles from "./stores.module.css";


export default function Store({store}) {
    return(
        <div className={styles.store}>
            <a href={`/stores/${store.id}`}><img src={store.image} alt={store.name} /></a>
            
            <main className={styles.bodyStore}>
                <a href={`/stores/${store.id}`}><h1>{store.name}</h1></a>
                
                <p className={styles.storeDescription}>
                    {store.description.slice(0, 80)}... <a href={`/stores/${store.id}`} className={styles.readMoreLink}>
                        ler mais
                    </a>
                </p>
                
                <p className={styles.storeAddress}>
                    <i className="fa-solid fa-map-pin"></i>
                    {store.city} - {store.state}
                </p>

                <a href={`/stores/${store.id}`} className={styles.storeDetailButton}>Ver detalhes</a>
            </main>
        </div>
    );
}