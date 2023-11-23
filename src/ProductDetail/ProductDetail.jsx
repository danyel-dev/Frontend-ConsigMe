import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { styled } from "styled-components";



const MainProduct = styled.main`
    width: 80%;
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
    padding: 20px;
    gap: 9em;
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
    justify-content: space-between;
`;

const ProductDescription = styled.p`
    width: 500px;
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
                                <button>Adicionar ao carrinho</button>
                            </ProductSizeBagAddition>
                        </ProductInfoTop>
                        
                        <ProductInfoBottom>
                            <h3>Valor: R$ {product.value}</h3>
                        </ProductInfoBottom>
                    </ProductInfo>
                </ProductStyle>

                {/* <div className="comments">
                    <p>{product.comment_set[0].message}</p>
                </div> */}
            </MainProduct>

            <Footer></Footer>
        </> 
    );
}
