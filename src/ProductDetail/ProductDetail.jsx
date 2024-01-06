import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { styled } from "styled-components";
import Comment from "./Comment";


const MainProduct = styled.main`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 8em;
    margin: 0 auto 100px auto;

    @media(max-width: 1050px) {
        width: 90%;
    }
`;

const ProductStyle = styled.div`
    margin-top: 50px;
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

const NumberComments = styled.p`
    color: rgba(0, 0, 0, .6);
    font-weight: bold;
    font-size: 14px;
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
    
    @media(max-width: 800px) {
        width: 100%;
    }
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

const ValueProduct = styled.h1`
    font-weight: bold;
    font-size: 1.2em;
    color: rgba(0, 0, 0, .75);
`;


export default function ProductDetail() {
    const { pk } = useParams()
    const [product, setProduct] = useState([])
    const [comments, setComments] = useState([])
    const [user, setUser] = useState();
    const [commentInput, setCommentInput] = useState("")
    const [bag, setBag] = useState('')
    
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
                user: user.url,
                product: `http://127.0.0.1:8000/products/${pk}/`,
                message: commentInput
            }, 
            config).then(response => {
                setComments([response.data, ...comments])
                setCommentInput("")
            })
    }

    useEffect(() => {
        const url = "http://127.0.0.1:8000/bag/"

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            },
        }

        axios.get(url, config).then(response => setBag(response.data[0]))

        axios.get(`http://127.0.0.1:8000/products/${pk}/`, config).then(response => {
            setProduct(response.data)
            setComments(response.data.comment_set.reverse())
        })
        
        axios.get("http://127.0.0.1:8000/userLogado/", config).then(
            response => setUser(response.data[0])
        )
    }, []) // colocar o id, comments e bag aqui
    

    function handleAdditionProduct(e) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }

        const formData = {
            products: [
                ...bag.products,
                product.url
            ]
        }

        axios.patch('http://127.0.0.1:8000/bag/22/', formData, config)
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

                                <ButtonBagAddition>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <p onClick={handleAdditionProduct}>Adicionar ao Carrinho</p>
                                </ButtonBagAddition>
                            </ProductSizeBagAddition>
                        </ProductInfoTop>


                        <ProductInfoBottom>
                            <ValueProduct>R$ {product.value}</ValueProduct>
                            <ButtonBuyProduct>Comprar Produto</ButtonBuyProduct>
                            <NumberComments>{comments.length} Comentários</NumberComments>
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
                    <NumberComments>{comments.length} comentários neste produto</NumberComments>

                    {comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </Comments>  
            </MainProduct>

            <Footer></Footer>
        </> 
    );
}
