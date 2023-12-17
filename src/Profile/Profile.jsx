import './profile.scss'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Profile() {
    const [profile, setProfile] = useState("")

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }

        axios.get("http://127.0.0.1:8000/profile/", config).then(response => {
            setProfile(response.data[0])
            console.log(profile.url)
        })
    }, [])

    return(
        <div>
            <Header color={"rgb(63, 43, 83)"} />
           
            <div className='profile'>
                <aside className='aside-profile'>
                    <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="mulher tirando foto" />
                    
                    <div className='profile-infos'>
                        <div className='title'>
                            <h1>Maria Joaquina da Silva</h1>
                        
                            <small>
                                <i>MariaJo182@gmail.com</i>
                            </small>
                        </div>
                        
                        <div className='ranking-infos'>
                            <p>Produtos pegos em consignação: 337</p>
                            <p>Vendidos: 289</p>
                            <p>Avaliação dos compradores: 4,5</p>
                            <p>Avaliação dos Distribuidores: 4,1</p>
                            <p>Posição no Ranking: 68</p>
                        </div>

                        <div className='social-medias'>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                    </div>  
                </aside>

                <main>
                    <form>
                        <div>
                            <label htmlFor="bio">Bio</label>
                            <p>{profile.bio}</p>
                        </div>

                        <div>
                            <label htmlFor="bio">Data de nascimento</label>
                            <p>{profile.birth_date}</p>
                        </div>

                        <div>
                            <label htmlFor="bio"></label>
                            <p>{profile.birth_date}</p>
                        </div>
                    </form>
                </main>
            </div>

            <Footer/>
        </div>
    );
}
