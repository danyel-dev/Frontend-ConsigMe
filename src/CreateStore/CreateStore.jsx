import styles from './createStore.module.css'


export default function CreateStore() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
            
            </div>

            <main className={styles.main}>
                <form className={styles.storeForm}>
                    <input type="text" placeholder="Nome da loja" />
                    <textarea cols="30" rows="4" placeholder="Descrição"></textarea>
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Número de telefone" />
                    <input type="file" placeholder="Image" />
                    <input type="text" placeholder="CNPJ" />
                    <div className={styles.doubleInput}>
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Estado" />
                    </div>
                    <div className={styles.doubleInput}>
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="Bairro" />
                    </div>
                    <div className={styles.doubleInput}>
                        <input type="text" placeholder="Rua" />
                        <input type="number" placeholder="Número" />
                    </div>
                    <input type="text" placeholder="Complemento" />
                </form>
            </main>
        </div>
    );    
}
