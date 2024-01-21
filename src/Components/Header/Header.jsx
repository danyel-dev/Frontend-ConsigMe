import { useEffect, useState } from 'react';
import styles from './header.module.css'
import axios from 'axios';


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [token, setToken] = useState('')    
    const [haveProfile, setHaveProfile] = useState(false)
    const [profile, setProfile] = useState({})


    useEffect(() => {
        setToken(localStorage.getItem('token'))

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            },
        }
        
        axios.get('http://127.0.0.1:8000/profileverify/', config).then(response => {
            setHaveProfile(response.data[0].HaveProfile)
            
            if(response.data[0].HaveProfile) {
                axios.get('http://127.0.0.1:8000/profile/', config).then(
                    response => setProfile(response.data[0])
                )
            }
        }).catch(response => console.log(response))
    }, [])

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    function handleLogout() {
        localStorage.removeItem('token')
        setToken(localStorage.getItem('token'))
    }

    function handleChangeModal() {
        let elemento = document.querySelector('#modalProfile')
        
        if(elemento.style.display === 'none')
            elemento.style.display = 'flex'
        else 
            elemento.style.display = 'none'
    }

    return(
        <header className={styles.header}>
            <a className={styles.logo} href="/">ConsigMe</a>

            <nav id='nav' className={styles.nav}>
                <span className={styles.btnButton} onClick={handleToggleMenu}></span>

                {toggleMenu? 
                    <ul className={styles.menu} id='menu'>
                        <li className={styles.menuItem}><a className={styles.linkMenu} href="#services">Serviços</a></li>
                        <li className={styles.menuItem}><a className={styles.linkMenu} href="/#about">About</a></li>
                        <li className={styles.menuItem}><a className={styles.linkMenu} href="/#contact">Contato</a></li>
                        
                        {token? 
                            <li>
                                {haveProfile?
                                    <div>
                                        <i className="fa-solid fa-user"></i>
                                        
                                        <div className={styles.modalProfile}>
                                            Sair
                                        </div>
                                    </div>
                                :
                                    <p>Sair</p>
                                }
                            </li>
                            :
                            <li className={styles.menuItem}><a href='/login'>Entrar</a></li>
                        }
                    </ul>
                    :
                    <ul className={styles.menuOpen} id='menu'>
                        <li className={styles.menuItem}><a className={styles.linkMenu} href="/#services">Serviços</a></li>
                        <li className={styles.menuItem}><a className={styles.linkMenu} href="/#about">About</a></li>
                        <li className={styles.menuItem}><a className={styles.linkMenu} href="/#contact">Contato</a></li>
                        
                        {token? 
                            <li className={styles.ItemUser}>
                                {haveProfile? 
                                    <div>
                                        <i id={styles.faUser} className="fa-solid fa-user" onClick={handleChangeModal}></i>

                                        <div className={styles.modalProfile} id='modalProfile'>
                                            <div className={styles.profileTop}>
                                                <img className={styles.profileImage} src={profile.image} />
                                                <p className={styles.profileName}>{profile.name}</p>
                                            </div>

                                            <div className={styles.profileLinks}>
                                                <a href={`/profileDetail/${profile.id}`}>Acessar Perfil</a>
                                                <a href={`/sacoleiras/${profile.id}/products`}>Meus produtos</a>
                                            </div>

                                            <button onClick={handleLogout} className={styles.buttonLogout}>Sair <i class="fa-solid fa-right-from-bracket"></i></button>
                                        </div>
                                    </div>
                                :
                                    <p>Entrar</p>
                                }
                            </li>
                            :
                            <li className={styles.menuItem}><a href='/login'>Entrar</a></li>
                        }
                    </ul>
                }
            </nav>
        </header>
    );
}
