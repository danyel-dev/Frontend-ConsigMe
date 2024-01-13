import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { styled } from "styled-components";
import Disqus from "disqus-react";


const MainProduct = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 3em;
    margin: 0 auto;
    padding: 0 20px 50px 20px;
    background: rgba(0, 0, 0, .05);
    
    @media(max-width: 1150px) {
        width: 90%;
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`;
    
    const ProductStyle = styled.div`
    border-bottom: 1px solid rgba(137, 43, 226, .3);
    padding-bottom: 30px;
    margin-top: 70px;
    display: flex;
    gap: 3em;
    justify-content: center;

    @media(max-width: 700px) {
        flex-direction: column;
        gap: 2em;
    }
`;

const ImageProduct = styled.img`
    width: 300px;
    height: 350px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
    border: 1px solid rgba(137, 43, 226, .2);
    border-radius: 2px;

    @media(max-width: 800px) {
        margin: 0 auto;
    }

    @media(max-width: 360px) {
        width: 100%;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0px;
`;

const ProductInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`;

const ProductInfoBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ProductNameDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
`;

const ProductSizeBagAddition = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5em;
    justify-content: space-between;
`;

const ProductTitle = styled.h1`
    font-size: 1.5em;
    color: rgba(0, 0, 0, .7);
    font-weight: bold;
    line-height: 28px;

    @media(max-width: 700px) {
        text-align: center;
    }
`;

const ProductDescription = styled.p`
    text-align: justify;
    width: 600px;
    line-height: 20px;

    @media(max-width: 1050px) {
        width: 100%;
    }
`;

const ButtonBagAddition = styled.button`
    display: flex;
    align-items: center;
    gap: .5em;
    font-size: 14px;
    cursor: pointer;
    padding: 5px;
    color: rgb(23, 96, 165);
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const ButtonBuyProduct = styled.button`
    background-color: blueviolet;
    padding: 5px 10px;
    color: white;
    border-radius: 3px;
    font-weight: bold;
    font-size: 13px;
    width: max-content;
    cursor: pointer;
`;

const ValueProduct = styled.h1`
    font-weight: bold;
    font-size: 1.2em;
    color: rgba(0, 0, 0, .75);
`;

const LinkSeeComments = styled.a`
    width: max-content;
    font-size: 12px;
    color: rgb(120, 40, 151);
    font-weight: bold;
    
    &:hover {
        color: rgba(120, 40, 151, .7);
    }
`

const FormProductNote = styled.form`
    display: flex;
    align-items: center;
    gap: .5em;

    @media(max-width: 300px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const InputProductNote = styled.input`    
    width: 210px;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 2px 10px;
    border-radius: 4px;
    color: rgba(0, 0, 0, .7);
`

const ButtonProductNote = styled.button`
    font-size: 14px;
    display: block;
    color: white;
    height: 25px;
    padding: 0 6px;
    background-color: rgb(120, 40, 151);
    border-radius: 4px;
    font-weight: bold;
`;

const LinkLoginPage = styled.a`
    font-size: 14px;
    color: rgb(120, 40, 151);
    text-decoration: underline;
`

const Saved = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: green;
    display: flex;
    align-items: center;
    gap: .5em;
`

export default function ProductDetail() {
    const { pk } = useParams()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const disqusShortname = "consigme-1"
    const [userLogadoUrl, setUserLogadoUrl] = useState('')
    const [logado, setLogado] = useState(false)
    const [note, setNote] = useState("")
    const [productNote, setProductNote] = useState("")
    const [mediaNotes, setMediaNotes] = useState()
    
    const [bagId, setBagId] = useState("")
    const [products, setProducts] = useState("")
    const [addBag, setAddBag] = useState(false)

    const disqusConfig = {
      url: window.location.href,
      identifier: `product:${pk}`,
      title: `produto ${pk}: ${product.name}`
    }

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            },
        }
        
        axios.get('http://127.0.0.1:8000/userLogado/', config).then(response => {
            setUserLogadoUrl(response.data[0].url)
            setLogado(true)
        }).catch(response => console.log(response)).catch(response => console.log(response))
        
        axios.get('http://127.0.0.1:8000/bag/', config).then(response => {
            setBagId(response.data[0].id)
            setProducts(response.data[0].products)
        }).catch(response => console.log(response))

        if(products.includes(product.url)) {
            setAddBag(true)
        }
        
        axios.get(`http://127.0.0.1:8000/sacoleiras/${id}/products/${pk}`, config).then(response => {
            setProduct(response.data)
            setProductNote(response.data.productnote_set)
        })

        if(productNote.length > 0) {
            const notes = productNote.map(item => item.note)
            const soma = notes.reduce((acumulador, atual) => acumulador + atual, 0)
            setMediaNotes(soma/product.productnote_set.length)
        }
    }, []) // colocar o id, comments e bag aqui

    function handleChangeInput(e) {
        setNote(e.target.value)
    }

    function handleSubmitProductNote(e) {
        e.preventDefault()

        if(note !== "") {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token " + localStorage.getItem('token')
                },
            }
    
            axios.post('http://127.0.0.1:8000/productNote/', {user: userLogadoUrl, product: product.url, note: note}, config).then(response => {
                setUserLogadoUrl(response.data.url)
                alert("sua avaliação foi enviada")
                setNote("")
            })
        }
    }

    function handleSavedProduct() {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.getItem('token')
            },
        }

        axios.patch(`http://127.0.0.1:8000/bag/${bagId}/`, {products: [...products, product.url]}, config).then(response => console.log(response))
    }

    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />
            
            <MainProduct>
                <ProductStyle>
                    <ImageProduct src={product.image} alt={product.name} />

                    <ProductInfo>
                        <ProductInfoTop>
                            <ProductNameDescription>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescription>{product.description}</ProductDescription>
                            </ProductNameDescription>
                            
                            <ProductSizeBagAddition>
                                <p>Tamanho: {product.size}</p>

                                {addBag?
                                    <Saved>
                                        Produto salvo
                                        <i className="fa-solid fa-check"></i>
                                    </Saved>
                                :
                                    <ButtonBagAddition>
                                        <i className="fa-solid fa-bookmark"></i>
                                        <p onClick={handleSavedProduct}>Salvar produto</p>
                                    </ButtonBagAddition>
                                }                        
                            </ProductSizeBagAddition>
                        </ProductInfoTop>

                        <ProductInfoBottom>
                            <ValueProduct>R$ {product.value}</ValueProduct>
                            <ButtonBuyProduct>Comprar Produto</ButtonBuyProduct>
                            <LinkSeeComments href={`http://localhost:3000/sacoleiras/${id}/products/${pk}#disqus_thread`}>Ver comentários</LinkSeeComments>
                            
                            {logado? 
                                <FormProductNote onSubmit={handleSubmitProductNote}>
                                    <InputProductNote value={note} onChange={handleChangeInput} type="number" min='1' max='5' placeholder="dê uma nota a este produto" />
                                    <ButtonProductNote>enviar</ButtonProductNote>
                                </FormProductNote>
                            :
                                <LinkLoginPage href="/login">faça login para avaliar este produto</LinkLoginPage>    
                            }

                            <div>
                                {mediaNotes? 
                                    <p className='note-product'>
                                        <span>
                                            {mediaNotes.toFixed(1)}
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                        <small>({productNote.length} avaliações)</small>
                                    </p> 
                                :
                                    <p className='note-product'>Nenhuma avaliação</p>
                                }

                                <p>Vendido por: daniel</p>
                            </div>
                        </ProductInfoBottom>
                    </ProductInfo>
                </ProductStyle>
                
                <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </MainProduct>

            <Footer></Footer>
        </> 
    );
}
