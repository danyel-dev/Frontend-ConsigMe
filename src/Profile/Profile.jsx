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

    function age(birth_date) {
        var moment = require('moment')
        var dataDeNascimento = moment(birth_date, "YYYY-MM-DD");
        var hoje = moment();

        var idadeEmAnos = hoje.diff(dataDeNascimento, 'years');
        return idadeEmAnos
    }

    return(
        <div>
            <Header color={"rgb(63, 43, 83)"} />
           
            <div className='profile'>
                <aside className='aside-profile'>
                    <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="mulher tirando foto" />
                    
                    <div className='profile-infos'>
                        <div className='top-infos'>
                            <h1>Maria Joaquina da Silva</h1>
                        
                            <small>
                                <i>{profile.professional_email}</i>
                            </small>

                            <small className='store-name'>Proprietária da<a href="#"> {profile.store_name}</a></small>
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
                            <i class="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                    </div>  
                </aside>

                <main className='main-profile'>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <p>{profile.bio}</p>
                    </div>

                    <div>
                        <label htmlFor="bio">Idade</label>
                        <p>{age(profile.birth_date)} Anos</p>
                    </div>

                    <div>
                        <label htmlFor="bio">Celular</label>
                        <p>{profile.phone_number}</p>
                    </div>

                    <div>
                        <label htmlFor="bio">CPF</label>
                        <p>{profile.cpf}</p>
                    </div>

                    <div>
                        <label htmlFor="bio">Endereço</label>
                        <p>{profile.city} - {profile.state}, {profile.street}, {profile.house_number} - {profile.district}. {profile.complement}</p>
                    </div>
                </main>
            </div>

            <Footer/>
        </div>
    );
}
