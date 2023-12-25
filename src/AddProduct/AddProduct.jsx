import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import styles from './addProduct.module.css'


export default function AddProduct() {
    return(
        <div className={styles.addProduct}>
            <Header />
            
            <main className={styles.mainAddProduct}>
                <h1>Adicionar um novo produto</h1>
                
                <form className={styles.formAddProduct}>
                    <input className={styles.inputAddProduct} type="text" placeholder="Título" />
                    <input type="file" placeholder="Imagem" />
                    <input className={styles.inputAddProduct} type="text" placeholder="Tamanho" />
                    <input className={styles.inputAddProduct} type="text" placeholder="Valor" />
                    <input className={styles.inputAddProduct} type="number" placeholder="Quantidade" />
                    <textarea className={styles.inputAddProduct} rows="5" placeholder="Descrição"></textarea>
                
                    <button>Adicionar Produto</button>
                </form>
            </main>

            <Footer />
        </div>
    );
}