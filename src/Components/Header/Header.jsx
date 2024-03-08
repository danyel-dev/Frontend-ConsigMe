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

    return(
        <header className={styles.header}>
            <a className={styles.logo} href="/">ConsigMe</a>

            <nav id='nav' className={styles.nav}>
                <span className={styles.btnButton} onClick={handleToggleMenu}></span>
                                
                <ul className={toggleMenu? styles.menuOpen: styles.menu} id='menu'>
                    <li className={styles.menuItem}><a className={styles.linkMenu} href="/">Home</a></li>

                    <li className={styles.menuItem}><a className={styles.linkMenu} href="/">Para Sacoleiras</a></li>
                    
                    <li className={styles.menuItem}><a className={styles.linkMenu} href="/">Para Lojistas</a></li>

                    {token?
                        <div className={styles.divLogout}>
                            <li className={styles.menuItem}><a className={styles.linkMenu} href="/bag">produtos salvos</a></li>

                            <li className={styles.menuItem}><a className={styles.linkMenu} onClick={handleLogout} href="/login">sair</a></li>
                        </div>
                    :
                        <li className={styles.menuItem}><a href='/login'>Entrar</a></li>
                    }
                </ul>
            </nav>
        </header>
    );
}
