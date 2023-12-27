import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
import styles from './addProduct.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function AddProduct() {
    const [userURL, setUserURL] = useState('')

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
            }
        }

        axios.get('http://127.0.0.1:8000/userLogado/', config).then(response => setUserURL(response.data[0].url))
    }, [])

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
            comment_set: [],
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
        
        var input = document.getElementById('image');
    
        var reader = new FileReader();
        
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Token ' + localStorage.getItem('token')
            }
        }
        
        const newForm = {...useForm.values, user: userURL}
        
        reader.onload = function (e) {
            var base64Image = e.target.result;
            axios.post('http://127.0.0.1:8000/products/', {...newForm, image: base64Image}, config)
        };
        
        reader.readAsDataURL(input.files[0]);
    }

    return(
        <div className={styles.addProduct}>
            <Header />

            <main className={styles.mainAddProduct}>
                <h1>Adicionar um novo produto</h1>
                
                <form className={styles.formAddProduct} onSubmit={handleSubmitForm} encType="multipart/form-data">
                    <input
                        className={styles.inputAddProduct} type="text"
                        placeholder="Título" name='name'
                        value={useForm.values.name} onChange={useForm.handleChangeForm}
                    />
                    
                    <input type="file" placeholder="Imagem" id='image' />
                    
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