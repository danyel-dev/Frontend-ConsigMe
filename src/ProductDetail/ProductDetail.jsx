import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { styled } from "styled-components";
import Comment from "./Comment";


const MainProduct = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 8em;
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
    cursor: pointer;
`;

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;
`;

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [comments, setComments] = useState([])

    const [commentInput, setCommentInput] = useState("")

    function handleChangeCommentInput(e) {
        setCommentInput(e.target.value)
    }

    function handleSubmitCommentForm(e) {
        e.preventDefault()

        const url = 'http://127.0.0.1:8000/comments/';

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'token ' + localStorage.getItem('token'),
            }
        }

        axios.post(
            url, 
            {
                user: "http://127.0.0.1:8000/users/43/",
                product: "http://127.0.0.1:8000/products/1/",
                message: commentInput
            }, 
            config).then(response => setComments([response.data, ...comments]))
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/products/${id}/`).then(response => {
            setProduct(response.data)
            setComments(response.data.comment_set.reverse())
        })
    }, [id, comments]) 

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

                    <form onSubmit={handleSubmitCommentForm}> 
                        <CommentTextArea 
                            value={commentInput} 
                            onChange={handleChangeCommentInput} 
                            cols="80" 
                            rows="15">
                        </CommentTextArea>
                        
                        <SubmitFormComment>Comentar</SubmitFormComment>
                    </form>
                </div>

                <Comments>
                    {comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </Comments>
            </MainProduct>

            <Footer></Footer>
        </> 
    );
}
