import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { styled } from "styled-components";


const MainProduct = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10em;
    margin: 0 auto 100px auto;
`;

const ProductStyle = styled.div`
    display: flex;
    gap: 2em;
`;

const ImageProduct = styled.img`
    width: 300px;
    height: 400px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
`;

const ProductInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const ProductInfoBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ProductNameDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ProductSizeBagAddition = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductDescription = styled.p`
    width: 500px;
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
    padding: 8px 0px;
    color: white;
    border-radius: 3px;
    font-weight: bold;
    font-size: 13px;
    width: 140px;
    cursor: pointer;
`;

const NumberComments = styled.small`
    color: rgba(0, 0, 0, .6);
    font-weight: bold;
`;

const CommentTitle = styled.h1`
    color: rgb(74, 49, 97);
    font-size: 1.3em;
    margin-bottom: 20px;
`;

const CommentTextArea = styled.textarea`
    border-radius: 5px;
    padding: 10px;
    background-color: rgba(0, 0, 0, .1);
`;

const SubmitFormComment = styled.button`
    background-color: green;
    display: block;
    color: white;
    margin-top: 20px;
    padding: 8px 15px;
    font-weight: bold;
    border-radius: 3px;
`;

const CommentStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;
`;

const CommentIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 20px;
    background-color: blueviolet;
    color: white;
`;

const CommentBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
`;

const CommentMessage = styled.div`
    width: 700px;
    text-align: justify;
    font-weight: bold;
    color: rgba(0, 0, 0, .5);
    font-size: 14px;
`;

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/products/${id}/`).then(response => setProduct(response.data))
    }, [id]) 

    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />
            
            <MainProduct>
                <ProductStyle>
                    <ImageProduct src={product.image} alt={product.name} />
                    
                    <ProductInfo>
                        <ProductInfoTop>
                            <ProductNameDescription>
                                <h2>{product.name}</h2>
                                <ProductDescription>{product.description}</ProductDescription>
                            </ProductNameDescription>

                            <ProductSizeBagAddition>
                                <p>Tamanho: {product.size}</p>
                                <ButtonBagAddition>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <p>Adicionar ao Carrinho</p>
                                </ButtonBagAddition>
                            </ProductSizeBagAddition>
                        </ProductInfoTop>
                            <h3>Valor: R$ {product.value}</h3>
                        
                        <ProductInfoBottom>
                            <ButtonBuyProduct>Comprar Produto</ButtonBuyProduct>
                            <NumberComments>45 Comentários</NumberComments>
                        </ProductInfoBottom>
                    </ProductInfo>
                </ProductStyle>

                <div className="comment-form">
                    <CommentTitle>Adicionar um comentário</CommentTitle>

                    <form>
                        <CommentTextArea cols="80" rows="15"></CommentTextArea>
                        <SubmitFormComment>Comentar</SubmitFormComment>
                    </form>
                </div>

                <Comments>
                    <CommentStyle>
                        <CommentIcon>DP</CommentIcon>

                        <CommentBody>
                            <div>
                                <h4>Carlos Daniel Sousa Pinheiro</h4>
                                <small>13/05/13 ás 21:00 horas</small>
                            </div>
                            
                            <CommentMessage>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum consequuntur explicabo alias suscipit quidem nulla est, aspernatur nam quod laborum in, quos ratione rem? Natus quas enim asperiores blanditiis!
                            </CommentMessage>
                        </CommentBody>
                    </CommentStyle>

                    <CommentStyle>
                        <CommentIcon>DP</CommentIcon>

                        <CommentBody>
                            <div>
                                <h4>Carlos Daniel Sousa Pinheiro</h4>
                                <small>13/05/13 ás 21:00 horas</small>
                            </div>
                            
                            <CommentMessage>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum consequuntur explicabo alias suscipit quidem nulla est, aspernatur nam quod laborum in, quos ratione rem? Natus quas enim asperiores blanditiis!
                            </CommentMessage>
                        </CommentBody>
                    </CommentStyle>

                    <CommentStyle>
                        <CommentIcon>DP</CommentIcon>

                        <CommentBody>
                            <div>
                                <h4>Carlos Daniel Sousa Pinheiro</h4>
                                <small>13/05/13 ás 21:00 horas</small>
                            </div>
                            
                            <CommentMessage>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum consequuntur explicabo alias suscipit quidem nulla est, aspernatur nam quod laborum in, quos ratione rem? Natus quas enim asperiores blanditiis!
                            </CommentMessage>
                        </CommentBody>
                    </CommentStyle>
                </Comments>
            </MainProduct>

            <Footer></Footer>
        </> 
    );
}
