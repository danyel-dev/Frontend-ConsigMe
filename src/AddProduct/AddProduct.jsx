import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import styles from './addProduct.module.css'
import { useState } from 'react'


export default function AddProduct() {
    function useFormRegister(props) {
        const [values, setValues] = useState(props.initialValues)

        return {
            values,
            setValues,
            handleChangeForm: (e) => {
                const value = e.target.value
                const name = e.target.name
            
                setValues({
                    ...values,
                    [name]: value
                })
            },
            clearForm() {
                setValues({})
            }
        }
    }

    const useForm = useFormRegister({
        initialValues: {
            user: "",
            name: "",
            image: "",
            size: "",
            value: "",
            quantity: "",
            description: "",
        }
    })

    function handleSubmitForm(e) {
        e.preventDefault()
        console.log(useForm.values)
    }

    return(
        <div className={styles.addProduct}>
            <Header />
            
            <main className={styles.mainAddProduct}>
                <h1>Adicionar um novo produto</h1>
                
                <form className={styles.formAddProduct} onSubmit={handleSubmitForm}>
                    <input
                        className={styles.inputAddProduct} type="text"
                        placeholder="Título" name='name'
                        value={useForm.values.name} onChange={useForm.handleChangeForm}
                    />
                    
                    <input
                        type="file" placeholder="Imagem"
                        value={useForm.values.image} name='image'
                        onChange={useForm.handleChangeForm}
                    />
                    
                    <input
                        className={styles.inputAddProduct} type="text"
                        placeholder="Tamanho" value={useForm.values.size}
                        onChange={useForm.handleChangeForm} name='size'
                    />
                    
                    <input 
                        className={styles.inputAddProduct} type="text"
                        placeholder="Valor" value={useForm.values.value}
                        onChange={useForm.handleChangeForm} name='value'
                    />

                    <input
                        className={styles.inputAddProduct} type="number"
                        placeholder="Quantidade" value={useForm.values.quantity}
                        onChange={useForm.handleChangeForm} name='quantity'
                    />
                    
                    <textarea
                        className={styles.inputAddProduct} rows="5"
                        placeholder="Descrição" value={useForm.values.description} onChange={useForm.handleChangeForm}
                        name='description'>
                    </textarea>
                
                    <button>Adicionar Produto</button>
                </form>
            </main>

            <Footer />
        </div>
    );
}