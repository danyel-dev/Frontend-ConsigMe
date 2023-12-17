import './profile.scss'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


export default function Profile() {
    return(
        <div>
            <Header color={"rgb(63, 43, 83)"} />
           
            <main className='profile'>
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
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                    </div>  
                </aside>
            </main>

            <Footer/>
        </div>
    );
}
