import styles from './sacoleiraProducts.module.css';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Product from './Product';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';


const SacoleiraPerfil = styled.div`
    display: flex;
    align-items:center;
    gap: 1.5em;
    margin-top: 50px;

    @media(max-width: 370px) {
        flex-direction: column;
    }
`;

const ImageSacoleiraInfo = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .3);
`;

const SacoleiraInfos = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    import { useNavigate } from 'react-router-dom';
    align-items: flex-start;
    gap: .8em;
    
    @media(max-width: 370px) {
        width: 90%;
        align-items: center;
    }
`;

const SacoleiraInfoTitle = styled.h4`
    margin-bottom: 3px;
    font-weight: bold; 
    color: rgba(0, 0, 0, .9);

    @media(max-width: 370px) {
        text-align: center;
    }
`;

const SacoleiraInfoBio = styled.p`
    font-size: 15px;
    line-height: 18px;
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

const ProductsNumberMessage = styled.p`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    font-weight: bold;
    color: rgba(0, 0, 0, .8);
`

export default function ListProducts() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    const [productsNumberMessage, setProductsNumberMessage] = useState("")
    const [search, setSearch] = useState("")
    const [profile, setProfile] = useState("")


    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }

        axios.get(`http://127.0.0.1:8000/profileDetail/${id}`, config).then(response => {
            setProfile(response.data)
        })

        axios.get(`http://127.0.0.1:8000/sacoleiras/${id}/products`, config).then(
            response => {
                setProducts(response.data)
                
                if(response.data.length < 1)
                    setProductsNumberMessage("Nenhum produto encontrado")
                else if(response.data.length === 1)
                    setProductsNumberMessage("1 produto encontrado")
                else 
                    setProductsNumberMessage(`${response.data.length} produtos encontrados`)
            } 
        )
    }, [])

    function handleSubmitSearchProducts(e) {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.get(`http://127.0.0.1:8000/sacoleiras/${id}/products?search=${search}`, config).then(
            response => {
                setProducts(response.data)
                
                if(response.data.length < 1)
                    setProductsNumberMessage("Nenhum produto encontrado")
                else if(response.data.length === 1)
                    setProductsNumberMessage("1 produto encontrado")
                else 
                    setProductsNumberMessage(`${response.data.length} produtos encontrados`)
            } 
        )
    }

    function handleChangeInputSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <div className={styles.products}>
                <SacoleiraPerfil>
                    <a href={`/profileDetail/${id}`}>
                        <ImageSacoleiraInfo src={profile.image} />
                    </a>

                    <SacoleiraInfos>
                        <div>
                            <SacoleiraInfoTitle>
                                <a href={`/profileDetail/${id}`}>
                                    {profile.name}
                                </a>        
                            </SacoleiraInfoTitle>
                    
                            <SacoleiraInfoBio>
                                Revendedora de produtos femininos a mais de 3 anos, sempre entregando produtos de qualidade e com um serviço excelente.
                            </SacoleiraInfoBio>
                        </div>

                        <SacoleiraInfoEmail>e-mail: mariasilva87@gmail.com</SacoleiraInfoEmail>
                    </SacoleiraInfos>
                </SacoleiraPerfil>
                
                <div className={styles.evaluateDealer}>
                    <button className={styles.evaluateDealerTitle}>Avaliar revendedor</button>

                    <form className={styles.evaluateDealerForm}>
                        <input type="number" className={styles.evaluateDealerField} min='1' max='5' placeholder='Nota de 1 a 5' />
                        <textarea placeholder='Comentário' cols="20" rows="5" className={styles.evaluateDealerField}></textarea>
                    </form>

                    <button className={styles.evaluateDealerButton}>Enviar</button>
                </div>

                <form className={styles.formSearchProduct} onSubmit={handleSubmitSearchProducts}>
                    <input type="text" placeholder='Pesquise por um produto aqui' value={search} onChange={handleChangeInputSearch} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                
                <ProductsNumberMessage>{productsNumberMessage}</ProductsNumberMessage>
                
                <div className={styles.container}>  
                    {products.map(product => <Product sacoleiraId={id} key={product.id} product={product} />)}
                </div>
            </div>

            <Footer />
        </>
    );
}
