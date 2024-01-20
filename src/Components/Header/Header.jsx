import { useEffect, useState } from 'react';
import styles from './header.module.css'


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [token, setToken] = useState('')    

    useEffect(() => {
        setToken(localStorage.getItem('token'))
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
        
        if(elemento.style.opacity == 0)
            elemento.style.opacity = 1
        else 
            elemento.style.opacity = 0
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
                                <i className="fa-solid fa-user"></i>

                                <div className={styles.modalProfile}>

                                </div>
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
                            <li className={styles.user} onClick={handleChangeModal}>
                                <i className="fa-solid fa-user"></i>

                                <div className={styles.modalProfile} id='modalProfile'>

                                </div>
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
