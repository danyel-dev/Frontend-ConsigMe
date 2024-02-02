import styles from './createStore.module.css'


export default function CreateStore() {
    return (
        <div className={styles.container}>
            <form className={styles.storeForm}>
                <input type="text" placeholder="name" />
                <textarea cols="30" rows="5" placeholder="description"></textarea>
                <input type="email" placeholder="email" />
                <input type="text" placeholder="phone_number" />
                <input type="file" placeholder="image" />
                <input type="text" placeholder="cnpj" />
                <input type="text" placeholder="cep" />
                <input type="text" placeholder="state" />
                <input type="text" placeholder="city" />
                <input type="text" placeholder="district" />
                <input type="text" placeholder="street" />
                <input type="number" placeholder="number" />
                <input type="text" placeholder="complement" />
            </form>
        </div>
    );    
}
