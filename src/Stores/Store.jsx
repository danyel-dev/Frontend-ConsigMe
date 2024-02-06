import styles from "./stores.module.css";


export default function Store({store}) {
    return(
        <div className={styles.store}>
            <img src={store.image} alt={store.name} />
        </div>
    );
}