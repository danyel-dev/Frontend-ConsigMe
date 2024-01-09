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
    margin: 0 auto 0 auto;
    padding: 0 20px 100px 20px;
    background: rgba(0, 0, 0, .05);
    
    @media(max-width: 1050px) {
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
    font-size: 14px;
    color: rgb(120, 40, 151);
    font-weight: bold;
    text-decoration: underline;
`


export default function ProductDetail() {
    const { pk } = useParams()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const disqusShortname = "consigme-1"
    
    const disqusConfig = {
      url: window.location.href,
      identifier: `product:${pk}`,
      title: `produto ${pk}: ${product.name}`
    }

    useEffect(() => {

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        axios.get(`http://127.0.0.1:8000/sacoleiras/${id}/products/${pk}`, config).then(response => {
            setProduct(response.data)
            console.log(response.data)
        })
    }, [disqusShortname, id, pk]) // colocar o id, comments e bag aqui

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

                                <ButtonBagAddition>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <p>Salvar produto</p>
                                </ButtonBagAddition>
                            </ProductSizeBagAddition>
                        </ProductInfoTop>

                        <ProductInfoBottom>
                            <ValueProduct>R$ {product.value}</ValueProduct>
                            <ButtonBuyProduct>Comprar Produto</ButtonBuyProduct>
                            <LinkSeeComments href="http://localhost:3000/sacoleiras/7/products/1#disqus_thread">Ver comentários</LinkSeeComments>
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
