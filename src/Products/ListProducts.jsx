import './listProducts.css';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer';
import Product from './Product';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';


const SacoleiraPerfil = styled.div`
    display: flex;
    align-items:center;
    gap: 1.5em;
    margin-bottom: 50px; 

    @media(max-width: 370px) {
        flex-direction: column;
    }
`;

const ImageSacoleiraInfo = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, .4);
`;

const SacoleiraInfos = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    
    @media(max-width: 370px) {
        width: 90%;
        align-items: center;
    }
`;

const SacoleiraInfoTitle = styled.h4`
    margin-bottom: 3px;

    @media(max-width: 370px) {
        text-align: center;
    }
`;

const SacoleiraInfoBio = styled.p`
    font-size: 15px;
    color: rgba(0, 0, 0, .85);
    
    @media(max-width: 370px) {
        text-align: center;
        word-break: break-all;
    }
`;


const SacoleiraInfoEmail = styled.small`
    font-weight: bold;
    color: rgba(0, 0, 0, .7);
`;

export default function ListProducts() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }
    
        axios.get(`http://127.0.0.1:8000/sacoleiras/${id}/products`, config).then(
            Response => setProducts(Response.data)
        )
    }, [id])
    
    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <div className='products'>
                <SacoleiraPerfil>
                    <ImageSacoleiraInfo src="https://img.freepik.com/fotos-gratis/foto-da-cintura-para-cima-de-uma-mulher-tenra-feminina-e-gentil-com-penteado-encaracolado-penteado-para-o-lado-direito-inclinando-a-cabeca-e-sorrindo-sedutor-tornando-o-olhar-romantico-para-a-camera-se-abracando-sobre-o-fundo-amarelo_1258-81987.jpg" />

                    <SacoleiraInfos>
                        <div>
                            <SacoleiraInfoTitle>
                                Maria Silva Gonçalves
                            </SacoleiraInfoTitle>
                    
                            <SacoleiraInfoBio>
                                Revendedora de produtos femininos a mais de 3 anos, sempre entregando produtos de qualidade e com um serviço excelente.
                            </SacoleiraInfoBio>
                        </div>

                        <SacoleiraInfoEmail>e-mail: mariasilva87@gmail.com</SacoleiraInfoEmail>
                    </SacoleiraInfos>
                </SacoleiraPerfil>

                <form className='formSearchProduct'>
                    <input type="text" placeholder='Pesquise por um produto aqui' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                
                <select name="" id="category-products">
                    <option value="">Camisetas</option>
                    <option value="">Calças</option>
                    <option value="">Sapatos</option>
                    <option value="">Roupa intima</option>
                </select>
                
                <div className='container'>
                    {products.map(product => <Product key={product.id} product={product} />)}
                </div>
            </div>

            <Footer />
        </>
    );
}
