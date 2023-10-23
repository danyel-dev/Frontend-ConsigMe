import { useState } from 'react';
import styles from './login.module.css'
import Home from '../Home/Home'
import axios from 'axios';


export default function Login() {
    const [token, setToken] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [messageError, setMessageError] = useState(false)

    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleFormSubmit(e) {
        axios.post("http://127.0.0.1:8000/api-token-auth/", 
        {username: username, password: password}).then(response => {
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
        }).catch(response => (
            setMessageError(true))
        )

        e.preventDefault();
    }

    if(!token)
        return(
            <main className={styles.mainComponent}>
                <h1>ConsigMe</h1>
                
                {messageError? 
                    <div className={styles.messageError}>
                        <span className="material-symbols-outlined">cancel</span>
                        <p>Usuário ou senha incorretos</p>
                    </div>
                    :
                    ""
                }
                
                <form onSubmit={handleFormSubmit} className={styles.formLogin}>
                    <input 
                        type="text"
                        className={styles.formInput}
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={handleChangeUsername} 
                    />

                    <div className={styles.divPasswordLink}>
                        <input
                            className={styles.formInput}
                            type="password" placeholder="Senha"
                            value={password}
                            onChange={handleChangePassword}
                        />
                        
                        <small className={styles.smallForgotPassword}>
                            <a href="https://www.youtube.com/">Esqueceu a senha?</a>
                        </small>
                    </div>
                    
                    <button className={styles.formButtonSubmit}>Entrar</button>
                </form>

                <small className={styles.mainSmallToRegister}>Ainda não possui uma conta? 
                    <a href="/register"> Crie uma</a>
                </small>
            </main>
        ); 
    return <Home />
};
