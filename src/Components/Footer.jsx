import './footer.css'


export default function Footer () {
    return (
        <div className='footer'>
            <div className='privacy-accessibility'>
                <a href="#" className='back-top'>
                    voltar ao topo
                    <i class="fa-solid fa-angles-up"></i>
                </a>

                <div className='links-privacy'>
                    <a href="#">Accessibilidade</a>
                    <a href="#">Politica de privacidade</a>
                    <a href="#">Sobre</a>
                </div>
            </div>
            
            <div className='main-footer'>
                <div className='social-networks'>
                    <h3>Redes Sociais</h3>
                   
                    <div className='icons'>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>

                <div className='detail-about'>
                    <h3>Sobre</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor molestias placeat fugiat aut laboriosam voluptatum, maiores unde ullam.</p>
                </div>

                <div className='contacts'>
                    <h3>Contato</h3>

                    <ul>
                        <li>
                            <i class="fa-solid fa-location-dot"></i> Santo Inácio do Piauí - PI CEP. 64560-0000
                        </li>
                        
                        <li>
                            <i class="fa-solid fa-location-crosshairs"></i> Av. Getúlio Vargas, Centro
                        </li>
                        
                        <li>
                            <i class="fa-regular fa-envelope"></i> Danyelpinheiro154@hotmail.com
                        </li>
                    </ul>
                </div>
            </div>

            <div className='copyright'>
                <p>Copyright &#169; 2023 - Todos os direitos reservados</p>
            </div>            
        </div>
    );
}
