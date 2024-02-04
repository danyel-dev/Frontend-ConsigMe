import { useEffect, useState } from 'react'
import styles from './createStore.module.css'
import axios from 'axios'


export default function CreateStore() {
    const [messageError, setMessageError] = useState(null)
    const [userUrl, setUserUrl] = useState("")

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }

        axios.get('http://127.0.0.1:8000/userLogado/', config).then(response => setUserUrl(response.data[0].url)).catch(response => console.log(response))
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
            name: "",
            description: "",
            proprietario: "",
            email: "",
            phone_number: "",
            image: "",
            cnpj: "",
            cep: "",
            state: "",
            city: "",
            district: "",
            street: "",  
            number: "",
            complement: ""
        }
    })

    function handleSubmitForm(e) {
        e.preventDefault()
        
        if(useForm.values.name === "" || useForm.values.description === "" || useForm.values.email === "" || useForm.values.phone_number === "" || useForm.values.image === "" || useForm.values.cnpj === "" || useForm.values.cep === "" || useForm.values.state === "" || useForm.values.city === "" || useForm.values.district === "" || useForm.values.street === "" || useForm.values.number === "" || useForm.values.complement === "") {
            setMessageError("Todos os campos devem ser preenchidos!")
        } 
        else {
            useForm.values["proprietario"] = userUrl

            var input = document.getElementById('image');
            var reader = new FileReader();
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }   

            if(input.files.length !== 0) {
                reader.onload = function (e) {
                    var base64Image = e.target.result;
                    axios.post('http://127.0.0.1:8000/lojista/', {...useForm.values, image: base64Image}, config).then(response => {
                        alert("Produto adicionado com sucesso!!")
                        
                        useForm.setValues({
                            name: "",
                            description: "",
                            proprietario: "",
                            email: "",
                            phone_number: "",
                            image: "",
                            cnpj: "",
                            cep: "",
                            state: "",
                            city: "",
                            district: "",
                            street: "",  
                            number: "",
                            complement: ""
                        })
                    })
                };
                
                reader.readAsDataURL(input.files[0]);
            } 
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h1>Crie sua conta como lojista no nosso site e venha oferecer seus produtos para sacoleiros(as) autorizados, expanda seus produtos!!</h1> 

                <div>
                    <p>Caso já tenha uma conta, clique no botão abaixo</p>
                    <a href='/login'>Acessar conta</a>
                </div>
            </div>

            <main className={styles.main}>
                {messageError?
                    <p className={styles.messageError}>{messageError}</p>
                :
                    ""
                }

                <form className={styles.storeForm} onSubmit={handleSubmitForm}>
                    <input 
                        onChange={useForm.handleChangeForm} 
                        value={useForm.values.name}
                        name='name'
                        type="text"
                        placeholder="Nome da loja"
                    />
                    <textarea
                        onChange={useForm.handleChangeForm} 
                        value={useForm.values.description}
                        name='description'
                        cols="30"
                        rows="4"
                        placeholder="Descrição">
                    </textarea>

                    <div className={styles.doubleInput}>
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.email}
                            name='email'
                            type="email"
                            placeholder="E-mail"
                        />
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.phone_number}
                            name='phone_number'
                            type="text"
                            placeholder="Número de telefone"
                        />
                    </div>
                    
                    <input 
                        id='image'
                        onChange={useForm.handleChangeForm} 
                        value={useForm.values.image}
                        name='image'
                        type="file"
                        placeholder="Image"
                    />
                    <input 
                        onChange={useForm.handleChangeForm} 
                        value={useForm.values.cnpj}
                        name='cnpj'
                        type="text"
                        placeholder="CNPJ"
                    />
                    
                    <div className={styles.doubleInput}>
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.cep}
                            name='cep'
                            type="text"
                            placeholder="CEP"
                        />
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.state}
                            name='state'
                            type="text"
                            placeholder="Estado"
                        />
                    </div>
                    
                    <div className={styles.doubleInput}>
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.city}
                            name='city'
                            type="text"
                            placeholder="Cidade"
                        />
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.district}
                            name='district'
                            type="text"
                            placeholder="Bairro"
                        />
                    </div>
                    
                    <div className={styles.doubleInput}>
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.street}
                            name='street'
                            type="text"
                            placeholder="Rua"
                        />
                        <input 
                            onChange={useForm.handleChangeForm} 
                            value={useForm.values.number}
                            name='number'
                            type="number"
                            placeholder="Número"
                        />
                    </div>
                    
                    <input
                        onChange={useForm.handleChangeForm} 
                        value={useForm.values.complement}
                        name='complement'
                        type="text"
                        placeholder="Complemento"
                    />
                    
                    <button>Criar conta</button>
                </form>

                <div className={styles.haveAccount}>
                    <p>Caso já tenha uma conta, clique no botão abaixo</p>
                    <a href='/login'>Acessar conta</a>
                </div>
            </main>
        </div>
    );    
}
