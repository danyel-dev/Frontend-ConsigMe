import './profileDetail.scss'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Profile() {
    const [profile, setProfile] = useState("")
    const { id } = useParams()

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        axios.get(`http://127.0.0.1:8000/profileDetail/${id}`, config).then(response => {
            setProfile(response.data)
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
                    <img src={profile.image} />
                    
                    <div className='profile-infos'>
                        <div className='top-infos'>
                            <h1>{profile.name}</h1>
                        
                            <small>
                                <i>{profile.professional_email}</i>
                            </small>

                            <small className='store-name'>Proprietária(o)da<a href="#"> {profile.store_name}</a></small>
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
                            <i className="fa-brands fa-whatsapp"></i>
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
                        <p>{profile.address}</p>
                    </div>
                </main>
            </div>

            <Footer/>
        </div>
    );
}
