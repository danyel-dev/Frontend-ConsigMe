import axios from "axios";
import { useState } from 'react';
import styles from './register.module.css'
import Login from "../Login/Login";


export default function Register() {
    const [login, setLogin] = useState(false)


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
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
            confirm_password: ""
        }
    })


    function handleSubmitForm(e) {
        e.preventDefault()
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        axios.post("http://127.0.0.1:8000/users/", 
        {
            first_name: useForm.values.firstname,
            last_name: useForm.values.lastname,
            email: useForm.values.email,
            username: useForm.values.username,
            password: useForm.values.password,
            confirm_password: useForm.values.confirm_password
        }, config).then(Response => setLogin(true)).catch(Response => console.log(Response))
    }

    if(!login)
        return(
            <div className={styles.register}>
                <form onSubmit={handleSubmitForm} className={styles.formRegister}>
                    <h2>Crie sua conta aqui</h2>
                    
                    <div className={styles.fullname}>
                        <div className={styles.iconInput}>
                            <input 
                                type="text"
                                placeholder="Nome"
                                onChange={useForm.handleChangeForm}
                                value={useForm.values.first_name}
                                name="firstname"
                            />
    
                            <i className="fa-solid fa-user"></i>
                        </div>
                        
                        <div className={styles.iconInput}>
                            <input 
                                type="text"
                                placeholder="Sobrenome"
                                onChange={useForm.handleChangeForm}
                                value={useForm.values.last_name}
                                name="lastname"
                            />
    
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
    
                    <div className={styles.iconInput}>
                        <input
                            type="email"
                            placeholder="E-mail *" 
                            onChange={useForm.handleChangeForm}
                            value={useForm.values.email}
                            name="email"
                        />
    
                        <i className="fa-solid fa-envelope"></i>
                    </div>
    
                    <div className={styles.iconInput}>
                        <input
                            type="text"
                            placeholder="Nome de usuário *" 
                            onChange={useForm.handleChangeForm}
                            value={useForm.values.username}
                            name="username"
                        />
                        
                        <i className="fa-regular fa-user"></i>
                    </div>
                    
                    <div className={styles.iconInput}>
                        <input
                            type="password"
                            placeholder="Senha *"
                            onChange={useForm.handleChangeForm}
                            value={useForm.values.password}
                            name="password"
                        />
    
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    
                    <div className={styles.iconInput}>
                        <input 
                            type="password" 
                            placeholder="Confirmar Senha *" 
                            onChange={useForm.handleChangeForm}
                            value={useForm.values.confirm_password}
                            name="confirm_password"
                        />
    
                        <i className="fa-solid fa-lock"></i>
                    </div>
                
                    <button>Entrar</button>
                    <span>Já tem uma conta? <a href='/login'>Então clique aqui para acessa-la.</a></span>
                </form>
            </div>
        );
    return <Login />
}