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
    margin: 50px 0;
    display: flex;
    gap: 1.5em;
    position: relative;
    
    @media(max-width: 1120px) {
        flex-direction: column;
    }

    @media(max-width: 700px) {
        align-items: center;
        justify-content: center;
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
    
    @media(max-width: 500px) {
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
    const [note, setNote] = useState("")
    const [comment, setComment] = useState("")
    const [userLogado, setUserLogado] = useState("")
    const [isLogged, setIsLogged] = useState(true)
    const [haveEvaluete, setHaveEvaluete] = useState(true)

    useEffect(() => {   
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            }  
        }

        axios.get(`http://127.0.0.1:8000/profileDetail/${id}`, config).then(response => {
            setProfile(response.data)
        }).catch(response => console.log(response))

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

        axios.get('http://127.0.0.1:8000/userLogado/', config).then(response => setUserLogado(response.data[0].url)).catch(response => setIsLogged(false)).catch(response => console.log(response))
        
        axios.get('http://127.0.0.1:8000/reviews/', config).then(response => {
            if(response.data[0] !== undefined) {
                setHaveEvaluete(false)
            }
           
            console.log(haveEvaluete)
        }).catch(response => console.log(response))
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

    function handleShowFormEvaluateDealer(e) {
        let form = document.querySelector('#evaluateDealerForm')
        
        if(form.style.display === 'none')
            form.style.display = 'flex'
        else 
            form.style.display = 'none'
    }

    function handleSubmitEvaluateDealerForm(e) {
        e.preventDefault()
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }

        axios.post('http://127.0.0.1:8000/reviews/',
        {
            note: note,
            comment: comment,
            profile: profile.url,
            user: userLogado
        }, config).then(alert('Avaliação enviada com sucesso!'))

        setNote('')
        setComment('')
    }

    function handleChangeInputNote(e) {
        setNote(e.target.value)
    }

    function handleChangeInputComment(e) {
        setComment(e.target.value)
    }

    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <div className={styles.products}>
                <SacoleiraPerfil>
                    <div className={styles.profileLeft}>
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
                    </div>

                    {isLogged?
                        <div className={styles.evaluateDealer}>
                            {haveEvaluete?
                                <p className={styles.evaluateDealerCheck}>
                                    Revendedor já avaliado
                                    <i class="fa-solid fa-check"></i>
                                </p>
                            :
                                <div>
                                    <button onClick={handleShowFormEvaluateDealer} className={styles.evaluateDealerTitle}>Avaliar revendedor</button>
                                    
                                    <form id='evaluateDealerForm' className={styles.evaluateDealerForm} onSubmit={handleSubmitEvaluateDealerForm}>
                                        <input
                                            value={note}
                                            onChange={handleChangeInputNote} 
                                            type="number"
                                            className={styles.evaluateDealerField}
                                            min='1' max='5'
                                            placeholder='Nota de 1 a 5'
                                        />
                                        <textarea
                                            value={comment}
                                            onChange={handleChangeInputComment}
                                            placeholder='Comentário'
                                            cols="20" rows="5"
                                            className={styles.evaluateDealerField}>
                                        </textarea>
                                        
                                        <button className={styles.evaluateDealerButton}>Enviar</button>
                                    </form>
                                </div>
                            }
                        </div>
                        :
                        <div className={styles.evaluateDealer}>
                            <a href="/login" className={styles.notLoggedMessage}>Faça login ou crie uma conta para avaliar este revendedor</a>
                        </div>
                    }
                </SacoleiraPerfil>
                
                <form className={styles.formSearchProduct} onSubmit={handleSubmitSearchProducts}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Pesquise por um produto aqui' value={search} onChange={handleChangeInputSearch} />
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
