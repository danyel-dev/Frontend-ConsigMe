import axios from "axios";
import { useState } from 'react';
import styles from './register.module.css'
import { useNavigate } from 'react-router-dom';


export default function Register() {
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
    const navigate = useNavigate();
    
    function handleSubmitForm(e) {
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
        }, config).then(navigate('/login')).catch(
            response => console.log(response.response.data)
        )
        
        e.preventDefault()
    }

    const useForm = useFormRegister({
        initialValues: {firstname: "", lastname: "", email: "", username: "", password: "", confirm_password: ""}
    })

    return (
        <>
            <main className={styles.mainRegister}>
                <form onSubmit={handleSubmitForm} className={styles.formRegister}>
                    <div className={styles.fullNameForm}>
                        <div className={styles.iconInput}>
                            <label htmlFor="firstname" className={styles.labelForm}>Nome *</label>
                            <input 
                                id="firstname" type="text" name="firstname" 
                                className={styles.inputForm} placeholder='Primeiro nome' 
                                onChange={useForm.handleChangeForm} value={useForm.values.firstname} 
                            />
                            
                            <span className={`material-symbols-outlined ${styles.icon}`}>
                                person
                            </span>
                        </div>

                        <div className={styles.iconInput}>
                            <label htmlFor="lastname" className={styles.labelForm}>Sobrenome *</label>
                            <input 
                                id='lastname' type="text" name="lastname"
                                className={styles.inputForm} placeholder='Último nome' 
                                onChange={useForm.handleChangeForm} value={useForm.values.lastname}
                            />
                        
                            <span className={`material-symbols-outlined ${styles.icon}`}>
                                person
                            </span>
                        </div>
                    </div>

                    <div className={styles.iconInput}>
                        <label htmlFor="email" className={styles.labelForm}>Email *</label>
                        <input 
                            id="email" type="email" name="email"
                            className={styles.inputForm} placeholder='Ex: email@email.com' 
                            onChange={useForm.handleChangeForm} value={useForm.values.email}
                        />

                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            mail
                        </span>
                    </div>
                    
                    <div className={styles.iconInput}>
                        <label htmlFor="username" className={styles.labelForm}>Nome de usuário *</label>
                        <input 
                            id='username' type="text" name="username"
                            className={styles.inputForm} placeholder='Digite um nome de usuário' 
                            onChange={useForm.handleChangeForm} value={useForm.values.username}
                        />

                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            badge
                        </span>
                    </div>

                    <div className={styles.iconInput}>
                        <label htmlFor="passwordOne" className={styles.labelForm}>Senha *</label>
                        <input 
                            id='passwordOne' type="password" name="password"
                            className={styles.inputForm} placeholder='Informe uma senha'
                            onChange={useForm.handleChangeForm} value={useForm.values.password}    
                        />
                        
                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            lock
                        </span>
                    </div>

                    <div className={styles.iconInput}>
                        <label htmlFor="passwordTwo" className={styles.labelForm}>Confirmar senha *</label>
                        <input 
                            id='passwordTwo' type="password" name="confirm_password"
                            className={styles.inputForm} placeholder='Repita novamente a senha'
                            onChange={useForm.handleChangeForm} value={useForm.values.confirm_password}
                        />

                        <span className={`material-symbols-outlined ${styles.icon}`}>
                            lock
                        </span>
                    </div>

                    <div className={styles.submitDiv}>
                        <button className={styles.buttonForm}>Cadastrar</button>
                        <small className={styles.small}>Já possui uma conta? <a href="/login">Entre nela</a></small>
                    </div>
                </form>
            </main>
        </>
    );
}
